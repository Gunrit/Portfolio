'use client';

import { motion } from 'framer-motion';
import TechBackground from '@/components/TechBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function Skills() {
  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      
      {/* Interactive Neural Network Background with Seamless Fade Mask */ }
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <TechBackground />
      </div>

      {/* Deep Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-16 tracking-tighter text-center"
        >
          Education
        </motion.h2>
        
        <div className="flex flex-col items-center space-y-12 mb-32 relative">
          {/* Education Items */}
          <motion.div variants={itemVariants} className="w-full max-w-4xl">
            <div className="p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/[0.04] transition-all duration-500 text-center group">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">B.Tech - Computer Science & Engineering</h3>
              <p className="text-lg md:text-xl text-orange-400 font-mono tracking-widest uppercase mb-8">Lovely Professional University | Aug’23 - Present</p>
              <p className="text-gray-400 font-medium text-xl md:text-2xl">CGPA: <span className="text-white font-extrabold ml-2">7.75</span></p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-4xl">
            <div className="p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/[0.04] transition-all duration-500 text-center group">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">Intermediate</h3>
              <p className="text-lg md:text-xl text-amber-400 font-mono tracking-widest uppercase mb-8">Sanskriti KMV School | Apr’21 - Mar’23</p>
              <p className="text-gray-400 font-medium text-xl md:text-2xl">Percentage: <span className="text-white font-extrabold ml-2">80%</span></p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-4xl">
            <div className="p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/[0.04] transition-all duration-500 text-center group">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors duration-300">Matriculation</h3>
              <p className="text-lg md:text-xl text-rose-400 font-mono tracking-widest uppercase mb-8">Sanskriti KMV School | Apr’20 - Mar’21</p>
              <p className="text-gray-400 font-medium text-xl md:text-2xl">Percentage: <span className="text-white font-extrabold ml-2">95%</span></p>
            </div>
          </motion.div>
        </div>

        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-20 tracking-tighter"
        >
          Core Technical Skills
        </motion.h2>
        
        {/* Technical Skills Table */}
        <motion.div
           variants={itemVariants}
           className="w-full overflow-x-auto rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)] mb-20 relative ring-1 ring-white/10"
        >
           {/* Inner subtle glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-10 text-lg md:text-2xl font-extrabold font-mono tracking-widest text-gray-200 uppercase w-1/3">Languages</th>
                <th className="p-10 text-lg md:text-2xl font-extrabold font-mono tracking-widest text-gray-200 uppercase w-1/3 border-l border-white/5">Tools & Platforms</th>
                <th className="p-10 text-lg md:text-2xl font-extrabold font-mono tracking-widest text-gray-200 uppercase w-1/3 border-l border-white/5">Data Handling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-10 align-top border-r border-white/5 group hover:bg-white/[0.02] transition-colors duration-500">
                  <ul className="space-y-6 text-gray-300">
                    {['Python', 'C / C++', 'SQL'].map(item => (
                      <motion.li whileHover={{ x: 8, color: '#fff' }} transition={{ type: 'spring', stiffness: 300 }} key={item} className="flex items-center text-lg font-medium cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-4 shadow-[0_0_10px_rgba(96,165,250,0.8)] shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </td>
                <td className="p-10 align-top border-r border-white/5 group hover:bg-white/[0.02] transition-colors duration-500">
                  <ul className="space-y-6 text-gray-300">
                    {['Tableau', 'Power BI', 'Excel', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Git & GitHub'].map(item => (
                      <motion.li whileHover={{ x: 8, color: '#fff' }} transition={{ type: 'spring', stiffness: 300 }} key={item} className="flex items-center text-lg font-medium cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-4 shadow-[0_0_10px_rgba(192,132,252,0.8)] shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </td>
                <td className="p-10 align-top group hover:bg-white/[0.02] transition-colors duration-500">
                  <ul className="space-y-6 text-gray-300">
                    {['Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization', 'Model Evaluation'].map(item => (
                      <motion.li whileHover={{ x: 8, color: '#fff' }} transition={{ type: 'spring', stiffness: 300 }} key={item} className="flex items-center text-lg font-medium cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-4 shadow-[0_0_10px_rgba(45,212,191,0.8)] shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Soft Skills & Extracurriculars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            variants={itemVariants}
            className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-10 tracking-wide">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {['Problem-Solving', 'Team Player', 'Leadership', 'Adaptability'].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  key={skill} 
                  className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 font-medium tracking-wide shadow-lg cursor-default transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-10 tracking-wide">Activities & Involvement</h3>
            <ul className="space-y-6 text-gray-300 max-w-lg">
              <motion.li whileHover={{ x: 5 }} className="flex items-start text-lg leading-relaxed mix-blend-plus-lighter">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 mr-6 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <span>Technical Contributor participating in data analytics & coding hackathons to solve structural optimization problems.</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start text-lg leading-relaxed mix-blend-plus-lighter">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 mr-6 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <span>Continuous learner highly motivated towards Cloud platforms and modern Data Architecture frameworks.</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
