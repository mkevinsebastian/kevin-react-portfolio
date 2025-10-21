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
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      
      {/* This is our new main container */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        
        <Header />
        
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <ProjectList />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Resume />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Skills />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Education />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <CertificateList />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <RecommendationList />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <CourseList />
        </FadeInOnScroll>

        <Footer />
      </div>

      <BackToTopButton />
    </>
  );
}

export default App;