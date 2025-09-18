import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

// WhatsApp brand icon (outline)
const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M20.52 3.48A11.5 11.5 0 0 0 3.48 20.52L2 22l1.72-.45A11.5 11.5 0 1 0 20.52 3.48Z" strokeWidth="1.6"/>
    <path d="M8.8 9.2c-.2.5-.4 1.3.8 3 1.2 1.7 2.6 2.5 3.1 2.7.3.1 1.3.1 2-.3.3-.2.7-.6.6-1-.1-.3-.7-.5-1.2-.7-.5-.2-.8-.1-1 .1-.2.2-.4.6-.6.6-.2 0-.9-.3-1.6-1-.7-.7-1.1-1.4-1.1-1.6 0-.2.3-.4.5-.6.2-.2.3-.5.2-1-.1-.5-.5-1.1-.7-1.3-.2-.3-.5-.3-1-.1-.4.2-.7.5-.8.7Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: '+57 1 5110559',
      href: 'tel:+5712345678'
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'atencionalusuario@cemdi.co',
      href: 'mailto:contacto@cemdifamisanar.com'
    },
    {
      icon: MapPinIcon,
      label: 'Ubicación',
      value: 'Bogotá, Colombia',
      href: '#'
    },
    
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Demo', href: '#demo-section' }
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Aviso Legal', href: '#' },
    { name: 'Cookies', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            {/* Logos */}
            <div className="flex gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <img
                  src="/logocemdi.png"
                  alt="Logo Cemdi"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 min-w-[120px]">
                <img
                  src="/logofamisanar.png"
                  alt="Logo Famisanar"
                  className="h-12 w-full object-contain"
                />
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portal de Agendamientos
              </h3>
              <p className="text-sm text-gray-400 mt-2">Cemdi Famisanar</p>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Simplificando el acceso a la atención médica con nuestro portal
              de agendamientos inteligente y eficiente.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span className="text-sm">Cuidando de tu salud 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Línea de contacto para agendar por llamada (sin card) */}
          <div>
            <h4 className="text-white font-semibold mb-2">¿Prefieres agendar por llamada?</h4>
            <p className="text-gray-300 text-sm">
              Esta es nuestra línea de contacto para agendar tu cita por llamada:
              <a href="tel:+576015110559" className="text-primary font-semibold hover:underline ml-1" aria-label="Llamar a (601) 511 0559">
                (601) 511 0559
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Cemdi Famisanar. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
