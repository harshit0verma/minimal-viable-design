
import React from 'react';

interface ValueProps {
  id: string;
  surtitle: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  reverse?: boolean;
}

const ValueProposition: React.FC<ValueProps> = ({ surtitle, title, description, cta, image, reverse }) => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] font-heading font-bold text-[#a85555] mb-4">
                {surtitle}
              </span>
              <h2 className="text-huge font-heading text-[#333] leading-tight">
                {title}
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 font-serif leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="pt-4">
              <a href="#" className="group flex items-center gap-12 text-[#39491c] hover:text-[#5a742c] transition-all">
                <span className="h-[1px] w-12 bg-[#39491c] group-hover:w-20 transition-all"></span>
                <span className="text-xs uppercase tracking-widest font-heading font-bold">{cta}</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-[#f8f8f6] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            {/* Decorative leaf/olive floaters like the site */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none opacity-20 rotate-45">
              <svg viewBox="0 0 100 100" fill="#39491c">
                <path d="M50 0C50 0 85 25 85 65C85 85 70 100 50 100C30 100 15 85 15 65C15 25 50 0 50 0Z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
