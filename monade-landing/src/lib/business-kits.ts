export type BusinessKitData = {
  slug: string;
  name: string;
  tagline: string;
  category: "acquire" | "retain" | "collect" | "operate";
  vertical: string;
  metric?: string;
  problem: {
    headline: string;
    body: string;
  };
  protocol: {
    steps: { label: string; detail: string }[];
  };
  included: string[];
  expectedResults: { label: string; value: string }[];
  integrations: string[];
  relatedCaseStudy?: string;
  relatedKits: string[];
};

export const BUSINESS_KITS: BusinessKitData[] = [
  // ── ACQUIRE ──────────────────────────────────────────
  {
    slug: "speed-to-lead-engine",
    name: "Speed-to-Lead Engine",
    tagline: "Calls new inbound leads in under 30 seconds",
    category: "acquire",
    vertical: "Any",
    metric: "<30s response",
    problem: {
      headline: "Leads go cold in minutes",
      body: "A new lead fills out your form at 2:17 PM. By 2:22 PM, they've already opened three competitor tabs. The Harvard Business Review found that responding within 5 minutes makes you 100x more likely to connect. Most teams respond in 47 minutes. By then, the lead has forgotten they even asked.",
    },
    protocol: {
      steps: [
        { label: "Trigger", detail: "New lead hits your CRM or form submission webhook" },
        { label: "Instant Call", detail: "Monade dials the lead within 30 seconds — before the tab closes" },
        { label: "Qualify", detail: "Agent runs a 45-second qualification: budget, timeline, decision-maker" },
        { label: "Route", detail: "Hot leads get transferred to human reps live. Warm leads get a WhatsApp follow-up sequence" },
        { label: "Log", detail: "Full transcript, lead score, and next action pushed back to CRM" },
      ],
    },
    included: [
      "Voice call flow with qualification branching",
      "CRM webhook trigger (HubSpot, Salesforce, Sheets)",
      "WhatsApp follow-up sequence for warm leads",
      "Live transfer to human reps for hot leads",
      "Conversion dashboard with speed-to-contact metrics",
    ],
    expectedResults: [
      { label: "Response Time", value: "<30s" },
      { label: "Contact Rate", value: "+340%" },
      { label: "Qualified Meetings", value: "+2.8x" },
    ],
    integrations: ["HubSpot", "Salesforce", "Google Sheets", "WhatsApp", "Calendly"],
    relatedCaseStudy: "real-estate-qualification",
    relatedKits: ["site-visit-scheduler", "referral-harvester"],
  },
  {
    slug: "site-visit-scheduler",
    name: "Site-Visit Scheduler",
    tagline: "Qualifies, books, sends a car",
    category: "acquire",
    vertical: "Real Estate",
    metric: "3x site visits",
    problem: {
      headline: "10,000 leads, 50 site visits",
      body: "Real estate runs on one thing: getting people through the door. But most leads are 'just browsing.' Junior associates burn out calling disconnected numbers. The conversion bottleneck isn't interest — it's logistics. Nobody books because nobody makes it easy.",
    },
    protocol: {
      steps: [
        { label: "Filter", detail: "Agent opens with permission-based qualifying: 'Are you researching or actively looking?'" },
        { label: "Qualify", detail: "Budget, family size, timeline — extracted in under 60 seconds" },
        { label: "Book", detail: "Serious leads get offered a site visit with a specific slot and pickup option" },
        { label: "Confirm", detail: "WhatsApp confirmation with directions, driver details, and day-before reminder call" },
        { label: "Handoff", detail: "Sales team gets a pre-qualified brief before the visit happens" },
      ],
    },
    included: [
      "Outcome-based lead filtering call flow",
      "Site visit booking with slot management",
      "WhatsApp confirmation + reminder sequence",
      "Transport coordination webhook",
      "Pre-visit sales brief auto-generated",
    ],
    expectedResults: [
      { label: "Site Visits", value: "3x" },
      { label: "Cost per Visit", value: "-60%" },
      { label: "Qualification Time", value: "45s" },
    ],
    integrations: ["CRM", "Google Calendar", "WhatsApp", "Google Maps"],
    relatedCaseStudy: "real-estate-qualification",
    relatedKits: ["speed-to-lead-engine", "emi-closer"],
  },
  {
    slug: "emi-closer",
    name: "EMI Closer",
    tagline: "Reframes price as a monthly decision",
    category: "acquire",
    vertical: "Retail",
    metric: "2.1x conversion",
    problem: {
      headline: "Cart abandoned at the price tag",
      body: "Most buyers can afford the product. They can't afford the psychological weight of the lump sum. A phone that costs ₹45,000 feels impossible. The same phone at ₹1,875/month feels like a subscription they already pay for. The product didn't change. The frame did.",
    },
    protocol: {
      steps: [
        { label: "Detect", detail: "Cart abandonment triggers the agent within 10 minutes" },
        { label: "Reframe", detail: "Agent calls with EMI options: 'That's just ₹1,875 a month — less than your streaming subscriptions combined'" },
        { label: "Schedule", detail: "If interested, agent books a store pickup slot or arranges delivery" },
        { label: "Documents", detail: "WhatsApp sends the EMI docs checklist so everything's ready" },
        { label: "Confirm", detail: "Next-day confirmation call to lock the purchase" },
      ],
    },
    included: [
      "Cart abandonment trigger integration",
      "EMI calculation and reframing script",
      "Store pickup or delivery scheduling",
      "WhatsApp document collection flow",
      "Conversion tracking dashboard",
    ],
    expectedResults: [
      { label: "Conversion Rate", value: "2.1x" },
      { label: "Cart Abandonment", value: "-28%" },
      { label: "Avg Order Value", value: "+14%" },
    ],
    integrations: ["Shopify", "WooCommerce", "WhatsApp", "Payment Gateway"],
    relatedCaseStudy: "ecommerce-order-support",
    relatedKits: ["speed-to-lead-engine", "site-visit-scheduler"],
  },
  {
    slug: "referral-harvester",
    name: "Referral Harvester",
    tagline: "Post-success call that generates warm intros",
    category: "acquire",
    vertical: "Any",
    metric: "+40% referrals",
    problem: {
      headline: "Happy customers who never tell anyone",
      body: "Your best customers love your product. They'd recommend you — if someone asked. Nobody asks. Referral programs sit unused in settings pages. The moment of highest satisfaction passes in silence, and the warmest leads you'll ever get stay trapped in someone else's contact list.",
    },
    protocol: {
      steps: [
        { label: "Detect", detail: "Trigger after a positive outcome: successful delivery, resolved ticket, 5-star rating" },
        { label: "Thank", detail: "Agent calls to say thank you and confirm satisfaction — genuine, not transactional" },
        { label: "Ask", detail: "'Do you know anyone who might need something similar? I can reach out on your behalf'" },
        { label: "Capture", detail: "Collect name and number with permission. Context is noted for the outreach call" },
        { label: "Outreach", detail: "Warm call to referral: 'Your friend Priya suggested I reach out because...'" },
      ],
    },
    included: [
      "Post-success trigger integration",
      "Gratitude + satisfaction check call flow",
      "Referral capture with context logging",
      "Warm outreach call sequence to referrals",
      "Referral attribution dashboard",
    ],
    expectedResults: [
      { label: "Referrals Generated", value: "+40%" },
      { label: "Referral Conversion", value: "3.2x higher" },
      { label: "CAC Reduction", value: "-35%" },
    ],
    integrations: ["CRM", "WhatsApp", "NPS Tools", "Google Sheets"],
    relatedKits: ["speed-to-lead-engine", "site-visit-scheduler"],
  },

  // ── RETAIN ───────────────────────────────────────────
  {
    slug: "churn-interceptor",
    name: "Churn Interceptor",
    tagline: "Calls cancellations before the emotion cools",
    category: "retain",
    vertical: "SaaS",
    metric: "29% save rate",
    problem: {
      headline: "Churn starts as a feeling, not a spreadsheet",
      body: "A user hits Cancel after a bad moment: a failed sync, a delayed response, a small betrayal. Most companies email a survey 24 hours later. By then the emotion has hardened into a decision. The window to save them is measured in minutes, not days.",
    },
    protocol: {
      steps: [
        { label: "Detect", detail: "Cancellation webhook fires. Agent classifies the reason code instantly" },
        { label: "Call", detail: "Monade calls within 90 seconds: 'I saw you tried to cancel. I can fix this in 2 minutes. What broke?'" },
        { label: "Triage", detail: "Support issue → open ticket + engineer callback. Pricing → one-time downgrade offer. Forgotten → pause billing" },
        { label: "Resolve", detail: "Agent resolves the issue live or schedules a resolution with a specific commitment" },
        { label: "Follow-up", detail: "WhatsApp check-in 48 hours later to confirm the fix held" },
      ],
    },
    included: [
      "Cancellation webhook trigger",
      "Reason-code classification and routing",
      "Save offer logic (downgrade, pause, credit)",
      "Engineer callback scheduling",
      "48-hour follow-up sequence",
    ],
    expectedResults: [
      { label: "Save Rate", value: "29%" },
      { label: "Churn Reduction", value: "-18%" },
      { label: "Time to Contact", value: "<90s" },
    ],
    integrations: ["Stripe", "Chargebee", "Intercom", "WhatsApp", "Slack"],
    relatedCaseStudy: "subscription-cancellation-save",
    relatedKits: ["renewal-reminder", "service-retention-engine"],
  },
  {
    slug: "renewal-reminder",
    name: "Renewal Reminder",
    tagline: "Loss-aversion nudges before policy lapse",
    category: "retain",
    vertical: "Insurance",
    metric: "+40% retention",
    problem: {
      headline: "30% of policies lapse because people forget",
      body: "An email goes to spam. An SMS gets ignored between food delivery notifications. The policy lapses. The customer loses their No Claim Bonus. The insurer loses the premium. Everyone loses because nobody picked up the phone and made it personal.",
    },
    protocol: {
      steps: [
        { label: "Alert", detail: "7 days before expiry, agent calls with a loss-aversion frame" },
        { label: "Frame", detail: "'Your No Claim Bonus is worth ₹4,000 — I don't want you to lose it'" },
        { label: "Link", detail: "Payment link sent to WhatsApp instantly if customer agrees" },
        { label: "Retry", detail: "If busy, agent schedules a callback: 'Should I call Saturday at 10?'" },
        { label: "Escalate", detail: "After 3 attempts, human agent gets a warm handoff with full context" },
      ],
    },
    included: [
      "Expiry-based trigger automation",
      "Loss-aversion call script with NCB framing",
      "WhatsApp payment link delivery",
      "Multi-attempt callback scheduling",
      "Human escalation with context brief",
    ],
    expectedResults: [
      { label: "Retention Rate", value: "+40%" },
      { label: "Manual Calls Eliminated", value: "100%" },
      { label: "Revenue Saved", value: "₹2Cr+" },
    ],
    integrations: ["Insurance CRM", "Payment Gateway", "WhatsApp", "Calendly"],
    relatedCaseStudy: "insurance-renewal",
    relatedKits: ["churn-interceptor", "service-retention-engine"],
  },
  {
    slug: "service-retention-engine",
    name: "Service Retention Engine",
    tagline: "Pre-emptive service booking + value bundles",
    category: "retain",
    vertical: "Automotive",
    metric: "+37% bookings",
    problem: {
      headline: "Customers don't switch. They drift.",
      body: "Most customers don't actively leave a dealership. They forget their service due date, discover a neighborhood garage, and never come back. The dealership loses lifetime value not to competition, but to inertia. The antidote is showing up before the customer even thinks about it.",
    },
    protocol: {
      steps: [
        { label: "Predict", detail: "Open Claw watches mileage and service intervals from the DMS" },
        { label: "Call", detail: "Agent calls before due date with a friendly reminder and available slots" },
        { label: "Bundle", detail: "Based on vehicle history, offers relevant add-ons: alignment, AC check, tire rotation" },
        { label: "Book", detail: "Slot confirmed. Pickup/drop option offered. WhatsApp confirmation sent" },
        { label: "Follow-up", detail: "Post-service satisfaction call + next service reminder scheduled" },
      ],
    },
    included: [
      "Service interval prediction trigger",
      "Vehicle-history-aware bundling logic",
      "Slot booking with pickup/drop coordination",
      "Post-service satisfaction call",
      "Lifetime value tracking dashboard",
    ],
    expectedResults: [
      { label: "Service Bookings", value: "+37%" },
      { label: "Customer Churn", value: "-16%" },
      { label: "Upsell Attach Rate", value: "+12%" },
    ],
    integrations: ["DMS", "WhatsApp", "Google Calendar", "CRM"],
    relatedCaseStudy: "automotive-service-retention",
    relatedKits: ["renewal-reminder", "churn-interceptor"],
  },
  {
    slug: "parent-whisperer",
    name: "Parent Whisperer",
    tagline: "Arms students with ROI arguments for parents",
    category: "retain",
    vertical: "EdTech",
    metric: "2x enrollment",
    problem: {
      headline: "The student says yes. The parent says no.",
      body: "In Indian education, the student fills the form but the parent signs the check. Most sales teams focus on the student. They get them excited, only to hit a brick wall at the family dinner table. The sale doesn't happen on the phone — it happens in the living room. You need to arm the student.",
    },
    protocol: {
      steps: [
        { label: "Qualify", detail: "Agent qualifies the student's interest, course fit, and career goals" },
        { label: "Inoculate", detail: "Send a 'Parent Guide' to the student's WhatsApp: salary data, placement stats, ROI breakdown" },
        { label: "Bridge", detail: "'Want me to WhatsApp this directly to your father? It explains the career outcomes'" },
        { label: "Warm", detail: "When human counselor calls, the parent has already read the data. Conversation shifts from 'why pay?' to 'when does the batch start?'" },
        { label: "Close", detail: "Enrollment confirmed with EMI options presented as monthly investment" },
      ],
    },
    included: [
      "Student qualification call flow",
      "Parent Guide auto-generation (ROI, salary, placements)",
      "Dual-channel WhatsApp delivery (student + parent)",
      "Human counselor warm handoff with brief",
      "Enrollment conversion tracking",
    ],
    expectedResults: [
      { label: "Enrollment Speed", value: "2x" },
      { label: "Parent Trust Score", value: "High" },
      { label: "Cost of Sale", value: "-40%" },
    ],
    integrations: ["LMS", "WhatsApp", "CRM", "Payment Gateway"],
    relatedCaseStudy: "education-counseling",
    relatedKits: ["churn-interceptor", "emi-closer"],
  },

  // ── COLLECT ──────────────────────────────────────────
  {
    slug: "collections-cfo",
    name: "Collections CFO",
    tagline: "Factual, calm, relentlessly scheduled reminders",
    category: "collect",
    vertical: "B2B Finance",
    metric: "+27% recovered",
    problem: {
      headline: "Humans avoid collections because it feels personal",
      body: "But invoices aren't personal. They are contracts. The awkwardness of asking for money means follow-ups get delayed, calls get skipped, and cashflow suffers. What you need isn't a tough collector — it's a calm, factual system that treats overdue invoices as operations, not confrontations.",
    },
    protocol: {
      steps: [
        { label: "Classify", detail: "Open Claw pulls invoice status and assigns a tone tier: friendly → firm → escalation" },
        { label: "Call", detail: "Agent states exact amounts and dates, then asks one question: 'When should I call back with confirmation of payment?'" },
        { label: "Commit", detail: "Promise-to-pay date logged. Payment link sent on WhatsApp immediately" },
        { label: "Follow-up", detail: "Agent calls on the committed date. If paid, confirms. If not, escalates tone tier" },
        { label: "Escalate", detail: "After 3 tiers, human team gets a brief with full call history and amounts" },
      ],
    },
    included: [
      "Invoice status integration and tone classification",
      "Escalating call script with 3 tone tiers",
      "Promise-to-pay tracking and scheduling",
      "WhatsApp payment link delivery",
      "Cashflow recovery dashboard",
    ],
    expectedResults: [
      { label: "Overdues Recovered", value: "+27%" },
      { label: "Avg Days Past Due", value: "-19%" },
      { label: "Manual Follow-ups", value: "-80%" },
    ],
    integrations: ["Accounting Software", "WhatsApp", "Payment Gateway", "CRM"],
    relatedCaseStudy: "b2b-invoice-collections",
    relatedKits: ["fee-reminder", "payment-nudge-ladder"],
  },
  {
    slug: "fee-reminder",
    name: "Fee Reminder Parents Don't Hate",
    tagline: "Respect + options, not threats",
    category: "collect",
    vertical: "Schools",
    metric: "+23% collection",
    problem: {
      headline: "Bad reminders sound like threats",
      body: "Fee collection is where institutions lose goodwill. A curt SMS or a notice on the board creates resentment. Parents don't need reminders — they need paths. Options. Flexibility. A system that treats them as partners, not defaulters.",
    },
    protocol: {
      steps: [
        { label: "Remind", detail: "Agent calls with dignity: 'I'm calling so this doesn't become stressful later'" },
        { label: "Options", detail: "Offer choices: pay link now, installment plan, or callback after salary date" },
        { label: "Confirm", detail: "Chosen option confirmed on WhatsApp with a clear timeline" },
        { label: "Follow-up", detail: "Gentle follow-up on the chosen date. No surprises" },
        { label: "Resolve", detail: "If still unpaid after 3 cycles, escalate to admin with full context — not blame" },
      ],
    },
    included: [
      "Fee status integration with school ERP",
      "Dignity-first call script with option branching",
      "Installment plan creation and tracking",
      "WhatsApp payment confirmation flow",
      "Collection rate dashboard by class/term",
    ],
    expectedResults: [
      { label: "Fee Collection", value: "+23%" },
      { label: "Office Walk-ins", value: "-40%" },
      { label: "Payment Plan Uptake", value: "18%" },
    ],
    integrations: ["School ERP", "WhatsApp", "Payment Gateway"],
    relatedCaseStudy: "school-fee-collection",
    relatedKits: ["collections-cfo", "payment-nudge-ladder"],
  },
  {
    slug: "payment-nudge-ladder",
    name: "Payment Link Nudge Ladder",
    tagline: "Escalating nudges with instant payment links",
    category: "collect",
    vertical: "Subscriptions",
    problem: {
      headline: "Failed payments die in the retry queue",
      body: "A payment fails. The system retries silently. After 3 failed attempts, the subscription is cancelled. The customer never knew. A single phone call with a fresh payment link would have saved 70% of these — but nobody makes that call at scale.",
    },
    protocol: {
      steps: [
        { label: "Detect", detail: "Payment failure webhook triggers the ladder" },
        { label: "Nudge 1", detail: "WhatsApp message with a fresh payment link: 'Your payment didn't go through — tap to retry'" },
        { label: "Nudge 2", detail: "If no action in 24 hours, agent calls: 'Just wanted to make sure your subscription stays active'" },
        { label: "Nudge 3", detail: "Final call with urgency: 'Your access expires tomorrow. Can I help you update the card now?'" },
        { label: "Save", detail: "If saved, confirmation sent. If churned, tagged for win-back campaign" },
      ],
    },
    included: [
      "Payment failure webhook integration",
      "3-step escalation ladder (WhatsApp → call → final call)",
      "Fresh payment link generation per nudge",
      "Win-back tagging for failed saves",
      "Recovery rate dashboard",
    ],
    expectedResults: [
      { label: "Payment Recovery", value: "+38%" },
      { label: "Involuntary Churn", value: "-52%" },
      { label: "Support Tickets", value: "-30%" },
    ],
    integrations: ["Stripe", "Razorpay", "WhatsApp", "CRM"],
    relatedKits: ["collections-cfo", "churn-interceptor"],
  },
  {
    slug: "promise-to-pay-tracker",
    name: "Promise-to-Pay Tracker",
    tagline: "Logs commitments, follows up on exact dates",
    category: "collect",
    vertical: "BFSI",
    problem: {
      headline: "Promises without follow-through",
      body: "A debtor says 'I'll pay on the 15th.' The agent notes it down. The 15th comes and goes. Nobody calls. The promise evaporates. What's missing isn't intent — it's a system that treats a verbal commitment as a scheduled action.",
    },
    protocol: {
      steps: [
        { label: "Capture", detail: "During any collections call, agent logs the promise-to-pay date and amount" },
        { label: "Confirm", detail: "WhatsApp summary sent: 'Just confirming — ₹X by March 15th. I'll check in then'" },
        { label: "Remind", detail: "Day-before WhatsApp: 'Quick reminder about tomorrow's payment'" },
        { label: "Verify", detail: "On the date, agent calls: 'Checking in on the payment we discussed'" },
        { label: "Escalate", detail: "If broken, tone tier escalates. Full promise history available to human agents" },
      ],
    },
    included: [
      "Promise-to-pay capture during live calls",
      "WhatsApp confirmation and reminder automation",
      "Date-triggered verification calls",
      "Promise history tracking with escalation tiers",
      "Collections effectiveness dashboard",
    ],
    expectedResults: [
      { label: "Promise Fulfillment", value: "+45%" },
      { label: "Avg Collection Time", value: "-22%" },
      { label: "Agent Productivity", value: "+3x" },
    ],
    integrations: ["Collections CRM", "WhatsApp", "Payment Gateway"],
    relatedKits: ["collections-cfo", "fee-reminder"],
  },

  // ── OPERATE ──────────────────────────────────────────
  {
    slug: "3am-dispatcher",
    name: "3 AM Dispatcher",
    tagline: "Automated night-shift dispatching that never sleeps",
    category: "operate",
    vertical: "Logistics",
    metric: "0 missed rides",
    problem: {
      headline: "The 4 AM slump kills dispatch accuracy",
      body: "Night dispatchers are tired. They miss calls during the slump. They send drivers to Plot 4 when the passenger said Plot 40. The operational chaos of sleep-deprived errors isn't a headache — it's a leak in the hull of the business. Every missed call is lost revenue.",
    },
    protocol: {
      steps: [
        { label: "Receive", detail: "Inbound call answered on first ring, 24/7. No hold music, no IVR maze" },
        { label: "Extract", detail: "Agent extracts pickup, drop, and vehicle preference in under 15 seconds" },
        { label: "Match", detail: "Pings driver group via WhatsApp webhook. Nearest available driver confirmed" },
        { label: "Confirm", detail: "Customer gets driver name, vehicle number, and ETA within 30 seconds" },
        { label: "Monitor", detail: "If driver doesn't start trip in 5 minutes, agent auto-reassigns" },
      ],
    },
    included: [
      "24/7 inbound call handling with intent extraction",
      "Driver matching via WhatsApp group webhook",
      "Real-time ETA and driver assignment to customer",
      "Auto-reassignment on no-show drivers",
      "Dispatch efficiency dashboard",
    ],
    expectedResults: [
      { label: "Missed Rides", value: "0%" },
      { label: "Response Time", value: "<2s" },
      { label: "Dispatcher Salary Saved", value: "₹4.2L/yr" },
    ],
    integrations: ["WhatsApp", "Google Maps", "Fleet Management", "CRM"],
    relatedCaseStudy: "taxi-aggregator-automation",
    relatedKits: ["eta-truth-machine", "kyc-finisher"],
  },
  {
    slug: "eta-truth-machine",
    name: "ETA Truth Machine",
    tagline: "Calls drivers, syncs real ETAs into the system",
    category: "operate",
    vertical: "Supply Chain",
    metric: "-47% escalations",
    problem: {
      headline: "The worst part of logistics isn't delays — it's uncertainty",
      body: "Every logistics team becomes a call center once delays begin. Customers don't want apologies. They want time. But the ETA in the system is a guess from yesterday. The driver knows the real number, but nobody calls the driver. So customers call you. Repeatedly.",
    },
    protocol: {
      steps: [
        { label: "Trigger", detail: "Shipment crosses a delay threshold. Open Claw flags it automatically" },
        { label: "Call Driver", detail: "Monade calls the driver: 'When will you reach the destination? I need a realistic time'" },
        { label: "Extract", detail: "Natural language understanding extracts the real ETA from the driver's response" },
        { label: "Sync", detail: "Updated ETA written back to the CRM/TMS system automatically" },
        { label: "Notify", detail: "Customer gets a proactive WhatsApp update before they even ask" },
      ],
    },
    included: [
      "Delay threshold trigger integration",
      "Driver call flow with ETA extraction",
      "TMS/CRM auto-update on new ETAs",
      "Proactive customer WhatsApp notifications",
      "Escalation reduction dashboard",
    ],
    expectedResults: [
      { label: "Customer Escalations", value: "-47%" },
      { label: "ETA Accuracy", value: "+36%" },
      { label: "Ops Calls Eliminated", value: "-65%" },
    ],
    integrations: ["TMS", "WhatsApp", "CRM", "Google Maps"],
    relatedCaseStudy: "freight-eta-verification",
    relatedKits: ["3am-dispatcher", "kyc-finisher"],
  },
  {
    slug: "kyc-finisher",
    name: "KYC Finisher",
    tagline: "Micro-commitment doc chase until disbursal",
    category: "operate",
    vertical: "BFSI/NBFC",
    metric: "+32% completion",
    problem: {
      headline: "Most loans die between 'Interested' and 'Uploaded'",
      body: "A customer says yes to a personal loan at lunch. By dinner, the WhatsApp link is buried under memes and family forwards. The lender sees it as 'low intent.' It's not. It's friction. The gap between approval and upload is where disbursals go to die.",
    },
    protocol: {
      steps: [
        { label: "Detect", detail: "Open Claw flags 'Approved, pending docs' status in the LOS" },
        { label: "Call", detail: "Agent calls within 10 minutes: 'Can you share your PAN right now? I'll wait'" },
        { label: "Micro-commit", detail: "Ask for one document at a time. Send the upload link. Stay on the line. Confirm receipt" },
        { label: "Schedule", detail: "Schedule the next document: 'I'll call tomorrow at 11 for your address proof'" },
        { label: "Complete", detail: "Once all docs are in, trigger disbursal and confirm with customer" },
      ],
    },
    included: [
      "LOS status trigger integration",
      "Micro-commitment call flow (one doc at a time)",
      "WhatsApp upload link with real-time receipt confirmation",
      "Multi-day document chase scheduling",
      "Disbursal completion dashboard",
    ],
    expectedResults: [
      { label: "KYC Completion", value: "+32%" },
      { label: "TAT to Disbursal", value: "-41%" },
      { label: "Agent Hours Saved", value: "280 hrs/mo" },
    ],
    integrations: ["LOS/LMS", "WhatsApp", "Document Verification API"],
    relatedCaseStudy: "loan-kyc-document-chase",
    relatedKits: ["3am-dispatcher", "eta-truth-machine"],
  },
  {
    slug: "clinic-front-desk",
    name: "Clinic Front Desk",
    tagline: "After-hours booking with empathetic protocols",
    category: "operate",
    vertical: "Healthcare",
    metric: "+44% consults",
    problem: {
      headline: "Patients research at midnight. Clinics close at 6 PM.",
      body: "People read abnormal lab reports at night. Alone. On a phone screen. They call clinics expecting voicemail. They never leave a message. The clinic loses the patient not to a competitor, but to anxiety and silence. Empathy can't have office hours.",
    },
    protocol: {
      steps: [
        { label: "Answer", detail: "24/7 inbound. Agent answers with warmth and a slower, more thoughtful cadence" },
        { label: "Assess", detail: "No diagnosis, no scare tactics. 'I can explain what the report means in general terms'" },
        { label: "Guide", detail: "Send the report link on WhatsApp. List available consult slots. Answer basic questions" },
        { label: "Book", detail: "Appointment confirmed with doctor, time, and location on WhatsApp" },
        { label: "Escalate", detail: "Urgent concerns routed to nurse triage line. Everything logged for the doctor" },
      ],
    },
    included: [
      "24/7 empathetic inbound call handling",
      "Lab report flag integration for follow-up triggers",
      "Appointment booking with slot management",
      "Nurse triage escalation protocol",
      "Patient journey tracking dashboard",
    ],
    expectedResults: [
      { label: "Consult Bookings", value: "+44%" },
      { label: "No-Show Rate", value: "-21%" },
      { label: "Patient Complaints", value: "0" },
    ],
    integrations: ["HMS/EHR", "WhatsApp", "Google Calendar", "Lab Systems"],
    relatedCaseStudy: "hospital-lab-report-followup",
    relatedKits: ["3am-dispatcher", "kyc-finisher"],
  },
];

export function getKitBySlug(slug: string): BusinessKitData | undefined {
  return BUSINESS_KITS.find((kit) => kit.slug === slug);
}

export function getRelatedKits(slugs: string[]): BusinessKitData[] {
  return slugs.map((s) => BUSINESS_KITS.find((k) => k.slug === s)).filter(Boolean) as BusinessKitData[];
}
