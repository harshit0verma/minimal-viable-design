
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-[#39491c] rounded-full flex items-center justify-center text-white font-serif italic text-xl transition-transform group-hover:scale-110">
            O
          </div>
          <div className="flex flex-col">
            <span className="text-[#39491c] font-bold tracking-widest text-sm leading-none">OLYMP</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Since 1956</span>
          </div>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            {['Company', 'Production', 'Products', 'News', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-heading hover:text-[#39491c] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button className="flex items-center gap-3 group">
            <span className="text-xs tracking-[0.3em] font-heading font-bold text-gray-700">MENU</span>
            <div className="flex flex-col gap-1.5 w-8">
              <span className="h-[1px] w-full bg-gray-800 transition-all group-hover:w-1/2"></span>
              <span className="h-[1px] w-full bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
