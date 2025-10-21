import React from 'react';

function CertificateCard({ certificate }) {
  return (
    <div className="w-full sm:w-64 bg-slate-dark p-4 rounded-xl shadow-lg 
                    transition-all duration-300 hover:scale-110 hover:shadow-2xl">
      <img 
        src={certificate.imgSrc} 
        alt={certificate.alt} 
        className="w-full h-auto object-cover rounded-lg"
      />
      <p className="text-brand-yellow text-base font-bold mt-4">{certificate.title}</p>
      <p className="text-sm text-gray-400 mt-1">{certificate.date}</p>
    </div>
  );
}

export default CertificateCard;