import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import StatsCounter from './components/StatsCounter';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTABanner from './components/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <StatsCounter />  
      <News />
      <Testimonials />
      <Partners />
      <CTABanner />
    </>
  );
}