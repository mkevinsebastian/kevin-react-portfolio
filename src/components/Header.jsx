import React from 'react';

function Header() {
  return (
    <header className="mb-16">
      <img 
        src="/profile.jpg" 
        alt="Profile Picture" 
        className="w-44 h-44 rounded-full mx-auto my-5" 
      />
      <h1 className="text-4xl font-bold mb-2">Kevin Sebastian</h1>
      <p className="text-lg text-gray-300">Application Developer at PT Infracom Technology</p>
      <p className="text-lg text-gray-300">Software Engineer and Database Administrator Enthusiast</p>
      <p className="text-lg text-gray-300">Skilled in System Troubleshooting, SQL, and Enterprise Applications</p>
      <p className="text-lg text-gray-300">Former Global Custom Application Support Intern at PT Freeport Indonesia</p>

      <div className="flex justify-center gap-5 mt-6">
        <a href="mailto:kevin.m.sebastian@gmail.com" className="social-btn fas fa-envelope text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95"></a>
        <a href="https://www.instagram.com/mkevin_sebastian" target="_blank" rel="noopener noreferrer" className="social-btn fab fa-instagram text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95"></a>
        <a href="https://wa.me/081283210549" target="_blank" rel="noopener noreferrer" className="social-btn fab fa-whatsapp text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95"></a>
        <a href="https://line.me/ti/p/kevinsebastian123" target="_blank" rel="noopener noreferrer" className="social-btn fab fa-line text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95"></a>
        <a href="https://www.linkedin.com/in/kevin-sebastian-805503216/" className="social-btn fab fa-linkedin text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://github.com/mkevinsebastian" className="social-btn fab fa-github text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-95" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </header>
  );
}

export default Header;