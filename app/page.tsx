"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Heart, Sparkles, ChevronRight, Zap, Trophy, History, Target, Users } from "lucide-react";
import Link from "next/link";
import { programs, statistics } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any },
  },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 selection:bg-emerald-500/30 selection:text-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-600/20 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="space-y-12"
              style={{ y: heroY }}
            >
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl mx-auto"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Hope Powered by Humanity
                </motion.div>
                
                <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.85] text-white tracking-tighter">
                  Real Impact. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 italic px-1">
                    Real Change.
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
                  We empower local communities to dismantle generational cycles of poverty through transparent, community-led support ecosystems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button asChild size="lg" className="rounded-2xl h-20 px-12 text-xl bg-emerald-600 hover:bg-emerald-500 shadow-glow btn-glow flex-1 sm:flex-none border-none">
                  <Link href="/programs" className="flex items-center gap-4">
                    Support a Cause <ArrowRight size={24} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl h-20 px-12 text-xl border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 flex-1 sm:flex-none">
                  <Link href="/impact" className="flex items-center gap-4">
                    <Globe size={22} className="text-emerald-400" />
                    Our Impact
                  </Link>
                </Button>
              </div>

              {/* Animated Statistics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
                {[
                  { value: "45K+", label: "Lives Changed", icon: Heart },
                  { value: "54", label: "Global Zones", icon: Globe },
                  { value: "94.2%", label: "Direct Aid", icon: Sparkles },
                  { value: "12M+", label: "Meals Yearly", icon: Users },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                       <stat.icon size={18} className="text-emerald-500" />
                       {stat.value}
                    </div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col items-center gap-6 pt-12">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden shadow-2xl">
                      <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-slate-950 bg-emerald-600 flex items-center justify-center text-xs font-black text-white shadow-2xl">
                    +65K
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] leading-tight">
                  Trusted by 65,000+ donors worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Particles / Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -200 - 100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Momentum Bar */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {statistics.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-2"
              >
                <div className={`text-5xl font-serif font-bold mb-3 transition-transform duration-500 group-hover:scale-110 ${stat.color || 'text-slate-900'}`}>
                  {stat.value}
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em]">{stat.label}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Suggested Programs Section (AI Insight Experience) */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                <Zap size={14} fill="currentColor" />
                Bridge Intel Engine
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[0.9] tracking-tighter">
                Programs Optimized <br /> for <span className="text-emerald-600 italic">Immediate Action</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-slate-900 hover:text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] shadow-sm border border-slate-200 transition-all duration-300"
            >
              Explore Full Network <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {programs.slice(0, 3).map((program) => (
              <motion.div key={program.id} variants={itemVariants}>
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Impact SVG Map Section */}
      <section className="section-padding bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-emerald-500)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-emerald-400 font-black uppercase text-xs tracking-[0.3em]">Operational Footprint</div>
                <h2 className="text-6xl font-serif font-bold leading-tight tracking-tighter">
                  Real-Time <br /> <span className="text-emerald-500">Global Activation</span>
                </h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Our infrastructure is deployed across 54 critical zones, providing decentralized support systems where traditional aid often fails to reach.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                {[
                  { label: "Active Nodes", val: "54", icon: Globe },
                  { label: "Local NGOs", val: "280+", icon: ShieldCheck },
                  { label: "Success Rate", val: "99.2%", icon: Trophy },
                  { label: "Avg Response", val: "4.2h", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <item.icon size={22} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{item.val}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Simplified Abstract World Map Visualization */}
              <div className="aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 border-[1px] border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-[15%] border-[1px] border-teal-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                <div className="absolute inset-[30%] border-[1px] border-white/5 rounded-full" />
                
                <Globe size={180} className="text-emerald-500/40 animate-pulse" strokeWidth={0.5} />
                
                {/* Simulated Pins */}
                {mounted && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    className="absolute w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_20px_var(--color-emerald-500)]"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <path d="M 50 50 Q 80 20 120 40" stroke="var(--color-emerald-500)" strokeWidth="1" fill="none" className="animate-pulse" />
                  <path d="M 200 150 Q 150 200 100 180" stroke="var(--color-teal-500)" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Bento Style */}
      <section className="section-padding bg-white dark:bg-slate-900 selection:bg-slate-900 selection:text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <h2 className="text-6xl font-serif font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                  Beyond Aid. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic">Ecosystems.</span>
                </h2>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  We don&apos;t distribute &quot;charity&quot;—we engineer sustainability. Our partner-first model ensures that every dollar contributes to long-term community autonomy.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Direct Liquidity", desc: "Digital verification ensures funds bypass regional overhead and reach vetted local nodes instantly.", icon: Zap },
                  { title: "On-Chain Auditing", desc: "Full traceability of deployment through our open-source impact ledger, public for all donors.", icon: History },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-premium border border-slate-100 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bba677912?auto=format&fit=crop&q=80&w=800"
                    alt="Legacy Community"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Success Story</div>
                      <div className="text-lg font-bold leading-tight">The Harvest Collective, Kenya</div>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-600 p-10 rounded-[2.5rem] text-white space-y-4 shadow-3xl flex flex-col justify-between">
                  <Sparkles size={48} className="text-emerald-300" />
                  <div className="space-y-1">
                    <div className="text-5xl font-black">94%</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Allocation Efficiency</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6 pt-16"
              >
                <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white space-y-6 shadow-4xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -mr-16 -mt-16" />
                  <p className="italic text-2xl font-serif leading-snug tracking-tight text-slate-100 relative z-10">
                    &quot;HopeBridge doesn&apos;t just fund us; they validate our capability as local leaders.&quot;
                  </p>
                  <div className="pt-4 flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800">
                      <img src="https://i.pravatar.cc/100?u=sofia" alt="Sofia" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-none text-white">Sofia Martinez</p>
                      <p className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mt-1">Director, WomenCraft Asia</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-premium border border-slate-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800"
                    alt="Water Infrastructure"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-grayscale duration-700 hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Final CTA */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-950 rounded-[4rem] p-12 md:p-32 text-center space-y-12 relative overflow-hidden group"
          >
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--color-emerald-500)_0%,transparent_60%)] animate-pulse" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-black uppercase tracking-[0.4em]"
              >
                Become a Catalyst
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.85] tracking-tighter">
                Ready to <span className="text-emerald-500 italic">Reshape</span> History?
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Join our elite guild of 65,000+ monthly bridge-builders who are systematically dismantling generational cycles of crisis.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-3xl h-20 px-12 text-xl font-bold bg-emerald-600 hover:bg-emerald-500 shadow-glow btn-glow border-none group">
                <Link href="/donate" className="flex items-center gap-4">
                  Initiate Donation <Zap size={22} className="fill-emerald-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-3xl h-20 px-12 text-xl font-bold text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl">
                <Link href="/programs" className="flex items-center gap-4">
                  Browse Operations <History size={20} className="text-slate-400" />
                </Link>
              </Button>
            </div>
            
            {/* Micro Detail */}
            <div className="relative z-10 pt-16 flex items-center justify-center gap-12 opacity-40">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Encrypted Protocol</span>
              </div>
              <div className="flex items-center gap-3">
                <Target size={20} className="text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Full Transparency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
