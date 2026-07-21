import type { Metadata } from "next";
import HomeNav from "@/components/home/HomeNav";
import HomeExperience from "@/components/home/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";
import "./home.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Voice That Earns the Next Sentence",
  description:
    "Monade runs phone agents that listen, adapt, and move real work forward across India.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeNav />
      <HomeExperience />
    </>
  );
}
