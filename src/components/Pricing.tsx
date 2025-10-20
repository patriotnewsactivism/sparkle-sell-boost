import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses and startups",
    features: [
      "1 AI Bot",
      "1,000 conversations/month",
      "Basic analytics",
      "Email support",
      "Multi-channel deployment",
    ],
    priceId: "price_starter", // Replace with actual Stripe price ID
  },
  {
    name: "Professional",
    price: "$149",
    description: "For growing businesses with higher volume",
    features: [
      "5 AI Bots",
      "10,000 conversations/month",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    priceId: "price_professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    description: "Unlimited power for large organizations",
    features: [
      "Unlimited AI Bots",
      "Unlimited conversations",
      "Enterprise analytics",
      "Dedicated support",
      "White-label solution",
      "SLA guarantee",
      "Custom integrations",
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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your needs. Cancel anytime.
          </p>

          {/* Discount Code Section */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Have a discount code?</span>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={applyDiscountCode}
                  disabled={isApplyingCode || !discountCode.trim()}
                  variant="outline"
                >
                  Apply
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-accent shadow-glow scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "hero" : "default"}
                size="lg"
                onClick={() => handleSubscribe(plan.priceId)}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Referral Program Highlight */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-muted/50 border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">🎁 Referral Program</h3>
            <p className="text-muted-foreground">
              Refer a friend and get <span className="font-semibold text-foreground">1 month free</span> when they subscribe.
              Your friend gets 10% off their first month too!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
