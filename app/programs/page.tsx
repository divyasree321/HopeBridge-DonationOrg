"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Zap, Target, TrendingUp, Users, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import Link from 'next/link';
import { programs } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = ["All", "Education", "Clean Water", "Food Relief", "Women's Empowerment", "Medical Aid"];

const liveActivities = [
  { name: "Aarav", amount: "₹25,000", target: "Horizon Academy", time: "2 min ago" },
  { name: "Elena", amount: "₹1,00,000", target: "Mobile Clinic", time: "5 min ago" },
  { name: "Chen", amount: "₹5,000", target: "Aquifer Network", time: "8 min ago" },
  { name: "Priya", amount: "₹50,000", target: "Nourish Global", time: "12 min ago" },
  { name: "Marcus", amount: "₹10,000", target: "EmpowerCraft", time: "15 min ago" },
];

export default function Programs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Popular");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const featuredProgram = programs[1]; // Aquifer Network as featured

  const filteredPrograms = useMemo(() => {
    let result = programs.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    if (activeSort === "Most Funded") {
      result = [...result].sort((a, b) => b.raised - a.raised);
    } else if (activeSort === "Near Goal") {
      result = [...result].sort((a, b) => (b.raised / b.goal) - (a.raised / a.goal));
    } else if (activeSort === "Newest") {
      result = [...result].reverse();
    }

    return result;
  }, [search, activeCategory, activeSort]);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-white dark:bg-slate-950 selection:bg-emerald-500/30 relative overflow-hidden">
      
      {/* Interactive Background Glow */}
      <motion.div 
        animate={{
          x: mousePos.x - 400,
          y: mousePos.y - 400,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="fixed pointer-events-none w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full z-0"
      />

      {/* 1. Live Activity Ticker */}
      <div className="w-full bg-slate-900 overflow-hidden py-3 border-b border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...liveActivities, ...liveActivities].map((activity, i) => (
            <div key={i} className="inline-flex items-center gap-3 px-8 border-r border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                <span className="text-white">{activity.name}</span> donated <span className="text-emerald-400 font-bold">{activity.amount}</span> to <span className="text-white italic">{activity.target}</span>
              </span>
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* 2. Featured Campaign Hero */}
        <section className="pt-20 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-slate-900 rounded-[4rem] overflow-hidden shadow-4xl aspect-[16/10] md:aspect-[21/9]"
          >
            <img 
              src={featuredProgram.image} 
              alt="Featured" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-center max-w-3xl space-y-10">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">
                    <Sparkles size={14} className="fill-emerald-400" /> Urgent Community Need
                  </div>
                  <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.85] tracking-tighter">
                    Empowering the <br /> <span className="text-emerald-500 italic">{featuredProgram.title}.</span>
                  </h2>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                    Deploying life-saving support and educational foundations for families in need. 
                    Be the catalyst for a child's future.
                  </p>
               </div>

               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-white tracking-tighter">₹{featuredProgram.raised.toLocaleString()}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gifts Received</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-emerald-500 tracking-tighter">88.5%</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Deployment Progress</div>
                  </div>
                  <div className="hidden lg:block space-y-1">
                    <div className="text-3xl font-black text-white tracking-tighter">12 Days</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol Window</div>
                  </div>
                  <div className="hidden lg:block space-y-1">
                    <div className="text-3xl font-black text-white tracking-tighter">45K</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Potential Impact</div>
                  </div>
               </div>

               <div>
                 <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-white text-slate-900 hover:bg-emerald-600 hover:text-white font-black uppercase text-xs tracking-widest transition-all shadow-glow border-none">
                    <Link href={`/programs/${featuredProgram.id}`} className="flex items-center gap-3">
                      View Operational Brief <ArrowRight size={18} />
                    </Link>
                 </Button>
               </div>
            </div>

            {/* Float Decor */}
            <div className="absolute top-12 right-12 hidden lg:flex flex-col gap-4">
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center space-y-1">
                  <ShieldCheck className="text-emerald-400" size={24} />
                  <span className="text-[8px] font-black text-white uppercase tracking-tighter">Audited</span>
               </div>
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center space-y-1">
                  <Users className="text-emerald-400" size={24} />
                  <span className="text-[8px] font-black text-white uppercase tracking-tighter">Global</span>
               </div>
            </div>
          </motion.div>
        </section>

        {/* 3. Header & Filter System */}
        <header className="mb-24 space-y-12">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-end justify-between">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6 max-w-2xl"
             >
                <div className="text-emerald-600 font-black uppercase text-[10px] tracking-[0.4em]">Grid Overview</div>
                <h2 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
                  Intervention <br /> <span className="text-emerald-600 italic">Inventory.</span>
                </h2>
             </motion.div>

             <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-white/5">
                   <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 flex items-center justify-center text-emerald-600 shadow-sm">
                      <TrendingUp size={20} />
                   </div>
                   <div>
                      <div className="text-lg font-black text-slate-900 dark:text-white tracking-tight">₹52.4Cr</div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Sourced</div>
                   </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-white/5 font-bold">
                   <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 flex items-center justify-center text-emerald-600 shadow-sm">
                      <Target size={20} />
                   </div>
                   <div>
                      <div className="text-lg font-black text-slate-900 dark:text-white tracking-tight">8,240</div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Milestones Met</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between bg-slate-50 dark:bg-slate-900 p-6 md:p-10 rounded-[3.5rem] border border-slate-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -mr-16 -mt-16" />
            
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
              <Input
                placeholder="Lookup intervention code..."
                className="pl-14 h-16 bg-white dark:bg-slate-800 border-transparent rounded-[2rem] shadow-premium font-bold placeholder:text-slate-400 text-slate-800 dark:text-white transition-all focus:ring-emerald-500/20 text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filter Desktop */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
               <div className="hidden xl:flex items-center gap-3 pr-4 border-r border-slate-200 dark:border-white/10">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sort By</div>
                  {["Popular", "Near Goal", "Most Funded"].map(sort => (
                    <button 
                      key={sort}
                      onClick={() => setActiveSort(sort)}
                      className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${activeSort === sort ? "bg-slate-900 dark:bg-emerald-600 text-white" : "text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                    >
                      {sort}
                    </button>
                  ))}
               </div>
               
               <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                        activeCategory === cat
                          ? "bg-emerald-600 text-white shadow-glow"
                          : "bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white border border-slate-200 dark:border-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </header>

        {/* 4. Programs Grid with Bento Widgets Interspersed */}
        {filteredPrograms.length > 0 ? (
          <div className="space-y-16">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredPrograms.slice(0, 3).map((program) => (
                  <motion.div
                    key={program.id}
                    layout
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1 }
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProgramCard program={program} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Impact Bento Middle Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
               <div className="md:col-span-8 bg-emerald-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10" />
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-10">
                     <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-lg text-white text-[10px] font-black uppercase tracking-widest">
                           <AlertCircle size={14} /> Urgent Call to Action
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter italic text-white">Help us reach our monthly support goal.</h3>
                        <p className="text-emerald-50 text-xl font-medium leading-relaxed max-w-xl">
                          We are currently at 72% of our community support goal for the month. Your gift ensures no family is left without vital aid.
                        </p>
                     </div>
                     <div className="space-y-6">
                        <div className="flex justify-between items-end">
                           <div className="text-[10px] font-black uppercase tracking-widest opacity-80">₹3.8Cr of ₹5Cr Goal</div>
                           <div className="text-4xl font-black tracking-tighter">72%</div>
                        </div>
                        <div className="h-4 w-full bg-white/20 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "72%" }}
                             transition={{ duration: 2 }}
                             className="h-full bg-white shadow-glow" 
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="md:col-span-4 bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-between space-y-10 border border-white/5">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      <Users size={32} />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white tracking-tight italic">200K+ Global Guardians</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">
                      A worldwide collective of donors driving sustainable change every minute.
                    </p>
                  </div>
                  <Button asChild className="w-full h-14 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all border-none">
                    <Link href="/donate">Join the Collective</Link>
                  </Button>
               </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredPrograms.slice(3).map((program) => (
                  <motion.div
                    key={program.id}
                    layout
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1 }
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProgramCard program={program} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 space-y-8 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-sm"
          >
            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-200 dark:text-slate-700 border border-slate-100 dark:border-white/5">
              <Search size={40} />
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight italic text-emerald-600">Zero Nodes Found</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">No active interventions match your current lookup protocol.</p>
            </div>

            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); setActiveSort("Popular"); }}
              className="px-10 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl"
            >
              Reset Protocol
            </button>
          </motion.div>
        )}

        {/* 5. Trust & Social Proof Bottom */}
        <section className="pt-40 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-slate-50 dark:bg-slate-900 p-12 md:p-20 rounded-[4rem] border border-slate-100 dark:border-white/5">
             <div className="max-w-md space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  <ShieldCheck size={14} /> Verification Protocol
                </div>
                <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tighter italic leading-tight">Trusted by 50,000+ Institutional Donors</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Every transaction is audited by third-party agencies and recorded on our live transparency ledger.
                </p>
             </div>

             <div className="grid grid-cols-2 gap-8 opacity-40 grayscale dark:invert">
                <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">UNESCO</div>
                <div className="text-2xl font-black tracking-tighter italic text-slate-900 dark:text-white">GUIDESTAR</div>
                <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">USAID</div>
                <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">CharityWatch</div>
             </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
