import { NextRequest } from "next/server";
import { clientIp, normaliseIndianMobile, rateLimit, storeLead, triggerDemoCall } from "@/lib/leads";

export async function POST(req: NextRequest) {
  let body: { phone?: string } = {};
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const phone = normaliseIndianMobile(String(body.phone || ""));
  if (!phone) {
    return Response.json({ ok: false, error: "Enter a valid Indian mobile number." }, { status: 422 });
  }

  const ip = clientIp(req);
  // Abuse guard only: a burst limit per network, no per-number cap.
  if (!rateLimit(`ip:${ip}`, 10, 60 * 60 * 1000)) {
    return Response.json({ ok: false, error: "Too many requests from this network. Try again in an hour." }, { status: 429 });
  }

  await storeLead({
    kind: "call",
    phone,
    ip,
    user_agent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
  });

  const status = await triggerDemoCall(phone);
  if (status === "failed") {
    return Response.json({ ok: false, error: "Couldn't place the call right now. Try again in a minute." }, { status: 502 });
  }
  return Response.json({ ok: true, status });
}
