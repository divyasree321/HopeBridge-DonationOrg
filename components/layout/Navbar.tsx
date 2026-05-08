"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div 
          className={`relative flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-500 border ${
            scrolled 
            ? "bg-slate-900/80 backdrop-blur-2xl border-white/10 shadow-4xl" 
            : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
              <Heart size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-tighter">
              HopeBridge<span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-emerald-400 ${
                  pathname === link.href ? "text-emerald-500" : "text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">
              <ShieldCheck size={14} className="text-emerald-500" /> Vetted NGO
            </div>
            <Button asChild className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white border-none h-12 px-8 font-bold uppercase text-[10px] tracking-widest shadow-glow btn-glow">
              <Link href="/donate">Initiate Aid</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-xl border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 lg:hidden"
          >
            <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-4xl backdrop-blur-3xl">
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif font-bold text-white hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="h-px w-full bg-white/10" />
              <Button asChild className="w-full h-18 rounded-2xl bg-emerald-600 text-white border-none text-lg font-bold" onClick={() => setIsOpen(false)}>
                <Link href="/donate">Initiate Aid</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
