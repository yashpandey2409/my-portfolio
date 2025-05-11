import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERCICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormState({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              Get In Touch
            </motion.h2>

            <motion.p className="text-slate-300 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              I'm always open to new opportunities, collaborations, and interesting projects. 
              Feel free to reach out if you have any questions or just want to say hi!
            </motion.p>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </motion.button>
            </motion.form>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:yashpandey240909@gmail.com" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                yashpandey240909@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+918890241760" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +91 8890241760
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/yashpandey2409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yash-pandey2409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Vadodara, Gujarat</p>
            </div>
            
            <div className="pt-8">
              <a
                href="/YashPandey_MachineLearningDeveloper.pdf"
                download="Yash_Pandey_Resume.pdf"
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Yash Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;