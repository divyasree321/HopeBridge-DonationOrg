"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { impactMetrics } from "@/lib/data";

export default function ImpactChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={impactMetrics} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false} 
          tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} 
          dy={15}
        />
        <YAxis hide />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(15, 23, 42, 0.9)', 
            borderRadius: '24px', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            padding: '20px',
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)'
          }}
          itemStyle={{color: '#10b981', fontWeight: 'bold'}}
          labelStyle={{color: '#64748b', marginBottom: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em'}}
          cursor={{stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4'}}
        />
        <Area 
          type="monotone" 
          dataKey="impact" 
          stroke="#10b981" 
          strokeWidth={4} 
          fillOpacity={1} 
          fill="url(#colorImpact)" 
          animationDuration={3000}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
