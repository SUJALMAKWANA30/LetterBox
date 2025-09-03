import React from 'react';
import StarIcon from '../icons/StarIcon.jsx';
import feedback from '../../assets/feedback-animate.svg'; // adjust the path if needed

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Software Engineer',
      quote: 'ResumeXpert made it so easy to create a polished resume that I\'m proud of.',
      avatar: 'https://picsum.photos/seed/sarah/50/50',
    },
    {
      name: 'Michael Chen',
      title: 'Product Manager',
      quote: 'The AI suggestions were a game-changer. It helped me improve my resume.',
      avatar: 'https://picsum.photos/seed/michael/50/50',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Graduate',
      quote: 'The templates gave me a great starting point and confidence.',
      avatar: 'https://picsum.photos/seed/emily/50/50',
    },
    {
      name: 'Alex Kim',
      title: 'UX Designer',
      quote: 'Clean design and intuitive flow. It’s the best resume tool I’ve used.',
      avatar: 'https://picsum.photos/seed/alex/50/50',
    },
    {
      name: 'Priya Mehta',
      title: 'College Student',
      quote: 'I applied to 10 internships with my new resume — got 4 callbacks!',
      avatar: 'https://picsum.photos/seed/priya/50/50',
    },
  ];

  const renderTestimonial = (testimonial, index) => (
    <div key={index} className="bg-white p-4 rounded-xl shadow text-sm text-gray-600 flex flex-col justify-between h-full">
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="mb-2">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full" />
        <div className="ml-2">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
          What Our Users {' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Say
          </span>
        </h2>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: SVG Illustration */}
          <div className="flex-1 flex justify-center">
            <img src={feedback} alt="Feedback Illustration" className="w-[450px] h-auto max-w-full" />
          </div>

          {/* Right: Testimonials Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
