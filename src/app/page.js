import DiverseOutput from "@/components/DiverseOutput/DiverseOutput";
import HeroSection from "@/components/HeroSection/HeroSection";
import PrecisePromt from "@/components/PrecisePromt/PrecisePromt";
import StartJourney from "@/components/StartJourney/StartJourney";
import Testimonials from "@/components/Testimonials/Testimonials";
import TextGeneration from "@/components/TextGeneration/TextGeneration";
import UniqueAdvantages from "@/components/UniqueAdvantages/UniqueAdvantages";
import { amenda } from "@/images";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <PrecisePromt />
      <TextGeneration />
      <StartJourney />
      <UniqueAdvantages />
      <DiverseOutput />
    </>
  );
}
