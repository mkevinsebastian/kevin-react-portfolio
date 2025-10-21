import React from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInOnScroll({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    // These custom classes are defined in index.css
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeInOnScroll;