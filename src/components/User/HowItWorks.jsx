import React from "react";
import { motion } from "framer-motion";
import DocumentIcon from "../icons/DocumentIcon";
import EditIcon from "../icons/EditIcon";
import DownloadIcon from "../icons/DownloadIcon";

function HowItWorks() {
  const steps = [
    {
      icon: DocumentIcon,
      title: "Choose a Template",
      description:
        "Select from a library of professional, faculty-approved application templates designed for scholarships, internships, and college programs.",
      colors: "from-purple-500 to-purple-700",
      bgColor: "#f4f0ff", // pastel background
    },
    {
      icon: EditIcon,
      title: "Fill & Customize",
      description:
        "Easily personalize your application with our intuitive editor. Add your details, achievements, and experiences in minutes.",
      colors: "from-pink-500 to-pink-700",
      bgColor: "#fef3fd", // pastel background
    },
    {
      icon: DownloadIcon,
      title: "Submit or Download",
      description:
        "Download your polished application as a high-quality PDF or submit it directly to faculty/administration with a single click.",
      colors: "from-orange-500 to-orange-600",
      bgColor: "#fff7f0", // pastel background
    },
  ];

  return (
    <section className="py-18 bg-[#f8f5ff] relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get your professional application in just 3 simple steps.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }} // scroll-in animation start
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // scroll-in animation end
              transition={{
                duration: 0.8,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              style={{ backgroundColor: step.bgColor }}
            >
              {/* Gradient Circle with Icon */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${step.colors} text-white shadow-lg -mt-16`}
              >
                <step.icon size={32} />
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default HowItWorks;
