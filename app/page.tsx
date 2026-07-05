import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 pt-6 pb-16 font-sans selection:bg-yellow-500 selection:text-black">
      {/* Container utama: Terkunci di ukuran HP (max-w-md) agar presisi di Facebook Mobile */}
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* 1. Header Urgency Alert */}
        <div className="w-full bg-zinc-900/80 border border-zinc-800 rounded-full py-2 px-4 text-center mb-6 shadow-sm backdrop-blur-sm">
          <p className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            Exclusive Wealth Infrastructure Presentation
          </p>
        </div>

        {/* 2. Killer Headline Area */}
        <section className="text-center mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-white leading-tight mb-3 px-1">
            The Modern Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">Financial Freedom.</span>
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed px-2">
            No fluff. No overnight riches false promises. Just a structured, step-by-step curriculum designed for long-term elite wealth infrastructure.
          </p>
        </section>

        {/* 3. Media Utama (Hero Asset dari Vendor) */}
        <div className="w-full relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shadow-yellow-500/5 mb-6 aspect-video bg-zinc-900">
          <Image 
            src="/hero.webp" 
            alt="True Prosperity Path" 
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 4. Jembatan Edukasi (Micro-Advertorial) */}
        <section className="w-full bg-zinc-950 border border-zinc-900 rounded-xl p-5 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Why The TPP System?
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Unlike standard internet marketing courses, this comprehensive blueprint provides the exact framework used by elite digital entrepreneurs to scale their wealth systematically.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            You are not just buying a guide—you are acquiring a plug-and-play educational asset with proven high-converting infrastructure built in.
          </p>
        </section>

        {/* 5. Golden Call-to-Action (CTA) Button with Advanced Trust Signals */}
        <div className="w-full sticky bottom-4 left-0 right-0 px-2 sm:relative sm:bottom-0 sm:px-0">
          <a 
            href="https://www.checkout-ds24.com/redir/656847/bangrentv/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full flex items-center justify-center text-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold text-sm py-4 px-6 rounded-xl shadow-xl shadow-yellow-500/10 transition-all transform active:scale-[0.98] tracking-wide uppercase mb-4"
          >
            Access The TPP System Now →
          </a>
          
          {/* Lencana Keamanan & Logo Partner Resmi */}
          <div className="w-full flex flex-col items-center justify-center bg-zinc-950 border border-zinc-900 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Encrypted & Secure Connection</span>
            </div>
            
            <div className="w-full h-px bg-zinc-900" />
            
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Official Processor</span>
              <div className="relative w-36 h-8">
                <Image 
                  src="/digistore24.svg" 
                  alt="Digistore24 Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}