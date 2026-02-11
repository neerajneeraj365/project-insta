"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does StudyGram generate questions from my PDF?",
    a: "Our AI engine reads and understands the content of your PDF, then generates relevant multiple choice, true/false, and short answer questions. The questions cover key concepts, definitions, and important details from your study material.",
  },
  {
    q: "What types of PDFs can I upload?",
    a: "You can upload any text-based PDF — lecture slides, textbook chapters, research papers, notes, and more. We support files up to 50MB on the free plan and 200MB on paid plans.",
  },
  {
    q: "How does the social feed work?",
    a: "Just like Instagram! When you or someone you follow uploads a PDF and generates questions, those questions appear as posts in your feed. You can like, comment, save, and share them. Scroll through and answer questions as you go.",
  },
  {
    q: "What are Story Questions?",
    a: "Story Questions work like Instagram stories — you can post a quick question that disappears after 24 hours. It's great for daily brain teasers, pop quizzes, or asking your followers something from your latest study session.",
  },
  {
    q: "Is my study material private?",
    a: "Yes! You have full control over privacy. You can make your quizzes public for everyone, visible only to followers, or completely private for personal study.",
  },
  {
    q: "Can I use StudyGram with my study group?",
    a: "The Team plan lets you create a private study group with up to 30 members, shared quiz libraries, and team leaderboards. Perfect for classes and study groups.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">FAQ</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
