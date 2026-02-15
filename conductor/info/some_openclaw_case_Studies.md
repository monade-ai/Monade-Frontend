export const CASE_STUDIES_V2 = [
  {
    slug: "loan-kyc-document-chase",
    rank: 9,
    industry: "BFSI / NBFC",
    title: "The KYC Chase That Doesn’t Beg",
    subtitle: "A Bengaluru lender cut disbursal drop-offs by turning document collection into a polite, unstoppable voice workflow.",
    heroImage: "/images/case-studies/kyc-hero.jpg",
    author: {
      name: "Monade Editorial",
      role: "Field Report",
      image: "/images/authors/monade-team.jpg"
    },
    publishedAt: "February 14, 2026",
    stats: [
      { label: "KYC Completion", value: "+32%" },
      { label: "TAT to Disbursal", value: "-41%" },
      { label: "Agent Hours Saved", value: "280 hrs/mo" }
    ],
    pullQuote:
      "Most loans die in the gap between 'Interested' and 'Uploaded.' The agent lives in that gap.",
    content: `
      <h3>The Invisible Cliff</h3>
      <p>At 6:38 PM, the office lights are still on, but the leads are already going dark. A customer said yes to a personal loan at lunch. By dinner, the WhatsApp link is buried under memes and family forwards. The lender sees it as “low intent.” It’s not. It’s <em>friction</em>.</p>

      <h3>The Protocol: Micro-Commitments</h3>
      <p>We wired Open Claw to detect “Approved, pending docs” and trigger a Monade call within 10 minutes. The agent doesn’t ask for everything at once. It asks for <strong>one</strong> thing: “Can you share your PAN right now? I’ll wait.”</p>
      <p>Then it sends the WhatsApp upload link, stays on the line, confirms receipt, and schedules the next doc. Each step is a tiny yes. Tiny yeses close big deals.</p>

      <h3>The Result: Disbursals That Actually Happen</h3>
      <p>Drop-offs reduced because the agent turned document collection into a guided experience. Humans escalated only exceptions. The system stopped “following up” and started <em>finishing</em>.</p>
    `
  },

  {
    slug: "subscription-cancellation-save",
    rank: 10,
    industry: "SaaS / Subscriptions",
    title: "The Cancellation Interceptor",
    subtitle: "A B2B SaaS company cut churn by calling cancellations instantly—before the customer emotionally “left.”",
    heroImage: "/images/case-studies/churn-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 13, 2026",
    stats: [
      { label: "Churn", value: "-18%" },
      { label: "Save Rate", value: "29%" },
      { label: "Time to Contact", value: "< 90s" }
    ],
    pullQuote:
      "Churn isn’t a decision. It’s a cooling process. The agent calls while it’s still warm.",
    content: `
      <h3>The Rage Click</h3>
      <p>Churn begins as a feeling, not a spreadsheet. A user hits “Cancel” after a bad moment: a failed sync, a delayed response, a small betrayal. Most companies email a survey. That’s too late.</p>

      <h3>The Protocol: Instant Triaging + Offer Design</h3>
      <p>Open Claw watches the cancellation webhook and assigns the reason code. Monade calls immediately with a calm opener: “I saw you tried to cancel. I can fix this in 2 minutes. What broke?”</p>
      <p>If it’s support: the agent opens a ticket, summarizes the issue, and schedules an engineer callback. If it’s pricing: it offers a <strong>one-time downgrade</strong> and keeps the account alive. If it’s churn-by-forgetfulness: it pauses billing.</p>

      <h3>The Result</h3>
      <p>Most churn was not “product mismatch.” It was <em>unresolved emotion</em>. The agent resolved it while it still existed.</p>
    `
  },

  {
    slug: "hospital-lab-report-followup",
    rank: 11,
    industry: "Healthcare / Diagnostics",
    title: "The Follow-Up That Turns Into Treatment",
    subtitle: "A diagnostics chain used calls + WhatsApp to convert 'abnormal results' into booked doctor consults—without sounding predatory.",
    heroImage: "/images/case-studies/lab-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 11, 2026",
    stats: [
      { label: "Consult Bookings", value: "+44%" },
      { label: "No-Show Rate", value: "-21%" },
      { label: "Patient Complaints", value: "0" }
    ],
    pullQuote:
      "The trick isn’t selling. It’s reducing uncertainty without triggering fear.",
    content: `
      <h3>The Quiet Panic</h3>
      <p>People read abnormal reports at night. Alone. On a phone screen. The mind fills gaps with worst-case stories.</p>

      <h3>The Protocol: Permission + Next Step</h3>
      <p>Open Claw flags certain results and launches a Monade call with strict guardrails: no diagnosis, no scare tactics. The agent says: “I can explain what the report means in general terms and help you book a doctor if you want.”</p>
      <p>Then it sends the report link, lists available consult slots, and books. Everything is logged. Escalations go to a nurse line.</p>

      <h3>The Result</h3>
      <p>Patients felt held, not hunted. The business gained revenue, but the <em>patient gained calm</em>. That’s the real retention.</p>
    `
  },

  {
    slug: "field-service-no-show-killer",
    rank: 12,
    industry: "Home Services",
    title: "The No-Show Killer for Field Visits",
    subtitle: "An AC servicing company stopped losing money to empty doorbells using a confirmation + deposit protocol.",
    heroImage: "/images/case-studies/service-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 9, 2026",
    stats: [
      { label: "Technician Wastage", value: "-35%" },
      { label: "On-Time Completion", value: "+22%" },
      { label: "Refund Requests", value: "-18%" }
    ],
    pullQuote:
      "Every no-show is a technician’s hour thrown into the sea. The agent builds a bridge before the hour is lost.",
    content: `
      <h3>The Empty Doorbell</h3>
      <p>Field service dies by uncertainty. The customer books. The technician travels. The customer forgets. Everyone loses.</p>

      <h3>The Protocol: Two-Step Commitment</h3>
      <p>Monade calls 12 hours before the slot. If confirmed, Open Claw triggers a WhatsApp with a tracking link and a tiny refundable deposit option. If not confirmed, the slot is recycled automatically.</p>

      <h3>The Result</h3>
      <p>Routes stabilized. Technicians stopped rage-quitting. The business became predictable—which is what scale actually means.</p>
    `
  },

  {
    slug: "b2b-invoice-collections",
    rank: 13,
    industry: "B2B / Finance Ops",
    title: "Collections Without Shame",
    subtitle: "A distributor recovered overdue payments by calling like a CFO: factual, calm, and relentlessly scheduled.",
    heroImage: "/images/case-studies/collections-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 8, 2026",
    stats: [
      { label: "Overdues Recovered", value: "+27%" },
      { label: "Avg Days Past Due", value: "-19%" },
      { label: "Manual Follow-ups", value: "-80%" }
    ],
    pullQuote:
      "The best collections call isn’t aggressive. It’s scheduled.",
    content: `
      <h3>The Awkward Call</h3>
      <p>Humans avoid collections because it feels personal. But invoices aren’t personal. They are contracts.</p>

      <h3>The Protocol: Facts + Calendar</h3>
      <p>Open Claw pulls invoice status and assigns a tone: friendly reminder → firm reminder → escalation. Monade calls, states exact amounts and dates, then asks one question: “When should I call you back with confirmation of payment?”</p>

      <h3>The Result</h3>
      <p>Cashflow improved because the agent removed emotion. It turned collections into operations.</p>
    `
  },

  {
    slug: "society-maintenance-concierge",
    rank: 14,
    industry: "Real Estate / Communities",
    title: "The Apartment Society Concierge",
    subtitle: "A gated community reduced admin chaos by letting residents talk to an agent that can actually book vendors.",
    heroImage: "/images/case-studies/society-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 7, 2026",
    stats: [
      { label: "Resident Complaints", value: "-38%" },
      { label: "Ticket Resolution", value: "+25%" },
      { label: "Admin Workload", value: "-60%" }
    ],
    pullQuote:
      "A society isn’t run by rules. It’s run by response time.",
    content: `
      <h3>The WhatsApp Terror</h3>
      <p>Society groups are emotional highways: leaks, lifts, noise, parking. The admin is drowning in voice notes.</p>

      <h3>The Protocol: Triage + Vendor Booking</h3>
      <p>Residents call or WhatsApp. The agent logs the issue, captures photos if needed, and books a plumber/electrician from a vetted list. It updates the resident with ETA and closes the loop after completion.</p>

      <h3>The Result</h3>
      <p>The admin stopped being a human router. The society became a service.</p>
    `
  },

  {
    slug: "wedding-vendor-broker",
    rank: 15,
    industry: "Events / Weddings",
    title: "The Wedding Vendor Broker",
    subtitle: "A wedding marketplace used an agent to negotiate availability and lock bookings before the families changed their mind.",
    heroImage: "/images/case-studies/wedding-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 6, 2026",
    stats: [
      { label: "Bookings", value: "+31%" },
      { label: "Vendor Response", value: "< 5 min" },
      { label: "Drop-offs", value: "-22%" }
    ],
    pullQuote:
      "Weddings don’t lose to competitors. They lose to indecision.",
    content: `
      <h3>The Decision Window</h3>
      <p>Families browse vendors like they browse lives: endlessly. The booking dies if you don’t compress time.</p>

      <h3>The Protocol: Availability First, Emotion Second</h3>
      <p>The agent calls vendors, checks dates, confirms packages, and sends a WhatsApp summary to the family with a single CTA: “Reply YES to lock with ₹X token.”</p>

      <h3>The Result</h3>
      <p>Speed won. Not persuasion. Just speed.</p>
    `
  },

  {
    slug: "retail-emi-conversion",
    rank: 16,
    industry: "Retail / Consumer Finance",
    title: "The EMI Closer",
    subtitle: "A smartphone retailer doubled conversions by reframing price as a monthly decision—then scheduling the purchase.",
    heroImage: "/images/case-studies/emi-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 4, 2026",
    stats: [
      { label: "Conversion Rate", value: "2.1x" },
      { label: "Cart Abandonment", value: "-28%" },
      { label: "Avg Order Value", value: "+14%" }
    ],
    pullQuote:
      "Total cost scares people. Monthly cost recruits them.",
    content: `
      <h3>The Sticker Shock</h3>
      <p>Most buyers can afford a phone. They can’t afford the psychological impact of the price.</p>

      <h3>The Protocol: Frame + Schedule</h3>
      <p>When a cart is abandoned, the agent calls: “Do you want to see EMI options? It’s ₹X/month.” If the buyer agrees, it schedules a store pickup slot, sends the docs checklist on WhatsApp, and confirms the next day.</p>

      <h3>The Result</h3>
      <p>It wasn’t discounting. It was decision architecture.</p>
    `
  },

  {
    slug: "freight-eta-verification",
    rank: 17,
    industry: "Supply Chain",
    title: "The ETA Truth Machine",
    subtitle: "A logistics broker stopped lying to customers by calling drivers automatically and syncing real ETAs into the system.",
    heroImage: "/images/case-studies/eta-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 3, 2026",
    stats: [
      { label: "Customer Escalations", value: "-47%" },
      { label: "ETA Accuracy", value: "+36%" },
      { label: "Ops Calls", value: "-65%" }
    ],
    pullQuote:
      "The worst part of logistics isn’t delays. It’s uncertainty.",
    content: `
      <h3>The “Any Update?” Spiral</h3>
      <p>Every logistics team becomes a call center once delays begin. Customers don’t want apologies. They want time.</p>

      <h3>The Protocol: Driver Call + System Sync</h3>
      <p>Open Claw triggers an ETA check when a shipment crosses a delay threshold. Monade calls the driver, extracts a realistic ETA, and writes it back to the CRM. Customers get proactive WhatsApp updates before they ask.</p>

      <h3>The Result</h3>
      <p>Truth reduced noise. Noise reduced cost.</p>
    `
  },

  {
    slug: "school-fee-collection",
    rank: 18,
    industry: "Education / Schools",
    title: "The Fee Reminder Parents Don’t Hate",
    subtitle: "A private school improved collections by calling with options, not threats—then offering a payment plan instantly.",
    heroImage: "/images/case-studies/school-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "February 1, 2026",
    stats: [
      { label: "Fee Collection", value: "+23%" },
      { label: "Office Walk-ins", value: "-40%" },
      { label: "Payment Plan Uptake", value: "18%" }
    ],
    pullQuote:
      "Parents don’t need reminders. They need paths.",
    content: `
      <h3>The Awkward Office Window</h3>
      <p>Fee collection is where institutions lose goodwill. A bad reminder sounds like a threat.</p>

      <h3>The Protocol: Respect + Options</h3>
      <p>The agent calls with a single sentence that preserves dignity: “I’m calling so this doesn’t become stressful later.” Then it offers choices: pay link, installment plan, or a scheduled callback after salary date. Everything is confirmed on WhatsApp.</p>

      <h3>The Result</h3>
      <p>Collections improved because the system sounded like a partner.</p>
    `
  },

  {
    slug: "automotive-service-retention",
    rank: 19,
    industry: "Automotive / Dealerships",
    title: "The Service Retention Engine",
    subtitle: "A dealership network reduced churn by calling before service due dates and bundling value-adds automatically.",
    heroImage: "/images/case-studies/auto-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "January 30, 2026",
    stats: [
      { label: "Service Bookings", value: "+37%" },
      { label: "Customer Churn", value: "-16%" },
      { label: "Upsell Attach", value: "+12%" }
    ],
    pullQuote:
      "Retention is just timing with a little care.",
    content: `
      <h3>The Forgotten Due Date</h3>
      <p>Most customers don’t “switch” service centers. They drift. They forget. Someone else captures them.</p>

      <h3>The Protocol: Reminder + Bundle</h3>
      <p>Open Claw watches mileage/service due. Monade calls, books a slot, offers pickup/drop, and adds relevant bundles (alignment, AC check) based on vehicle history. Confirmation goes to WhatsApp.</p>

      <h3>The Result</h3>
      <p>Bookings became automatic. Humans handled only VIP exceptions.</p>
    `
  },

  {
    slug: "creator-sponsorship-outreach",
    rank: 20,
    industry: "Creators / Media",
    title: "The Sponsorship Caller",
    subtitle: "A creator management agency used AI calling to book brand meetings by making outreach feel like research, not begging.",
    heroImage: "/images/case-studies/creator-hero.jpg",
    author: { name: "Monade Editorial", role: "Field Report", image: "/images/authors/monade-team.jpg" },
    publishedAt: "January 25, 2026",
    stats: [
      { label: "Brand Replies", value: "3.4x" },
      { label: "Meetings Booked", value: "+52%" },
      { label: "Time to First Contact", value: "< 24 hrs" }
    ],
    pullQuote:
      "Good outreach doesn’t ask for money. It offers distribution.",
    content: `
      <h3>The Cold Email Graveyard</h3>
      <p>Brands ignore creators because most pitches sound identical. The issue isn’t talent. It’s framing.</p>

      <h3>The Protocol: Relevance First</h3>
      <p>The agent calls brand managers with a tight opener: “I’m reaching out because your last campaign targeted X, and we have a creator whose audience matches it.” It then sends a one-page WhatsApp deck, schedules a call, and logs outcomes into CRM.</p>

      <h3>The Result</h3>
      <p>It wasn’t more volume. It was better targeting and faster follow-through.</p>
    `
  }
];