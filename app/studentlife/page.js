import StudentLifeHero from '../components/StudentLifeHero';
import CampusFacilities from '../components/CampusFacilities';
import StudentClubs from '../components/StudentClubs';
import EventsTimeline from '../components/EventsTimeline';
import StudentTestimonials from '../components/StudentTestimonials';

export default function StudentLifePage() {
  return (
    <div className="min-h-screen">
      <StudentLifeHero />
      <CampusFacilities />
      <StudentClubs />
      <EventsTimeline />
      <StudentTestimonials />
    </div>
  );
}