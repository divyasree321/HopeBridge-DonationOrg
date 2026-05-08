"use client";

import { motion } from "framer-motion";
import { Shield, Users, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-emerald-500/30 selection:text-white">
      {/* Immersive Dark Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[80%] h-full bg-emerald-600/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[60%] h-full bg-teal-600/5 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl backdrop-blur-xl">
              Established 2018 | Protocol v4.2
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif font-bold text-white leading-[0.85] tracking-tighter">
              Hope Powered <br /> by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic">Humanity.</span>
            </h1>
            
            <p className="text-slate-400 text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
              HopeBridge is a global humanitarian collective dedicated to dismantling poverty through transparent, community-led support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Protocol (Philosophy) */}
      <section className="py-32 bg-white rounded-[4rem] -mt-10 relative z-10">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-12 items-center text-center space-y-10">
                  <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[0.9] tracking-tighter italic">Our Way of Giving</h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      Traditional charity is often slow. We choose a direct, community-first approach that transforms recipients into empowered architects of their own future.
                    </p>
                  </div>
               </div>
               
               <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                  {[
                    { title: "Direct Aid", icon: Heart, desc: "Bypassing intermediate friction to deliver 94% of every dollar directly to local communities." },
                    { title: "Transparency", icon: Shield, desc: "Real-time, audited impact reports that provide full accountability to our donors." },
                    { title: "Global Network", icon: Globe, desc: "A compassionate collective of local responders active across 4 continents and 20+ zones." },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="p-12 bg-slate-50 rounded-[3rem] space-y-8 group hover:bg-emerald-50 transition-colors duration-500"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <item.icon size={32} />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Our DNA Section (Timeline or Nodes) */}
      <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 space-y-4 flex flex-col justify-center items-center pointer-events-none">
          <div className="text-[200px] font-black tracking-tighter leading-none opacity-5">VALUES</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 space-y-12">
                 <div className="space-y-6">
                    <div className="text-emerald-500 font-black uppercase text-xs tracking-[0.4em]">Core Values</div>
                    <h2 className="text-6xl font-serif font-bold leading-[0.9] tracking-tighter">Radical Intentionality</h2>
                 </div>
                 
                 <div className="space-y-10">
                    {[
                      { l: "Efficiency", d: "Aiming for 100% fund-to-impact conversion through AI-optimized logistics." },
                      { l: "Autonomy", d: "We don't build projects. We build self-sustaining local cooperatives." },
                      { l: "Dignity", d: "Every aid delivery respects the history and identity of the community." },
                    ].map((v, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="text-5xl font-black text-white/10 group-hover:text-emerald-500 transition-colors">0{i+1}</div>
                         <div className="space-y-2">
                            <div className="text-2xl font-bold italic font-serif group-hover:translate-x-2 transition-transform">{v.l}</div>
                            <p className="text-slate-400 font-medium max-w-sm">{v.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 relative">
                 <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-emerald-600/20 mix-blend-overlay z-10" />
                    <img src="https://images.unsplash.com/photo-1540331547168-8b63109228b7?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover scale-110" alt="About Mission" referrerPolicy="no-referrer" />
                 </div>
                 
                 {/* Floating Metric */}
                 <div className="absolute -bottom-10 -left-10 p-10 bg-white rounded-[3rem] shadow-4xl text-slate-900 border border-slate-100 hidden md:block">
                    <div className="text-5xl font-black tracking-tighter">A+ Rated</div>
                    <div className="text-xs font-black text-emerald-600 uppercase tracking-widest mt-2">Fiscal Accountability</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Institutional Board / Partners */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-6 mb-20">
            <h2 className="text-6xl font-serif font-bold text-slate-900 tracking-tighter italic">Network of Trust</h2>
            <p className="text-xl text-slate-500 font-medium">Supported by world-class institutions and 200,000+ individual donors.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-4xl font-black tracking-tighter">UNESCO</div>
             <div className="text-4xl font-black tracking-tighter">WORLD BANK</div>
             <div className="text-4xl font-black tracking-tighter italic">GUIDESTAR</div>
             <div className="text-4xl font-black tracking-tighter">USAID</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-emerald-600 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20" />
         <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-tight italic">Build the Bridge.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button asChild size="lg" className="h-16 px-12 rounded-2xl bg-white text-emerald-600 hover:bg-slate-50 font-black uppercase text-xs tracking-widest transition-all border-none">
                <Link href="/programs">Join the Mission</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-2xl border-white/30 text-white hover:bg-white/10 font-black uppercase text-xs tracking-widest transition-all">
                Read our Charter
              </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
