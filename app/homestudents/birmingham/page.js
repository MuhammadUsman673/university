import LocationHero from '../../components/LocationHero';
import CampusFeatures from '../../components/CampusFeatures';
import LocationPrograms from '../../components/LocationPrograms';
import WhyChooseLocation from '../../components/WhyChooseLocation';
import { locationData } from '../../data/locationData';

export default function BirminghamPage() {
  const location = locationData.birmingham;
  
  return (
    <div className="min-h-screen">
      <LocationHero location={location} />
      <CampusFeatures features={location.features} />
      <WhyChooseLocation location={location.name} benefits={location.benefits} />
      <LocationPrograms programs={location.programs} />
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of students at our {location.name} campus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/programs" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl">Browse Programs</a>
            <a href="/admissions" className="bg-blue-500/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/40 transition-all border-2 border-white/30">Apply Now</a>
            <a href="/contact" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all border-2 border-white">Contact Campus</a>
          </div>
        </div>
      </section>
    </div>
  );
}