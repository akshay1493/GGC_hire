import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import WhyGGC from '../sections/WhyGGC';
import HowItWorks from '../sections/HowItWorks';
import PlatformPreview from '../sections/PlatformPreview';
import Industries from '../sections/Industries';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyGGC />
      <PlatformPreview />
      <Industries />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
