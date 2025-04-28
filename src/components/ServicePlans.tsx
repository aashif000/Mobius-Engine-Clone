
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-5">
    <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
      <Check className="w-3 h-3 text-white" />
    </div>
    <div className="text-modulus-blue font-medium">{children}</div>
  </div>
);

const ServicePlans = () => {
  return (
    <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-sora text-modulus-blue font-bold mb-16">
        Job Application Service Plans
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* April Promo Plan */}
        <div className="border border-modulus-blue rounded-3xl p-8">
          <h3 className="text-3xl font-sora text-modulus-blue font-bold mb-3">April Promo</h3>
          
          <div className="text-modulus-blue font-sora font-bold text-5xl mb-6">
            $35<span className="text-2xl font-medium">/week</span>
          </div>
          
          <div className="border-t border-gray-300 pt-6 mb-8"></div>
          
          <div className="space-y-5">
            <CheckItem>
              Curated jobs from 1M+ listings, refreshed every 48 hours
            </CheckItem>
            
            <CheckItem>
              Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)
            </CheckItem>
            
            <CheckItem>
              Need more? Add extra apps for just $1.5 each
            </CheckItem>
            
            <CheckItem>
              Your own dedicated application analyst
            </CheckItem>
            
            <CheckItem>
              Personalized with up to 10 filters & 5 job titles
            </CheckItem>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-modulus-blue-dark transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Starter Plan */}
        <div className="border border-modulus-blue rounded-3xl p-8 relative">
          <div className="absolute -top-3 right-8 bg-modulus-lightblue text-modulus-blue rounded-full px-3 py-1 text-sm font-medium border border-modulus-blue">
            Popular
          </div>
          
          <h3 className="text-3xl font-sora text-modulus-blue font-bold mb-3">Starter</h3>
          
          <div className="text-modulus-blue font-sora font-bold text-5xl mb-6">
            $50<span className="text-2xl font-medium">/week</span>
          </div>
          
          <div className="border-t border-gray-300 pt-6 mb-8"></div>
          
          <div className="mb-5 font-semibold text-modulus-blue">
            All the perks of the Promo Plan, plus:
          </div>
          
          <div className="space-y-5">
            <CheckItem>
              Resume review & story-focused feedback
            </CheckItem>
            
            <CheckItem>
              Dedicated search specialist
            </CheckItem>
            
            <CheckItem>
              Up to 50 job apps/week
            </CheckItem>
            
            <CheckItem>
              Extra apps at $1.5 each
            </CheckItem>
            
            <CheckItem>
              Analyst support within 6 hours (SLA/PST hours)
            </CheckItem>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-modulus-blue-dark transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Plus Plan */}
        <div className="border border-modulus-blue rounded-3xl p-8">
          <h3 className="text-3xl font-sora text-modulus-blue font-bold mb-3">Plus</h3>
          
          <div className="text-modulus-blue font-sora font-bold text-5xl mb-6">
            $100<span className="text-2xl font-medium">/week</span>
          </div>
          
          <div className="border-t border-gray-300 pt-6 mb-8"></div>
          
          <div className="mb-5 font-semibold text-modulus-blue">
            Everything in Starter, with more muscle:
          </div>
          
          <div className="space-y-5">
            <CheckItem>
              Up to 75 apps/week
            </CheckItem>
            
            <CheckItem>
              Apply to 15 job titles
            </CheckItem>
            
            <CheckItem>
              Analyst + full application team on Pacific hours
            </CheckItem>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-modulus-blue text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-modulus-blue-dark transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Advance Plan */}
      <div className="bg-modulus-blue rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-sora text-white font-bold mb-3">Advance</h3>
            <p className="text-white mb-5 font-semibold">Top-tier support for serious job hunters:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-white font-medium">Everything in Plus</div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-white font-medium">Custom Resumes & Cover Letters</div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-white font-medium">20 fully customized applications/week</div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-white font-medium">Help with complex job searches</div>
              </div>
              
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-modulus-green rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-white font-medium">Access to senior resume experts, Founder & Exec Coaches</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end justify-center">
            <div className="text-white font-sora font-bold text-5xl mb-8 text-right">
              $150<span className="text-2xl font-medium">/week</span>
            </div>
            
            <button className="bg-white text-modulus-blue font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;
