"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, Brain, FlaskConical } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Flow</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="#features" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="h-4 w-4" />
              Features
            </Link>
            <Link href="#how-it-works" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Brain className="h-4 w-4" />
              How it Works
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="secondary" size="sm">
            Try for Free
          </Button>
        </div>
      </div>
    </nav>
  );
}