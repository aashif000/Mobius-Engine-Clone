
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ArrowRight } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

const Navbar = () => {
  const scrollToSection = useScrollToSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between fixed top-0 bg-gradient-hero z-50">
      <Link to="/" onClick={(e) => handleNavClick(e, 'hero')} className="z-10">
        <Logo white={true} />
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="font-medium text-white hover:opacity-80 transition-opacity">Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="font-medium text-white hover:opacity-80 transition-opacity">About Us</a>
        <a href="#plans" onClick={(e) => handleNavClick(e, 'plans')} className="font-medium text-white hover:opacity-80 transition-opacity">Plans</a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="font-medium text-white hover:opacity-80 transition-opacity">Testimonials</a>
        <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="font-medium text-white hover:opacity-80 transition-opacity">Privacy Policy</a>
        <div className="relative group">
          <button className="font-medium text-white hover:opacity-80 transition-opacity flex items-center">
            More <span className="ml-1">▾</span>
          </button>
        </div>
      </div>
      
      <div className="hidden md:block">
        <button className="bg-white text-modulus-blue font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
      
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
