import React from 'react';

function ProjectCard({ project }) {
  // Modern glassmorphic button styles
  const btnClass = "inline-flex items-center justify-center py-2 px-4 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white text-sm font-medium rounded-lg transition-all duration-300 backdrop-blur-md active:scale-95";

  return (
    <div className="group relative w-full h-full flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/10">
      
      {/* Image container with overlay */}
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80 z-10"></div>
        <img 
          src={project.imgSrc} 
          alt={project.alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      <div className="relative z-20 flex flex-col flex-grow p-6 -mt-10">
        {/* Top Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3">{project.title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">{project.description}</p>
        </div>

        {/* Bottom Content (Buttons) */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
          )}
          {project.linkUrl && (
            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              <i className="fas fa-external-link-alt mr-2"></i> {project.linkLabel || 'View Link'}
            </a>
          )}
          {project.paperUrl && (
            <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              <i className="fas fa-file-alt mr-2"></i> Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;