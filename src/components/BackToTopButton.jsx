import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="bg-brand-yellow text-navy w-12 h-12 rounded-full 
                     text-2xl shadow-lg
                     transition-all duration-300 hover:scale-110 
                     hover:bg-yellow-300 active:scale-95"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;