import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Artificial Neural Networks Intern',
    company: 'Coding Junior',
    location: 'Remote',
    period: 'April 2025 - Present',
    description: [
      'Gained hands-on experience in designing, training, and evaluating artificial neural networks',
      'Implemented various neural network architectures using Python and TensorFlow/PyTorch',
      'Worked on real-world applications of deep learning',
      'Collaborated with team members on model optimization and deployment'
    ],
    skills: ['Neural Networks', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch']
  },
  {
    id: 2,
    role: 'Computer Vision Intern',
    company: 'Protosight',
    location: 'Remote',
    period: 'Dec 2023 - Mar 2024',
    description: [
      'Worked on computer vision projects and model performance improvement',
      'Contributed to image and video processing applications',
      'Gained hands-on experience with ML, NLP, and deep learning',
      'Collaborated with team on model deployment and optimization'
    ],
    skills: ['Computer Vision', 'Machine Learning', 'NLP', 'Deep Learning', 'Python']
  },
  {
    id: 3,
    role: 'Subject Matter Expert',
    company: 'Chegg India',
    location: 'Remote',
    period: 'Nov 2022 - Jan 2023',
    description: [
      'Solved over 500 questions in Computer Science, Python, MATLAB, and Computer Vision',
      'Provided detailed educational support and explanations',
      'Maintained high accuracy and quality standards',
      'Helped students understand complex technical concepts'
    ],
    skills: ['Python', 'MATLAB', 'Computer Vision', 'Mathematics', 'Problem Solving']
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Experience items */}
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 pt-10">
                <div 
                  className={`bg-white rounded-lg shadow-md p-6 md:p-8 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-blue-600 font-medium">{item.company}</span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span className="text-slate-500">{item.location}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{item.period}</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-slate-600">{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 pt-12">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;