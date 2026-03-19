'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, FileText, Download, Eye } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  },
};

export default function ExperienceContact() {
  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Contact */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-center"
          >
            <motion.div 
              variants={itemVariants}
              className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
            >
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 tracking-tighter">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                I am actively participating in hackathons and looking for opportunities to bring my passion for data analytics and problem-solving to innovative teams.
              </p>
              
              {/* Resume / CV Section */}
              <div className="flex flex-col xl:flex-row gap-6 mb-12">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  className="flex-1 bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between shadow-2xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">General CV</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href="/general-cv.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center py-3 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-white rounded-2xl transition-all">
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </a>
                    <a href="/general-cv.pdf" download="Gunrit_Kaur_General_CV.pdf" className="flex flex-1 items-center justify-center py-3 bg-white text-black hover:bg-gray-200 text-xs font-mono uppercase font-bold tracking-widest rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                      <Download className="w-4 h-4 mr-2" /> Save
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  className="flex-1 bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between shadow-2xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Data Analyst CV</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href="/specialized-cv.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center py-3 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-white rounded-2xl transition-all">
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </a>
                    <a href="/specialized-cv.pdf" download="Gunrit_Kaur_Data_Analyst_CV.pdf" className="flex flex-1 items-center justify-center py-3 bg-white text-black hover:bg-gray-200 text-xs font-mono uppercase font-bold tracking-widest rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                      <Download className="w-4 h-4 mr-2" /> Save
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <a href="mailto:gunritkaur7120@gmail.com" className="group flex items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">Email</span>
                    <span className="text-white font-medium text-lg tracking-wide">gunritkaur7120@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/gunrit-kaur" target="_blank" rel="noopener noreferrer" className="group flex items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300 shrink-0 text-white border border-transparent group-hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">LinkedIn</span>
                    <span className="text-white font-medium text-lg tracking-wide">linkedin.com/in/gunrit-kaur</span>
                  </div>
                </a>

                <a href="https://github.com/Gunrit" target="_blank" rel="noopener noreferrer" className="group flex items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 text-white shadow-xl">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">GitHub</span>
                    <span className="text-white font-medium text-lg tracking-wide">github.com/Gunrit</span>
                  </div>
                </a>

                <div className="group flex items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shrink-0 text-white border border-transparent group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">Mobile</span>
                    <span className="text-white font-medium text-lg tracking-wide">+91 9814747647</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
