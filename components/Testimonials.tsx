
import React from 'react';

const testimonials = [
  {
    text: "The quality of these olives is unparalleled. Our customers specifically ask for the 'Olymp' brand by name.",
    author: "Marco Rossi",
    role: "Gourmet Deli Owner, Milan",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop"
  },
  {
    text: "Working with Konstantopoulos S.A. has been a cornerstone of our success. Their year-round supply is truly reliable.",
    author: "Sarah Jenkins",
    role: "Global Supply Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    text: "The extra virgin olive oil has a purity and richness that represents the very best of Greek tradition.",
    author: "Chef Antoine",
    role: "Michelin Star Restaurant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#fcfcfc] py-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-xs uppercase tracking-[0.4em] font-heading font-bold text-gray-400 mb-4">What Our Partners Say</h3>
          <h2 className="text-huge font-heading text-[#333]">Trusted Globally</h2>
          <div className="w-24 h-1 bg-[#39491c] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
              </div>
              <blockquote className="text-lg italic font-serif text-gray-700 leading-relaxed">
                "{item.text}"
              </blockquote>
              <div className="space-y-1">
                <cite className="not-italic font-heading font-bold uppercase tracking-widest text-sm block">
                  {item.author}
                </cite>
                <span className="text-xs text-gray-400 uppercase tracking-widest block">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
