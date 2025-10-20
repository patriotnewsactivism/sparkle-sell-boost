import { Zap, Shield, Globe, TrendingUp, Users, Gift, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Rocket,
    title: "Start FREE Forever",
    description: "Get started with 50 free conversations per month, forever. No credit card required, just sign up and start building.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Deploy your AI bot in under 60 seconds. No coding required, just pure efficiency.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security. Your data is protected at every step.",
  },
  {
    icon: Globe,
    title: "Scale Globally",
    description: "From startup to enterprise. Our infrastructure grows with your business.",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Track conversations, understand users, and optimize your bot's performance.",
  },
  {
    icon: Users,
    title: "Multi-Channel",
    description: "Deploy across web, mobile, social media, and messaging platforms seamlessly.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    description: "Get a free month for every referral. Share the power of BuildMyBot and earn.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make bot building effortless and scalable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-smooth border-border bg-card"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Reseller CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 gradient-hero text-primary-foreground max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Become a Reseller</h3>
            <p className="text-lg mb-6 opacity-90">
              Earn 50% recurring commission on every customer you refer, for as long as they stay subscribed.
              Build a passive income stream by sharing BuildMyBot.
            </p>
            <a
              href="mailto:partners@buildmybot.com"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-smooth"
            >
              Contact Us About Reselling
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
