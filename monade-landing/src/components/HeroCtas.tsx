"use client";

import { useEffect, useRef, useState } from "react";
import site from "@/content/site.json";
import { useCallForm } from "@/lib/useLeadForms";

/**
 * Two pills that morph on hover into an input.
 * Hover (or tap on touch) widens the pill: the label fades out, a field and a
 * submit arrow fade in. It stays open while the field is focused or has text,
 * and while a call is being placed, so nothing collapses under the cursor.
 */

type PillProps = {
  label: string;
  tone: "amber" | "white";
  prefix?: string;
  placeholder: string;
  inputMode?: "tel" | "email";
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  busy: boolean;
  busyLabel?: string;
  status: string;
  hint: string;
  inputId: string;
  forceOpen?: boolean;
  error?: boolean;
};

function MorphPill({
  label,
  tone,
  prefix,
  placeholder,
  inputMode,
  type = "text",
  autoComplete,
  value,
  onChange,
  onSubmit,
  busy,
  busyLabel,
  status,
  hint,
  inputId,
  forceOpen,
  error,
}: PillProps) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [tapped, setTapped] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const open = Boolean(forceOpen || hover || focus || tapped || value || busy);

  useEffect(() => {
    if (forceOpen) inputRef.current?.focus();
  }, [forceOpen]);

  const bg = tone === "amber" ? "bg-amber text-black" : "bg-white text-black";
  const field = tone === "amber" ? "bg-black/10 placeholder:text-black/45" : "bg-black/5 placeholder:text-black/45";

  return (
    <div className="flex w-full flex-col items-center sm:w-auto">
      <form
        onSubmit={onSubmit}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`relative h-12 overflow-hidden rounded-[10px] transition-[width,box-shadow] duration-[380ms] ease-[cubic-bezier(.2,.8,.2,1)] ${bg} ${
          open ? "w-full shadow-[0_10px_40px_-12px_rgba(245,179,1,0.45)] sm:w-[400px]" : "w-full sm:w-[176px]"
        }`}
      >
        {/* Collapsed face */}
        <button
          type="button"
          aria-label={label}
          onClick={() => {
            setTapped(true);
            requestAnimationFrame(() => inputRef.current?.focus());
          }}
          className={`absolute inset-0 flex items-center justify-center text-[15px] font-medium transition-opacity duration-200 ${
            open ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          {label}
        </button>

        {/* Expanded face */}
        <div
          className={`absolute inset-0 flex items-center gap-2 pl-3 pr-1.5 transition-opacity duration-300 ${
            open ? "opacity-100 delay-100" : "pointer-events-none opacity-0"
          }`}
        >
          {busy ? (
            <span className="flex-1 text-[14px] font-medium tnum">{busyLabel}</span>
          ) : (
            <>
              {prefix && <span className="text-[14px] font-medium text-black/70">{prefix}</span>}
              <input
                ref={inputRef}
                id={inputId}
                type={type}
                inputMode={inputMode}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => {
                  setFocus(false);
                  setTapped(false);
                }}
                tabIndex={open ? 0 : -1}
                className={`h-9 min-w-0 flex-1 rounded-md px-2.5 text-[15px] text-black outline-none tnum ${field}`}
                aria-label={label}
              />
              <button
                type="submit"
                aria-label="Submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-black text-white transition-transform hover:translate-x-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>
      </form>
      <div
        className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-live="polite"
      >
        <div className="overflow-hidden">
          <p className={`pt-2 text-center text-[12px] ${error ? "text-red" : "text-muted-2"}`}>
            {status || hint}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HeroCtas({ withAnchors = true, idPrefix = "hero" }: { withAnchors?: boolean; idPrefix?: string }) {
  const call = useCallForm();
  const [force, setForce] = useState<null | "call" | "demo">(null);
  const r1 = site.hero.row1;
  const r2 = site.hero.row2;

  useEffect(() => {
    if (!withAnchors) return;
    const onHash = () => {
      if (window.location.hash === "#talk") setForce("call");
      setTimeout(() => setForce(null), 1500);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [withAnchors]);

  const callBusy = call.state === "loading" || call.state === "calling";
  const callBusyLabel = call.state === "loading" ? "Placing the call…" : `Calling you now · ${call.countdown}s`;

  return (
    <div className="mx-auto w-full max-w-2xl">
      {withAnchors && (
        <>
          <div id="talk" className="scroll-mt-40" />
        </>
      )}
      <div className="flex flex-col items-start justify-center gap-3 sm:flex-row">
        <MorphPill
          label={r1.button}
          tone="amber"
          prefix="+91"
          placeholder={r1.placeholder}
          inputMode="tel"
          type="tel"
          autoComplete="tel-national"
          value={call.phone}
          onChange={call.setPhone}
          onSubmit={call.submit}
          busy={callBusy}
          busyLabel={callBusyLabel}
          status={call.status}
          hint={r1.micro}
          inputId={`${idPrefix}-phone`}
          forceOpen={force === "call"}
          error={call.state === "error"}
        />
        <a
          href={r2.href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-white h-12 w-full px-6 text-[15px] sm:w-[176px]"
        >
          {r2.button}
        </a>
      </div>
    </div>
  );
}
