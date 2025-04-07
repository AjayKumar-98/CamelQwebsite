import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      client: 'RetailTech Inc.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      description: 'A full-scale e-commerce platform with advanced inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      testimonial: {
        text: "CamelQ delivered an exceptional e-commerce solution that transformed our business.",
      }
    },
    {
      title: 'Healthcare Management System',
      client: 'MedCare Solutions',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      description: 'An integrated healthcare management system for patient care.',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      testimonial: {
        text: "The system has significantly improved our operational efficiency.",
      }
    },
    {
      title: 'Financial Analytics Dashboard',
      client: 'FinTech Global',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      description: 'Real-time financial analytics and reporting dashboard.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'GCP'],
      testimonial: {
        text: "The dashboard provides invaluable insights for our decision-making process."
      }
    }
  ];

  return (
    <div className="py-20 bg-[#E6F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their goals
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
  >
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
      <div className="relative h-64 lg:h-auto">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-8 lg:p-12">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-blue-600 mb-4 font-medium">{project.client}</p>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
          "{project.testimonial.text}"
          {/* Testimonial author not defined, optional */}
        </blockquote>
      </div>
    </div>
  </motion.div>
);

export default Portfolio;
