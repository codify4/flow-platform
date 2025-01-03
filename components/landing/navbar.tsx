"use client";

import { BookOpen, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MainButton from "../main-button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center justify-between w-full gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/flow-logo.png" 
              alt="Flow Logo" 
              width={50} 
              height={50} 
            />
            <span className="text-primary font-bold text-2xl">Flow</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="#features" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" >
              <BookOpen className="h-4 w-4" />
              Features
            </Link>
            <Link href="#testimonials" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Brain className="h-4 w-4" />
              Testimonials
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <MainButton 
                className="text-white font-semibold bg-primary"
                bgClick="#3D08BF"
                bgHover="#018650"
              >
                  Dashboard
              </MainButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}