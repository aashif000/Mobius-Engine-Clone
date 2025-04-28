
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-sora text-modulus-blue font-bold mb-16">
        How we work?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="flex flex-col items-start">
          <div className="w-20 h-20 rounded-full border-2 border-modulus-blue-dark flex items-center justify-center font-bold text-5xl mb-8">
            1
          </div>
          
          <div className="h-0.5 w-full bg-modulus-blue my-6"></div>
          
          <p className="text-modulus-blue font-medium text-xl md:text-2xl">
            Submit Intake Form
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-start">
          <div className="w-20 h-20 rounded-full border-2 border-modulus-blue-dark flex items-center justify-center font-bold text-5xl mb-8">
            2
          </div>
          
          <div className="h-0.5 w-full bg-modulus-blue my-6"></div>
          
          <p className="text-modulus-blue font-medium text-xl md:text-2xl">
            We do the search and curation for list of jobs
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-start">
          <div className="w-20 h-20 rounded-full border-2 border-modulus-blue-dark flex items-center justify-center font-bold text-5xl mb-8">
            3
          </div>
          
          <div className="h-0.5 w-full bg-modulus-blue my-6"></div>
          
          <p className="text-modulus-blue font-medium text-xl md:text-2xl">
            You approve, we do the tedious part (applying)
          </p>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col items-start">
          <div className="w-20 h-20 rounded-full border-2 border-modulus-blue-dark flex items-center justify-center font-bold text-5xl mb-8">
            4
          </div>
          
          <div className="h-0.5 w-full bg-modulus-blue my-6"></div>
          
          <p className="text-modulus-blue font-medium text-xl md:text-2xl">
            You get the interviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
