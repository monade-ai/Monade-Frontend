import { NextRequest } from "next/server";
import { clientIp, isEmail, rateLimit, storeLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  let body: { email?: string } = {};
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!isEmail(email)) {
    return Response.json({ ok: false, error: "Enter a valid work email." }, { status: 422 });
  }

  const ip = clientIp(req);
  if (!rateLimit(`demo:${ip}`, 10, 24 * 60 * 60 * 1000)) {
    return Response.json({ ok: false, error: "Too many requests from this network today." }, { status: 429 });
  }

  await storeLead({
    kind: "demo",
    email,
    ip,
    user_agent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
  });

  const base = process.env.NEXT_PUBLIC_BOOKING_URL || "";
  const bookingUrl = base ? `${base}${base.includes("?") ? "&" : "?"}email=${encodeURIComponent(email)}` : null;
  return Response.json({ ok: true, bookingUrl });
}
