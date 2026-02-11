import {
    Upload,
    Sparkles,
    Users,
    BookOpen,
    MessageSquare,
    BarChart3,
  } from "lucide-react";
  
  const features = [
    {
      icon: Upload,
      title: "Upload Any PDF",
      description:
        "Drop your lecture notes, textbooks, or study guides. We support all PDF formats and extract the content intelligently.",
    },
    {
      icon: Sparkles,
      title: "AI-Generated Questions",
      description:
        "Our AI reads your PDF and creates high-quality multiple choice, true/false, and short answer questions instantly.",
    },
    {
      icon: Users,
      title: "Follow & Connect",
      description:
        "Build your study network. Follow classmates, send requests, and see their quizzes in your personalized feed.",
    },
    {
      icon: MessageSquare,
      title: "Story Questions",
      description:
        "Post quick questions as stories that disappear in 24 hours. Challenge your followers with daily brain teasers.",
    },
    {
      icon: BookOpen,
      title: "Subject Channels",
      description:
        "Organize quizzes by subject. Browse biology, chemistry, physics, math, and more in dedicated topic feeds.",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description:
        "See your accuracy, streaks, and improvement over time. Compare scores with friends on the leaderboard.",
    },
  ];
  
  export function Features() {
    return (
      <section id="features" className="relative py-20 md:py-28">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3">Features</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Everything you need to study smarter
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg text-pretty">
              From AI-powered question generation to social learning, StudyGram
              combines the best of education and social media.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  