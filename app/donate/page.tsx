"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Globe, 
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const presets = [
  { amount: 500, impact: "Feeds 5 local families for a entire week" },
  { amount: 1000, impact: "Provides 1 child with a full year of education" },
  { amount: 2000, impact: "Provides clean water access for 20 people" },
  { amount: 5000, impact: "Empowers a woman with business micro-grants" },
  { amount: 10000, impact: "Equips a remote community with medical kits" },
];

export default function Donate() {
  const router = useRouter();
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const currentImpact = useMemo(() => {
    if (displayAmount >= 10000) return "Global impact partner: Sponsoring a full community node development.";
    if (displayAmount >= 5000) return "Dignity restorer: Scaling micro-business ventures for entire cooperatives.";
    if (displayAmount >= 2000) return "Life bringer: Deploying deep-well water filtration systems.";
    if (displayAmount >= 1000) return "Future builder: Sponsoring high-impact educational resources.";
    if (displayAmount >= 500) return "Protector: Delivering emergency food reserves for families.";
    if (displayAmount > 0) return "Catalyst: Contributing to essential community-led aid operations.";
    return "Ready to make a difference.";
  }, [displayAmount]);

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment logic
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      toast.success("Thank you for supporting HopeBridge ❤️", {
        description: `Your ${frequency} gift of ₹${displayAmount} is being processed.`
      });
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 relative overflow-hidden selection:bg-emerald-500/30">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-teal-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start relative z-10">
        {/* Left Side: Editorial Context & Real-time Impact */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">
              <Heart size={14} className="fill-emerald-400" /> Gift of Hope
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
              A Single Act, <br /> <span className="text-emerald-500 italic">Unlimited</span> Hope.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-md font-medium">
              Join a global community of compassionate donors building sustainable futures for families in need.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
             <div className="flex gap-6 group">
               <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                 <ShieldCheck size={28} />
               </div>
               <div className="space-y-1 pt-1">
                 <h4 className="text-xl font-bold text-white">Secure & Trusted</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">Certified 501(c)(3) status with audited transparency across all programs.</p>
               </div>
             </div>
             <div className="flex gap-6 group">
               <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                 <Users size={28} />
               </div>
               <div className="space-y-1 pt-1">
                 <h4 className="text-xl font-bold text-white">Direct Aid</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">Every dollar is optimized to reach families and children directly where it&apos;s needed most.</p>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full opacity-30" />
            <Card className="bg-slate-900 border-white/10 rounded-[3rem] overflow-hidden text-white p-10 space-y-8 shadow-4xl relative z-10 backdrop-blur-3xl">
              <div className="flex justify-between items-center">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Live Prediction</h4>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-emerald-500 tracking-tighter">₹{displayAmount || "0"}</span>
                  <span className="text-lg font-bold text-slate-500 uppercase tracking-widest">{frequency}</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentImpact}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-xl font-medium text-slate-300 leading-snug italic"
                  >
                    &quot;{currentImpact}&quot;
                  </motion.p>
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Side: High-Performance Donation Engine */}
        <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[4rem] shadow-3xl">
          <form onSubmit={handleDonation} className="space-y-12">
            {/* Step Header */}
            <div className="flex items-center gap-6 pb-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-glow border-none">1</div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Configure Support</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.1em]">Select frequency and allocation amount</p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Frequency Toggle */}
              <div className="flex bg-slate-100 p-2 rounded-[2rem] w-full">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`flex-1 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 border-none ${frequency === "one-time" ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"}`}
                >
                  One-time Operation
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`flex-1 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 border-none ${frequency === "monthly" ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"}`}
                >
                  Monthly Sustenance
                </button>
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {presets.map((p) => (
                  <button
                    key={p.amount}
                    type="button"
                    onClick={() => { setAmount(p.amount); setCustomAmount(""); }}
                    className={`h-28 rounded-3xl border-2 font-black text-2xl transition-all duration-300 relative overflow-hidden group ${
                      amount === p.amount && !customAmount
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-2xl shadow-emerald-100 translate-y-[-4px]"
                      : "border-slate-100 hover:border-emerald-200 text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span className="relative z-10">₹{p.amount.toLocaleString()}</span>
                    <div className="absolute top-2 right-4 text-[7px] text-emerald-600 font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">Select</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-transform duration-300 ${amount === p.amount && !customAmount ? "scale-x-100" : "scale-x-0"}`} />
                  </button>
                ))}
                <div className="relative col-span-full lg:col-span-1">
                  <div className={`absolute -top-6 left-2 text-[8px] font-black uppercase tracking-[0.2em] transition-opacity ${customAmount ? "opacity-100" : "opacity-0"}`}>Enter Custom Amount</div>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400">₹</span>
                    <Input
                      placeholder="Other"
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount(0);
                      }}
                      className="h-28 rounded-3xl border-2 border-slate-100 focus-visible:ring-emerald-500 pl-12 pr-6 font-black text-center text-2xl transition-all hover:bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step Header 2 */}
            <div className="flex items-center gap-6 pt-8 pb-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl">2</div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Identity & Verification</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.1em]">Secure your contribution profile</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input placeholder="Full Name" className="h-16 rounded-2xl border-slate-100 px-6 font-bold focus:bg-slate-50 transition-colors" required />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Email Address" type="email" className="h-16 rounded-2xl border-slate-100 px-6 font-bold focus:bg-slate-50 transition-colors" required />
                </div>
              </div>

              <div className="space-y-6 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Encrypted Gateway</label>
                  <CreditCard size={18} className="text-slate-300" />
                </div>
                <div className="relative">
                  <Input placeholder="0000 0000 0000 0000" className="h-16 rounded-2xl border-white bg-white px-6 font-bold placeholder:text-slate-300 shadow-sm" required />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Input placeholder="MM / YY" className="h-16 rounded-2xl border-white bg-white px-6 font-bold placeholder:text-slate-300 shadow-sm text-center" required />
                  <Input placeholder="CVC" className="h-16 rounded-2xl border-white bg-white px-6 font-bold placeholder:text-slate-300 shadow-sm text-center" required />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-24 rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-xl font-black uppercase tracking-[0.2em] shadow-glow btn-glow transition-all active:scale-[0.98] border-none"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending Hope...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    Send My Gift <ArrowRight size={24} />
                  </div>
                )}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">
               <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full"><ShieldCheck size={14} className="text-emerald-500" /> SSL Protocol v3.0</div>
               <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full"><Heart size={14} className="text-emerald-500" fill="currentColor" /> Tax Exempt 501(c)(3)</div>
            </div>
          </form>
        </div>
      </div>

      {/* Futuristic Success Dialog */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-xl rounded-[4rem] p-0 border-none bg-slate-950 overflow-hidden text-center shadow-4xl selection:bg-emerald-500/30">
          <div className="relative p-12 md:p-20 space-y-10 overflow-hidden">
             {/* Background Particles Simulation */}
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-emerald-500)_0%,transparent_70%)] animate-pulse" />
             </div>

              <div className="relative z-10 max-w-sm mx-auto space-y-10 group/success">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
                  <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto text-white shadow-glow relative z-10 group-hover/success:scale-110 transition-transform duration-500">
                    <CheckCircle2 size={64} strokeWidth={3} />
                  </div>
                </div>
                
                <DialogHeader className="space-y-6">
                  <motion.div animate={{ opacity: [0, 1], y: [10, 0] }}>
                    <DialogTitle className="text-6xl font-serif font-bold text-white tracking-tighter leading-[0.85]">
                      A Life <br /> <span className="text-emerald-500 italic">Transformed.</span>
                    </DialogTitle>
                  </motion.div>
                  <DialogDescription className="text-xl text-slate-400 font-medium pt-2">
                    Your compassionate gift of <span className="text-emerald-400 font-bold tracking-tight">₹{displayAmount.toLocaleString()}</span> is already making its way to children and families in need.
                  </DialogDescription>
                </DialogHeader>

               <div className="pt-8 flex flex-col gap-4">
                 <Button onClick={() => router.push('/impact')} className="w-full rounded-2xl h-20 text-lg font-black uppercase tracking-[0.2em] bg-emerald-600 shadow-glow btn-glow border-none">
                    View Real-Time Node Map <p className="inline-block ml-3"><Globe size={20} /></p>
                 </Button>
                 <button onClick={() => setIsSuccess(false)} className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors py-4 border-none bg-transparent cursor-pointer">
                   Return to Dashboard
                 </button>
               </div>
               </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
