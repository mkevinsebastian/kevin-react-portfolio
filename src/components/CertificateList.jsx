import React from 'react';
import { certificates } from '../data/certificates';
import CertificateCard from './CertificateCard';

function CertificateList() {
  return (
    <section id="certificates" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-cyan">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} certificate={cert} />
        ))}
      </div>
    </section>
  );
}

export default CertificateList;