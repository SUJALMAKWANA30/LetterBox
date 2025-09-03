import React from "react";
import Header from "../../components/User/Header";
import { ArrowRight, ArrowDownCircle } from "lucide-react";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-700">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50"></div>
          <div className="inline-block px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-snug">
            Making{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              College Applications Easy
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            We empower students to write, manage, and submit their college applications online with clarity and confidence.
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1661387668199-a013aa35bea9?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Students celebrating"
            className="mt-10 mx-auto rounded-3xl shadow-lg max-h-150 object-cover"
          />
        </section>

        {/* Our Story Section with Arrow Guide */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-5 items-center relative">
          <div className="relative flex justify-center items-center py-8 ">
            <img
              src="https://images.unsplash.com/photo-1594377157609-5c996118ac7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNydW1wbGVkJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Student writing application"
              className="relative rounded-2xl shadow-xl object-cover"
            />
            {/* Decorative Line */}
            <div className="absolute -top-7 -left-5 border-4 border-dashed border-purple-400 w-20 h-20 rounded-full animate-spin-slow"></div>
          </div>
          <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6 relative inline-block">
                Our Story
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h2>
            <p className="text-gray-600 leading-relaxed">
              Applying to colleges shouldn’t feel overwhelming. With countless essays, forms, and deadlines, students often feel lost. 
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We built this platform to guide students every step of the way — from brainstorming their essays to submitting complete, polished applications. 
            </p>

          </div>
          
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 min-h-[90vh] py-32 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-10 right-10 w-32 h-40 border-4 border-dashed border-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-40"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-6 py-12">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6 relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is simple: to make the college application journey stress-free, accessible, and empowering for every student. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We help students focus on telling their unique stories while we take care of structure, deadlines, and organization.
              </p>
            </div>

            {/* Right Side - Single Image */}
            <div className="flex justify-center items-center py-8">
              <img
                src="https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working together"
                className="w-[520px] h-[360px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section with Connector Lines */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')] opacity-5 -z-10"></div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition relative">
            <span className="absolute -top-3 -left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">01</span>
            <h3 className="text-xl font-semibold text-gray-900">Guided Writing</h3>
            <p className="mt-2 text-gray-600">
              Step-by-step help to craft compelling essays that reflect your true voice.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition relative">
            <span className="absolute -top-3 -left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">02</span>
            <h3 className="text-xl font-semibold text-gray-900">Smart Organization</h3>
            <p className="mt-2 text-gray-600">
              Track all your applications, drafts, and deadlines in one simple dashboard.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition relative">
            <span className="absolute -top-3 -left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">03</span>
            <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
            <p className="mt-2 text-gray-600">
              Get feedback from mentors, teachers, or parents before submission.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 mb-20 -mt-10">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 text-center rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold">Ready to write your best application?</h2>
            <p className="mt-4 text-lg text-purple-100">
              Join thousands of students simplifying their application journey with us.
            </p>
            <a
              href="/sign-up"
              className="mt-6 inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md"
            >
              Get Started →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
