import { Upload, Sparkles, Share2, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload your PDF",
    description:
      "Simply drag and drop any study material — lecture notes, textbook chapters, or research papers.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI generates questions",
    description:
      "Our AI analyzes the content and creates a set of engaging quiz questions tailored to the material.",
  },
  {
    step: "03",
    icon: Share2,
    title: "Share with friends",
    description:
      "Post your quiz to the feed or share it as a story. Your followers can answer and compete.",
  },
  {
    step: "04",
    icon: Trophy,
    title: "Learn & compete",
    description:
      "Track your scores, climb the leaderboard, and watch your knowledge grow alongside your friends.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            From PDF to quiz in seconds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg text-pretty">
            Four simple steps to transform your study materials into an
            interactive social learning experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-2rem)] bg-border lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
