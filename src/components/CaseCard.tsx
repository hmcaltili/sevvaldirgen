"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseCardProps {
  imageSrc: string;
  index: number;
  onClick: () => void;
}

export default function CaseCard({ imageSrc, index, onClick }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="snap-center shrink-0 w-[85vw] md:w-full aspect-square flex flex-col bg-card border border-border/50 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
    >
      <div className="relative w-full h-full flex items-center justify-center bg-black/5 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Klinik Vaka ${index + 1}`}
          fill
          sizes="(max-width: 1080px) 100vw, 1080px"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="text-white text-sm md:text-base font-medium px-5 py-2 border border-white/50 rounded-full backdrop-blur-md bg-black/30 transform translate-y-4 group-hover:translate-y-0 shadow-xl transition-transform duration-300">
            Büyük Halini Gör
          </span>
        </div>
      </div>
    </motion.div>
  );
}
