import React, { useRef } from 'react';

function AccordionItem({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20">
      <h3 
        className="p-5 cursor-pointer flex justify-between items-center 
                   text-lg font-bold text-white hover:text-brand-yellow
                   transition-all duration-200 active:scale-[0.99] select-none"
        onClick={onToggle}
      >
        <span>{title}</span>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-yellow/20 text-brand-yellow' : 'text-gray-400'}`}>
          <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </div>
      </h3>
      
      {/* This part still uses inline styles for the dynamic height animation */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-5 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;