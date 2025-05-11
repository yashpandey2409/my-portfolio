import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Notebook as Robot, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: 'AI Enthusiast',
      description: 'Passionate about developing innovative AI solutions and models.',
    },
    {
      icon: <Robot className="h-10 w-10 text-purple-500" />,
      title: 'ML Devloper',
      description: 'Experienced in machine learning, deep learning, and computer vision.',
    },
    {
      icon: <Database className="h-10 w-10 text-teal-500" />,
      title: 'Data Scientist',
      description: 'Skilled in data analysis, visualization, and predictive modeling.',
    },
    {
      icon: <Cloud className="h-10 w-10 text-orange-500" />,
      title: 'Cloud Native',
      description: 'Proficient in deploying AI models on cloud platforms.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives me as a professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900">My Journey</h3>
            <p className="text-slate-600">
              I transform complex AI concepts into impactful, real-world solutions. With a strong foundation in
              Machine Learning, NLP, and Computer Vision, I build intelligent systems that drive innovation—whether it’s
              AI-powered recommendation engines, emotion recognition platforms, or scalable computer vision pipelines.
            </p>
            <p className="text-slate-600">
              My experience spans deploying end-to-end ML workflows, contributing to real-world projects during
              internships, and mentoring peers in AI. I believe in crafting ethical, explainable, and scalable AI that
              elevates user experience and delivers measurable impact.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
