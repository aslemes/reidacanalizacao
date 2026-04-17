import { Phone, MessageCircle, Mail } from 'lucide-react';
import { COMPANY, TEL_URL, WHATSAPP_URL, EMAIL_URL } from '../constants';

const keywords = [
  'desentupimento urgente',
  'canalização entupida',
  'sanita entupida',
  'ralo entupido',
  'fuga de água',
  'detecção de fugas',
  'reparar fugas de água',
  'canos partidos',
  'torneira avariada',
  'autoclismo não funciona',
  'canalizador 24h',
  'desentupimento Lisboa',
  'reparação canalização',
  'instalação canalização',
  'remodelação casa de banho',
  'renovação WC',
];

export default function Problems() {
  return (
    <>
      <section className="py-14 sm:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Principais problemas que resolvemos
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Termos que as pessoas pesquisam quando têm problemas com canalização
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {keywords.map((kw, i) => (
              <span
                key={i}
                className="bg-white hover:bg-sky-500 hover:text-white text-sky-700 px-5 py-2.5 rounded-full border border-sky-200 font-medium text-sm shadow-sm hover:shadow-md transition-all cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Precisa de Ajuda com Canalização?
          </h2>
          <p className="text-sky-50 text-lg mb-10 max-w-2xl mx-auto">
            Contacte-nos agora e receba um orçamento gratuito em menos de 24h
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-sky-50 text-sky-700 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Pedir Orçamento
            </a>
            <a
              href={TEL_URL}
              className="inline-flex items-center justify-center gap-3 bg-sky-900 hover:bg-sky-950 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Phone size={20} />
              {COMPANY.phoneDisplay}
            </a>
          </div>

          <a
            href={EMAIL_URL}
            className="inline-flex items-center gap-2 mt-8 text-white/90 hover:text-white font-medium text-sm sm:text-base break-all"
          >
            <Mail size={18} />
            {COMPANY.email}
          </a>
        </div>
      </section>
    </>
  );
}
