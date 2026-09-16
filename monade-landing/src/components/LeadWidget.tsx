"use client";

import site from "@/content/site.json";
import { useCallForm, useDemoForm } from "@/lib/useLeadForms";

export default function LeadWidget({
  compact = false,
  idPrefix = "",
}: {
  compact?: boolean;
  idPrefix?: string;
}) {
  const call = useCallForm();
  const demo = useDemoForm();
  const r1 = site.hero.row1;
  const r2 = site.hero.row2;

  return (
    <div className={`card grain w-full ${compact ? "p-5 md:p-6" : "p-6 md:p-7"}`}>
      <form onSubmit={call.submit} id={`${idPrefix}talk`} className="scroll-mt-28">
        <label htmlFor={`${idPrefix}phone`} className="label block mb-2">
          {r1.label}
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-muted">
              +91
            </span>
            <input
              id={`${idPrefix}phone`}
              className="input input-prefixed tnum"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder={r1.placeholder}
              value={call.phone}
              onChange={(e) => call.setPhone(e.target.value)}
              disabled={call.state === "calling"}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-amber sm:w-auto"
            disabled={call.state === "loading" || call.state === "calling"}
          >
            {call.state === "loading"
              ? "Placing the call"
              : call.state === "calling"
              ? `Calling you now · ${call.countdown}s`
              : r1.button}
          </button>
        </div>
        <p className={`mt-2 text-[12px] ${call.state === "error" ? "text-red" : "text-muted-2"}`} aria-live="polite">
          {call.status || r1.micro}
        </p>
      </form>

      <div className="my-5 h-px bg-border-soft" />

      <form onSubmit={demo.submit} id={`${idPrefix}demo`} className="scroll-mt-28">
        <label htmlFor={`${idPrefix}email`} className="label block mb-2">
          {r2.label}
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id={`${idPrefix}email`}
            className="input flex-1"
            type="email"
            autoComplete="email"
            placeholder={r2.placeholder}
            value={demo.email}
            onChange={(e) => demo.setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-white sm:w-auto" disabled={demo.state === "loading"}>
            {demo.state === "loading" ? "One moment" : r2.button}
          </button>
        </div>
        <p className={`mt-2 text-[12px] ${demo.state === "error" ? "text-red" : "text-muted-2"}`} aria-live="polite">
          {demo.status || r2.micro}
        </p>
      </form>
    </div>
  );
}
