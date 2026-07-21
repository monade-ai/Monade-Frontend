"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import LivingCall from "@/components/home/LivingCall";

export default function HomeExperience() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0.88, y: 18, filter: "blur(3px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <main className="monade-home">
      <section className="home-hero home-shell">
        <motion.div
          className="home-hero__copy"
          initial={reduceMotion ? false : { opacity: 0.88, y: 16, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>
            Voice that earns
            <span>the next sentence.</span>
          </h1>
          <p>
            Monade runs phone agents that listen, adapt, and move real work
            forward across India.
          </p>
          <div className="home-hero__actions">
            <Link href="#experience" className="home-button">
              Hear a call
            </Link>
            <Link
              href="https://calendly.com/adhiraj-n1labs/30min"
              className="home-text-link"
              target="_blank"
              rel="noreferrer"
            >
              Get a demo <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="home-hero__proof">
            First word in 0.4s · Hinglish and regional languages · from ₹8 a minute
          </p>
        </motion.div>

        <motion.div
          className="home-hero__visual"
          initial={reduceMotion ? false : { opacity: 0.9, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="home-hero__shader">
            <MeshGradient
              width="100%"
              height="100%"
              colors={["#F2EFE8", "#D94126", "#E1A087", "#B7B0F0", "#191A18"]}
              distortion={0.74}
              swirl={0.38}
              grainMixer={0.18}
              grainOverlay={0.08}
              speed={reduceMotion ? 0 : 0.18}
              scale={1.08}
              rotation={18}
            />
          </div>
        </motion.div>
      </section>

      <section id="experience" className="home-section home-shell home-listen">
        <motion.div className="home-section__heading" {...reveal}>
          <h2>Listen before you believe us.</h2>
          <p>Real calls, real pacing, and no demo-room voice.</p>
        </motion.div>

        <LivingCall />
      </section>

      <section className="home-section home-shell home-india">
        <motion.div {...reveal}>
          <h2>
            Built for the way India
            <span>actually speaks.</span>
          </h2>
          <p>
            Code-switching, honorifics, interruptions, and family decisions are
            part of the conversation, not edge cases.
          </p>
        </motion.div>
        <div className="home-language-field" aria-label="Supported languages include">
          <span>Hindi</span>
          <span>English</span>
          <span>Marathi</span>
          <span>Tamil</span>
          <span>Telugu</span>
          <span>Bengali</span>
          <span>Kannada</span>
          <span>Malayalam</span>
          <span>Gujarati</span>
          <span>Punjabi</span>
          <span>Hinglish</span>
        </div>
      </section>

      <section className="home-section home-shell home-loop">
        <motion.div className="home-loop__content" {...reveal}>
          <h2>The call ends. The work keeps moving.</h2>
          <p>
            Monade qualifies the customer, books the next step, and writes the outcome back to your systems.
          </p>
          <Link href="/products" className="home-text-link">
            See the product <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>

        <motion.dl className="home-loop__proof" {...reveal}>
          <div>
            <dt>Call outcome</dt>
            <dd>Site visit booked</dd>
          </div>
          <div>
            <dt>Follow-up</dt>
            <dd>Confirmation sent on WhatsApp</dd>
          </div>
          <div>
            <dt>System update</dt>
            <dd>CRM record and transcript attached</dd>
          </div>
        </motion.dl>
      </section>

      <section className="home-final">
        <motion.div className="home-shell home-final__content" {...reveal}>
          <h2>Make the next call count.</h2>
          <Link
            href="https://calendly.com/adhiraj-n1labs/30min"
            className="home-button"
            target="_blank"
            rel="noreferrer"
          >
            Get a demo
          </Link>
        </motion.div>
      </section>

      <footer className="home-footer">
        <div className="home-shell home-footer__inner">
          <div>
            <strong>monade</strong>
            <p>Voice agents designed for real conversations.</p>
          </div>
          <nav aria-label="Footer navigation">
            <strong className="home-footer__label">Explore</strong>
            <Link href="/trust">Trust</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <nav aria-label="Legal navigation">
            <strong className="home-footer__label">Legal</strong>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
