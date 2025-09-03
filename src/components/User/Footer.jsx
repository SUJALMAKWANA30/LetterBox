import React from 'react';

function Footer() {
  return (
    <footer className="relative w-full h-[70vh] max-h-[1080px] overflow-hidden bg-gradient-to-b from-white via-orange-300 to-orange-600 font-sans">
      
      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 py-8 sm:px-8 text-white z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#d94828] drop-shadow-lg select-none">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-normal">
              LettrBox
            </h1>
            <h1 className="text-2xl sm:text-4xl uppercase tracking-widest font-[Bebas Neue]">
              APPLY IN A SNAP
            </h1>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <hr className="border-t border-amber-400 mb-4" />
          <p className="text-sm text-amber-800/90 font-medium mb-4">
            &copy; {new Date().getFullYear()} LettrBox. A product by Parth & Sujal
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
