import React from 'react';
import nerd from '../../assets/nerd-animate.svg';
import CheckCircleIcon from '../icons/CheckCircleIcon';

function WhyChooseUs() {
  const features = [
    {
      title: 'One-Click Submit',
      description: 'Submit your application directly to faculty or administration in a single click.',
    },
    {
      title: 'Easy to Use',
      description: 'Our intuitive interface makes resume building a breeze, even for beginners.',
    },
    {
      title: 'Professional Templates',
      description: 'Choose from a library of templates crafted by experts and approved by recruiters.',
    },
    {
      title: 'Download in PDF',
      description: 'Easily download your resume as a high-quality PDF, ready for job applications.',
    },
  ];

  return (
    <section className="py-20 bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Us
          </span>
        </h2>

        {/* Flex Row for SVG and Text */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 text-left">
          {/* SVG Image */}
          <div className="flex-1 flex justify-center">
            <img src={nerd} alt="Illustration" className="w-full max-w-sm h-auto" />
          </div>

          {/* Text Features */}
          <div className="flex-1 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-purple-500 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
