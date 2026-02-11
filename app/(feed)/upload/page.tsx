"use client";

import Wrapper from "@/components/globals/Wrapper";
import { cn } from "@/lib/utils";
import { ArrowLeft, Upload, Settings2, Sparkles, Eye, Check } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Step = 1 | 2 | 3 | 4;

const steps = [
  { id: 1 as Step, label: "Upload", icon: Upload },
  { id: 2 as Step, label: "Configure", icon: Settings2 },
  { id: 3 as Step, label: "Generate", icon: Sparkles },
  { id: 4 as Step, label: "Preview", icon: Eye },
];

const UploadPage = () => {
  const [step, setStep] = useState<Step>(1);
  return (
    <Wrapper className="min-h-screen bg-background">
      <div className="flex items-center gap-4 my-8">
        <Link
          href="/feed"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </Link>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Create Quiz
          </h1>
          <p className="text-sm text-muted-foreground">
            Upload a PDF and let AI generate questions for you
          </p>
        </div>
      </div>
      <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                        step > s.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : step === s.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-card text-muted-foreground",
                      )}
                    >
                      {step > s.id ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <s.icon className="h-4 w-4" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-medium",
                        step >= s.id
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "mb-6 h-0.5 flex-1 rounded-full transition-all",
                        step > s.id ? "bg-primary" : "bg-border",
                      )}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
    </Wrapper>
  );
};

export default UploadPage;
