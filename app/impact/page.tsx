"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { TrendingUp, Users, Target, ShieldCheck, Heart, Sparkles, Quote, Globe, Zap, BarChart3, Activity } from "lucide-react";
import { statistics } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ImpactChart = dynamic(() => import("@/components/ImpactChart"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 dark:bg-white/5 animate-pulse rounded-[3rem]" />
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function Impact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-500/30">
      {/* Immersive Cinematic Header */}
      <section className="relative pt-48 pb-32 bg-slate-950 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-600/10 blur-[150px] rounded-full translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40%] h-full bg-teal-600/10 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl"
            >
              <Activity size={14} className="animate-pulse" /> Real Impact. Real Change.
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.85] tracking-tighter">
              Hope in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic">Action.</span>
            </h1>
            
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Every donation tells a story. Witness how your support creates sustainable opportunities and transforms lives around the world.
            </p>

            <div className="flex justify-center gap-4 pt-6">
               <div className="px-8 py-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-black text-white">99.4%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Audit Score</div>
               </div>
               <div className="px-8 py-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-black text-white">24/7</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Data Feed</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Metrics Node Grid */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 selection:bg-emerald-500/30">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statistics.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="relative p-10 bg-white dark:bg-slate-950 rounded-[2.5rem] shadow-premium hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-white/5 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-emerald-600 transition-transform duration-500 group-hover:rotate-6">
                    {i === 0 ? <Users size={32} /> : i === 1 ? <TrendingUp size={32} /> : i === 2 ? <Globe size={32} /> : <Heart size={32} />}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</div>
                    <div className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kinetic Data Visualization (Chart) */}
      <section className="pb-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-950 p-10 md:p-20 rounded-[4rem] shadow-3xl border border-slate-100 dark:border-white/5 flex flex-col lg:flex-row gap-24 items-center overflow-hidden relative"
          >
             <div className="lg:w-5/12 space-y-10 relative z-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px]">
                    <BarChart3 size={14} /> Humanity Index
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                    Scaling <br /> <span className="text-emerald-600 italic">Hope.</span>
                  </h2>
                  <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Our impact metrics go beyond numbers. We track the resilience and self-sufficiency of every community we support.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-10">
                   <div className="space-y-2">
                      <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">2.4M+</div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Lives Empowered</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-4xl font-black text-emerald-600 tracking-tight">96.8%</div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Transparency Rating</div>
                   </div>
                </div>

                <div className="pt-6">
                  <Button size="lg" className="rounded-2xl h-16 px-10 border-none bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-black uppercase text-[11px] tracking-[0.3em] transition-all shadow-xl shadow-slate-200 dark:shadow-none translate-y-0 hover:-translate-y-1">
                    Download 2025 Audit <Zap className="ml-3 fill-white" size={16} />
                  </Button>
                </div>
             </div>

             <div className="lg:w-7/12 w-full h-[500px] relative">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full" />
                {mounted && <ImpactChart />}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Testimonials Section */}
      <section className="section-padding bg-white dark:bg-slate-900 relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col items-center text-center mb-24 space-y-6">
              <div className="text-emerald-600 font-black uppercase text-xs tracking-[0.4em]">Testimonials</div>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 dark:text-white leading-[0.8] tracking-tighter italic">Voice of Impact</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Abeba Solomon", location: "Addis Ababa, Ethiopia", text: "HopeBridge didn't just give us water. They gave us the infrastructure to own our future.", avatar: "https://i.pravatar.cc/150?u=1", role: "Cooperative Lead" },
                { name: "Chen Wei", location: "Sichuan, China", text: "The architectural restoration project respects our history while building modern safety.", avatar: "https://i.pravatar.cc/150?u=2", role: "Heritage Specialist" },
                { name: "Elena Ramos", location: "Mindanao, Philippines", text: "During the storm, the solar grids stayed active. We were able to coordinate rescue in real-time.", avatar: "https://i.pravatar.cc/150?u=3", role: "Local Emergency Coordinator" },
              ].map((story, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative p-12 bg-slate-50 dark:bg-slate-950 rounded-[3rem] space-y-10 group border border-slate-100 dark:border-white/5"
                >
                   <Quote size={60} className="text-emerald-600/10 absolute -top-4 -left-4 group-hover:scale-110 transition-transform duration-500" />
                   
                   <p className="text-2xl font-serif font-bold text-slate-800 dark:text-slate-100 leading-snug italic relative z-10">
                     &quot;{story.text}&quot;
                   </p>
                   
                   <div className="flex items-center gap-5 pt-4">
                      <div className="w-16 h-16 rounded-3xl overflow-hidden shadow-xl">
                         <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-slate-900 dark:text-white">{story.name}</h4>
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">{story.role}</span>
                           <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                           <span className="text-[10px] font-bold text-slate-400 tracking-wider leading-none">{story.location}</span>
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="py-32 bg-slate-950 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full" />
          
          <div className="text-center mb-20 space-y-4">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] relative z-10">Verified & Audited By</p>
            <div className="h-px w-32 bg-emerald-500/30 mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 relative z-10">
            {[
              { name: "UNESCO", icon: Globe, val: "Global Affiliate" },
              { name: "GUIDESTAR", icon: ShieldCheck, val: "Platinum Tier" },
              { name: "CharityWatch", icon: Target, val: "A+ Rated" },
              { name: "ImpactFirst", icon: Sparkles, val: "Certified Model" },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="flex items-center gap-4 text-white grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
              >
                <p.icon size={28} className="text-emerald-400" />
                <div>
                   <div className="text-xl font-black tracking-tighter uppercase">{p.name}</div>
                   <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{p.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
