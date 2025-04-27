import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector(".hcf-profile");
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && hcf) {
        hcf.classList.add("hcf-profile-fixed");
      } else if (scrollTop < lastScrollTop && hcf) {
        hcf.classList.remove("hcf-profile-fixed");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans bg-light">
      <HeroSection
        scrollToSection={scrollToSection}
        faqRef={faqRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
      
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Transform Your Business with Our Tool</h2>
        <p className="text-lg md:text-xl mb-6">Our platform streamlines processes and improves efficiency.</p>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="bg-yellow-500 text-black py-3 px-8 rounded-full hover:bg-yellow-600"
        >
          Get Started
        </button>
      </div>

      <div className="bg-light py-12">
        <FeaturesGrid />
      </div>

      <div className="bg-white py-12" ref={aboutRef}>
        <InfoSection />
      </div>

      <div className="bg-white py-12" ref={faqRef}>
        <HomeFAQs />
      </div>

      <div className="bg-white py-12" ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
