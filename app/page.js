import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import StatsCounter from './components/StatsCounter';
import News from './components/News';
import Partners from './components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <StatsCounter />
      <News />
      <Partners />
    </>
  );
}