import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;