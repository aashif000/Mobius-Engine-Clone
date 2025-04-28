
import React from 'react';

const Logo = ({ className = "", white = false }: { className?: string, white?: boolean }) => {
  const textColor = white ? "text-white" : "text-modulus-blue";
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img
        src="https://static.wixstatic.com/media/5bc310_f90551ddd1fa489d9c3d9d78dccb2fa4~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/v2.png"
        alt="MobiusEngine Logo"
        width="76"
        height="50"
      />
      <span className={`font-sora font-semibold text-xl ${textColor}`}>MobuisEngine</span>
    </div>
  );
};

export default Logo;
