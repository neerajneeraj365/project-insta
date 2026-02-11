"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out StudyGram. No credit card needed.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    credits: "5 PDFs / month",
    features: [
      "5 PDF uploads per month",
      "10 questions per PDF",
      "Basic AI question generation",
      "Follow up to 50 people",
      "Community support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Student",
    description: "Great for active learners who study regularly.",
    monthlyPrice: 6,
    yearlyPrice: 4,
    credits: "50 PDFs / month",
    features: [
      "50 PDF uploads per month",
      "25 questions per PDF",
      "Advanced AI questions",
      "Unlimited follows",
      "Story questions",
      "Progress analytics",
    ],
    cta: "Subscribe",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious students who want the best tools.",
    monthlyPrice: 14,
    yearlyPrice: 10,
    credits: "Unlimited PDFs",
    features: [
      "Unlimited PDF uploads",
      "50 questions per PDF",
      "Premium AI with explanations",
      "Unlimited follows",
      "Story questions",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Subscribe",
    popular: true,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">Transparent</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Flexible <span className="text-primary">pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg text-pretty">
            Start for free, then scale as you learn more. Every plan includes
            our core social features.
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span
            className={`text-sm ${!yearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setYearly(!yearly)}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              yearly ? "bg-primary" : "bg-border"
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-card shadow transition-transform ${
                yearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm ${yearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
          >
            Yearly
          </span>
          {yearly && (
            <span className="text-xs font-medium text-primary">
              2 months free
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 transition-all ${
                plan.popular
                  ? "border-primary shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="mb-4">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-1 flex items-center gap-1 text-muted-foreground">
                <span className="text-xs">{">"}</span>
                <span className="text-xs">{plan.credits}</span>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{yearly ? "mo" : "monthly"}
                </span>
              </div>

              <Button
                asChild
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="/feed">{plan.cta}</Link>
              </Button>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
