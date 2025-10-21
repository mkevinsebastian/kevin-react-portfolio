import React from 'react';

function ProjectCard({ project }) {
  // Base button styles
  const btnClass = "inline-block py-2 px-5 mx-1 my-1 bg-brand-yellow text-navy font-bold rounded-lg transition-all duration-200 hover:bg-yellow-300 active:scale-95 transform";

  return (
    // This new 'className' string is what fixes your layout
    <div className="relative w-full sm:w-80 h-auto sm:h-[550px] bg-slate-dark rounded-xl shadow-lg 
                    overflow-hidden transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl
                    flex flex-col">
      
      <img 
        src={project.imgSrc} 
        alt={project.alt} 
        className="w-full h-auto aspect-video object-cover" 
      />

      <div className="p-5 text-center flex-grow flex flex-col justify-between">
        {/* Top Content */}
        <div>
          <h3 className="text-lg font-bold text-brand-yellow mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        </div>

        {/* Bottom Content (Buttons) - This logic prevents split buttons */}
        <div className="mt-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              GitHub
            </a>
          )}
          {project.linkUrl && (
            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              {project.linkLabel || 'View Link'}
            </a>
          )}
          {project.paperUrl && (
            <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className={btnClass}>
              Conference Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;