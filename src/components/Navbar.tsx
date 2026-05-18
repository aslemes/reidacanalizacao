import { Phone, Menu, X, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { COMPANY, TEL_URL, EMAIL_URL } from '../constants';
import { trackConversion } from '../lib/gtag';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#zonas', label: 'Zonas' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Rei da Canalização" className="h-14 w-14 object-contain rounded-lg" />
            <div className="hidden sm:block">
              <div className="text-sky-900 font-extrabold leading-tight text-lg">REI DA</div>
              <div className="text-sky-700 font-bold leading-tight text-sm -mt-1">CANALIZAÇÃO</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-sky-600 font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TEL_URL}
              onClick={trackConversion}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone size={18} />
              {COMPANY.phoneDisplay}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-sky-900"
              aria-label="Menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-sky-100">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-sky-600 font-medium py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={TEL_URL}
                onClick={trackConversion}
                className="sm:hidden flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-5 py-3 rounded-full justify-center mt-2"
              >
                <Phone size={18} />
                Ligar {COMPANY.phoneDisplay}
              </a>
              <a
                href={EMAIL_URL}
                onClick={() => { trackConversion(); setOpen(false); }}
                className="flex items-center gap-2 text-sky-700 font-medium py-2 break-all"
              >
                <Mail size={16} />
                {COMPANY.email}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
