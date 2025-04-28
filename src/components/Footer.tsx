
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <Logo />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-modulus-blue underline mb-4">Address</h3>
              <p className="text-modulus-blue font-medium">
                1875 Mission St Ste 103 #450<br />
                San Francisco, CA 94103
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-modulus-blue underline mb-4">Email</h3>
              <a href="mailto:finance@mobiusengine.ai" className="text-modulus-blue font-medium hover:underline">
                finance@mobiusengine.ai
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-modulus-blue underline mb-4">Telephone</h3>
              <a href="tel:6508896026" className="text-modulus-blue font-medium hover:underline">
                650-889-6026
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-modulus-blue underline mb-4">Socials</h3>
              <div className="flex gap-3">
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full border border-modulus-blue flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0649E7">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full border border-modulus-blue flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0649E7">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-modulus-blue text-white py-4">
        <div className="max-w-1500 mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-2 md:mb-0">
            © 2023 MobiusServices LLC
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
