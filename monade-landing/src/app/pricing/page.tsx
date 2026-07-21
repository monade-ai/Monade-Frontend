import Link from "next/link";
import HomeNav from "@/components/home/HomeNav";
import PricingCalculator from "@/components/pricing/PricingCalculator";
import "../home.css";
import "./pricing.css";

const included = [
  {
    title: "The voice runtime",
    copy: "Native voice-to-voice conversations, built for responsive turn-taking.",
  },
  {
    title: "Language handling",
    copy: "Hinglish and regional language support for the way customers actually speak.",
  },
  {
    title: "Workflow connection",
    copy: "Standard integrations that move the outcome of a call into your operating stack.",
  },
  {
    title: "A supported launch",
    copy: "Standard onboarding and support, without a separate platform or seat fee.",
  },
];

const enterprise = [
  "Dedicated infrastructure or a private environment",
  "Advanced compliance and access controls",
  "Priority rollout support and response commitments",
  "A commercial model scoped around the deployment",
];

const faqs = [
  {
    question: "What counts as a billable minute?",
    answer:
      "You're billed for talk time in production — the total minutes your agents spend on live calls in a month.",
  },
  {
    question: "What happens at 10,000 monthly minutes?",
    answer:
      "The active rate changes from ₹8 to ₹6 per minute. That lower rate applies to the full monthly volume once the threshold is reached.",
  },
  {
    question: "Are there platform or seat fees?",
    answer:
      "No. The core Monade stack is included in the usage price, and pricing is not tied to the number of operators or seats.",
  },
  {
    question: "Can we begin with a pilot?",
    answer:
      "Yes. A focused pilot can validate conversation quality, workflow fit, and operating impact before a broader rollout.",
  },
  {
    question: "When does enterprise pricing apply?",
    answer:
      "Enterprise pricing is scoped when a rollout needs dedicated infrastructure, private environments, stricter compliance controls, or premium support.",
  },
];

export default function PricingPage() {
  return (
    <div className="monade-home pricing-page">
      <HomeNav />

      <main>
        <section className="pricing-hero home-shell">
          <div className="pricing-hero__copy">
            <p className="pricing-kicker">One model. Two rates.</p>
            <h1>
              ₹8 a minute.
              <span>₹6 when volume becomes real.</span>
            </h1>
          </div>
          <div className="pricing-hero__aside">
            <p>
              One usage price for every voice workflow. No platform fee and no
              seat tax.
            </p>
            <dl>
              <div>
                <dt>Below 10,000 min</dt>
                <dd>₹8 / min</dd>
              </div>
              <div>
                <dt>10,000 min and above</dt>
                <dd>₹6 / min</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pricing-estimator home-shell" aria-labelledby="estimator-title">
          <div className="pricing-section-heading">
            <h2 id="estimator-title">Start with the minutes you expect to use.</h2>
            <p>
              Adjust the volume. The rate and estimate update with it. This is
              planning guidance, not a final invoice.
            </p>
          </div>
          <PricingCalculator />
        </section>

        <section className="pricing-included home-shell" aria-labelledby="included-title">
          <div className="pricing-section-heading pricing-section-heading--sticky">
            <h2 id="included-title">The product stays whole.</h2>
            <p>
              The lower volume rate does not unlock a different product. Scale
              changes the price, not the core experience.
            </p>
          </div>
          <ol className="pricing-included__list">
            {included.map((item) => (
              <li key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="pricing-enterprise">
          <div className="home-shell pricing-enterprise__inner">
            <div>
              <h2>Some rollouts need their own shape.</h2>
            </div>
            <div>
              <p>
                We scope enterprise pricing when operational boundaries matter
                more than a simple minute rate.
              </p>
              <ul>
                {enterprise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="https://calendly.com/adhiraj-n1labs/30min"
                className="pricing-enterprise__link"
                target="_blank"
                rel="noreferrer"
              >
                Scope an enterprise rollout <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pricing-faq home-shell" aria-labelledby="faq-title">
          <div className="pricing-section-heading">
            <h2 id="faq-title">Questions before finance asks.</h2>
          </div>
          <div className="pricing-faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="pricing-faq__mark" aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="pricing-final">
          <div className="home-shell pricing-final__inner">
            <div>
              <h2>Price the first workflow together.</h2>
            </div>
            <Link
              href="https://calendly.com/adhiraj-n1labs/30min"
              className="home-button"
              target="_blank"
              rel="noreferrer"
            >
              Book a rollout call
            </Link>
          </div>
        </section>
      </main>

      <footer className="home-footer pricing-footer">
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
    </div>
  );
}
