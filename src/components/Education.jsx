import React from 'react';
import { education } from '../data/education';

function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Educations</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-slate-dark p-6 rounded-xl shadow-lg w-full md:w-80 
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <p className="text-xl font-bold">{edu.school}</p>
            <p className="text-lg text-gray-300">{edu.degree}</p>
            <p className="text-md text-gray-400 mt-2">{edu.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;