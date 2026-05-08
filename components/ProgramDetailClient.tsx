"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Clock, ShieldCheck, CheckCircle2, Share2, Heart, ArrowRight } from "lucide-react";
import { Program } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProgramDetailClientProps {
  program: Program;
}

export default function ProgramDetailClient({ program }: ProgramDetailClientProps) {
  const percent = Math.round((program.raised / program.goal) * 100);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen selection:bg-emerald-500/30">
      {/* Header / Hero */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover brightness-[0.4] grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 pb-20 relative z-10 text-white space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/programs" className="inline-flex items-center gap-3 text-emerald-400 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-colors mb-6 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Operations
            </Link>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                {program.category}
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] max-w-5xl tracking-tighter">
                {program.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-20">
          {/* Overview */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">Executive Summary</h2>
               <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="space-y-8">
               <p className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                 {program.description}
               </p>
               <div className="prose prose-slate dark:prose-invert lg:prose-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                <p>
                  This operation was initiated through our decentralized partner network, targeting specific geographic vulnerabilities that have remained underserved by traditional large-scale aid models.
                </p>
                <p>
                  Our unique impact methodology combines immediate resource allocation with long-term structural empowerment, ensuring that every deployment seeds a self-sustaining community ecosystem that thrives beyond our active involvement.
                </p>
               </div>
            </div>
          </section>

          {/* Impact Timeline */}
          <section className="bg-slate-50 dark:bg-white/5 rounded-[3rem] p-8 md:p-16 space-y-12 border border-slate-100 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors" />
            
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-slate-900 dark:text-white">
                <Clock className="text-emerald-500" /> Deployment phases
              </h3>
              <Badge className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-none px-4">Phase 2 Active</Badge>
            </div>
            
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-200 dark:bg-white/10 z-0" />
              {[
                { phase: "Strategic Reconnaissance", date: "Jan 2026", desc: "Collaborating with local community nodes to map specific needs and cultural sensitivities." },
                { phase: "Resource Activation", date: "Mar 2026", desc: "Full-scale logistics deployment of essential aid and vocational training infrastructure." },
                { phase: "Systemic Autonomy", date: "Q3 2026", desc: "Transitioning operational management to local leaders with ongoing impact monitoring." },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex gap-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 ${
                    i === 2 
                    ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-400" 
                    : "bg-emerald-600 border-emerald-500 text-white shadow-glow translate-x-0"
                  }`}>
                    {i === 2 ? <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" /> : <CheckCircle2 size={24} />}
                  </div>
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center gap-4">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{step.phase}</h4>
                      <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">{step.date}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Emotional Narrative Component */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight leading-tight">The Human Velocity</h3>
                <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  "HopeBridge does not just arrive with solutions; they arrive with humility. They asked us what we needed, instead of telling us what we lacked."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-200">
                    <img src="https://i.pravatar.cc/150?u=impact" alt="Witness" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Elena Vasquez</div>
                    <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Community Lead, Phase 1 Node</div>
                  </div>
                </div>
             </div>
             <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-4xl relative z-10 border border-slate-100 dark:border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800"
                    alt="Legacy Visual"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
             </div>
          </section>
        </div>

        {/* Sidebar / Transactional Engine */}
        <div className="lg:col-span-5 space-y-10">
          <Card className="sticky top-32 rounded-[3.5rem] shadow-4xl border-slate-100 dark:border-white/5 overflow-hidden bg-white dark:bg-slate-900">
            <div className="p-10 space-y-12">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Deployment Momentum</div>
                    <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">₹{program.raised.toLocaleString()}</div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Goal</div>
                    <div className="text-2xl font-bold text-slate-500 tracking-tight">₹{program.goal.toLocaleString()}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="w-full h-4 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-emerald-600 shadow-glow rounded-full" 
                      />
                  </div>
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                     <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                       <Users size={18} className="text-emerald-500" />
                       {program.donors.toLocaleString()} Activists
                     </div>
                     <span className="text-emerald-600">{percent}% Funded</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Button asChild size="lg" className="w-full h-24 rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-xl font-black uppercase tracking-[0.2em] shadow-glow btn-glow border-none group">
                   <Link href="/donate" className="flex items-center justify-center gap-4">
                     Fund Operation <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                   </Link>
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 rounded-2xl border-slate-100 dark:border-white/10 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                    <Share2 size={18} className="mr-3" /> Outreach
                  </Button>
                  <Button variant="outline" className="h-16 rounded-2xl border-slate-100 dark:border-white/10 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                    <Heart size={18} className="mr-3" /> Track
                  </Button>
                </div>
              </div>

              <div className="bg-emerald-500/5 p-8 rounded-[2rem] border border-emerald-500/10 flex items-start gap-5">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-glow">
                    <ShieldCheck size={24} />
                 </div>
                 <div className="space-y-1">
                    <div className="text-xs font-black text-emerald-600 uppercase tracking-widest">Audited Transparency</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      Every contribution is tracked on our public impact ledger. Full direct-aid ratio: 94.2%.
                    </p>
                 </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
