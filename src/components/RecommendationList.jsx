import React from 'react';
import { recommendations } from '../data/recommendations';

function RecommendationList() {
  return (
    <section id="recommendations" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Recommendations</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {recommendations.map((rec, index) => (
          <div 
            key={index}
            className="w-full md:w-96 bg-slate-dark p-6 rounded-xl shadow-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       flex flex-col justify-between text-center"
          >
            <p className="italic text-gray-300 mb-6 leading-relaxed">"{rec.quote}"</p>
            <div>
              <p className="font-bold text-brand-yellow mb-4">- {rec.author}</p>
              <a 
                href={rec.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 py-2 px-5 bg-blue-600 
                           text-white rounded-lg transition-all duration-200 
                           hover:bg-blue-700 active:scale-95"
              >
                View on LinkedIn <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendationList;