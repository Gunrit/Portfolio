'use client';

import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: 'First Prize - Solo Singing',
    event: 'Aagaaz Event',
    description: 'Won the first prize in solo singing (light vocal) at the Aagaaz event, demonstrating vocal excellence and Stage confidence.',
    image: '/photo_6185936470837759111_y.jpg',
  },
  {
    id: 2,
    title: 'Second Prize - Speech',
    event: 'Personality Speech Competition',
    description: 'Secured the second prize for a compelling speech delivered on a prominent personality, highlighting research and oratory skills.',
    image: '/photo_6185936470837759110_y.jpg',
  },
  {
    id: 3,
    title: 'Event Lead',
    event: 'Spectra Event',
    description: 'Spearheaded the organization and management of the Spectra event, leading a diverse team to ensure successful execution.',
    image: '/photo_6185936470837759113_y.jpg',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 }
  },
};

export default function ExtraCurricular() {
  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

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
          Extracurricular Activities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-[0_30px_100px_-20px_rgba(168,85,247,0.3)] transition-all duration-500"
            >
              {/* Image Container with Fallbacks */}
              <div className="relative w-full h-64 overflow-hidden bg-white/5">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                
                {/* Overlay gradient & Event badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest text-white shadow-lg">
                    {activity.event}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {activity.description}
                </p>
                <div className="w-12 h-1 bg-white/20 rounded-full group-hover:w-full group-hover:bg-purple-500/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
