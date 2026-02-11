"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
          Ready to make studying{" "}
          <span className="text-primary">actually fun?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
          Join thousands of students who are already turning their boring PDFs into
          interactive social quizzes. It takes less than 30 seconds to get started.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className=" bg-primary px-8 text-primary-foreground hover:bg-primary/90 shadow-lg"
          >
            <Link href="/feed">
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className=" px-8 bg-transparent"
          >
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
