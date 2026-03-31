"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start h-full w-full px-4 md:px-6 pt-10 md:pt-16 pb-8 text-center overflow-y-auto no-scrollbar">
      <div className="max-w-3xl space-y-4 md:space-y-6 flex flex-col items-center w-full shrink-0">
        
        {/* Logo Integration */}
        <div className="w-full flex justify-center">
          <Image 
            src="/logo.png" 
            alt="SD Logo" 
            width={400} 
            height={400} 
            className="w-auto h-auto max-w-[200px] sm:max-w-[280px] md:max-w-[360px] max-h-[35vh] drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-center">
          Uzm. Dt. Şevval Çaltılı Dirgen
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto text-center">
          Uzman Ağız, Diş ve Çene Cerrahı
        </p>

        <div className="pt-6 sm:pt-8 md:pt-12 flex flex-col items-center text-muted-foreground gap-3">
          <div className="inline-block rounded-full bg-accent-light/10 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium text-accent">
            Vaka Arşivi
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-accent opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
