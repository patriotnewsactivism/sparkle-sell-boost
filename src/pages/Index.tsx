import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BotDemo } from "@/components/BotDemo";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BotDemo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
