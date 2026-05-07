import React from 'react';
import { education } from '../data/education';

function Education() {
  return (
    <section id="education" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-cyan">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl 
                       transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-yellow/50 overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/0 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <i className="fas fa-graduation-cap text-3xl text-brand-yellow mb-4 group-hover:scale-110 transition-transform"></i>
                <p className="text-2xl font-bold text-white mb-2">{edu.school}</p>
                <p className="text-lg text-brand-cyan font-medium">{edu.degree}</p>
              </div>
              <p className="text-sm text-gray-400 mt-6 pt-4 border-t border-white/10 font-mono">{edu.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;