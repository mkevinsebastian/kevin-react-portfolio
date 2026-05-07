import React from 'react';
import { recommendations } from '../data/recommendations';

function RecommendationList() {
  return (
    <section id="recommendations" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((rec, index) => (
          <div 
            key={index}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl 
                       transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20
                       flex flex-col justify-between"
          >
            <i className="fas fa-quote-left text-4xl text-white/10 absolute top-4 left-4"></i>
            <div className="relative z-10 mb-8">
              <p className="italic text-gray-300 leading-relaxed pt-4">"{rec.quote}"</p>
            </div>
            
            <div className="relative z-10 border-t border-white/10 pt-6 mt-auto">
              <p className="font-bold text-brand-yellow text-lg mb-4">{rec.author}</p>
              <a 
                href={rec.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white/5 border border-white/10 
                           text-white text-sm font-medium rounded-lg transition-all duration-300 
                           hover:bg-brand-cyan hover:border-brand-cyan hover:text-navy active:scale-95"
              >
                View on LinkedIn <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendationList;