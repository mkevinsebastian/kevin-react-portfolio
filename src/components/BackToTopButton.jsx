import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Gunakan Lucide alih-alih Font Awesome

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Menggunakan window.scrollY (lebih modern dibanding pageYOffset)
    if (window.scrollY > 300) {
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
    // Z-index ditingkatkan ke 9999 agar di atas Particles & FadeInOnScroll
    <div className="fixed bottom-8 right-8 z-[9999]">
      <button 
        onClick={scrollToTop} 
        className={`
          bg-[#fbbf24] text-[#0f172a] w-14 h-14 rounded-full 
          flex items-center justify-center shadow-2xl
          transition-all duration-500 transform
          hover:scale-110 hover:bg-yellow-300 active:scale-90
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
        `}
        aria-label="Back to top"
      >
        <ArrowUp size={28} strokeWidth={3} />
      </button>
    </div>
  );
}

export default BackToTopButton;