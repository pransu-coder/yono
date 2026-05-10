import React from 'react';

const Hero = () => {
  return (
    <section className="sticky top-[58px] z-40 w-full"> {/* Sticky below 58px header */}
      <div className="w-full md:px-4 lg:px-6 md:py-4">
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden shadow-2xl border-b md:border md:rounded-2xl border-gray-800 group">
          {/* Main Banner Image */}
          <img 
            src="/hero.png" 
            alt="Gaming Banner" 
            className="w-full h-auto md:max-h-[300px] md:object-cover block"
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04091d]/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Animated Glow Line at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-indigo-500 shadow-[0_0_15px_#6366f1]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
