import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Mr. Mahesh Erukulla",
      role: "Director",
      image: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-4.44.33-PM.jpeg",
      content:
        "Director of Camelq Software Solutions with over a decade of managerial experience, delivering exceptional quality services."
    },
    {
      name: "Ramu",
      role: "Manager",
      image: "https://camelq.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-10.09.01_915c781e-600x642.jpg",
      content:
        "Dedicated Manager overseeing operations, ensuring timely and effective project execution."
    },
    {
      name: "Bhanuchandar",
      role: "BDM",
      image: "https://camelq.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-21.34.55_356b1152-450x601.jpg",
      content:
        "Business Development Manager, driving client relationships and growth opportunities."
    }
  ];

  return (
    <div className="bg-[#E6F7FF] text-black min-h-screen">
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-indigo-800">Our Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              To empower businesses through innovative software solutions that drive growth,
              efficiency, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Our Values</h2>
            <p className="text-xl max-w-3xl mx-auto">
              These core values guide everything we do at CamelQ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Award className="h-12 w-12" />}
              title="Excellence"
              description="We strive for excellence in every project we undertake"
            />
            <ValueCard
              icon={<Target className="h-12 w-12" />}
              title="Innovation"
              description="We embrace new technologies and creative solutions"
            />
            <ValueCard
              icon={<Heart className="h-12 w-12" />}
              title="Client Focus"
              description="Our clients' success is our primary mission"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the talented individuals who make CamelQ great
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-[#36D1DC] to-[#5B86E5] text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
  >
    <div className="mb-4 flex justify-center text-indigo-700">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="opacity-90">{description}</p>
  </motion.div>
);

const TeamMember = ({ name, role, image, content }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-cyan-700 mb-3">{role}</p>
      <p className="opacity-90">{content}</p>
    </div>
  </motion.div>
);

export default About;
