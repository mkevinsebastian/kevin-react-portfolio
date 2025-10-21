import React from 'react';
import { certificates } from '../data/certificates';
import CertificateCard from './CertificateCard';

function CertificateList() {
  return (
    <section id="certificates" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} certificate={cert} />
        ))}
      </div>
    </section>
  );
}

export default CertificateList;