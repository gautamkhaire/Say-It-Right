import HeroBanner from "@/components/HeroBanner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import DictionaryBanner from "@/components/DictionaryBanner";
import GuidanceSection from "@/components/GuidanceSection";

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <Features />
      <GuidanceSection/>
      <DictionaryBanner/>
      <Footer/>
    </main>
  );
}