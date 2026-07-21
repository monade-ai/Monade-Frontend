"use client";

import { type CSSProperties, useState } from "react";
import Link from "next/link";

const MIN_VOLUME = 1_000;
const MAX_VOLUME = 100_000;
const VOLUME_BREAKPOINT = 10_000;
const STANDARD_RATE = 8;
const VOLUME_RATE = 6;
const SLIDER_STEPS = 1_000;

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function formatCurrency(value: number) {
  return `₹${formatNumber(value)}`;
}

function clampVolume(value: number) {
  return Math.round(Math.min(MAX_VOLUME, Math.max(MIN_VOLUME, value)));
}

function sliderToVolume(position: number) {
  const ratio = position / SLIDER_STEPS;
  const raw = MIN_VOLUME * (MAX_VOLUME / MIN_VOLUME) ** ratio;
  return clampVolume(Math.round(raw / 100) * 100);
}

function volumeToSlider(volume: number) {
  const ratio = Math.log(volume / MIN_VOLUME) / Math.log(MAX_VOLUME / MIN_VOLUME);
  return Math.round(ratio * SLIDER_STEPS);
}

export default function PricingCalculator() {
  const [volume, setVolume] = useState(VOLUME_BREAKPOINT);
  const [draftVolume, setDraftVolume] = useState(String(VOLUME_BREAKPOINT));

  const activeRate = volume >= VOLUME_BREAKPOINT ? VOLUME_RATE : STANDARD_RATE;
  const monthlyEstimate = volume * activeRate;
  const annualEstimate = monthlyEstimate * 12;
  const monthlySavings =
    activeRate === VOLUME_RATE ? volume * (STANDARD_RATE - VOLUME_RATE) : 0;
  const distanceToVolumeRate = Math.max(VOLUME_BREAKPOINT - volume, 0);
  const sliderPosition = volumeToSlider(volume);

  const setCommittedVolume = (nextVolume: number) => {
    const next = clampVolume(nextVolume);
    setVolume(next);
    setDraftVolume(String(next));
  };

  const commitDraftVolume = () => {
    const parsed = Number(draftVolume);
    setCommittedVolume(Number.isFinite(parsed) ? parsed : volume);
  };

  return (
    <div className="price-calc">
      <div className="price-calc__controls">
        <div className="price-calc__input-row">
          <label htmlFor="monthly-minutes">
            Monthly voice minutes
            <span>1,000 to 100,000</span>
          </label>
          <div className="price-calc__number">
            <input
              id="monthly-minutes"
              type="number"
              min={MIN_VOLUME}
              max={MAX_VOLUME}
              step={100}
              inputMode="numeric"
              value={draftVolume}
              onChange={(event) => setDraftVolume(event.target.value)}
              onBlur={commitDraftVolume}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.currentTarget.blur();
              }}
            />
            <span>min</span>
          </div>
        </div>

        <div className="price-calc__range-wrap">
          <input
            className="price-calc__range"
            type="range"
            min={0}
            max={SLIDER_STEPS}
            step={1}
            value={sliderPosition}
            aria-label="Monthly voice minutes"
            aria-valuemin={MIN_VOLUME}
            aria-valuemax={MAX_VOLUME}
            aria-valuenow={volume}
            aria-valuetext={`${formatNumber(volume)} monthly voice minutes`}
            style={{ "--range-progress": `${sliderPosition / 10}%` } as CSSProperties}
            onChange={(event) => setCommittedVolume(sliderToVolume(Number(event.target.value)))}
          />
          <div className="price-calc__range-labels" aria-hidden="true">
            <span>1k</span>
            <span>10k</span>
            <span>100k</span>
          </div>
        </div>

        <div className={`price-calc__threshold ${activeRate === VOLUME_RATE ? "is-active" : ""}`}>
          <span className="price-calc__threshold-dot" aria-hidden="true" />
          <p>
            {activeRate === VOLUME_RATE
              ? "Volume rate active. ₹6 applies to every minute this month."
              : `${formatNumber(distanceToVolumeRate)} more ${distanceToVolumeRate === 1 ? "minute" : "minutes"} unlocks ₹6 across the full month.`}
          </p>
        </div>
      </div>

      <aside className="price-calc__result" aria-label="Estimated price">
        <div className="price-calc__result-content">
          <div className="price-calc__result-topline">
            <span>Estimated monthly spend</span>
            <strong>{formatCurrency(activeRate)} / min</strong>
          </div>
          <output className="price-calc__total" htmlFor="monthly-minutes">
            {formatCurrency(monthlyEstimate)}
          </output>
          <p className="price-calc__equation">
            {formatNumber(volume)} minutes × {formatCurrency(activeRate)}
          </p>

          <dl className="price-calc__summary">
            <div>
              <dt>Annual run rate</dt>
              <dd>{formatCurrency(annualEstimate)}</dd>
            </div>
            <div>
              <dt>{monthlySavings > 0 ? "Saved at volume rate" : "Platform and seat fees"}</dt>
              <dd>{monthlySavings > 0 ? `${formatCurrency(monthlySavings)} / mo` : "₹0"}</dd>
            </div>
          </dl>

          <Link
            href="https://calendly.com/adhiraj-n1labs/30min"
            className="price-calc__cta"
            target="_blank"
            rel="noreferrer"
          >
            Price this rollout <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </aside>
    </div>
  );
}
