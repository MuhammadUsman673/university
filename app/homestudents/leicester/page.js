import LocationHero from '../../components/LocationHero';
import CampusFeatures from '../../components/CampusFeatures';
import LocationPrograms from '../../components/LocationPrograms';
import WhyChooseLocation from '../../components/WhyChooseLocation';
import { locationData } from '../../data/locationData';

export default function LeicesterPage() {
  const location = locationData.leicester;
  
  return (
    <div className="min-h-screen">
      <LocationHero location={location} />
      <CampusFeatures features={location.features} />
      <WhyChooseLocation location={location.name} benefits={location.benefits} />
      <LocationPrograms programs={location.programs} />
      
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>Join thousands of students at our {location.name} campus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all border-2 border-white/30 hover:bg-white/10" style={{ backgroundColor: 'rgba(45,95,63,0.3)' }}>Apply Now</a>
            <a href="/contact" className="bg-transparent text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all border-2 border-white">Contact Campus</a>
          </div>
        </div>
      </section>
    </div>
  );
}