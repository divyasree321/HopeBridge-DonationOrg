"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Target, Globe, Clock, Sparkles, CheckCircle2, Heart } from "lucide-react";
import { Program } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const percent = Math.round((program.raised / program.goal) * 100);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[640px] perspective-1000"
    >
      <div className="relative h-full bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-premium hover:shadow-3xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col group">
        {/* Visual Header */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <Badge className="bg-emerald-600 text-white border-none px-4 py-1.5 rounded-full font-black uppercase text-[9px] tracking-widest shadow-glow">
              {program.category}
            </Badge>
          </div>

          <div className="absolute top-6 right-6">
            <Tooltip>
              <TooltipTrigger>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl cursor-help">
                  <Sparkles size={20} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 text-white border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest">High-Impact Featured Program</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Quick Metrics Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Funding Progress</div>
              <div className="text-3xl font-black tracking-tighter">{percent}%</div>
            </div>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 shadow-glow transition-all duration-1000" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-10 space-y-8 flex-grow relative">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 border border-slate-100 dark:border-slate-700 shadow-sm pt-1">
                <Target size={20} />
              </div>
              <h3 className="text-3xl font-serif font-bold tracking-tighter text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform leading-none pt-2">
                {program.title}
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 line-clamp-3 text-lg leading-relaxed font-medium">
              {program.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Tooltip>
                  <TooltipTrigger>
                    <Heart size={14} className="text-emerald-500 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 text-white border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest">Compassionate Community Donors</p>
                  </TooltipContent>
                </Tooltip>
                Vetted Donors
              </div>
              <div className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">{program.donors.toLocaleString()}</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Tooltip>
                  <TooltipTrigger>
                    <Globe size={14} className="text-emerald-500 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 text-white border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest">Strategic Impact Zone</p>
                  </TooltipContent>
                </Tooltip>
                Impact Zone
              </div>
              <div className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Global Hub</div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <CheckCircle2 size={16} /> 100% Transparency
            </div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <Tooltip>
                <TooltipTrigger>
                  <Clock size={16} className="cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 text-white border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest">Operational Status: Active & Deploying</p>
                </TooltipContent>
              </Tooltip>
              Active Ops
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-10 pb-10 mt-auto">
          <Button asChild className="w-full h-18 bg-slate-900 hover:bg-emerald-600 text-white rounded-3xl font-black uppercase text-[11px] tracking-[0.3em] transition-all duration-500 shadow-2xl relative overflow-hidden group/btn border-none">
            <Link href={`/programs/${program.id}`} className="flex items-center justify-center gap-3 relative z-10 w-full h-full">
              Support this Community <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
