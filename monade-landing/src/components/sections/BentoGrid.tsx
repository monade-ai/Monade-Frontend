import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LatencyDial from "@/components/ui/LatencyDial";

const Module = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-[32px] p-10 md:p-12 flex flex-col justify-between transition-all duration-700 relative overflow-hidden border border-black/[0.03]",
      className,
    )}
  >
    {children}
  </div>
);

const Question = ({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) => (
  <div
    className={cn(
      "machine-label mb-6",
      tone === "dark" ? "text-ink/35" : "text-white/45",
    )}
  >
    Q·{index} — {children}
  </div>
);

const QA_LOG = [
  { clock: "04:12", subject: "Delivery reschedule", status: "Clean", flagged: false },
  { clock: "02:47", subject: "Lead qualification", status: "1 flag · interruption", flagged: true },
  { clock: "05:29", subject: "Payment reminder", status: "Clean", flagged: false },
];

const LINE_BOARD = [
  { label: "Trunk 01 — Mumbai", state: "Live" },
  { label: "Trunk 02 — Delhi NCR", state: "Live" },
  { label: "Trunk 03 — Bengaluru", state: "Live" },
  { label: "Trunk 04 — Chennai", state: "Live" },
  { label: "Trunk 05 — Kolkata", state: "Live" },
  { label: "Human desk", state: "Standby" },
];

export const BentoGrid = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 pb-48 font-sans antialiased selection:bg-black/10">
      <div className="max-w-3xl pt-24 pb-14">
        <div className="machine-label text-ink/40 mb-5">02 — The spec sheet</div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] mb-6">
          What buyers ask.{" "}
          <span className="serif-accent text-clay">What the meters read.</span>
        </h2>
        <p className="text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl">
          Every voice-AI evaluation comes down to six questions. We answer with
          instrumentation, not adjectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <Module className="card-etched min-h-[500px]">
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10 h-full">
              <div>
                <Question index="01">How fast will it feel?</Question>
                <h3 className="font-display text-5xl md:text-6xl text-ink leading-[0.95] mb-8">
                  First word in{" "}
                  <span className="serif-accent text-clay">0.4 seconds.</span>
                </h3>
                <p className="text-ink/60 text-lg leading-relaxed max-w-md">
                  Conversation dies past the half-second. Monade streams
                  predictive fillers while the model thinks, so the line never
                  goes quiet.
                </p>
              </div>
              <LatencyDial />
            </div>
          </Module>
        </div>

        <div className="md:col-span-4">
          <Module className="bg-[#D97757] text-white shadow-2xl h-full">
            <div className="space-y-10 relative z-10">
              <div>
                <Question index="02" tone="light">
                  What does it cost?
                </Question>
                <h3 className="font-display text-4xl leading-[1.02]">
                  ₹8 a minute. <br />
                  <span className="serif-accent text-white/75">Nothing else.</span>
                </h3>
              </div>
              <p className="text-white/75 text-lg leading-snug">
                No platform fee. No seat licenses. No setup. The meter runs
                only while the agent talks.
              </p>
            </div>
            <div className="pt-12 border-t border-white/10 flex justify-between items-baseline">
              <div className="space-y-1">
                <span className="machine-label text-white/50">Active rate</span>
                <div className="text-5xl font-mono font-bold tracking-tighter">₹8.00</div>
              </div>
              <div className="text-right space-y-1">
                <span className="machine-label text-white/50">Setup</span>
                <div className="text-5xl font-mono font-bold tracking-tighter text-white/40">₹0</div>
              </div>
            </div>
          </Module>
        </div>

        <div className="md:col-span-6">
          <Module className="bg-[#708894] text-white h-full">
            <div className="relative z-10 space-y-10">
              <div>
                <Question index="03" tone="light">
                  Can I trust what it says?
                </Question>
                <h3 className="font-display text-4xl leading-[1.02]">
                  Every call, <br />
                  <span className="serif-accent text-white/75">on the record.</span>
                </h3>
              </div>
              <p className="text-white/75 text-lg leading-snug">
                Full recordings and transcripts, with hallucinations,
                interruptions, and dead air flagged for review — every week,
                with your team.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-[11px]">
                {QA_LOG.map((row) => (
                  <div key={row.clock} className="flex items-center gap-4">
                    <span className="text-white/50">{row.clock}</span>
                    <span className="text-white/80 flex-1 truncate">{row.subject}</span>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full border uppercase tracking-[0.14em] text-[9px]",
                        row.flagged
                          ? "border-[#C2A370] text-[#EBD9BC]"
                          : "border-white/25 text-white/60",
                      )}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Module>
        </div>

        <div className="md:col-span-6">
          <Module className="bg-[#869781] text-white h-full">
            <div className="relative z-10 space-y-10">
              <div>
                <Question index="04" tone="light">
                  Will it speak my customer&apos;s language?
                </Question>
                <h3 className="font-display text-4xl leading-[1.02]">
                  Hinglish, <br />
                  <span className="serif-accent text-white/75">mid-sentence.</span>
                </h3>
              </div>
              <p className="text-white/75 text-lg leading-snug">
                Agents code-switch between Hindi, English, and regional
                dialects the way your customers actually talk — honorifics
                included.
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="machine-label text-white/45 mb-3">
                  Live transcript · Real estate
                </div>
                <p className="font-serif italic text-xl text-white/90 leading-relaxed">
                  “Haan ji, main abhi check karti hoon… your site visit is
                  confirmed for Sunday, 2 PM.”
                </p>
              </div>
            </div>
          </Module>
        </div>

        <div className="md:col-span-12 lg:col-span-8">
          <Module className="bg-[#020617] text-white border-white/5 min-h-[450px]">
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 h-full">
              <div className="space-y-8">
                <div>
                  <Question index="05" tone="light">
                    Will it survive Diwali?
                  </Question>
                  <h3 className="font-display text-5xl leading-[1.02]">
                    10,000 lines, <br />
                    <span className="serif-accent text-white/75">lit at once.</span>
                  </h3>
                </div>
                <p className="text-white/60 text-xl leading-relaxed">
                  Concurrency that absorbs festival-season spikes at 99.9%
                  uptime — and when a call needs a person, it hands off warm,
                  with full context.
                </p>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 font-mono text-[11px] space-y-4 shadow-inner">
                <div className="flex justify-between items-center text-white/30 uppercase tracking-[0.2em] text-[9px] pb-2 border-b border-white/10">
                  <span>Exchange board</span>
                  <span>SIP · PSTN</span>
                </div>
                {LINE_BOARD.map((line, i) => (
                  <div key={line.label} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        line.state === "Live"
                          ? "bg-emerald-400 animate-pulse"
                          : "bg-[#C2A370]",
                      )}
                      style={{ animationDelay: `${i * 350}ms` }}
                    />
                    <span className="text-white/70 flex-1 uppercase tracking-wider">
                      {line.label}
                    </span>
                    <span
                      className={cn(
                        "uppercase tracking-[0.14em] text-[9px]",
                        line.state === "Live" ? "text-emerald-300/80" : "text-[#EBD9BC]",
                      )}
                    >
                      {line.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Module>
        </div>

        <div className="md:col-span-12 lg:col-span-4">
          <Module className="card-etched h-full">
            <div className="space-y-12 h-full flex flex-col justify-between">
              <div>
                <Question index="06">Does it get better?</Question>
                <h3 className="font-display text-4xl text-ink leading-[1.02]">
                  Better every <br />
                  <span className="serif-accent text-clay">Friday.</span>
                </h3>
                <p className="text-ink/60 text-lg leading-relaxed mt-6">
                  Week 1 script ≠ week 12. Prompts, voices, and playbooks
                  re-tuned on your real conversion data — shipped weekly.
                </p>
              </div>
              <div className="pt-12 hairline-t flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="machine-label text-ink/40">Next pressing: Friday</span>
                </div>
                <ArrowRight className="w-5 h-5 text-ink/25" />
              </div>
            </div>
          </Module>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
