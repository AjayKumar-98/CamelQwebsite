import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cloud, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Businesses with Cutting-Edge Software Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business with innovative technology solutions tailored to your needs
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-white text-indigo-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-700 transition"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-violet-700">Our Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive range of software solutions to help your business thrive in the digital age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Web Development"
              description="Custom web applications built with modern technologies"
            />
            <ServiceCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure services"
            />
            <ServiceCard
              icon={<Brain className="h-8 w-8" />}
              title="AI & ML"
              description="Intelligent solutions powered by machine learning"
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="IT Consulting"
              description="Expert guidance for your digital transformation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-100 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-gradient-to-br from-[#36D1DC] to-[#5B86E5] text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
  >
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm opacity-90">{description}</p>
  </motion.div>
);

export default Home;
