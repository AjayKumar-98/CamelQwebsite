import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Shield,
  Database,
  BarChart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and frameworks.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: <Cloud />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'AWS Services', 'Azure Solutions', 'Cloud Security']
    },
    {
      icon: <Brain />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Data Mining']
    },
    {
      icon: <Database />,
      title: 'Database Solutions',
      description: 'Robust database design and management services.',
      features: ['Database Design', 'Data Migration', 'Performance Optimization', 'Backup Solutions']
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Compliance']
    },
    {
      icon: <Users />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting for business growth.',
      features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'IT Roadmap']
    },
    {
      icon: <BarChart />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-indigo-800">Our Services</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of software solutions and services to help your business
            succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#36D1DC] to-[#5B86E5] text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
