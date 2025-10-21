import React from 'react';
import { workExperience } from '../data/workExperience';

function Resume() {
  // Base styles for the card
  const cardClass = "bg-slate-dark p-6 rounded-xl shadow-lg max-w-2xl mx-auto text-center text-white mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl";

  return (
    <section id="resume" className="py-16">
      <h2 className="text-3xl font-bold uppercase mb-4">Resume</h2>
      <h1 className="text-2xl font-bold mb-8">Working Experience</h1>

      {workExperience.map((job, index) => (
        <div className={cardClass} key={index}>
          <p className="text-xl font-bold">{job.company}</p>
          <p className="text-md text-gray-400 mb-2">{job.dates}</p>
          <p className="text-lg font-semibold text-brand-yellow mb-3">{job.role}</p>
          <p className="text-gray-300">{job.description}</p>
        </div>
      ))}
      
      <h1 className="text-2xl font-bold mt-16 mb-8">Personal Resume</h1>
      <div className={cardClass}>
        <p className="text-xl font-bold">Kevin's Curriculum Vitae</p>
        <p className="mt-4">
          <a 
            href="https://drive.google.com/file/d/18yvIZShTK02eRhI_lEAfQ3pp2eUvJpni/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 font-bold text-lg hover:underline active:scale-95 transition-transform"
          >
            Kevin Sebastian - CV.pdf
          </a>
        </p>
      </div>
    </section>
  );
}

export default Resume;