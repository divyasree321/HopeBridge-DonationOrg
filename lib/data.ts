export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  raised: number;
  goal: number;
  donors: number;
  image: string;
}

export const programs: Program[] = [
  {
    id: "1",
    title: "Horizon Academy",
    category: "Education",
    description: "Providing modern educational infrastructure and digital learning tools for 500+ children in rural Karnataka.",
    raised: 1250000,
    goal: 5000000,
    donors: 1240,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2",
    title: "Aquifer Network",
    category: "Clean Water",
    description: "Deploying deep-well water filtration systems and solar pumps across drought-prone regions in Maharashtra.",
    raised: 3450000,
    goal: 4000000,
    donors: 2850,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "3",
    title: "Nourish Global",
    category: "Food Relief",
    description: "Scaling community kitchens that provide 10,000+ nutritious meals daily to urban displaced families.",
    raised: 2100000,
    goal: 3000000,
    donors: 1890,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bba677912?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "4",
    title: "EmpowerCraft",
    category: "Women's Empowerment",
    description: "Supporting women-led artisan cooperatives with financial literacy and global marketplace access.",
    raised: 850000,
    goal: 1500000,
    donors: 920,
    image: "https://images.unsplash.com/photo-1540331547168-8b63109228b7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "5",
    title: "Mobile Clinic",
    category: "Medical Aid",
    description: "Operating mobile surgical and primary care units in remote Himalayan zones with limited healthcare infrastructure.",
    raised: 4200000,
    goal: 6000000,
    donors: 3100,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "6",
    title: "Green Canopy",
    category: "Sustainability",
    description: "Restoring indigenous forest ecosystems while training local communities in sustainable agroforestry.",
    raised: 1100000,
    goal: 2000000,
    donors: 1150,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  },
];

export const statistics = [
  {
    label: "Communities Served",
    value: "250+",
    description: "Direct operational nodes across global vulnerability zones.",
    color: "text-emerald-500",
  },
  {
    label: "Success Retention",
    value: "92%",
    description: "Sustainable autonomy achieved within 24 months of deployment.",
    color: "text-teal-500",
  },
  {
    label: "Direct Aid Ratio",
    value: "94.2%",
    description: "Industry-leading capital efficiency with minimal operational friction.",
    color: "text-emerald-400",
  },
  {
    label: "Activist Network",
    value: "65K",
    description: "Dedicated mensual donors driving structural generational change.",
    color: "text-emerald-600",
  },
];

export const impactMetrics = [
  { month: "JAN", impact: 4000 },
  { month: "FEB", impact: 3000 },
  { month: "MAR", impact: 5000 },
  { month: "APR", impact: 4500 },
  { month: "MAY", impact: 6000 },
  { month: "JUN", impact: 5500 },
  { month: "JUL", impact: 7000 },
  { month: "AUG", impact: 8500 },
  { month: "SEP", impact: 8000 },
  { month: "OCT", impact: 9500 },
  { month: "NOV", impact: 10000 },
  { month: "DEC", impact: 12000 },
];
