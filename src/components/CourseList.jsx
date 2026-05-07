import React, { useState } from 'react';
import { courses } from '../data/courses';
import AccordionItem from './AccordionItem';

function CourseList() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="courses" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Courses</h2>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <AccordionItem
            key={index}
            title={course.title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {/* This is the content inside the accordion */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.list.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="bg-white/5 border border-white/10 text-gray-300 p-4 rounded-lg 
                             text-left text-sm font-medium transition-all duration-300 
                             hover:bg-white/10 hover:border-white/20 hover:text-white"
                >
                  <i className="fas fa-check-circle text-brand-cyan mr-2 opacity-70"></i>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}

export default CourseList;