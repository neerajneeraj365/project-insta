import { UserButton } from "@clerk/nextjs";
import { Hero } from "@/components/landing/Hero";
import Wrapper from "@/components/globals/Wrapper";
import { SeeItInAction } from "@/components/landing/SeeItInAction";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/Faq";
import { CTA } from "@/components/landing/Cta";

export default function Home() {
  return (
    <Wrapper className="space-y-4">
      <Hero />
      <SeeItInAction />
      <Features />
      <HowItWorks />
      <Pricing /> 
      <FAQ />
      <CTA />  
    </Wrapper>
  );
}
