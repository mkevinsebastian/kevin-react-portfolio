import React from 'react';
import { workExperience } from '../data/workExperience';

function Resume() {
  // Modern glassmorphic styles for the card
  const cardClass = "relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-left text-white mb-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 group";

  return (
    <section id="resume" className="py-16 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Resume</h2>
        <p className="text-xl text-gray-400 font-light">My Professional Journey</p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {workExperience.map((job, index) => (
          <div className={cardClass} key={index}>
             <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-brand-cyan border-4 border-navy -translate-x-2 md:-translate-x-2 top-10 z-10 hidden md:block"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 border-b border-white/10 pb-4">
              <p className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">{job.company}</p>
              <p className="text-sm font-medium text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{job.dates}</p>
            </div>
            <p className="text-xl font-medium text-gray-300 mb-4">{job.role}</p>
            <p className="text-gray-400 leading-relaxed font-light">{job.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Personal Resume</h1>
        <div className="bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-white/20 p-8 rounded-2xl max-w-2xl mx-auto text-center backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <p className="text-2xl font-bold mb-6">Kevin's Curriculum Vitae</p>
          <a 
            href="https://drive.google.com/file/d/18yvIZShTK02eRhI_lEAfQ3pp2eUvJpni/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-white text-navy font-bold text-lg py-3 px-8 rounded-full hover:scale-105 hover:bg-brand-yellow transition-all duration-300 shadow-lg"
          >
            <i className="fas fa-download"></i> Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;