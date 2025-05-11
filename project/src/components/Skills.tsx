import React from 'react';

import { motion } from 'framer-motion';
import { Brain, Code, Database, Cloud, Terminal, Notebook as Robot, BarChart as ChartBar, Cog } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon: JSX.Element;
}

const skillsData: Skill[] = [
  // Technical Skills
  { name: 'Product Development', category: 'Technical', icon: <Cog className="h-4 w-4 text-blue-500" /> },
  { name: 'Data Science', category: 'Technical', icon: <ChartBar className="h-4 w-4 text-blue-500" /> },
  { name: 'Machine Learning', category: 'Technical', icon: <Brain className="h-4 w-4 text-blue-500" /> },
  { name: 'Generative AI', category: 'Technical', icon: <Robot className="h-4 w-4 text-blue-500" /> },
  { name: 'System Design', category: 'Technical', icon: <Code className="h-4 w-4 text-blue-500" /> },
  { name: 'OOP', category: 'Technical', icon: <Terminal className="h-4 w-4 text-blue-500" /> },

  // Domain Knowledge
  { name: 'Computer Vision', category: 'Domain', icon: <Brain className="h-4 w-4 text-purple-500" /> },
  { name: 'Natural Language Processing', category: 'Domain', icon: <Brain className="h-4 w-4 text-purple-500" /> },
  { name: 'Speech Processing', category: 'Domain', icon: <Brain className="h-4 w-4 text-purple-500" /> },
  { name: 'Robotics', category: 'Domain', icon: <Robot className="h-4 w-4 text-purple-500" /> },

  // Tools & Software
  { name: 'TensorFlow', category: 'Tools', icon: <Brain className="h-4 w-4 text-teal-500" /> },
  { name: 'PyTorch', category: 'Tools', icon: <Brain className="h-4 w-4 text-teal-500" /> },
  { name: 'Docker', category: 'Tools', icon: <Database className="h-4 w-4 text-teal-500" /> },
  { name: 'Git', category: 'Tools', icon: <Code className="h-4 w-4 text-teal-500" /> },
  { name: 'AWS', category: 'Tools', icon: <Cloud className="h-4 w-4 text-teal-500" /> },
  { name: 'GCP', category: 'Tools', icon: <Cloud className="h-4 w-4 text-teal-500" /> },
  { name: 'Django', category: 'Tools', icon: <Code className="h-4 w-4 text-teal-500" /> },
  { name: 'Flask', category: 'Tools', icon: <Code className="h-4 w-4 text-teal-500" /> },
  { name: 'MongoDB', category: 'Tools', icon: <Database className="h-4 w-4 text-teal-500" /> }
];

const Skills: React.FC = () => {
  const grouped = {
    Technical: skillsData.filter(skill => skill.category === 'Technical'),
    Domain: skillsData.filter(skill => skill.category === 'Domain'),
    Tools: skillsData.filter(skill => skill.category === 'Tools')
  };

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Skills and Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(grouped).map(([category, skills]) => (
            <div key={category} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-center">
                {category === 'Technical' ? 'Technical Skills' : category === 'Domain' ? 'Domain Skills' : 'Tools & Software'}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <span key={skill.name} className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
