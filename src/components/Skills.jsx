import React from 'react';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="bg-blue-600 text-white py-2 px-5 rounded-lg 
                       font-bold text-base transition-all duration-200 
                       hover:scale-110 hover:bg-blue-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;