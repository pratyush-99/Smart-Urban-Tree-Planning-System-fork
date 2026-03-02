import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import MethodologySection from "@/components/MethodologySection";
import TechStackSection from "@/components/TechStackSection";
import MetricsSection from "@/components/MetricsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkflowSection />
      <MethodologySection />
      <TechStackSection />
      <MetricsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
