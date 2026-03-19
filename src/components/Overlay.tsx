'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // FADE IN / OUT logic
  // Section 1: Starts hidden, shows up after a little scroll, then fades out
  const opacity1 = useTransform(scrollYProgress, [0, 0.04, 0.09, 0.16, 0.22], [0, 0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.09, 0.16, 0.22], [50, 0, 0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      {/* SECTION 1: Center & Socials */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 z-20"
      >
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Gunrit Kaur
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-2 font-medium tracking-wide mb-6">
            Aspiring Data Analyst & Scientist
          </p>
          
          <p className="max-w-2xl text-sm md:text-base text-gray-300 mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            I am a detail-oriented engineering student with a deep passion for uncovering stories hidden within complex datasets. I chose Data Analytics and Science because I am driven by the power of statistical modeling and machine learning to solve real-world problems. My career goal is to leverage my analytical skills to build innovative, data-driven solutions at the forefront of the tech industry.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pointer-events-auto">
             <button onClick={() => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-5 py-2.5 rounded-full border border-white/20 bg-black/20 hover:bg-white text-white hover:text-black text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-300">Skills</button>
             <button onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-5 py-2.5 rounded-full border border-white/20 bg-black/20 hover:bg-white text-white hover:text-black text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-300">Work</button>
             <button onClick={() => { document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-5 py-2.5 rounded-full border border-white/20 bg-black/20 hover:bg-white text-white hover:text-black text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-300">Certificates</button>
             <button onClick={() => { document.getElementById('extracurricular')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-5 py-2.5 rounded-full border border-white/20 bg-black/20 hover:bg-white text-white hover:text-black text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-300">Activities</button>
             <button onClick={() => { document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-5 py-2.5 rounded-full border border-white/20 bg-black/20 hover:bg-white text-white hover:text-black text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-300">Connect</button>
          </div>
        </div>

        {/* Social Icons at Bottom Left */}
        <div className="absolute bottom-8 left-8 md:bottom-16 flex gap-4 pointer-events-auto">
          <a href="https://github.com/Gunrit" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 bg-black/20 hover:bg-white flex items-center justify-center text-white hover:text-black transition-all duration-300 group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/gunrit-kaur" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 bg-black/20 hover:bg-white flex items-center justify-center text-white hover:text-black transition-all duration-300 group">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* SECTION 2: Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-lg leading-tight text-white mb-4">
          Transforming raw data into actionable insights.
        </h2>
        <div className="w-24 h-1 bg-white/30 rounded-full" />
      </motion.div>

      {/* SECTION 3: Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight text-white mb-4">
          A passionate problem-solver driving data-centric solutions using Python, SQL, and advanced visualization tools to help businesses make optimal decisions.
        </h2>
        <div className="w-24 h-1 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}
