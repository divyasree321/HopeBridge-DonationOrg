import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutNavbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "HopeBridge | Empowering Global Communities Through Direct Aid",
  description: "HopeBridge is a premium nonprofit platform connecting donors with high-impact social programs. Together, we dismantle generational poverty through transparency and direct support.",
  openGraph: {
    title: "HopeBridge | Empowering Global Communities",
    description: "Connecting donors with high-impact social programs worldwide.",
    images: ["https://images.unsplash.com/photo-1488521787991-ed7bba677912?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        <ClientProviders>
          <LayoutNavbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
