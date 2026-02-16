import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FooterCTA />
    </>
  );
}
