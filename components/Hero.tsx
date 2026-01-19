
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f8f6]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3f3f0] -z-10 skew-x-[-10deg] translate-x-24"></div>
      
      {/* Large 365 Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[35vw] font-black text-gray-200/40 font-heading -translate-x-1/4 leading-none">3</span>
        <span className="text-[35vw] font-black text-gray-200/40 font-heading leading-none">6</span>
        <span className="text-[35vw] font-black text-gray-200/40 font-heading translate-x-1/4 leading-none">5</span>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 pt-20">
        <div className="flex flex-col justify-center items-start">
          <div className="w-12 h-1 bg-[#39491c] mb-8"></div>
          <h1 className="text-huge font-heading text-[#333] mb-8">
            The finest Greek<br />
            olives, from the<br />
            market leader
          </h1>
          
          <div className="mt-4">
            <a href="#products" className="group flex items-center gap-12 text-[#39491c] hover:text-[#5a742c] transition-all">
              <span className="h-[1px] w-12 bg-[#39491c] group-hover:w-20 transition-all"></span>
              <span className="text-sm uppercase tracking-widest font-heading font-bold">See our Table Olives</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Visual elements like the olive jar and fruits from the reference */}
            <img 
              src="https://www.konstolymp.gr/themes/custom/pb/sass/components/homepage/images/1.png" 
              alt="Premium Olives"
              className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            {/* Floaties */}
            <img src="https://www.konstolymp.gr/themes/custom/pb/sass/components/homepage/images/2.png" className="absolute -top-10 -right-10 w-32 h-32 object-contain" alt="" />
            <img src="https://www.konstolymp.gr/themes/custom/pb/sass/components/homepage/images/5.png" className="absolute bottom-10 -left-10 w-24 h-24 object-contain" alt="" />
          </div>
          
          <div className="absolute bottom-0 right-0 lg:translate-y-12">
            <div className="bg-white p-8 shadow-xl max-w-xs">
              <p className="text-xs uppercase tracking-widest font-heading font-bold text-[#39491c] mb-2">Year-Round Supply</p>
              <p className="text-sm italic opacity-60 font-serif">Consistently delivering excellence across every season since 1956.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Logos Bottom Right (ESPA Inspired) */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-4 bg-white/80 p-4 rounded-sm">
        <div className="flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" className="h-8" alt="EU" />
          <div className="w-[1px] h-8 bg-gray-300"></div>
          <span className="text-[10px] leading-tight font-heading max-w-[100px] uppercase">European Regional Development Fund</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
