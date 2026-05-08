import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Efek ganti background saat scroll agar lebih elegan
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'unset';
  }, [click]);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Testimonials', href: '#recommendations' },
    { name: 'Courses', href: '#courses' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[10000] transition-all duration-500 ${
      scrolled 
        ? 'bg-[#09090b]/80 backdrop-blur-xl h-16 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10 supports-[backdrop-filter]:bg-background/60' 
        : 'bg-transparent h-20'
    }`}>
      <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Logo / Name */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tighter"
          onClick={closeMobileMenu}
        >
          <span className="text-brand-cyan group-hover:rotate-12 transition-transform duration-300">{'<'}</span>
          <span className="text-white group-hover:text-brand-yellow transition-colors duration-300 font-display">Kevin</span>
          <span className="text-brand-cyan group-hover:-rotate-12 transition-transform duration-300">{'/>'}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group py-2"
              >
                {link.name}
                {/* Garis Animasi Bawah */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <div className="md:hidden z-[10001] text-brand-yellow cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={handleClick}>
          {click ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 w-full h-screen bg-[#09090b]/95 backdrop-blur-2xl flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out z-[10000]
          ${click ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}>
          <ul className="flex flex-col items-center gap-8 list-none text-center">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className={`transition-all duration-500 transform ${click ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a 
                  href={link.href} 
                  className="text-3xl font-display font-bold text-gray-300 hover:text-brand-cyan hover:scale-110 active:scale-95 transition-all duration-300 inline-block"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Socials (Biar gak hambar) */}
          <div className={`mt-16 flex gap-6 text-gray-400 transition-all duration-1000 delay-500 transform ${click ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="https://github.com/mkevinsebastian" target="_blank" rel="noopener noreferrer"><Github size={32} className="cursor-pointer hover:text-white hover:-translate-y-1 transition-all duration-300" /></a>
            <a href="https://www.linkedin.com/in/kevin-sebastian-805503216/" target="_blank" rel="noopener noreferrer"><Linkedin size={32} className="cursor-pointer hover:text-[#0077b5] hover:-translate-y-1 transition-all duration-300" /></a>
            <a href="mailto:kevin.m.sebastian@gmail.com"><Mail size={32} className="cursor-pointer hover:text-brand-yellow hover:-translate-y-1 transition-all duration-300" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;