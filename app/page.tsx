import Footer from "@/components/footer";
import GenerateSection from "@/components/generate-section";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="transition-colors duration-300">
      <Navbar />
      <Hero />
      <GenerateSection />
      <Footer />
    </main>
  );
}
