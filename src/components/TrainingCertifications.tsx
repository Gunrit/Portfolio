'use client';

import { useState } from 'react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const certs = [
  {
    id: 1,
    title: 'Data Structures & Algorithms using Python',
    category: 'Training | CSE Pathshala',
    description: 'Comprehensive training enhancing problem-solving and coding efficiency. Implemented optimized algorithms to solve complex computational problems. (Jun’25 - Jul’25)',
    image: '/training-1.png', 
    link: '#', 
  },
  {
    id: 2,
    title: 'Data Analytics, Data Science, & Machine Learning - All in 1',
    category: 'Certificate | Udemy',
    description: 'Extensive coursework covering full-stack data science, machine learning models, and deep analytics workflows. (Oct’25)',
    image: '/cert-1.png', 
    link: '#', 
  },
  {
    id: 3,
    title: 'Database for developers - Foundations',
    category: 'Certificate | Oracle',
    description: 'Core foundation in database management, optimized querying, and relational database architecture. (Aug’25)',
    image: '/cert-2.png', 
    link: '#', 
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

export default function TrainingCertifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

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
          Training & Certificates
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certs.map((cert) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative flex flex-col justify-between p-8 md:p-10 h-[400px] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ring-1 ring-white/10"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.08),_transparent_70%)] z-0" />

              {/* Background Image Overlay */}
              {cert.image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover opacity-20 group-hover:opacity-60 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/20 pointer-events-none" />
                </div>
              )}

              <div className="relative z-10 flex justify-between items-start pointer-events-none">
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-300 uppercase bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg max-w-[70%]">
                  {cert.category}
                </span>
                <div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 mt-auto pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
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
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 hover:bg-white flex items-center justify-center rounded-full text-white hover:text-black transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-2xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full md:w-1/2 h-[350px] md:h-[650px] bg-black/80 p-6 md:p-10 flex items-center justify-center">
                {selectedCert.image ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={selectedCert.image} 
                      alt={selectedCert.title}
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
                  {selectedCert.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8 leading-tight tracking-tight">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                  {selectedCert.description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 hover:scale-[1.03] transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <ExternalLink className="w-6 h-6 mr-4 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
                    Verify Certificate
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
