"use client";

import { useEffect } from "react";

/**
 * Adds `.is-in` to every `.reveal` element once it scrolls into view.
 * Robust to elements added later (hot reload, client navigation, lazy mounts):
 * a MutationObserver registers new nodes, and a scroll/resize fallback marks
 * anything already above the fold, so nothing can stay blank.
 */
export default function RevealObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const all = () => Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));

    if (!("IntersectionObserver" in window)) {
      all().forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const register = () => {
      all().forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    };

    // Fallback: anything whose top is already inside the viewport gets revealed.
    const sweep = () => {
      const vh = window.innerHeight;
      all().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add("is-in");
      });
    };

    register();
    sweep();

    const mo = new MutationObserver(() => {
      register();
      sweep();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep);
    const t = setTimeout(sweep, 800);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
      clearTimeout(t);
    };
  }, []);
  return null;
}
