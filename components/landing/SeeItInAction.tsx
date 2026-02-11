"use client";

import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function SeeItInAction() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">See it in action</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Your feed, reimagined for learning
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg text-pretty">
            Scroll through quiz questions from your friends just like you would on Instagram. 
            Learn while you scroll.
          </p>
        </div>

        {/* Mock Phone / Feed Preview */}
        <div className="mx-auto max-w-sm">
          <div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Post Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border-2 border-primary">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                    SK
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">sarah_khan</p>
                  <p className="text-xs text-muted-foreground">Organic Chemistry</p>
                </div>
              </div>
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </div>

            {/* Question Card */}
            <div className="bg-secondary px-6 py-10">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span>Question 3 of 10</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                What is the IUPAC name of the compound with the molecular formula C₃H₈O?
              </h3>
              <div className="mt-6 flex flex-col gap-3">
                <AnswerOption
                  label="A"
                  text="Propan-1-ol"
                  state="correct"
                />
                <AnswerOption
                  label="B"
                  text="Ethanol"
                  state="default"
                />
                <AnswerOption
                  label="C"
                  text="Methanol"
                  state="incorrect"
                />
                <AnswerOption
                  label="D"
                  text="Butan-1-ol"
                  state="default"
                />
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button type="button" className="flex items-center gap-1.5 text-foreground">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm font-medium">128</span>
                  </button>
                  <button type="button" className="flex items-center gap-1.5 text-foreground">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">24</span>
                  </button>
                  <button type="button" className="text-foreground">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <button type="button" className="text-foreground">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Liked by <span className="font-semibold text-foreground">alex_m</span> and{" "}
                <span className="font-semibold text-foreground">127 others</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnswerOption({
  label,
  text,
  state,
}: {
  label: string;
  text: string;
  state: "default" | "correct" | "incorrect";
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
        state === "correct"
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : state === "incorrect"
            ? "border-red-400 bg-red-50 text-red-600"
            : "border-border bg-card text-foreground hover:border-primary/30"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          state === "correct"
            ? "bg-emerald-500 text-emerald-50"
            : state === "incorrect"
              ? "bg-red-400 text-red-50"
              : "bg-secondary text-muted-foreground"
        }`}
      >
        {label}
      </span>
      <span className="flex-1 text-sm font-medium">{text}</span>
      {state === "correct" && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
      {state === "incorrect" && <XCircle className="h-5 w-5 text-red-400" />}
    </div>
  );
}
