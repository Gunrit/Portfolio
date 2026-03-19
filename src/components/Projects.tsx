'use client';

import { useState } from 'react';
import { ArrowUpRight, X, Github } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Google Play Store Analysis',
    category: 'Data Analytics & Visualization',
    description: 'Interactive analytics dashboard using Plotly, HTML, and Power BI to uncover insights on app categories, ratings, and revenue trends, improving analysis efficiency by 30%.',
    image: '/project-1.png', 
    github: 'https://github.com/Gunrit/Google-Play-Store-analysis', 
  },
  {
    id: 2,
    title: 'Weather API Dashboard',
    category: 'Real-Time Data Modeling',
    description: 'Fully interactive Power BI dashboard using live Weather API data for real-time tracking of temperature trends, AQI, and forecasts, boosting monitoring efficiency by 35%.',
    image: '/project-2.png', 
    github: 'https://github.com/Gunrit/Weather-Insights-PowerBI-Dashboard', 
  },
  {
    id: 3,
    title: 'Agriculture Accommodates Dashboard',
    category: 'Statistical Analysis',
    description: 'Dynamic Excel dashboard with KPIs and geo heat maps to analyze commodity price patterns using statistical techniques like F-statistics and correlation analysis.',
    image: '/project-3.png', 
    github: 'https://github.com/Gunrit/Agriculture-Accomodates-Dashboard', 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 }
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-20 tracking-tighter"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative flex flex-col justify-between p-10 md:p-14 h-[450px] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ring-1 ring-white/10"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.08),_transparent_70%)] z-0" />

              {/* Background Image Overlay */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-30 group-hover:opacity-80 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/20 pointer-events-none" />
                </div>
              )}

              <div className="relative z-10 flex justify-between items-start pointer-events-none">
                <span className="text-xs font-mono tracking-widest text-gray-300 uppercase bg-black/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                  {project.category}
                </span>
                <div className="w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 mt-auto pointer-events-none">
                <h3 className="text-3xl font-bold text-white mb-5 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed max-w-md group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-6xl bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 hover:bg-white flex items-center justify-center rounded-full text-white hover:text-black transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-2xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full md:w-1/2 h-[350px] md:h-[650px] bg-black/80 p-6 md:p-10 flex items-center justify-center">
                {selectedProject.image ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">No image available</span>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
                <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-gray-300 uppercase mb-8 w-max">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8 leading-tight tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                  {selectedProject.description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 hover:scale-[1.03] transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <Github className="w-6 h-6 mr-4 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
