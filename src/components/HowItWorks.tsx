import { MessageCircle, UserCheck, FileText, Wrench } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { trackConversion } from '../lib/gtag';

const steps = [
  { icon: MessageCircle, title: 'Orçamento por WhatsApp', desc: 'Complete o formulário com os seus dados e tipo de serviço necessário' },
  { icon: UserCheck, title: 'Técnico Contacta', desc: 'Um técnico da sua zona entra em contacto para agendar a visita' },
  { icon: FileText, title: 'Orçamento Gratuito', desc: 'Recebe um orçamento detalhado e transparente sem qualquer custo' },
  { icon: Wrench, title: 'Serviço no Local', desc: 'Realizamos o serviço com qualidade e garantia na sua casa' },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block text-sky-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Processo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Como Funciona</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Processo simples e rápido para resolver os seus problemas com canalização
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-400 to-sky-200"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="relative inline-block mb-5">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl shadow-sky-500/30 relative z-10">
                  <step.icon className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-sky-500 text-sky-700 rounded-full flex items-center justify-center font-extrabold text-sm z-20 shadow-md">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            onClick={trackConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle size={20} />
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
