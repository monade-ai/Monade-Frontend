# Monade AI website

Marketing site for Monade AI. Next.js 16 (App Router), Tailwind v4, TypeScript, Geist Sans. Built to `WEBSITE_PLAN.md` (v4).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Node 20+ recommended.

## Configure

Copy `.env.example` to `.env.local` and fill what you have. Everything is optional; the site runs without any of it:

- `NEXT_PUBLIC_BOOKING_URL`: Cal.com / Calendly link opened after "Book a demo". Without it the widget says we'll email a slot.
- `MONADE_CALL_API_URL`, `MONADE_CALL_API_KEY`, `MONADE_DEMO_AGENT_ID`: the outbound call API behind "Talk to our agent". Without them `/api/call` validates, stores the lead (if Supabase is set) and returns `status: "simulated"` so the UI still shows the "Calling you now" state. Adjust the request body in `src/lib/leads.ts` (`triggerDemoCall`) to match the real API.
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`: stores leads in a `website_leads` table via the REST API. Create the table first (columns in `.env.example`).

## Deploy to Vercel

1. Push this folder to a Git repo, import it in Vercel (framework preset: Next.js, no extra settings).
2. Add the environment variables above in Project Settings.
3. Point the domain at the project and set `meta.url` in `src/content/site.json` to the final domain (used for Open Graph URLs).

## Where things live

```
src/content/site.json        all copy on the site (edit here, not in components)
src/app/page.tsx             home: Hero → CompareSlider → StatBand → RoiTrack → FeaturePanel → Coworkers → FAQ → CTA
src/app/coworkers            AI Coworkers page (placeholder content + live demo window)
src/app/privacy, terms       legal pages
src/app/api/call, api/demo   form handlers (rate limited, Supabase optional)
src/components/
  BreathingShape.tsx         WebGL grain shape that breathes (hero + CTA background)
  LeadWidget.tsx             phone + email two-row widget
  CompareSlider.tsx          STT+LLM+TTS vs voice-to-voice drag comparison
  StatBand.tsx               clients line + two stats
  RoiTrack.tsx               three-step "prove ROI in 6 months" track
  FeaturePanel.tsx           dashboard-styled feature cycle (mocks in feature-mocks.tsx)
  CoworkerWindow.tsx         rebuilt two-pane coworker chat window (fictional data)
  FaqAccordion.tsx, CtaSection.tsx, Nav.tsx, Footer.tsx, Logo.tsx
```

## Copy rules

No em or en dashes, no exclamation marks, no "not just X, it's Y", no seamless / effortless / revolutionise / unlock / supercharge / elevate / empower / leverage / cutting-edge / game-changing. `npm run check:copy` scans `src/content` and `src/components` for violations.

## Numbers still marked illustrative

The pilot bar chart and the ROI curve in `site.json` (`roi.pilot`, `roi.curve`) are placeholders and the page says so. Replace them and remove the "illustrative" lines in `RoiTrack.tsx` when real figures are in.
