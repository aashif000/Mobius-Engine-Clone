
import React from 'react';
import { Heart, User, Star } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-16 bg-modulus-lightgray rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-sora text-modulus-blue font-bold mb-16">
        Why Choose Us?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-modulus-blue/20">
          <Heart className="w-12 h-12 text-blue-900 mb-6" fill="currentColor" stroke="none" />
          
          <h3 className="text-2xl font-sora font-bold text-modulus-blue mb-4">
            Tried, Tested, Trusted
          </h3>
          
          <p className="text-modulus-blue">
            Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-modulus-blue/20">
          <User className="w-12 h-12 text-blue-900 mb-6" fill="currentColor" />
          
          <h3 className="text-2xl font-sora font-bold text-modulus-blue mb-4">
            Real People, Real Help
          </h3>
          
          <p className="text-modulus-blue">
            A hands-on team that actually cares — guiding you through every twist in your career path.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-modulus-blue/20">
          <Star className="w-12 h-12 text-blue-900 mb-6" fill="currentColor" stroke="none" />
          
          <h3 className="text-2xl font-sora font-bold text-modulus-blue mb-4">
            Beat the Line
          </h3>
          
          <p className="text-modulus-blue">
            We search, shortlist, and apply for you, so your name shows up first — every single day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
