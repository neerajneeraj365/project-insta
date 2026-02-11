"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  Search,
  Heart,
  MessageCircle,
  PlusSquare,
  User,
  Home,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/feed", icon: Home, label: "Home" },
  { href: "/feed/search", icon: Search, label: "Search" },
  { href: "/upload", icon: PlusSquare, label: "Upload" },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 hidden h-full flex-col border-r border-border bg-card transition-all duration-300 lg:flex w-[240px]",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href="/feed"
            className="flex items-center gap-2.5 overflow-hidden"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span
              className={cn(
                "whitespace-nowrap font-display text-lg font-bold text-foreground transition-all duration-300",
              )}
            >
              StudyGram
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all",
                  isActive
                    ? "bg-accent font-semibold text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn("h-5 w-5 shrink-0", isActive && "text-primary")}
                />
                <span
                  className={cn(
                    "whitespace-nowrap transition-all duration-300",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-border bg-card px-2 py-2 lg:hidden">
        {navItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs transition-all",
                isActive
                  ? "font-medium text-primary"
                  : "text-muted-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
