import React from 'react';
import { motion } from 'framer-motion';
import nerd from '../../assets/nerd-animate.svg';
import CheckCircleIcon from '../icons/CheckCircleIcon';

function WhyChooseUs() {
  const features = [
    {
      title: 'One-Click Submit',
      description: 'Submit your application directly to faculty or administration with a single click.',
    },
    {
      title: 'Easy to Use',
      description: 'Our intuitive interface makes application writing a breeze for every student.',
    },
    {
      title: 'Professional Templates',
      description: 'Choose from a library of templates crafted by experts and approved by faculty.',
    },
    {
      title: 'Download as PDF',
      description: 'Easily download your application as a high-quality PDF, ready for submission.',
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-20 bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-900"
        >
          Why Choose{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Us
          </span>
        </motion.h2>

        {/* Flex Row for SVG and Text */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 text-left">
          {/* SVG Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <img src={nerd} alt="Illustration" className="w-full max-w-sm h-auto" />
          </motion.div>

          {/* Text Features */}
          <motion.div
            className="flex-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="text-purple-500 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
