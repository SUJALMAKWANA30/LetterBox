import React from 'react';
import DocumentIcon from '../icons/DocumentIcon';
import EditIcon from '../icons/EditIcon';
import DownloadIcon from '../icons/DownloadIcon';

function HowItWorks() {
  const steps = [
    {
      icon: <DocumentIcon />,
      title: 'Choose a Template',
      description: 'Create professional resumes in under 5 minutes with our streamlined process',
      bg: 'bg-[#f4f0ff]',
      iconBg: 'from-purple-500 to-purple-700',
    },
    {
      icon: <EditIcon />,
      title: 'Customize Your Application',
      description: 'Choose from dozens of recruiter-approved, industry-specific templates',
      bg: 'bg-[#fef3fd]',
      iconBg: 'from-pink-500 to-pink-700',
    },
    {
      icon: <DownloadIcon />,
      title: 'Download and Share',
      description: 'Download high-quality PDFs instantly with perfect formatting',
      bg: 'bg-[#fff7f0]',
      iconBg: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-28 bg-[#f8f5ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How It {' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Works?
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get your professional application in just 3 simple steps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl max-w-sm w-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${step.bg} text-left`}
            >
              <div
                className={`h-14 w-14 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${step.iconBg} text-white text-2xl shadow-lg`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
