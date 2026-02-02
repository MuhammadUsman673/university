import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import OurStory from '../components/OurStory';
import Leadership from '../components/Leadership';
import CampusLocations from '../components/CampusLocations';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <OurStory />
      <Leadership />
      <CampusLocations />
    </div>
  );
}