import React, { useRef } from 'react';

function AccordionItem({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="bg-slate-dark rounded-xl shadow-lg overflow-hidden">
      <h3 
        className="p-5 cursor-pointer flex justify-between items-center 
                   text-lg font-bold text-brand-yellow 
                   transition-all duration-200 active:scale-[0.98]"
        onClick={onToggle}
      >
        {title}
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </h3>
      
      {/* This part still uses inline styles for the dynamic height animation */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0'
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