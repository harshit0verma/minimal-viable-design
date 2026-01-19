
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464960710447-9e55a4019270?q=80&w=1920&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30" 
          alt="Contact Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-xs uppercase tracking-[0.4em] font-heading font-bold text-[#a85555] mb-6">Contact Us</h3>
            <h2 className="text-huge font-heading leading-tight mb-8">Let's grow together</h2>
            <p className="text-lg opacity-70 font-serif leading-relaxed mb-12">
              Whether you're looking for distribution partnerships or private label solutions, our team is ready to provide the expertise you need.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-xs">T</span>
                </div>
                <span className="text-lg font-heading tracking-widest">+30 23510 47000</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-xs">E</span>
                </div>
                <span className="text-lg font-heading tracking-widest">info@konstolymp.gr</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="bg-white p-10 lg:p-12 shadow-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-heading font-bold text-gray-400">First Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-[#39491c] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-heading font-bold text-gray-400">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-[#39491c] outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-heading font-bold text-gray-400">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-2 focus:border-[#39491c] outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-heading font-bold text-gray-400">Company</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-[#39491c] outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-heading font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-200 py-2 focus:border-[#39491c] outline-none transition-colors resize-none"></textarea>
              </div>

              <button className="w-full bg-[#39491c] text-white py-4 uppercase tracking-[0.2em] font-heading font-bold hover:bg-[#2d3a16] transition-colors mt-8">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
