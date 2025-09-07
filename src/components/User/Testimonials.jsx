import React, { useRef, useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon.jsx";
import feedback from "../../assets/feedback-animate.svg";

const testimonials = [
  {
    name: "Sajal Mehta",
    title: "College Junior",
    quote:
      "I drafted my internship applications in half the time and got 3 callbacks in a week!",
    avatar: "https://picsum.photos/seed/sajal/50/50",
  },
  {
    name: "Ananya Sharma",
    title: "Final Year Student",
    quote:
      "The guided templates made my scholarship applications perfect. I actually won a scholarship!",
    avatar: "https://picsum.photos/seed/ananya/50/50",
  },
  {
    name: "Rohan Patel",
    title: "Sophomore",
    quote:
      "Applying for multiple programs was stressful, but this platform made it so easy and structured.",
    avatar: "https://picsum.photos/seed/rohan/50/50",
  },
  {
    name: "Isha Verma",
    title: "Internship Applicant",
    quote:
      "The AI suggestions improved my essays drastically. I felt confident submitting them.",
    avatar: "https://picsum.photos/seed/isha/50/50",
  },
  {
    name: "Kabir Singh",
    title: "College Senior",
    quote:
      "I used it for 5 internship applications and got selected in 2 companies within a month!",
    avatar: "https://picsum.photos/seed/kabir/50/50",
  },
];

function TestimonialsInfiniteScroll() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const scrollSpeed = 0.5;

    const scrollLoop = () => {
      if (!isDragging) {
        container.scrollLeft += scrollSpeed;
        // Infinite loop effect
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    scrollLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background circles */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl" /> */}
      {/* <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-3xl" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          Hear From Students{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Like You
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src={feedback}
              alt="Feedback Illustration"
              className="w-[400px] lg:w-[450px] h-auto max-w-full"
            />
          </div>

          {/* Right: Infinite scroll container */}
          <div
            ref={scrollRef}
            className="flex-1 flex gap-6 overflow-x-auto overflow-y-hidden cursor-grab scrollbar-hide"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mb-4 text-gray-700">&quot;{t.quote}&quot;</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbars globally */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}

export default TestimonialsInfiniteScroll;
