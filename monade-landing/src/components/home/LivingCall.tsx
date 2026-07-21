"use client";

import {
  type CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

type Speaker = "agent" | "customer";

type TranscriptLine = {
  speaker: Speaker;
  startSec: number;
  text: string;
};

type VoiceSample = {
  id: string;
  context: string;
  title: string;
  language: string;
  agent: string;
  customer: string;
  src: string;
  transcript: TranscriptLine[];
};

const samples: VoiceSample[] = [
  {
    id: "real-estate",
    context: "Real estate",
    title: "A site visit, qualified and booked",
    language: "Hinglish",
    agent: "Ria",
    customer: "Narayan",
    src: "/audio/gramophone/realestate.mp3",
    transcript: [
      { speaker: "agent", startSec: 0, text: "Hello sir?" },
      { speaker: "customer", startSec: 4, text: "Hello, kaun?" },
      { speaker: "agent", startSec: 6, text: "Namaste Narayan ji, kaise hain aap?" },
      { speaker: "customer", startSec: 11, text: "Haan madam, main badhiya. Aap kaun bol rahe ho?" },
      { speaker: "agent", startSec: 15, text: "Bahut achhe. Main Ria bol rahi thi. Aapko ek property opportunity ke baare mein call kiya tha. Ek minute hai aapke paas?" },
      { speaker: "customer", startSec: 27, text: "Theek hai bolo." },
      { speaker: "agent", startSec: 30, text: "Hum ek naya project leke aaye hain, Manikya, Mahim West mein. Station se sirf 5-6 minute door, 2 BHK apartments hain." },
      { speaker: "customer", startSec: 51, text: "Aur kya-kya benefits hain isme?" },
      { speaker: "agent", startSec: 79, text: "Construction Mivan technology se ho raha hai, possession next year expected hai. Ek baar site visit karna chahenge?" },
      { speaker: "customer", startSec: 91, text: "Site visit Sunday kar sakte hain. Building kitne floor ka hai?" },
      { speaker: "agent", startSec: 109, text: "Yeh G+22 storey tower hai. Sunday morning ya evening?" },
      { speaker: "customer", startSec: 115, text: "Afternoon mein 2-3 baje ke around ho sakta hai?" },
      { speaker: "agent", startSec: 120, text: "Ji bilkul. Sunday 2-3 baje confirm kar dungi. WhatsApp pe details bhej deti hoon." },
      { speaker: "customer", startSec: 127, text: "Payment plan ka 50 lakh wala aur total cost kya hai?" },
      { speaker: "agent", startSec: 140, text: "Total costing approx 2.5 to 2.6 crores hai, depending on size." },
      { speaker: "customer", startSec: 148, text: "Pricing negotiable hai kya?" },
      { speaker: "agent", startSec: 159, text: "Site visit par definitely baat ho sakti hai. Sunday final karein?" },
      { speaker: "customer", startSec: 164, text: "Haan chalega, Sunday dopahar final karte hain." },
      { speaker: "agent", startSec: 174, text: "Perfect. Sunday 2-3 baje confirm karti hoon. Thank you Narayan ji." },
    ],
  },
  {
    id: "hiring",
    context: "Hiring",
    title: "A candidate briefed and scheduled",
    language: "Hindi + English",
    agent: "Neha",
    customer: "Raj",
    src: "/audio/gramophone/ecommerce.mp3",
    transcript: [
      { speaker: "agent", startSec: 0, text: "Hi Raj, main Neha Monade ki taraf se call kar rahi hoon. Kaise ho?" },
      { speaker: "customer", startSec: 6, text: "Kidhar se bol rahe ho?" },
      { speaker: "agent", startSec: 10, text: "Monade customer service ke liye hire kar raha hai. Aapke paas 30 seconds hain?" },
      { speaker: "customer", startSec: 17, text: "Haan theek hai boliye." },
      { speaker: "agent", startSec: 21, text: "Yeh customer service voice process hai. Day shift 10 se 7, Sunday off, salary 16,000 in-hand, location Navi Mumbai." },
      { speaker: "customer", startSec: 37, text: "Role ke baare mein thoda aur batao?" },
      { speaker: "agent", startSec: 41, text: "Customer queries aur complaints call par resolve karna hota hai. Training hum denge. Interview ke liye try karna chahenge?" },
      { speaker: "customer", startSec: 70, text: "Location kidhar hai interview ka?" },
      { speaker: "agent", startSec: 76, text: "Interview ke liye Navi Mumbai aana padega. Kab jaana chahenge?" },
      { speaker: "customer", startSec: 87, text: "Slot kab-kab available hai?" },
      { speaker: "agent", startSec: 94, text: "Slots regularly available rehte hain. Aap kaun se din prefer karenge?" },
      { speaker: "customer", startSec: 100, text: "Parson shaam ke time available hoon. Ho payega?" },
      { speaker: "agent", startSec: 113, text: "Parson shaam ko 3-4 ke aas-paas?" },
      { speaker: "customer", startSec: 119, text: "5 baje madam." },
      { speaker: "agent", startSec: 123, text: "Theek hai, main 5 baje ka slot dekhne ki koshish karti hoon." },
      { speaker: "customer", startSec: 132, text: "Haan chalega, 5 baje chalega." },
      { speaker: "agent", startSec: 136, text: "Main interview ki details WhatsApp par bhej deti hoon. Kuch aur poochna hai?" },
      { speaker: "customer", startSec: 145, text: "Salary negotiable hai kya ya fixed 16,000?" },
      { speaker: "agent", startSec: 151, text: "Freshers ke liye 16,000 in-hand rehti hai. Growth ke chances achhe hain." },
      { speaker: "customer", startSec: 164, text: "Okay, theek hai." },
      { speaker: "agent", startSec: 169, text: "Theek hai Raj. Main aapko confirmation bhejti hoon. All the best." },
      { speaker: "customer", startSec: 177, text: "Yeah, thanks a lot ma'am." },
    ],
  },
  {
    id: "hospitality",
    context: "Hospitality",
    title: "A reservation handled end to end",
    language: "English",
    agent: "Maya",
    customer: "Guest",
    src: "/audio/gramophone/restaurant.mp3",
    transcript: [
      { speaker: "agent", startSec: 0, text: "Good morning, thank you for calling Stayflo Hotel. This is Maya. How can I help you today?" },
      { speaker: "customer", startSec: 8, text: "Hey Maya, I wanted to book a room. Can you help me with that?" },
      { speaker: "agent", startSec: 14, text: "Of course. When are you looking to check in and how many nights?" },
      { speaker: "customer", startSec: 20, text: "Check-in on 15th March and leaving on 18th. So three nights." },
      { speaker: "agent", startSec: 33, text: "Checking in on 15th and leaving on 18th. That's three nights, right?" },
      { speaker: "customer", startSec: 43, text: "Yeah, correct." },
      { speaker: "agent", startSec: 46, text: "And how many guests will be staying?" },
      { speaker: "customer", startSec: 52, text: "Me and my wife. Can children be accommodated in the same room?" },
      { speaker: "agent", startSec: 69, text: "We have Standard at ₹4,500 and Luxury at ₹8,500. Both can take a rollaway bed for a child." },
      { speaker: "customer", startSec: 101, text: "Standard works. Can you confirm the standard rate once?" },
      { speaker: "agent", startSec: 115, text: "Standard is ₹4,500 plus taxes, roughly ₹5,040. We can arrange a rollaway bed." },
      { speaker: "customer", startSec: 134, text: "Okay, around 5,000 with taxes. Cool." },
      { speaker: "agent", startSec: 146, text: "Perfect. Standard room for three nights, with rollaway bed noted. Anything else?" },
      { speaker: "customer", startSec: 160, text: "Do you also do airport pick-up and drop?" },
      { speaker: "agent", startSec: 168, text: "Yes, we can arrange airport transfer. Would you like me to book that?" },
      { speaker: "customer", startSec: 176, text: "Sure. How much does that cost?" },
      { speaker: "agent", startSec: 180, text: "Taxi transfer is around ₹1,500 to ₹1,800 depending on time." },
      { speaker: "customer", startSec: 190, text: "Probably, yeah. Please do that." },
      { speaker: "agent", startSec: 205, text: "Confirming standard room for three nights, rollaway bed, and airport transfer. Is that right?" },
      { speaker: "customer", startSec: 215, text: "Yeah. What is the final total for three nights plus transfer?" },
      { speaker: "agent", startSec: 238, text: "Room total is about ₹15,120. With transfer, approximately ₹16,620." },
      { speaker: "customer", startSec: 243, text: "Okay, that works." },
      { speaker: "agent", startSec: 254, text: "Perfect, you're all set. I'll send confirmation by email and SMS shortly." },
      { speaker: "customer", startSec: 259, text: "Thanks a lot." },
    ],
  },
];

const agentColors = ["#F2EFE8", "#D94126", "#E1A087", "#B7B0F0", "#171816"];
const customerColors = ["#E9EEF0", "#617D8B", "#A5C4CB", "#7B71C8", "#171816"];

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(Math.max(0, value) / 60);
  const seconds = Math.floor(Math.max(0, value) % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function findActiveLine(lines: TranscriptLine[], transcriptTime: number) {
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    if (transcriptTime >= lines[index].startSec) return index;
  }
  return 0;
}

function averageRange(values: Uint8Array, from: number, to: number) {
  let total = 0;
  const end = Math.min(to, values.length);
  for (let index = from; index < end; index += 1) total += values[index];
  return end > from ? total / (end - from) / 255 : 0;
}

export default function LivingCall() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceConnectedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastSignalUpdateRef = useRef(0);
  const transcriptScrollRef = useRef<HTMLDivElement>(null);
  const transcriptRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioState, setAudioState] = useState<"loading" | "ready" | "error">("loading");
  const [reactiveAvailable, setReactiveAvailable] = useState(true);
  const [signal, setSignal] = useState({ energy: 0, bass: 0, air: 0 });

  const sample = samples[activeSampleIndex];
  const transcriptSpan = sample.transcript.at(-1)?.startSec
    ? (sample.transcript.at(-1)?.startSec ?? 0) + 8
    : duration;
  const transcriptTime = duration > 0 ? (currentTime / duration) * transcriptSpan : 0;
  const activeLineIndex = findActiveLine(sample.transcript, transcriptTime);
  const activeLine = sample.transcript[activeLineIndex];
  const isCustomerTurn = activeLine?.speaker === "customer";
  const speakerName = isCustomerTurn ? sample.customer : sample.agent;
  const shaderColors = isCustomerTurn ? customerColors : agentColors;

  const visualStyle = useMemo(
    () =>
      ({
        "--call-energy": signal.energy.toFixed(3),
        "--call-bass": signal.bass.toFixed(3),
        "--call-air": signal.air.toFixed(3),
        "--call-scale": (1 + signal.energy * 0.055).toFixed(3),
        "--call-rotation": `${-2.5 + signal.bass * 5}deg`,
        "--call-glow": (0.2 + signal.air * 0.34).toFixed(3),
        "--timeline-progress": `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
      }) as CSSProperties,
    [currentTime, duration, signal],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.load();
  }, [sample.src]);

  useEffect(() => {
    if (reduceMotion || !isPlaying || !isInView || !analyserRef.current) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const analyser = analyserRef.current;
    const waveform = new Uint8Array(analyser.fftSize);
    const frequencies = new Uint8Array(analyser.frequencyBinCount);

    const readSignal = (timestamp: number) => {
      analyser.getByteTimeDomainData(waveform);
      analyser.getByteFrequencyData(frequencies);

      if (timestamp - lastSignalUpdateRef.current > 48) {
        let squareTotal = 0;
        for (const value of waveform) {
          const normalized = (value - 128) / 128;
          squareTotal += normalized * normalized;
        }
        const rms = Math.sqrt(squareTotal / waveform.length);
        setSignal({
          energy: Math.min(1, Math.max(0, (rms - 0.012) * 8.5)),
          bass: Math.min(1, averageRange(frequencies, 1, 38) * 1.7),
          air: Math.min(1, averageRange(frequencies, 110, 280) * 2.2),
        });
        lastSignalUpdateRef.current = timestamp;
      }
      animationFrameRef.current = requestAnimationFrame(readSignal);
    };

    animationFrameRef.current = requestAnimationFrame(readSignal);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isInView, isPlaying, reduceMotion]);

  useEffect(() => {
    const line = transcriptRefs.current[activeLineIndex];
    const scroller = transcriptScrollRef.current;
    if (!line || !scroller || (!isPlaying && currentTime < 0.1)) return;

    const lineTop =
      line.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop;
    const lineBottom = lineTop + line.offsetHeight;
    const visibleTop = scroller.scrollTop;
    const visibleBottom = visibleTop + scroller.clientHeight;

    if (lineTop < visibleTop || lineBottom > visibleBottom) {
      scroller.scrollTo({
        top: Math.max(0, lineTop - scroller.clientHeight * 0.35),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  }, [activeLineIndex, currentTime, isPlaying, reduceMotion]);

  useEffect(
    () => () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      audioContextRef.current?.close().catch(() => undefined);
    },
    [],
  );

  const ensureAudioGraph = async () => {
    const audio = audioRef.current;
    if (!audio || sourceConnectedRef.current) {
      if (audioContextRef.current?.state === "suspended") {
        await audioContextRef.current.resume();
      }
      return;
    }

    try {
      const context = new AudioContext();
      const source = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.72;
      source.connect(analyser);
      analyser.connect(context.destination);
      audioContextRef.current = context;
      analyserRef.current = analyser;
      sourceConnectedRef.current = true;
      if (context.state === "suspended") await context.resume();
    } catch {
      setReactiveAvailable(false);
    }
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    setAudioState("loading");
    try {
      await ensureAudioGraph();
      if (duration > 0 && audio.currentTime >= duration - 0.15) audio.currentTime = 0;
      await audio.play();
      setAudioState("ready");
    } catch {
      setAudioState("error");
      setIsPlaying(false);
    }
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(time)) return;
    const nextTime = Math.min(duration || 0, Math.max(0, time));
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const seekToLine = (line: TranscriptLine) => {
    if (duration <= 0 || transcriptSpan <= 0) return;
    seekTo((line.startSec / transcriptSpan) * duration);
  };

  const selectSample = (index: number) => {
    if (index === activeSampleIndex) return;
    audioRef.current?.pause();
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setAudioState("loading");
    setSignal({ energy: 0, bass: 0, air: 0 });
    transcriptRefs.current = [];
    setActiveSampleIndex(index);
  };

  return (
    <div
      ref={rootRef}
      className={`living-call ${isCustomerTurn ? "is-customer" : "is-agent"} ${isPlaying ? "is-playing" : ""}`}
      style={visualStyle}
    >
      <div className="living-call__samples" aria-label="Choose a sample call">
        {samples.map((voice, index) => (
          <button
            type="button"
            key={voice.id}
            className={activeSampleIndex === index ? "is-active" : ""}
            aria-pressed={activeSampleIndex === index}
            onClick={() => selectSample(index)}
          >
            <span>{voice.context}</span>
            <small>{voice.language}</small>
          </button>
        ))}
      </div>

      <div className="living-call__body">
        <div className="living-call__stage">
          <div className="living-call__form" aria-hidden="true">
            <MeshGradient
              width="100%"
              height="100%"
              colors={shaderColors}
              distortion={0.45 + signal.energy * 0.5}
              swirl={0.2 + signal.bass * 0.62}
              grainMixer={0.16 + signal.air * 0.12}
              grainOverlay={0.08}
              speed={reduceMotion || !isPlaying ? 0 : 0.05 + signal.energy * 0.28}
              scale={1.05 + signal.bass * 0.1}
              rotation={18 + signal.air * 42}
            />
          </div>

          <div className="living-call__stage-head">
            <span>{sample.context}</span>
            <span className="living-call__signal">
              <i aria-hidden="true" />
              {isPlaying
                ? reactiveAvailable && !reduceMotion
                  ? "Reading live audio"
                  : "Playing"
                : audioState === "error"
                  ? "Audio unavailable"
                  : "Ready"}
            </span>
          </div>

          <div className="living-call__current-line">
            <span>{speakerName}</span>
            <p>{activeLine?.text}</p>
          </div>

          <div className="living-call__stage-foot">
            <button
              type="button"
              className="living-call__play"
              onClick={togglePlayback}
              aria-label={`${isPlaying ? "Pause" : "Play"} ${sample.context} sample call`}
            >
              {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              <span>{isPlaying ? "Pause call" : "Play call"}</span>
            </button>
            <p>{sample.title}</p>
          </div>
        </div>

        <aside className="living-call__transcript" aria-label={`${sample.context} call transcript`}>
          <header>
            <span>Transcript</span>
            <span>{sample.language}</span>
          </header>
          <div ref={transcriptScrollRef} className="living-call__transcript-scroll">
            {sample.transcript.map((line, index) => (
              <button
                type="button"
                key={`${sample.id}-${line.startSec}`}
                ref={(element) => {
                  transcriptRefs.current[index] = element;
                }}
                className={`${activeLineIndex === index ? "is-active" : ""} is-${line.speaker}`}
                aria-current={activeLineIndex === index ? "true" : undefined}
                onClick={() => seekToLine(line)}
              >
                <span>
                  {line.speaker === "agent" ? sample.agent : sample.customer}
                  <time>{formatTime((line.startSec / transcriptSpan) * duration)}</time>
                </span>
                <p>{line.text}</p>
              </button>
            ))}
          </div>
        </aside>
      </div>

      <div className="living-call__timeline">
        <div className="living-call__timeline-meta">
          <span>{formatTime(currentTime)}</span>
          <span>Drag to move through the call</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="living-call__timeline-track">
          <div className="living-call__cue-map" aria-hidden="true">
            {sample.transcript.map((line) => (
              <i
                key={`${sample.id}-cue-${line.startSec}`}
                className={line.speaker}
                style={{ left: `${(line.startSec / transcriptSpan) * 100}%` }}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={0.1}
            value={Math.min(currentTime, duration || 1)}
            onChange={(event) => seekTo(Number(event.target.value))}
            aria-label={`Scrub ${sample.context} sample call`}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={sample.src}
        preload="metadata"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          setAudioState("ready");
        }}
        onDurationChange={(event) => {
          if (Number.isFinite(event.currentTarget.duration)) {
            setDuration(event.currentTarget.duration);
          }
        }}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false);
          setSignal({ energy: 0, bass: 0, air: 0 });
        }}
        onEnded={() => {
          setIsPlaying(false);
          setSignal({ energy: 0, bass: 0, air: 0 });
        }}
        onError={() => {
          setAudioState("error");
          setIsPlaying(false);
          setSignal({ energy: 0, bass: 0, air: 0 });
        }}
      />
    </div>
  );
}
