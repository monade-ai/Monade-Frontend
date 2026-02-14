export const CASE_STUDIES = [
    {
        slug: "taxi-aggregator-automation",
        rank: 1,
        industry: "Transport & Logistics",
        title: "The 3 AM Dispatcher Problem",
        subtitle: "How a Mumbai taxi fleet automated their entire night shift using a WhatsApp webhook and an Open Claw agent.",
        heroImage: "/images/case-studies/taxi-hero.jpg",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "February 12, 2026",
        stats: [
            { label: "Missed Rides", value: "0%" },
            { label: "Response Time", value: "< 2s" },
            { label: "Dispatcher Salary Saved", value: "₹4.2L/yr" }
        ],
        pullQuote: "The machine doesn't get tired at 3 AM. It just gets faster, colder, and more precise while the rest of the city sleeps.",
        content: `
      <h3>The Silence of the Night Shift</h3>
      <p>It’s 2:14 AM on a Tuesday in Andheri East. The dispatch room of GoFleet Cabs is usually a chaotic symphony of ringing phones and frantic typing. But tonight, there is a strange, meditative silence. The only light comes from the <em>blue glow of the dispatcher's monitor</em>, casting long shadows across empty chairs. The air still carries the faint, lingering scent of cardamom tea from the evening shift.</p>

      <p>The phones are ringing, sure. A passenger lands at Terminal 2, exhausted, luggage in tow, and needs a ride to Pune. But no human picks up. Instead, an Open Claw agent named "Ravi" answers with a voice that is indistinguishable from a seasoned veteran of the Mumbai roads.</p>

      <p>"Namaste, GoFleet. Pune drop? One moment, let me check the nearby drivers."</p>

      <p>In the split second of silence that follows, Ravi isn't thinking—he's executing. He pings the driver WhatsApp group <em>"GoFleet Drivers North"</em> with a payload of GPS coordinates. A driver named Suresh replies with a thumbs-up emoji. Ravi is back on the line before the passenger can even check their watch. "Found one. Suresh is 4 minutes away. White Ertiga, MH-02-CD-5512."</p>

      <h3>The Old Way: Burnout and Missed Calls</h3>
      <p>Before Ravi, GoFleet had two night dispatchers. They were good people, but they were tired. They missed calls during the 4 AM slump. They sometimes sent drivers to "Plot 4" when the passenger said "Plot 40." The operational chaos of sleep-deprived errors wasn't just a headache; it was a <em>leak in the hull</em> of the business.</p>

      <p>The Monade intervention wasn't about building a bot; it was about <strong>capturing the logic of the best dispatcher</strong> and scaling it. We mapped the conversation flow: Receive Call → Extract Intent → Query Driver Group via Webhook → Confirm. The Monade plugin gave Ravi the ability to code-switch into Hindi for the driver group ("Suresh bhai, Pune trip hai?") and back to English for the corporate traveler.</p>

      <h3>The Result: A Business That Never Blinks</h3>
      <p>In the first month, Ravi handled 1,400 night calls. He missed zero. His response time dropped from 3 minutes to 14 seconds. The night dispatchers weren't "replaced"—they were liberated. They now work the day shift, focusing on high-leverage fleet maintenance and driver relations. The dispatch room is silent at 3 AM not because business is dead, but because the machine is humming perfectly.</p>
    `
    },
    {
        slug: "real-estate-qualification",
        rank: 2,
        industry: "Real Estate",
        title: "10,000 Leads, 4 Humans, No Problem",
        subtitle: "Why India’s top luxury developer stopped asking 'Is this a good time to talk?' and started booking site visits at scale.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "February 10, 2026",
        stats: [
            { label: "Site Visits", value: "3x" },
            { label: "Lead Qual Time", value: "45s" },
            { label: "Cost Per Visit", value: "-60%" }
        ],
        pullQuote: "We stopped selling property and started selling time. In the luxury market, time is the only currency that matters.",
        content: `
      <h3>The 'Just Looking' Epidemic</h3>
      <p>Step into the sales office of Vertex Realty in Worli, and you’ll find a space designed for the 1%. Marble floors, the <em>heavy scent of expensive espresso</em>, and the muffled sound of traffic thirty stories below. But behind the scenes, there was a crisis. 10,000 leads a month were pouring in from Facebook and Google, and a small team of junior associates was drowning in them.</p>
      
      <p>The standard procedure was a desperate, scripted call: "Sir, are you interested in a 3BHK?" Most people hung up. They were just browsing. The leads went cold, and the sales team burned out calling disconnected numbers in the middle of their lunch breaks.</p>

      <h3>Ananya: The Agent Without an Ego</h3>
      <p>We deployed "Ananya," an Open Claw agent running on Monade’s conversation engine. Ananya doesn't open with a pitch; she opens with <strong>permission</strong>. "Hi Rahul, I noticed you checked out the Worli project. Honestly, most people are just browsing—are you in research mode, or actively looking?"</p>

      <p>This simple shift—Outcome-Based Filtering—changed everything. If Rahul is browsing, Ananya sends a beautiful walkthrough video to his WhatsApp and vanishes. No pressure. But if Rahul is serious, Ananya pivots. She qualifies his budget, timeline, and family size in under 45 seconds. Then, the hook: "Since you're looking for investment, we have a pre-launch offer ending Tuesday. Would you like to see the model flat this weekend? I can send a car."</p>

      <h3>The Weekend Effect</h3>
      <p>Ananya manages the logistics. The moment a site visit is booked, she triggers a webhook to the transport team. On Sunday morning, she calls to confirm. "Hi Rahul, just checking—still good for 4 PM? Your driver is assigned." Site visits jumped from 50 to 153 in the first month. The human sales team stopped doing the work of robots and started doing the work of <em>closers</em>.</p>
    `
    },
    {
        slug: "ecommerce-order-support",
        rank: 3,
        industry: "E-Commerce",
        title: "Where is My Order? (And Other 2 AM Panics)",
        subtitle: "How a D2C fashion brand reduced support tickets by 70% by letting an agent read their Shopify database.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "January 28, 2026",
        stats: [
            { label: "Support Tickets", value: "-70%" },
            { label: "WISMO Cost", value: "₹0" },
            { label: "CSAT Score", value: "4.8/5" }
        ],
        pullQuote: "By the time the customer says 'Hello,' the machine already knows their frustration. That is the moment anger turns into loyalty.",
        content: `
      <h3>The WISMO Abyss</h3>
      <p>In the world of e-commerce, WISMO—"Where Is My Order?"—is the <em>silent killer of margins</em>. UrbanFlow, a rising D2C fashion brand, was spending ₹25,000 per month per head just to have staff look up tracking numbers and repeat them to anxious customers. It was a waste of human potential and a source of constant friction.</p>

      <h3>The Psychology of Pre-emption</h3>
      <p>We connected their Open Claw agent to their Shopify API via the Monade plugin. Now, when a customer calls, the agent recognizes the phone number instantly. Before the customer can even explain their problem, the agent has queried the database and found the delay.</p>

      <p><strong>Agent:</strong> "Hi Priya! Calling about your order for the Blue Linen Shirt? I see it’s delayed at the Bhiwandi hub due to the rains. The new delivery date is tomorrow by 2 PM."</p>

      <p>This isn't just data retrieval; it's <strong>anxiety management</strong>. By anticipating the intent, the agent defuses frustration instantly. There is no "Press 1 for Support." There is no "What is your order ID?" dance. It's instant context, delivered with a calm, helpful tone that a stressed human agent struggling with a slow CRM could never maintain.</p>

      <h3>Beyond the Tracking Number</h3>
      <p>The agent handles returns too. It checks the policy logic, processes the refund, and emails the shipping label—all while the customer is still on the phone. Support tickets dropped by 70%. The human team now focuses on styling advice and VIP retention—high-touch work that actually grows the brand.</p>
    `
    },
    {
        slug: "restaurant-reservation",
        rank: 4,
        industry: "Hospitality",
        title: "The Zero-Ring Reservation",
        subtitle: "A cloud kitchen network used Open Claw to stop missing Friday night dinner orders.",
        heroImage: "/images/case-studies/restaurant-hero.jpg",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "January 15, 2026",
        stats: [
            { label: "Missed Orders", value: "0%" },
            { label: "Avg Check Size", value: "+18%" },
            { label: "Staff Stress", value: "Low" }
        ],
        pullQuote: "Humans forget to upsell when they're stressed. The machine never forgets that a Biryani is lonely without a Double Ka Meetha.",
        content: `
      <h3>Friday Night Chaos</h3>
      <p>At 8 PM on a Friday, the kitchen of Biryani Blues is a <em>beautiful, fragrant war zone</em>. The air is thick with the scent of fried onions and saffron. The staff is moving in a frantic blur—packing bags, shouting orders, and juggling Zomato tablets. In this chaos, the phone is the enemy. Every ignored ring was a family of four ordering from a competitor. They were losing ₹50,000 every weekend just by not picking up.</p>

      <h3>The Upselling Engine</h3>
      <p>We deployed an Open Claw agent that answers on the first ring. It doesn't sound like a machine; it sounds like a professional host who has all the time in the world. But more importantly, it <strong>never forgets to upsell</strong>.</p>

      <p><strong>Customer:</strong> "I want two Chicken Dum Biryanis."</p>
      <p><strong>Agent:</strong> "Got it. Typically people order the Double Ka Meetha with that—it's fresh today. Want me to add one for ₹150?"</p>

      <p>The upsell conversion rate on phone orders jumped from 4% to 22% almost overnight. Humans forget the script when they’re stressed; the agent thrives on it.</p>

      <h3>Perfect Synchronization</h3>
      <p>The agent is connected directly to the POS system. It punches the order in and prints the Kitchen Order Ticket (KOT) automatically. The staff doesn't even know a call occurred until the ticket appears on the counter. The phone has been silenced, the revenue has spiked, and the cardamom-scented chaos is now perfectly synchronized.</p>
    `
    },
    {
        slug: "healthcare-clinic-booking",
        rank: 5,
        industry: "Healthcare",
        title: "Empathy at 2 AM",
        subtitle: "For IVF clinics, a missed call isn't just lost revenue—it's a lost patient journey. Here’s how empathy can be automated.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "February 2, 2026",
        stats: [
            { label: "After-Hours", value: "100%" },
            { label: "Consultations", value: "+40%" },
            { label: "Privacy Compliance", value: "100%" }
        ],
        pullQuote: "Empathy isn't just a feeling; it's a protocol. When a patient calls at midnight, they don't want a bot—they want to be heard.",
        content: `
      <h3>The Anxiety of the Waiting Room</h3>
      <p>Fertility treatment is a journey paved with anxiety and hope. Patients often do their research late at night, in the quiet of their bedrooms, when the weight of their questions feels heaviest. They call clinics at 11 PM, expecting a cold voicemail. Usually, they get it, and they never leave a message. Bloom IVF realized they were losing 40% of their potential patients because their empathy had a <em>9-to-5 schedule</em>.</p>

      <h3>The Empathetic Protocol</h3>
      <p>We configured an Open Claw agent with a specific "Warmth" setting. The latency was tuned to be slightly slower, more thoughtful. The voice was soft, reassuring. When a patient calls at 11:30 PM to ask about costs, the agent doesn't just bark numbers. It acknowledges the step they are taking.</p>

      <p><strong>Agent:</strong> "I can certainly help with that. It’s a big step, and we want to make it clear. The initial consultation is completely free. For the cycle itself, we have EMI options starting at ₹8,000/month."</p>

      <h3>Framing the Journey</h3>
      <p>Notice the move: <strong>EMI before Total Cost.</strong> By framing the price as a manageable monthly commitment, the agent lowers the psychological hurdle. The clinic is now open 24/7, providing a soft landing for patients at their most vulnerable moments. The doctor starts her morning with five new appointments, each accompanied by detailed, redacted notes on the patient's concerns. The clinic never sleeps, but the empathy never falters.</p>
    `
    },
    {
        slug: "recruitment-outbound",
        rank: 6,
        industry: "Recruitment",
        title: "The Candidate Filter",
        subtitle: "Calling 500 candidates to find 5 qualified engineers is a soul-crushing job. So they gave it to the AI.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "January 20, 2026",
        stats: [
            { label: "Throughput", value: "10x" },
            { label: "Placement Rate", value: "+15%" },
            { label: "Recruiter Joy", value: "High" }
        ],
        pullQuote: "We stopped hiring for 'effort' and started hiring for 'outcomes.' The agent handles the haystack; the humans find the needles.",
        content: `
      <h3>The Java Developer Haystack</h3>
      <p>TechTime Recruiters had a database of 5,000 Java developers and a client needing 10 urgent hires. The bottleneck wasn't the talent; it was the <em>dialing</em>. A good recruiter makes 50 calls a day. To call the entire database would take 100 recruiter-days. They had three.</p>

      <h3>The Open Claw Campaign</h3>
      <p>They uploaded the CSV to Open Claw and set a simple campaign: "Qualify for Senior Java Role." Within two hours, the agent had dialed 2,000 numbers. It sounded professional, persistent, and perfectly informed about the role's requirements.</p>

      <p><strong>Agent:</strong> "Hi Amit, I see you've been at Infosys for three years. We have a Product role paying a 30% hike—are you open to discussing?"</p>
      
      <h3>The Real-Time Pivot</h3>
      <p>The magic happened in the data. After the first 100 calls, the Monade dashboard showed a pattern: Candidates were rejecting the "Product role" pitch but responding to "Remote work." The recruiter tweaked the prompt in real-time: <em>"Lead with the Remote Work option."</em> The conversion rate doubled instantly. By Day 2, they had 50 interested, qualified candidates ready for the senior recruiters. The humans closed 8 of them in record time, focusing only on the high-stakes final interviews.</p>
    `
    },
    {
        slug: "insurance-renewal",
        rank: 7,
        industry: "Insurance / BFSI",
        title: "The Renewal Reminder That Works",
        subtitle: "Insurance lapses happen because people forget. A polite, persistent AI ensures they don't lose coverage.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "February 5, 2026",
        stats: [
            { label: "Retention Rate", value: "+40%" },
            { label: "Manual Calls", value: "0" },
            { label: "Revenue Saved", value: "₹2Cr" }
        ],
        pullQuote: "In the world of insurance, silence is the sound of lost revenue. Our agent ensures the conversation never stops.",
        content: `
      <h3>The Lapsed Policy Problem</h3>
      <p>In India, 30% of car insurance policies lapse simply because the owner forgot the date. An email goes to spam; an SMS is ignored. Calling works, but calling 10,000 people a month is an expensive, logistical nightmare. SecureLife Insurance was losing crores in premiums to <em>pure forgetfulness</em>.</p>

      <h3>The Nudge Sequence</h3>
      <p>We set up an automated Open Claw workflow. Seven days before a policy expires, the agent calls. It doesn't bark "Renew now." It uses <strong>Loss Aversion</strong>.</p>

      <p><strong>Agent:</strong> "Hi Rajesh, your Honda City insurance expires next Tuesday. I don't want you to lose your No Claim Bonus—it's worth ₹4,000. Can I WhatsApp you the payment link right now?"</p>

      <p>By framing the renewal around the loss of the bonus, the agent creates immediate financial urgency. The moment Rajesh says "Yes," the payment link is fired to his phone. If he’s busy, the agent doesn't give up; it schedules a callback. "No problem, Rajesh. Should I call you Saturday morning at 10?" It’s polite, persistent, and profitable.</p>
    `
    },
    {
        slug: "education-counseling",
        rank: 8,
        industry: "EdTech",
        title: "The Parent Whisperer",
        subtitle: "EdTech sales isn't about convincing the student. It's about convincing the parent. Here’s how AI bridges the gap.",
        author: {
            name: "Monade Editorial",
            role: "Field Report",
            image: "/images/authors/monade-team.jpg"
        },
        publishedAt: "January 12, 2026",
        stats: [
            { label: "Enrollment Speed", value: "2x" },
            { label: "Parent Trust", value: "High" },
            { label: "Cost of Sale", value: "-40%" }
        ],
        pullQuote: "The sale happens in the living room, not on the phone. We give the student the tools to win that debate.",
        content: `
      <h3>The Gatekeeper</h3>
      <p>In Indian education, the student fills the form, but the parent signs the check. Most sales teams make the mistake of focusing only on the student. They get them excited, only to hit a brick wall when the parent says "No" to the price tag. BrightFuture Academy was seeing a massive drop-off at the <em>family dinner table</em>.</p>

      <h3>The Dual-Channel Strategy</h3>
      <p>We deployed a strategy called <strong>Inoculation</strong>. The Open Claw agent qualifies the student first, then pivots to the parent. It doesn't just sell the course; it arms the student with arguments.</p>

      <p><strong>Agent:</strong> "Great, you're interested in Data Science. I'll send you a syllabus. But I also have a 'Parent Guide' that explains the salary potential and job security. Want me to WhatsApp that to your dad?"</p>

      <p>By sending a professional, data-driven report directly to the parent, the agent "inoculates" them against the price shock. When the human counselor finally calls, the ground is already prepared. The dad has read the ROI report. The conversation shifts from "Why should I pay?" to "When does the batch start?" The living room debate has already been won.</p>
    `
    }
];
