"use client";

import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster position="top-center" expand={false} richColors closeButton theme="dark" />
      {children}
    </TooltipProvider>
  );
}
