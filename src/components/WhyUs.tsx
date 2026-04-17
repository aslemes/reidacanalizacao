import { MapPin, Clock, FileCheck, ShieldCheck } from 'lucide-react';

const features = [
  { icon: MapPin, title: 'Técnicos Locais', desc: 'Técnicos especializados na sua zona para um atendimento mais rápido e personalizado' },
  { icon: Clock, title: 'Atendimento 24h', desc: 'Disponíveis todos os dias para emergências e agendamentos de serviços' },
  { icon: FileCheck, title: 'Orçamento Gratuito', desc: 'Avaliação e orçamento sem qualquer custo ou compromisso da sua parte' },
  { icon: ShieldCheck, title: 'Serviço com Garantia', desc: 'Todos os nossos serviços incluem garantia de qualidade e satisfação' },
];

export default function WhyUs() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block text-sky-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Vantagens
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Porquê Escolher a Rei da Canalização
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white mb-5 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                <f.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
