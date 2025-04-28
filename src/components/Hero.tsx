
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full bg-gradient-hero text-white py-16 md:py-24">
      <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold">
            Land job interviews<br />
            <span className="text-modulus-blue-dark">10x</span> faster
          </h2>
          
          <p className="text-lg md:text-xl">
            Custom-built resumes that match your goals, keywords, and
            recruiter expectations.
          </p>
          
          <button className="bg-white text-modulus-blue rounded-full px-8 py-4 font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-lg p-6 shadow-xl ml-auto max-w-md relative z-10">
            <div className="text-modulus-blue text-sm font-medium">2024 / 2025</div>
            <div className="text-modulus-blue font-bold text-xl">HIRING TRENDS</div>
            <div className="mt-2 text-gray-700 text-sm">
              A job seeker's guide to what to expect in 2024 in the new normal of growing tech layoffs
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Based on anonymized 2023/2024 client success data
            </div>
            
            <div className="mt-6 flex items-end justify-between">
              <img src="/lovable-uploads/4c47bccc-b31b-40b5-b9ea-80891edf0e5f.png" alt="Mobius Logo" className="w-24" />
              <div className="text-xs text-gray-700 font-medium">MOBIUSENGINE.AI</div>
            </div>

            <div className="absolute bottom-6 right-6 w-8 h-8 bg-modulus-lightblue rounded-full flex items-center justify-center">
              <span className="text-modulus-blue">📖</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
