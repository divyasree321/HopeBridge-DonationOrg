"use client";

import Link from "next/link";
import { Heart, Globe, Github, Twitter, Instagram, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-12 overflow-hidden selection:bg-emerald-500/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-glow">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-3xl font-serif font-bold text-white tracking-tighter">
                HopeBridge<span className="text-emerald-500">.</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-sm">
              Engineering sustainable autonomy for the world&apos;s most vulnerable communities through radical transparency.
            </p>
            
            <div className="flex items-center gap-6">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <ShieldCheck size={20} />
               </div>
               <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-tight">
                 Verified Platinum Status <br /> <span className="text-white">Guidestar Audited 2025</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Quick Nodes */}
          <div className="lg:col-span-2 space-y-10">
             <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] pt-4">Navigation</h4>
             <ul className="space-y-6">
               {["Home", "Programs", "Impact", "About", "Transparency"].map((item) => (
                 <li key={item}>
                   <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-slate-400 font-bold hover:text-white transition-colors">
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-10">
             <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] pt-4">Contact</h4>
             <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                   <Mail size={18} className="text-emerald-500 mt-1" />
                   <span className="text-slate-400 font-bold group-hover:text-white transition-colors">impact@hopebridge.org</span>
                </li>
                <li className="flex items-start gap-4 group">
                   <Phone size={18} className="text-emerald-500 mt-1" />
                   <span className="text-slate-400 font-bold group-hover:text-white transition-colors">+1 (800) HOPE-AID</span>
                </li>
             </ul>
          </div>

          {/* Legal / Location */}
          <div className="lg:col-span-3 space-y-10">
             <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] pt-4">HQ Node</h4>
             <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-slate-400 font-medium leading-relaxed">
                    742 Impact Plaza, <br />
                    Financial District, <br />
                    San Francisco, CA 94104
                  </p>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-2">
                     {[1, 2, 3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?u=${i+50}`} alt="Admin" referrerPolicy="no-referrer" />
                       </div>
                     ))}
                   </div>
                   <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Global Support Team</div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © 2025 HopeBridge Humanitarian Collective. All Rights Reserved.
          </div>
          <div className="flex items-center gap-10 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Donor Rights</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Impact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
