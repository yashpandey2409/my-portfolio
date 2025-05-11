import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0" />
      
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-sm md:text-base font-semibold text-blue-600 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Yash Pandey
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Data Scientist & AI Engineer
            </motion.p>
            <motion.p 
              className="text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Passionate about developing analytical solutions and deploying AI-driven models.
              Specializing in Machine Learning, Computer Vision, and Natural Language Processing.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 transition-all hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.a
                href="https://github.com/yashpandey2409"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-slate-700 hover:text-blue-600"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yash-pandey2409"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-slate-700 hover:text-blue-600"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="/YashPandey_MachineLearningDeveloper.pdf"
                download="Yash_Pandey_Resume.pdf"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-slate-700 hover:text-blue-600"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FileText size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/YashPandey.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-sm text-slate-600 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} className="text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;