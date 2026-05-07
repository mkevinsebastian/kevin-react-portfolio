import React from 'react';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-cyan">Technical Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="group relative px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full 
                       font-medium text-gray-200 transition-all duration-300 
                       hover:scale-110 hover:bg-white/10 hover:border-brand-cyan/50 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;