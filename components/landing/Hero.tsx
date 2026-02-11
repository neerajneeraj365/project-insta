"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Sparkles, Users } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const tags = [
  {
    label: "[ PDF ]",
    icon: Upload,
    color: "text-emerald-500",
    left: "left-[15%]",
    top: "top-32",
    borderColor: "border-emerald-500",
  },
  {
    label: "[ QUIZ ]",
    icon: Sparkles,
    color: "text-primary",
    left: "right-[12%]",
    top: "top-48",
    borderColor: "border-primary",
  },
  {
    label: "[ LEARN ]",
    icon: Users,
    color: "text-blue-500",
    left: "left-[8%]",
    bottom: "bottom-32",
    borderColor: "border-blue-500",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating elements */}
      {tags.map((tag) => (
        <div key={tag.label} className={cn("absolute hidden lg:block", tag.left, tag.top, tag.bottom)}>
          <FloatingTag label={tag.label} color={tag.color} borderColor={tag.borderColor} />
        </div>
      ))}

      {/* Sparkle accents */}
      {/* <div className="absolute top-40 left-[30%] text-primary hidden lg:block">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="absolute top-56 right-[25%] text-primary hidden lg:block">
        <Sparkles className="h-4 w-4" />
      </div> */}

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Now in Beta — Join Free
          <ArrowRight className="h-3.5 w-3.5" />
        </div>

        {/* Main headline */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
            Turn your PDFs into{" "}
            <span className="text-primary">social quizzes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-md text-center leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Upload your study material, get AI-generated questions, and share
            them with friends in an Instagram-style feed. Learning has never
            been this social.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/feed">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#features">Learn More</Link>
            </Button>
          </div>
        </div>
        {/* CTA Input Area */}

        {/* Stats */}
        {/* <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8">
          <div>
            <p className="font-display text-3xl font-bold text-foreground">
              10K+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Students</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-foreground">
              50K+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Quizzes Created
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-foreground">
              95%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Pass Rate</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function FloatingTag({ label, color, borderColor }: { label: string, color: string, borderColor?: string }) {
  return (
    <div className={cn("rounded-md bg-card/60 px-3 py-1.5 text-xs font-mono text-muted-foreground backdrop-blur-sm", color, borderColor)}>
      {label}
    </div>
  );
}
