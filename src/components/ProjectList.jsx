import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;