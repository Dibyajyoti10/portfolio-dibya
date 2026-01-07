import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-retro-bg-dark text-white selection:bg-neon-pink selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
