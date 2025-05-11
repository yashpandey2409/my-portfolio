import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Music, Brain, Notebook as Robot } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  liveUrl: string;
  codeUrl: string;
  icon: JSX.Element;
  details?: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Music Recommendation Algorithm',
    description: 'A personalized music recommendation system using the Spotify API. The algorithm analyzes user preferences and listening history to suggest relevant songs.',
    image: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg',
    tags: ['Python', 'Scikit-learn', 'Matplotlib', 'Spotify API', 'Machine Learning'],
    category: ['Machine Learning', 'Data Science'],
    liveUrl: 'https://project-demo.com',
    codeUrl: 'https://github.com/yashpandey2409/music-recommendation',
    icon: <Music className="h-8 w-8 text-blue-500" />,
    details: [
      'Implemented collaborative filtering algorithm',
      'Integrated with Spotify API for real-time data',
      'Visualized song similarities using Matplotlib',
      'Achieved 85% recommendation accuracy'
    ]
  },
  {
    id: 2,
    title: 'Emotion Detection in Text',
    description: 'An NLP-based emotion analysis system that detects and classifies emotions in text. Useful for sentiment analysis, customer feedback, and social media monitoring.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    tags: ['NLP', 'Python', 'Deep Learning', 'Transformers', 'Sentiment Analysis'],
    category: ['NLP', 'Machine Learning'],
    liveUrl: 'https://emotion-detection-demo.com',
    codeUrl: 'https://github.com/yashpandey2409/emotion-detection',
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    details: [
      'Used BERT for text classification',
      'Trained on diverse emotional datasets',
      'Real-time emotion analysis API',
      'Multi-language support'
    ]
  },
  {
    id: 3,
    title: 'River Garbage Detection Robot',
    description: 'A computer vision system for detecting garbage in rivers using deep learning. The system helps automate the process of river cleaning by identifying and locating debris.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'YOLOv5', 'OpenCV'],
    category: ['Computer Vision', 'Machine Learning'],
    liveUrl: 'https://garbage-detection-demo.com',
    codeUrl: 'https://github.com/yashpandey2409/river-garbage-detection',
    icon: <Robot className="h-8 w-8 text-teal-500" />,
    details: [
      'Custom-trained YOLOv5 model',
      'Real-time object detection',
      'Integration with robotics system',
      '95% detection accuracy'
    ]
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Data Science'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Data Science.
          </p>
        </motion.div>

        <div ref={ref} className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 font-medium hover:text-slate-900 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-6">
                  {selectedProject.icon}
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-slate-600 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.details?.map((detail, index) => (
                      <li key={index} className="text-slate-600">{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;