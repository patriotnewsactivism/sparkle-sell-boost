import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Tag, Gift, TrendingUp, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for testing and small projects",
    features: [
      "50 conversations/month",
      "1 AI Bot",
      "Basic analytics",
      "Email support (72hr)",
      "Knowledge base access",
      "BuildMyBot branding on widget",
    ],
    priceId: "price_free",
    badge: "FREE",
    badgeColor: "bg-muted text-muted-foreground",
  },
  {
    name: "Starter",
    price: "$29",
    description: "Great for small businesses getting started",
    features: [
      "500 conversations/month",
      "2 AI Bots",
      "Remove branding",
      "Advanced analytics",
      "Multi-channel deployment",
      "Email support (48hr)",
      "Custom bot avatar",
      "Basic customization",
    ],
    priceId: "price_starter",
  },
  {
    name: "Growth",
    price: "$79",
    description: "For growing businesses with higher volume",
    features: [
      "2,500 conversations/month",
      "5 AI Bots",
      "Everything in Starter",
      "Priority email support (24hr)",
      "API access & webhooks",
      "Advanced customization",
      "Lead capture forms",
      "Custom responses library",
    ],
    priceId: "price_growth",
    popular: true,
    badge: "MOST POPULAR",
    badgeColor: "gradient-accent text-accent-foreground",
  },
  {
    name: "Professional",
    price: "$179",
    description: "Advanced features for scaling teams",
    features: [
      "10,000 conversations/month",
      "15 AI Bots",
      "Everything in Growth",
      "Chat support",
      "White-label options",
      "Team collaboration (3 seats)",
      "Advanced analytics & reporting",
      "A/B testing",
      "Handoff to human agents",
    ],
    priceId: "price_professional",
    badge: "BEST VALUE",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    name: "Enterprise",
    price: "$399",
    description: "Unlimited power for large organizations",
    features: [
      "Unlimited conversations",
      "Unlimited AI Bots",
      "Everything in Professional",
      "Dedicated account manager",
      "Priority phone support",
      "SLA guarantee (99.9% uptime)",
      "Unlimited team seats",
      "Custom AI training",
      "On-premise deployment option",
    ],
    priceId: "price_enterprise",
  },
];

export const Pricing = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [isApplyingCode, setIsApplyingCode] = useState(false);
  const { toast } = useToast();

  const applyDiscountCode = async () => {
    if (!discountCode.trim()) return;
    
    setIsApplyingCode(true);
    
    // Simulate discount code validation
    setTimeout(() => {
      setIsApplyingCode(false);
      toast({
        title: "Discount Applied!",
        description: `Code "${discountCode}" has been applied. Proceed to checkout to see your savings.`,
      });
    }, 1000);
  };

  const handleSubscribe = (priceId: string) => {
    // TODO: Implement Stripe checkout
    toast({
      title: "Coming Soon!",
      description: "Stripe checkout integration will be added shortly.",
    });
  };

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start free, scale as you grow. Cancel anytime, no questions asked.
          </p>

          {/* Discount Code Section */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="p-5 gradient-accent/10 border-accent shadow-elegant">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-accent" />
                <span className="font-semibold">Have a discount code?</span>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code (e.g., LAUNCH50)"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1 border-accent/30 focus:border-accent"
                />
                <Button
                  onClick={applyDiscountCode}
                  disabled={isApplyingCode || !discountCode.trim()}
                  variant="default"
                  className="px-6"
                >
                  {isApplyingCode ? "..." : "Apply"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Save up to 50% on your first month
              </p>
            </Card>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 relative flex flex-col ${
                plan.popular
                  ? "border-accent shadow-glow md:scale-105 z-10"
                  : plan.name === "Free"
                  ? "border-muted bg-muted/20"
                  : "border-border hover:border-accent/50 transition-smooth"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className={`${plan.badgeColor} px-3 py-1 rounded-full text-xs font-bold shadow-elegant`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-xs mb-4 min-h-[2.5rem]">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "hero" : plan.name === "Free" ? "outline" : "default"}
                size="lg"
                onClick={() => handleSubscribe(plan.priceId)}
              >
                {plan.name === "Free" ? "Start Free" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Reseller & Referral Programs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Reseller Program */}
          <Card className="p-8 gradient-hero text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Earn 50% Recurring Commission</h3>
              </div>
              <p className="text-primary-foreground/90 mb-6 text-sm">
                Become a reseller partner and earn 50% monthly commission on all your referrals, 
                for as long as they stay subscribed. Build a passive income stream with BuildMyBot.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>50% recurring monthly commission</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Access to reseller dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Marketing materials provided</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>No limits on earnings</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full bg-white text-primary hover:bg-white/90 border-white"
                size="lg"
                onClick={() => window.location.href = "mailto:partners@buildmybot.com"}
              >
                Become a Partner
              </Button>
            </div>
          </Card>

          {/* Referral Program */}
          <Card className="p-8 bg-accent/10 border-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Refer Friends, Get Rewarded</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                Love BuildMyBot? Share it with your network and get rewarded. 
                It's a win-win for everyone.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-sm">You Get 1 Month FREE</p>
                    <p className="text-xs text-muted-foreground">For each friend who subscribes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Your Friend Gets 10% Off</p>
                    <p className="text-xs text-muted-foreground">On their first month</p>
                  </div>
                </div>
              </div>
              <Button
                variant="default"
                className="w-full"
                size="lg"
                onClick={() => {
                  toast({
                    title: "Referral Link Coming Soon!",
                    description: "We're setting up your personal referral dashboard.",
                  });
                }}
              >
                <Sparkles className="w-4 h-4" />
                Get My Referral Link
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Cancel anytime, no questions asked</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
