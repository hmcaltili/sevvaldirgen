"use client";

import { Mail, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-foreground">Uzm. Dt. Şevval Çaltılı Dirgen</h2>
          <p className="text-sm text-muted-foreground mt-1">Uzman Ağız, Diş ve Çene Cerrahı</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sevvalbyzac@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-white transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            İletişime Geç
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border/50 text-center flex flex-col items-center gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Uzm. Dt. Şevval Çaltılı Dirgen. Tüm hakları saklıdır.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-semibold text-accent hover:text-accent-light transition-colors"
        >
          Başa Dön
        </button>
      </div>
    </footer>
  );
}
