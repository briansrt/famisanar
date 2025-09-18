import React, { useEffect, useState } from 'react';
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import FloatingAgendaWidget from 'mozart-component';
import 'mozart-component/dist/index.css'


const DemoSection = () => {
  // Widget is now loaded directly in index.html for immediate availability
  useEffect(() => {
    console.log('DemoSection mounted - Vapi widget is loaded directly in HTML');
  }, []);

  return (
    <section id="demo-section" className="py-20 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full text-primary backdrop-blur-sm">
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Demo Interactiva</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Portal de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agendamientos</span> Famisanar
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Agenda tus citas médicas de manera rápida y sencilla.
            Nuestro portal inteligente te guía en cada paso del proceso.
          </p>
        </div>

        {/* Demo container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background backdrop-blur-sm rounded-3xl border border-primary/20 shadow-lg p-8 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
            
            {/* Instructions */}
            <div className="mb-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <div className="flex items-start gap-3">
                <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">¿Cómo empezar?</h3>
                  <ul className="text-text-secondary space-y-1 text-sm">
                    <li>• El portal ya está disponible en la esquina superior derecha</li>
                    <li>• Haz clic en el botón "AGENDA TU CITA" para iniciar </li>
                    <li>• Selecciona Chat o Voz para iniciar la conversación</li>
                    <li>• Acepta los términos y condiciones para continuar</li>
                    <li>• Elige el tipo de consulta y especialidad que necesitas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example realistic flow based on prompt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="text-text-primary font-semibold mb-2">Ejemplos de interacción</h3>
                <ul className="text-text-secondary space-y-1 text-sm">
                  <li>• El asistente te saludará y te pedirá tu nombre para iniciar.</li>
                  <li>• Si aún no lo has dado, el asistente te pedirá tu número de identificación.</li>
                  <li>• Con tu identificación, consultará tu autorización y te mostrará tus datos para confirmar.</li>
                  <li>• Luego te mostrará las sedes disponibles y te pedirá elegir una opción (1, 2, 3...).</li>
                  <li>• Para la sede elegida, te mostrará las primeras 5 opciones de fecha y hora y te pedirá escoger una.</li>
                  <li>• Con tu elección, el asistente confirmará y procederá a agendar tu cita.</li>
                </ul>
              </div>

              <div className="p-4 bg-surface rounded-xl border border-primary/20">
                <h3 className="text-text-primary font-semibold mb-2">Mini diálogo de ejemplo</h3>
                <ul className="text-text-secondary space-y-1 text-sm">
                  <li>• Asistente: "Hola, soy tu asistente de CEMDI FAMISANAR. ¿Me confirmas tu nombre?"</li>
                  <li>• Paciente: "Me llamo Andres"</li>
                  <li>• Asistente: "¿Cuál es tu número de identificación?"</li>
                  <li>• Paciente: "123456789"</li>
                  <li>• Asistente: "Estas son las sedes disponibles: 1. Sede A, 2. Sede B. ¿Cuál eliges?"</li>
                  <li>• Paciente: "Elijo la 2"</li>
                  <li>• Asistente: "Para esa sede, opciones: 1. Día 10 a las 8:00, 2. Día 11 a las 9:00, 3. Día 12 a las 10:00. ¿Cuál prefieres?"</li>
                  <li>• Paciente: "La opción 3"</li>
                  <li>• Asistente: "Perfecto, tu cita ha sido agendada. Recibirás confirmación."</li>
                </ul>
              </div>
            </div>

            {/* Widget status */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>¡Portal disponible! El widget aparece inmediatamente al cargar la página</span>
              </div>
            </div>

            {/* Widget info */}
            <div className="text-center mt-4">
              <div className="text-text-muted text-sm mb-2">
                Agenda tus citas médicas las 24 horas del día
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-text-muted">
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="text-sm">Proceso Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <LockClosedIcon className="w-5 h-5" />
              <span className="text-sm">Datos Protegidos</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <CheckBadgeIcon className="w-5 h-5" />
              <span className="text-sm">Certificación Médica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Widget is now loaded directly in index.html for immediate availability */}
<div>
      <FloatingAgendaWidget
        apiBase="https://novaliteback-production.up.railway.app"
        wsPath="/ws"
        position="top-left"
      />

</div>
    </section>
  );
};

export default DemoSection;
