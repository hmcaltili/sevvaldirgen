import Hero from "@/components/Hero";
import CaseGallery from "@/components/CaseGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center w-full bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      <Hero />
      <CaseGallery />
      <Footer />
    </main>
  );
}
