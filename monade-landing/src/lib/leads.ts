// Server-side helpers shared by /api/call and /api/demo.

type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

/** Best-effort in-memory rate limit (per serverless instance). */
export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (b.count >= max) return false;
  b.count += 1;
  return true;
}

export function clientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/** Normalises Indian mobiles to E.164. Accepts 10 digits (6-9 start), 0-prefixed, 91-prefixed, or +91. */
export function normaliseIndianMobile(raw: string): string | null {
  const digits = raw.replace(/[^\d+]/g, "");
  let d = digits.startsWith("+") ? digits.slice(1) : digits;
  if (d.startsWith("0") && d.length === 11) d = d.slice(1);
  if (d.length === 10 && /^[6-9]/.test(d)) return `+91${d}`;
  if (d.length === 12 && d.startsWith("91") && /^[6-9]/.test(d.slice(2))) return `+${d}`;
  return null;
}

export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

type LeadRow = {
  kind: "call" | "demo";
  phone?: string;
  email?: string;
  ip: string;
  user_agent: string | null;
  referer: string | null;
};

/** Writes a lead to Supabase if configured. Silent no-op otherwise. */
export async function storeLead(row: LeadRow): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;
  try {
    await fetch(`${url}/rest/v1/website_leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
  } catch (e) {
    console.error("storeLead failed", e);
  }
}

/**
 * Triggers the demo agent call through Monade's outbound-call API if configured.
 *
 * Shape (same as the dashboard's own test-call request):
 *   POST {MONADE_CALL_API_URL}
 *   { phone_number: "+91…", assistant_id, trunk_name, user_uid, callee_info: { source: "website" } }
 * Auth: MONADE_CALL_API_KEY sent in the header named by MONADE_CALL_API_KEY_HEADER
 * (default "x-api-key"; set to "Authorization" to send "Bearer <key>").
 * Returns "simulated" until the URL and key are set, so the widget works in dev.
 */
export async function triggerDemoCall(phone: string): Promise<"sent" | "simulated" | "failed"> {
  const url = process.env.MONADE_CALL_API_URL;
  const key = process.env.MONADE_CALL_API_KEY;
  if (!url || !key) return "simulated";
  const headerName = process.env.MONADE_CALL_API_KEY_HEADER || "x-api-key";
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  headers[headerName] = headerName.toLowerCase() === "authorization" ? `Bearer ${key}` : key;
  const body = {
    phone_number: phone,
    assistant_id: process.env.MONADE_DEMO_AGENT_ID,
    trunk_name: process.env.MONADE_TRUNK_NAME,
    trunk: process.env.MONADE_TRUNK_NAME, // the control plane reads one of these two
    user_uid: process.env.MONADE_USER_UID,
    callee_info: { source: "website", page: "monade.ai" },
  };
  try {
    const res = await fetch(url.replace("{phone}", encodeURIComponent(phone)), {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error("triggerDemoCall: Monade responded", res.status, (await res.text()).slice(0, 300));
      return "failed";
    }
    return "sent";
  } catch (e) {
    console.error("triggerDemoCall failed", e);
    return "failed";
  }
}
