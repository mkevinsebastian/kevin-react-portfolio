import React, { useState } from 'react';
import { courses } from '../data/courses';
import AccordionItem from './AccordionItem';

function CourseList() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="courses" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Courses</h2>
      
      <div className="space-y-5">
        {courses.map((course, index) => (
          <AccordionItem
            key={index}
            title={course.title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {/* This is the content inside the accordion */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.list.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="bg-transparent text-white p-3 rounded-lg 
                             text-left border border-gray-700 
                             transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
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