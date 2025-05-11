import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  provider: string;
  date: string;
  certificate: string;
  description: string;
  skills: string[];
}

const coursesData: Course[] = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    provider: 'Coursera (Andrew Ng)',
    date: 'January 2024',
    certificate: 'https://www.coursera.org/account/accomplishments/specialization/certificate/GQDA',
    description:
      'A deep dive into supervised and unsupervised learning, with practical applications using Python. Covered topics include linear regression, logistic regression, neural networks, and ML pipelines.',
    skills: ['Supervised Learning', 'Neural Networks', 'Logistic Regression', 'ML Pipelines']
  },
  {
    id: 2,
    title: 'Automating Real-World Tasks with Python',
    provider: 'Google (Coursera)',
    date: 'October 2023',
    certificate: 'https://www.coursera.org/account/accomplishments/certificate/BGHIRG7E7XZU',
    description:
      'Practical course focused on using Python to automate common system administration tasks. Topics include file manipulation, web scraping, CSV automation, and working with APIs.',
    skills: ['Python Automation', 'Web Scraping', 'CSV & JSON Handling', 'APIs']
  }
];

const Courses: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">🏅 Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here are a few key certifications I've completed, showcasing my skills in machine learning and Python automation.
          </p>
        </motion.div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold">{course.title}</h3>
                </div>
                <div className="flex items-center mb-4 text-slate-600">
                  <span className="font-medium">{course.provider}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.date}</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={course.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">View Certificate</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
