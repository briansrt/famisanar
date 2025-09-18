import React from 'react';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const handleScrollToDemo = () => {
    document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-primary/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo Section */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/logocemdi.png"
                alt="Logo Cemdi"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px]">
              <img
                src="/logofamisanar.png"
                alt="Logo Famisanar"
                className="h-24 w-full object-contain"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full text-primary backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Innovación en Salud Digital</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Portal de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agendamientos</span>
            <br />
            Famisanar
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Simplifica tus citas médicas con nuestro portal inteligente de agendamientos.
            Disponible 24/7 para programar tus consultas en Cemdi Famisanar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToDemo}
              className="group px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2"
              aria-label="Iniciar agendamiento"
            >
              Agendar Cita
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-surface text-text-primary font-semibold rounded-xl border border-primary/30 hover:bg-primary/5 transition-all duration-300"
              aria-label="Ver demo"
            >
              Ver Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Agendamiento 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Proceso Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Cemdi Famisanar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
