import React from 'react';
import HeroSection from './components/HeroSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DemoSection />
      <Footer />
      </div>
  );
}

export default App;