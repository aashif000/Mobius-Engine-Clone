
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-8">
      <div className="bg-modulus-blue rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white font-sora mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-0">
              STILL HAVE<br />DOUBTS?
            </h2>
          </div>
          
          <div className="text-white font-sora text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-0">
            Contact us
          </div>
          
          <button className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-modulus-blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
