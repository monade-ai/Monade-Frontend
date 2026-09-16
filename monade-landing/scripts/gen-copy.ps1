# Drafts website copy with Gemini (gemini-3.8-flash) using the site's copy rules.
# Usage (from the repo root, PowerShell):  .\scripts\gen-copy.ps1 -Brief "Write 3 H2 options for the FAQ section" -Out content\draft.json
# Reads GEMINI_API_KEY from .env or .env.local. Output is JSON you review before pasting into src/content/site.json.
param(
  [Parameter(Mandatory = $true)][string]$Brief,
  [string]$Out = "content\draft.json",
  [string]$Model = "gemini-3.8-flash"
)
$envFile = if (Test-Path ".env.local") { ".env.local" } else { ".env" }
$key = (Get-Content $envFile | Where-Object { $_ -match '^GEMINI_API_KEY=' }) -replace '^GEMINI_API_KEY=', '' -replace '"', ''
if (-not $key) { throw "GEMINI_API_KEY not found in $envFile" }

$rules = @"
STRICT STYLE RULES: No em dashes or en dashes anywhere, use full stops or commas. No "not just X, it's Y". No triads like "Faster. Smarter. Better." No words: seamless, effortless, revolutionise, unlock, supercharge, elevate, empower, leverage, cutting-edge, game-changing. Short plain sentences, sentence case, contractions fine, the way a good founder talks on a sales call. No exclamation marks. Indian English spelling. Return ONLY valid JSON.
"@
$context = @"
Company: Monade AI. Product: a single voice-to-voice model (no STT, LLM, TTS chain) that makes outbound sales calls for admissions, finance and retail teams in India. Facts: 70% higher qualification rate than replaced TTS-LLM voice AI; only 0.6% of people called notice they're speaking with AI; 97 languages incl. 14 Indian, switches mid-call; CRM, database, WhatsApp and custom tool integrations; clients prove ROI within 6 months via a head-to-head pilot.
"@
$prompt = "$context`n`n$rules`n`nTASK: $Brief"
$body = @{ contents = @(@{ role = "user"; parts = @(@{ text = $prompt }) }); generationConfig = @{ temperature = 0.8; responseMimeType = "application/json" } } | ConvertTo-Json -Depth 10
$resp = Invoke-RestMethod -Method Post -Uri "https://generativelanguage.googleapis.com/v1beta/models/$Model`:generateContent" -Headers @{ "x-goog-api-key" = $key; "Content-Type" = "application/json" } -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
$text = $resp.candidates[0].content.parts[0].text
New-Item -ItemType Directory -Force -Path (Split-Path $Out) | Out-Null
[System.IO.File]::WriteAllText($Out, $text, [System.Text.Encoding]::UTF8)
Write-Host "Wrote $Out"
$text
