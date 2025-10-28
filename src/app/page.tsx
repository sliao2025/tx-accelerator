import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import CTA from "@/components/CTA";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
    </main>
  );
}
