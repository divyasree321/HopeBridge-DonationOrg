import { programs } from "@/lib/data";
import ProgramDetailClient from "@/components/ProgramDetailClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id.toString(),
  }));
}

export default async function ProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="pt-40 text-center min-h-screen bg-slate-950 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
          Error Protocol 404
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter">Operation Not Found</h2>
        <p className="text-slate-400 text-xl max-w-md mx-auto mb-12 font-medium">
          The requested operational brief could not be located in our decentralized network.
        </p>
        <Button asChild className="rounded-2xl bg-emerald-600 h-16 px-10 text-lg font-black uppercase tracking-widest border-none hover:bg-emerald-500 shadow-glow">
          <Link href="/programs">Return to Base</Link>
        </Button>
      </div>
    );
  }

  return <ProgramDetailClient program={program} />;
}
