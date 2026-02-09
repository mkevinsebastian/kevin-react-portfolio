import React, { useState, useEffect } from 'react'; 
import './App.css';
import './styles.css';

import Navbar from './components/Navbar';
import FadeInOnScroll from './components/FadeInOnScroll';
import BackToTopButton from './components/BackToTopButton';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Education from './components/Education';
import CertificateList from './components/CertificateList';
import RecommendationList from './components/RecommendationList';
import CourseList from './components/CourseList';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="loader"></div>
        <p>Loading Kevin Portfolio..</p>
      </div>
    );
  }

  // App.js

  return (
    <div className="relative min-h-screen w-full bg-[#0f172a]">
      <ParticlesBackground /> 
      <Navbar />
      
      {/* Tambahkan padding-top (pt-20) di sini agar konten tidak tertutup Navbar */}
      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24">
        <Header />
        
        <FadeInOnScroll><About /></FadeInOnScroll>
        <FadeInOnScroll><ProjectList /></FadeInOnScroll>
        <FadeInOnScroll><Resume /></FadeInOnScroll>
        <FadeInOnScroll><Skills /></FadeInOnScroll>
        <FadeInOnScroll><Education /></FadeInOnScroll>
        <FadeInOnScroll><CertificateList /></FadeInOnScroll>
        <FadeInOnScroll><RecommendationList /></FadeInOnScroll>
        <FadeInOnScroll><CourseList /></FadeInOnScroll>
        
        <Footer />
      </main>

      <BackToTopButton />
    </div>
  );
}

export default App;