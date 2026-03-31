"use client";

import { useRef, useState, useEffect } from "react";
import CaseCard from "./CaseCard";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Load all photos from public/photos
const PHOTOS = [
  "/photos/1.png",
  "/photos/2.png",
  "/photos/3.png",
  "/photos/4.png",
  "/photos/5.png",
  "/photos/6.png",
  "/photos/7.png",
  "/photos/8.png",
  "/photos/9.png",
  "/photos/10.png",
  "/photos/WhatsApp Image 2026-03-30 at 13.24.38 (2).jpeg"
];

export default function CaseGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-24 bg-foreground/5 dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Vakalar
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Mobil: Yatay Scroll | Masaüstü: Grid (2x5 vs) */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible px-6 xl:px-32 py-8 gap-4 lg:gap-6 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PHOTOS.map((photo, idx) => {
            const isLast = idx === PHOTOS.length - 1;
            return (
              <div
                key={idx}
                className={isLast ? "md:col-start-2 lg:col-start-3" : ""}
              >
                <CaseCard 
                  index={idx} 
                  imageSrc={photo} 
                  onClick={() => setSelectedImage(photo)} 
                />
              </div>
            );
          })}

          {/* Mobilde en son kartın düzgün durmasını sağlayan boşluk */}
          <div className="snap-center shrink-0 w-6 md:hidden" />
        </div>
      </div>
      
      {/* Mobile Navigation controls */}
      <div className="mt-8 flex items-center justify-center gap-6 md:hidden">
        <button 
          onClick={scrollLeft}
          className="p-3 rounded-full bg-card border border-border/50 text-foreground active:bg-accent active:text-white transition-all shadow-sm active:scale-95"
          aria-label="Önceki Vaka"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollRight}
          className="p-3 rounded-full bg-card border border-border/50 text-foreground active:bg-accent active:text-white transition-all shadow-sm active:scale-95"
          aria-label="Sonraki Vaka"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-start bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Kapatma Butonu */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[120] cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Top Spacer to push image down from notch area */}
            <div className="w-full h-[10vh] md:h-[8vh] shrink-0" />

            {/* Büyük Resim */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full shrink-0 h-[65vh] md:h-[75vh] max-w-6xl rounded-lg overflow-hidden cursor-default md:px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Detaylı Vaka Görseli"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Alt Logo (Lightbox) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full flex flex-col items-center justify-center pointer-events-none z-[110]"
            >
              <Image 
                src="/logo.png" 
                alt="SD Logo Overlay" 
                width={160} 
                height={160} 
                className="w-32 md:w-28 h-auto opacity-90 drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
