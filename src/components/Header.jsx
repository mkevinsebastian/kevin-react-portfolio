import React from 'react';

function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-[85vh] mb-16 pt-10 text-center">
      {/* Background glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-yellow/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      {/* Profile Picture with animated border */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-brand-purple to-brand-cyan rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
        <img 
          src="profile.jpg" 
          alt="Profile Picture" 
          className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-slate-dark/50 shadow-2xl transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      {/* Name with Gradient */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-500">Kevin Sebastian</span>
      </h1>
      
      {/* Roles / Subtitle */}
      <div className="flex flex-col gap-2 mb-8 mt-4 max-w-2xl mx-auto px-4">
        <p className="text-xl md:text-2xl font-medium text-gray-200">
          Application Developer at PT Infracom Technology
        </p>
        <p className="text-base md:text-lg text-gray-400">
          Software Engineer & Database Administrator Enthusiast
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Skilled in System Troubleshooting, SQL, and Enterprise Applications
        </p>
      </div>

      {/* Social Buttons (Glassmorphic) */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
        {[
          { href: "mailto:kevin.m.sebastian@gmail.com", icon: "fas fa-envelope", label: "Email" },
          { href: "https://www.instagram.com/mkevin_sebastian", icon: "fab fa-instagram", label: "Instagram" },
          { href: "https://wa.me/081283210549", icon: "fab fa-whatsapp", label: "WhatsApp" },
          { href: "https://line.me/ti/p/kevinsebastian123", icon: "fab fa-line", label: "Line" },
          { href: "https://www.linkedin.com/in/kevin-sebastian-805503216/", icon: "fab fa-linkedin", label: "LinkedIn" },
          { href: "https://github.com/mkevinsebastian", icon: "fab fa-github", label: "GitHub" }
        ].map((social, index) => (
          <a 
            key={index}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            aria-label={social.label}
            title={social.label}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;