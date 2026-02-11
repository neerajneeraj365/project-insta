"use client";

import Link from "next/link";
import { Zap, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import {usePathname, useRouter} from "next/navigation";
import Logo from "@/public/Logo";
import { Suspense } from "react";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
    <div className="flex flex-col items-center justify-center flex-1">
    
        <ClerkLoading>
          <div className="flex flex-col items-center justify-center flex-1">
            <Spinner className="w-10 h-10" />
          </div>
        </ClerkLoading>
        <ClerkLoaded>
        <Logo />
            {children}</ClerkLoaded>
       
        
    </div>
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="relative text-center text-zinc-100 max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Turn Feedback Into Fun
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Create engaging review experiences that your customers will actually enjoy. 
            Boost engagement, get better insights, grow your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div>
              <p className="text-3xl font-bold">300%</p>
              <p className="text-sm text-primary-foreground/70">More Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2,000+</p>
              <p className="text-sm text-primary-foreground/70">Businesses</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9</p>
              <p className="text-sm text-primary-foreground/70">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;