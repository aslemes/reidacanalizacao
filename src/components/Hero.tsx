import { Phone, MessageCircle, ShieldCheck, Clock, Award, Mail } from 'lucide-react';
import { COMPANY, TEL_URL, WHATSAPP_URL, EMAIL_URL } from '../constants';
import { trackConversion } from '../lib/gtag';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Atendimento 24h em Lisboa
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Detecção e Reparação de{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                Fugas de Água
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Peça já o seu orçamento — resposta rápida e sem compromisso. Técnicos especializados,
              equipamento profissional e garantia em todos os serviços.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={TEL_URL}
                onClick={trackConversion}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/40 transition-all hover:scale-105"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap">Ligar: {COMPANY.phoneDisplay}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                onClick={trackConversion}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white hover:bg-sky-50 text-sky-700 border-2 border-sky-500 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={20} />
                Pedir um orçamento
              </a>
            </div>

            <a
              href={EMAIL_URL}
              onClick={trackConversion}
              className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 font-medium text-sm mb-8 break-all"
            >
              <Mail size={16} />
              {COMPANY.email}
            </a>
            <div className="mb-2"></div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: ShieldCheck, label: 'Garantia', text: 'Em todos serviços' },
                { icon: Clock, label: '24h', text: 'Atendimento urgente' },
                { icon: Award, label: 'Qualidade', text: 'Técnicos certificados' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 rounded-xl mb-2">
                    <item.icon className="text-sky-600" size={22} />
                  </div>
                  <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-sky-100">
              <img
                src="/logo.jpeg"
                alt="Rei da Canalização"
                className="w-full h-auto max-w-md mx-auto animate-float"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl px-5 py-3 shadow-xl rotate-6">
              <div className="text-xs font-medium opacity-90">Orçamento</div>
              <div className="text-xl font-extrabold">Gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
