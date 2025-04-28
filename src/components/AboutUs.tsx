
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-blue py-16 text-white">
      <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-sora text-white font-bold mb-16">
          About Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          {/* Profile 1 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/5bc310_4e0b1ef9b859423da8016acc403cb337~mv2.png/v1/fill/w_248,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pro%203.png" 
                  alt="Ashwin" 
                  className="w-half h-half object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0649E7">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
            </div>
            
            <div className="text-white">
              <p className="text-lg mb-6">
                <span className="font-bold">Ashwin</span> is the founder of mobiusengine.ai. He is an accomplished 
                senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 
                decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from 
                Yale University.
              </p>
              <p className="text-lg mb-4">
                <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                Ashwin's vision with Mobius is to give job seekers a significant 
                advantage in securing the roles of their dreams.
              </p>
            </div>
          </div>
          
          {/* Profile 2 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg" 
                  alt="Nicole" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0649E7">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
            </div>
            
            <div className="text-white">
              <p className="text-lg mb-6">
                <span className="font-bold">Nicole</span> is an Executive coach at Mobius specializing in resume 
                builds and career advisory.
              </p>
              <p className="text-lg">
                With a B.S. in Business Administration from UC Berkeley and 7+ 
                years of experience in AI-driven product strategy, she has seen 
                firsthand how the proper positioning opens doors. She takes a 
                targeted, results-driven approach to help clients confidently 
                stand out and land roles that truly match their skills and 
                potential.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-12 space-y-4">
          <button className="text-white flex items-center gap-2 hover:underline">
            Learn more about our Board of Advisors
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="text-white flex items-center gap-2 hover:underline">
            Follow us on our LinkedIn page
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
