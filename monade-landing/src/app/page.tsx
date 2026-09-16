import Hero from "@/components/Hero";
import CompareSlider from "@/components/CompareSlider";
import StatBand from "@/components/StatBand";
import RoiTrack from "@/components/RoiTrack";
import FeaturePanel from "@/components/FeaturePanel";
import CoworkersSection from "@/components/CoworkersSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CompareSlider />
      <StatBand />
      <RoiTrack />
      <FeaturePanel />
      <CoworkersSection />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
