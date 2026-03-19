import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TrainingCertifications from '@/components/TrainingCertifications';
import ExperienceContact from '@/components/ExperienceContact';
import ExtraCurricular from '@/components/ExtraCurricular';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      {/* 
        The ScrollyCanvas and Overlay run concurrently in the first 500vh of scroll.
        The ScrollyCanvas has a 500vh container, and inside it a sticky canvas.
        The Overlay uses global useScroll to animate fixed text on top.
      */}
      <div className="relative">
        <Overlay />
        <ScrollyCanvas />
      </div>

      {/* 
        After scrolling past the 500vh container, the other sections roll up 
        normally within document flow. 
      */}
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="training"><TrainingCertifications /></div>
      <div id="extracurricular"><ExtraCurricular /></div>
      <div id="experience"><ExperienceContact /></div>
      
      <CustomCursor />
    </main>
  );
}
