
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
             <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#39491c] rounded-full flex items-center justify-center text-white font-serif italic text-lg">
                O
              </div>
              <div className="flex flex-col">
                <span className="text-[#39491c] font-bold tracking-widest text-xs">OLYMP</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500">Established 1956</span>
              </div>
            </div>
            <p className="text-sm font-serif opacity-50 leading-relaxed">
              Providing premium Greek table olives and extra virgin olive oil to the global market with passion and expertise.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-heading font-bold text-gray-800">Products</h4>
            <ul className="space-y-4">
              {['Table Olives', 'Extra Virgin Oil', 'Our Brands', 'Packaging Solutions'].map(item => (
                <li key={item}><a href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#39491c] transition-all">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-heading font-bold text-gray-800">Company</h4>
            <ul className="space-y-4">
              {['History', 'Facilities', 'Quality Standards', 'News & Press'].map(item => (
                <li key={item}><a href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#39491c] transition-all">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-heading font-bold text-gray-800">Location</h4>
            <address className="not-italic text-sm font-serif opacity-50 leading-relaxed">
              3rd Km National Road Katerini - Larissa<br />
              Greece
            </address>
            <div className="pt-4 flex gap-4">
              {/* Simple Social Icons Placeholder */}
              {[1, 2, 3].map(i => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#39491c] hover:text-white transition-all">
                  <span className="text-[10px]">●</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © 2024 Konstantopoulos S.A. Olymp. All rights reserved.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            Back to Top
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
