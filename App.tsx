
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#39491c] selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <div id="value-props" className="bg-white py-24">
          <ValueProposition 
            id="1"
            surtitle="Quality & Certifications"
            title="Three generations of constant improvement"
            description="We have constantly strived for perfection and improvement throughout our production process. This is how we can ensure our premium products and have been recognized for maintaining the highest quality standards."
            cta="All Certifications"
            image="https://images.unsplash.com/photo-1541544324223-1f19069d359f?q=80&w=1200&auto=format&fit=crop"
            reverse={false}
          />
          
          <ValueProposition 
            id="2"
            surtitle="Our Heritage"
            title="Experts by choice, quality by tradition"
            description="To compete globally we have to offer something different. For us, that is the expertise, innovation and flexibility to consistently deliver whatever our customers require."
            cta="About Us"
            image="https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=1200&auto=format&fit=crop"
            reverse={true}
          />

          <ValueProposition 
            id="3"
            surtitle="Production Process"
            title="We know what makes great olives"
            description="For us, every step deserves excellence. Delivering the finest table olives and olive oil from farm to table can only happen if they are expertly cared for at each step of the process."
            cta="Our Process"
            image="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
            reverse={false}
          />
        </div>

        <Testimonials />
        
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
