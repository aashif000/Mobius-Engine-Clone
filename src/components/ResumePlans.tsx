import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import ContactCTA from './ContactCTA';

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-5">
    <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
      <Check className="w-3 h-3 text-white" />
    </div>
    <div className="text-modulus-blue font-medium">{children}</div>
  </div>
);

const ResumePlans = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-sora text-modulus-blue font-bold mb-3">
        Resume Building & Coaching
      </h2>
      <p className="text-modulus-blue font-medium mb-16 max-w-3xl">
        Let's talk about where you're headed — and how your resume can get you there. 
        <span className="font-bold"> Schedule a call to get started.</span>
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Resume Rebuild Plan */}
        <div className="border border-modulus-blue rounded-3xl p-8">
          <h3 className="text-3xl font-sora text-modulus-blue font-bold mb-3">Resume Rebuild</h3>
          <p className="text-modulus-blue font-medium mb-8">
            Crafted for senior to VP-level professionals ready for their next big step.
          </p>
          
          <div className="text-modulus-blue font-sora font-bold text-5xl mb-6">
            $1000 <span className="text-2xl font-medium">one time</span>
          </div>
          
          <div className="border-t border-gray-300 pt-6 mb-8"></div>
          
          <div className="space-y-5">
            <CheckItem>3× 30-min coaching</CheckItem>
            <CheckItem>Focused on storytelling, not just formatting</CheckItem>
            <CheckItem>Analyst + full application team on Pacific hours</CheckItem>
            <CheckItem>Tailored to your target industry, company, or role</CheckItem>
            <CheckItem>Direct work with our co-founder (ex-Google, JP Morgan)</CheckItem>
            <CheckItem>Executive coaching from UC Berkeley alum with 10+ yrs experience</CheckItem>
            <CheckItem>Resume Rebuild portfolio available upon request</CheckItem>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-modulus-blue-dark transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Interview Prep Plan */}
        <div className="border border-modulus-blue rounded-3xl p-8">
          <h3 className="text-3xl font-sora text-modulus-blue font-bold mb-3">Interview Prep</h3>
          <p className="text-modulus-blue font-medium mb-8">
            Two sessions to sharpen your story, confidence, and clarity — fast.
          </p>
          
          <div className="text-modulus-blue font-sora font-bold text-5xl mb-6">
            $500 <span className="text-2xl font-medium">one time</span>
          </div>
          
          <div className="border-t border-gray-300 pt-6 mb-8"></div>
          
          <div className="space-y-5">
            <CheckItem>2× 45-min live coaching with our co-founder</CheckItem>
            <CheckItem>Real-time, practical feedback</CheckItem>
            <CheckItem>Build clarity, empathy & executive presence</CheckItem>
            <CheckItem>For senior and leadership roles — technical & non-technical</CheckItem>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-modulus-blue-dark transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <ContactCTA />
      </div>
    </div>
  );
};

export default ResumePlans;
