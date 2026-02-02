import AdmissionsHero from '../components/AdmissionsHero';
import ApplicationProcess from '../components/ApplicationProcess';
import AdmissionRequirements from '../components/AdmissionRequirements';
import FeesScholarships from '../components/FeesScholarships';

export default function AdmissionsPage() {
  return (
    <div>
      <AdmissionsHero />
      <ApplicationProcess/>
      <AdmissionRequirements />
      <FeesScholarships />
    </div>
  );
}