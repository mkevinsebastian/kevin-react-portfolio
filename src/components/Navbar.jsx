import React, { useState, useEffect } from 'react';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (click) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [click]);

  return (
    <nav className="bg-slate-dark h-20 flex justify-center items-center 
                    text-lg sticky top-0 z-[999] shadow-lg">
      <div className="flex justify-between items-center h-20 w-full max-w-7xl mx-auto px-6">
        
        <a 
          href="#" 
          className="text-brand-yellow text-2xl font-bold active:scale-95 transition-transform" 
          onClick={closeMobileMenu}
        >
          Kevin Sebastian
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer active:scale-95" onClick={handleClick}>
          <i className='fas fa-bars' />
        </div>

        {/* Navigation Menu */}
        <ul className={`
          md:flex md:items-center md:gap-4 list-none
          ${click ? 'flex' : 'hidden'}
          flex-col md:flex-row
          w-full md:w-auto
          h-screen md:h-auto
          absolute md:static
          top-0 left-0
          bg-slate-dark z-[1000]
          justify-center items-center
          transition-all duration-500 ease-in-out
        `}>
          
          {/* Mobile Close Button */}
          <li className="md:hidden absolute top-6 right-7 text-4xl cursor-pointer active:scale-95" onClick={closeMobileMenu}>
            <i className="fas fa-times" />
          </li>

          {/* Links */}
          <li className="h-20 flex items-center">
            <a href="#projects" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li className="h-20 flex items-center">
            <a href="#resume" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Resume
            </a>
          </li>
          <li className="h-20 flex items-center">
            <a href="#skills" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className="h-20 flex items-center">
            <a href="#education" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Education
            </a>
          </li>
          <li className="h-20 flex items-center">
            <a href="#certificates" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Certs
            </a>
          </li>

          {/* --- INI TAB BARU YANG DITAMBAHKAN --- */}
          <li className="h-20 flex items-center">
            <a href="#recommendations" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Recommendations
            </a>
          </li>
          {/* --- AKHIR TAB BARU --- */}

          <li className="h-20 flex items-center">
            <a href="#courses" className="py-2 px-4 rounded hover:text-brand-yellow transition-all active:scale-95" onClick={closeMobileMenu}>
              Courses
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;