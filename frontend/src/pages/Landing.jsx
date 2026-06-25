import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BeforeAfter from "@/components/sections/BeforeAfter";
import HowItWorks from "@/components/sections/HowItWorks";
import TargetAudience from "@/components/sections/TargetAudience";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import FuturisticBg from "@/components/FuturisticBg";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="relative text-white">
      <FuturisticBg />
      <div className="relative z-10">
        <Header />
        <Hero />
        <SocialProof />
        <BeforeAfter />
        <HowItWorks />
        <TargetAudience />
        <Services />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
