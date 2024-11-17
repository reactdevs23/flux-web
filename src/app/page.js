import DiverseOutput from "@/components/DiverseOutput/DiverseOutput";
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageQuality from "@/components/ImageQuality/ImageQuality";
import PrecisePromt from "@/components/PrecisePromt/PrecisePromt";
import StartJourney from "@/components/StartJourney/StartJourney";
import Testimonials from "@/components/Testimonials/Testimonials";
import TextGeneration from "@/components/TextGeneration/TextGeneration";
import UniqueAdvantages from "@/components/UniqueAdvantages/UniqueAdvantages";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <PrecisePromt />
      <ImageQuality />
      <TextGeneration />
      <DiverseOutput />
      <UniqueAdvantages />
      <StartJourney />
    </>
  );
}
