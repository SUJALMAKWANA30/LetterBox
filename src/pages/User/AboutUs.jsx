import React from "react";
import Header from "../../components/User/Header";
import { PenTool, LayoutDashboard, Users } from "lucide-react";
import { motion } from "framer-motion";

function AboutUs() {

    const features = [
    {
      title: "Guided Writing",
      description:
        "Step-by-step help to craft compelling essays that reflect your true voice.",
      icon: PenTool,
      colors: "from-purple-500 to-indigo-500",
    },
    {
      title: "Smart Organization",
      description:
        "Track all your applications, drafts, and deadlines in one simple dashboard.",
      icon: LayoutDashboard,
      colors: "from-pink-500 to-red-500",
    },
    {
      title: "Collaboration",
      description:
        "Get feedback from mentors, teachers, or parents before submission.",
      icon: Users,
      colors: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white text-gray-700">

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50"></div>

          {/* Small Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="inline-block px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-4"
          >
            About Us
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-snug"
          >
            Making{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              College Applications Easy
            </span>
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
          >
            We empower students to write, manage, and submit their college applications
            online with clarity and confidence.
          </motion.p>

          {/* Hero Image */}
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1661387668199-a013aa35bea9?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Students celebrating"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
            className="mt-10 mx-auto rounded-3xl shadow-lg max-h-150 object-cover"
          />
        </section>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-5 items-center relative">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex justify-center items-center py-8"
          >
            <img
              src="https://images.unsplash.com/photo-1594377157609-5c996118ac7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNydW1wbGVkJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Student writing application"
              className="relative rounded-2xl shadow-xl object-cover"
            />
            {/* Decorative Line */}
            <div className="absolute -top-7 -left-5 border-4 border-dashed border-purple-400 w-20 h-20 rounded-full animate-spin-slow"></div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-gray-600 leading-relaxed"
            >
              Applying to colleges shouldn’t feel overwhelming. With countless essays, forms,
              and deadlines, students often feel lost.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              We built this platform to guide students every step of the way — from
              brainstorming their essays to submitting complete, polished applications.
            </motion.p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 min-h-[90vh] py-32 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-10 right-10 w-32 h-40 border-4 border-dashed border-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-40"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-6 py-12">
            {/* Left Content with animation */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6 relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-gray-600 text-lg leading-relaxed mb-6"
              >
                Our mission is simple: to make the college application journey stress-free, accessible, and empowering for every student. 
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                We help students focus on telling their unique stories while we take care of structure, deadlines, and organization.
              </motion.p>
            </motion.div>

            {/* Right Side - Image with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex justify-center items-center py-8"
            >
              <img
                src="https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working together"
                className="w-[520px] h-[360px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Subtle BG Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')] opacity-5 -z-10"></div>

          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex flex-col items-center text-center bg-white/70 backdrop-blur-lg border border-gray-200/40 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition"
            >
              {/* Gradient Circle with Icon */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.colors} text-white shadow-lg -mt-16`}
              >
                <feature.icon size={32} />
              </div>

              {/* Title & Text */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </section>


      {/* CTA Section */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center px-6">
        {/* Amber Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }} // triggers when 40% visible
          className="relative z-10 max-w-3xl text-center"
        >
          {/* Premium Header */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug"
          >
            From <span className="text-amber-600">Paper</span> to Digital, Instantly.
          </motion.h2>

          {/* Modern Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-700 leading-relaxed"
          >
            Say goodbye to manual writing — create, edit, and submit applications online with <br />smart templates.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/sign-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition"
          >
            Get Started →
          </motion.a>
        </motion.div>
      </section>

      </div>
    </>
  );
}

export default AboutUs;
