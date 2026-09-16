"use client";

import { FormEvent, useEffect, useState } from "react";

export type CallState = "idle" | "loading" | "calling" | "done" | "error";
export type DemoState = "idle" | "loading" | "done" | "error";

export function useCallForm() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<CallState>("idle");
  const [msg, setMsg] = useState("");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (state !== "calling") return;
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(id);
          setState("done");
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [state]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "loading" || state === "calling") return;
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setState("error");
        setMsg(data.error || "Something went wrong.");
        return;
      }
      setCountdown(60);
      setState("calling");
    } catch {
      setState("error");
      setMsg("Couldn't reach the server. Try again.");
    }
  };

  const status =
    state === "error"
      ? msg
      : state === "calling"
      ? "Your phone should ring within a minute. Pick up and talk to it like you would to anyone."
      : state === "done"
      ? "Didn't get the call? Try again, or book a demo."
      : "";

  return { phone, setPhone, state, countdown, submit, status };
}

export function useDemoForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<DemoState>("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setState("error");
        setMsg(data.error || "Something went wrong.");
        return;
      }
      setState("done");
      if (data.bookingUrl) {
        window.open(data.bookingUrl, "_blank", "noopener");
        setMsg("Pick a slot in the tab that just opened.");
      } else {
        setMsg("Thanks. We'll email you a slot within a day.");
      }
    } catch {
      setState("error");
      setMsg("Couldn't reach the server. Try again.");
    }
  };

  const status = state === "idle" || state === "loading" ? "" : msg;
  return { email, setEmail, state, submit, status };
}
