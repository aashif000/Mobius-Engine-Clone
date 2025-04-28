
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-sora text-modulus-blue font-bold mb-16">
        What our clients have to say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((index) => (
          <div key={index} className="rounded-3xl overflow-hidden border border-gray-200">
            <div className="bg-white p-8 h-40 flex items-center justify-center">
              <button className="w-12 h-12 bg-modulus-blue rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-current ml-1" />
              </button>
            </div>
            <div className="bg-modulus-blue p-8 text-white">
              <p className="mb-4">
                Holly is a senior executive who got over 10 job interviews and an offer she accepted
              </p>
              <div className="flex justify-end">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-modulus-blue" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-16">
        <button className="border border-modulus-blue text-modulus-blue rounded-full py-3 px-6 flex items-center">
          More customer testimonials
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
        
        <button className="bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-modulus-blue-dark transition-colors">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
