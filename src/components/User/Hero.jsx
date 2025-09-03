import React from 'react';

function Hero() {
  return (
    <section className="w-[80%] py-20 sm:py-24 lg:py-32 bg-white justify-center items-center mx-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
              Professional Application Builder
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-snug">
              Craft <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                Professional
              </span>{' '}
              <br />
              Application
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Easily create formal applications for faculty with ready-to-use templates. Submit requests online, quickly and professionally.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Building →
              </a>
              <a
                href="#"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
              >
                View Templates
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="absolute -inset-8 bg-gradient-to-r from-violet-200/50 to-fuchsia-200/50 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <svg
                  viewBox="0 0 400 500"
                    className="w-full h-auto max-w-md mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                                >
                    {/* Background */}
                    <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#8b5cf6" />
                       <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                     </linearGradient>
                    </defs>

                    {/* SVG elements */}
                    <rect x="50" y="50" width="300" height="400" rx="20" className="fill-[url(#cardGradient)] stroke-[#e2e8f0] stroke-[2]" />
                    <circle cx="120" cy="120" r="25" className="fill-[url(#bgGradient)]" />
                    <rect x="160" y="105" width="120" height="8" rx="4" className="fill-[#8b5cf6]" />
                    <rect x="160" y="120" width="80" height="6" rx="3" className="fill-[#d946ef]" />
                    <rect x="70" y="170" width="260" height="4" rx="2" className="fill-[#e2e8f0]" />
                    <rect x="70" y="185" width="200" height="4" rx="2" className="fill-[#e2e8f0]" />
                    <rect x="70" y="200" width="240" height="4" rx="2" className="fill-[#e2e8f0]" />
                    <rect x="70" y="230" width="60" height="6" rx="3" className="fill-[#8b5cf6]" />
                    <rect x="70" y="250" width="40" height="15" rx="7" className="fill-[#ddd6fe]" />
                    <rect x="120" y="250" width="50" height="15" rx="7" className="fill-[#ddd6fe]" />
                    <rect x="180" y="250" width="45" height="15" rx="7" className="fill-[#ddd6fe]" />
                    <rect x="70" y="290" width="80" height="6" rx="3" className="fill-[#d946ef]" />
                    <rect x="70" y="310" width="180" height="4" rx="2" className="fill-[#e2e8f0]" />
                    <rect x="70" y="325" width="150" height="4" rx="2" className="fill-[#e2e8f0]" />
                    <rect x="70" y="340" width="200" height="4" rx="2" className="fill-[#e2e8f0]" />

                    {/* Animated elements */}
                    <circle cx="320" cy="100" r="15" className="fill-[#f97316] opacity-80">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    </circle>
                    <rect x="30" y="300" width="12" height="12" rx="6" className="fill-[#10b981] opacity-80">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 5,0; 0,0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    </rect>
                    <polygon points="360,200 370,220 350,220" className="fill-[#ef4444] opacity-80">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 360 210; 360 360 210; 0 360 210"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </polygon>
                  </svg>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
