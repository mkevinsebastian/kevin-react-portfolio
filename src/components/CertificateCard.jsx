import React from 'react';

function CertificateCard({ certificate }) {
  return (
    <div className="group relative w-full h-full flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/10">
      <div className="relative w-full overflow-hidden bg-white/5 aspect-[4/3] flex items-center justify-center p-4">
        <img 
          src={certificate.imgSrc} 
          alt={certificate.alt} 
          className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white/5 border-t border-white/5">
        <p className="text-brand-yellow text-lg font-bold mb-2 leading-snug">{certificate.title}</p>
        <p className="text-sm text-gray-400 mt-auto">{certificate.date}</p>
      </div>
    </div>
  );
}

export default CertificateCard;