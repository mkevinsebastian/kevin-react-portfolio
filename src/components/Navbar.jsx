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
    <nav className={`fixed top-0 w-full z-[10000] transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0f172a]/80 backdrop-blur-md h-16 shadow-2xl border-b border-white/10' 
        : 'bg-transparent h-20'
    }`}>
      <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Logo / Name */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tighter"
          onClick={closeMobileMenu}
        >
          <span className="text-[#fbbf24] group-hover:rotate-12 transition-transform duration-300">{'<'}</span>
          <span className="text-white group-hover:text-[#fbbf24] transition-colors">Kevin Sebastian</span>
          <span className="text-[#fbbf24] group-hover:-rotate-12 transition-transform duration-300">{'/>'}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group py-2"
              >
                {link.name}
                {/* Garis Animasi Bawah */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <div className="md:hidden z-[10001] text-[#fbbf24] cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={handleClick}>
          {click ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 w-full h-screen bg-[#0f172a] flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out z-[10000]
          ${click ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}>
          <ul className="flex flex-col items-center gap-8 list-none text-center">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className={`transition-all duration-500 delay-[${index * 100}ms] ${click ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <a 
                  href={link.href} 
                  className="text-3xl font-bold text-white hover:text-[#fbbf24] active:scale-95 transition-all"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Socials (Biar gak hambar) */}
          <div className="mt-16 flex gap-6 text-[#fbbf24]">
            <Github className="cursor-pointer hover:text-white" />
            <Linkedin className="cursor-pointer hover:text-white" />
            <Mail className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;