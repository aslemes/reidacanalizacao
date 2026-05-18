import { Droplets, Wrench, Hammer, ShieldCheck, Bath, Waves, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { trackConversion } from '../lib/gtag';

const services = [
  {
    icon: Droplets,
    title: 'Detecção e Reparação de Fugas de Água',
    subtitle: 'Detecção de fugas com equipamento profissional - Reparação urgente',
    description:
      'Detetamos e reparamos fugas de água com equipamento profissional de última geração. Utilizamos tecnologia avançada para localizar fugas ocultas em paredes, pavimentos e canos sem necessidade de quebrar tudo. Serviço de detecção não invasiva, reparação rápida e eficiente, técnicos especializados em Lisboa, diagnóstico preciso, garantia no serviço e preço transparente.',
  },
  {
    icon: Wrench,
    title: 'Reparação de Canalização',
    subtitle: 'Canos partidos, torneiras avariadas? Reparação urgente 24h',
    description:
      'Reparamos canos partidos, torneiras avariadas, autoclismos com problemas e toda a canalização doméstica e comercial. Atendimento rápido com técnicos locais em Lisboa, diagnóstico no local, peças compatíveis de alta qualidade, garantia em serviço e preço transparente.',
  },
  {
    icon: Hammer,
    title: 'Instalação de Canalização',
    subtitle: 'Instalação nova com garantia e acabamento profissional',
    description:
      'Instalamos canalização nova para casas, apartamentos e estabelecimentos comerciais. Fazemos instalação de canos, torneiras, autoclismos, máquinas de lavar, esquentadores e toda a infraestrutura hidráulica. Equipa própria, materiais de qualidade, acabamento profissional, garantia em todos os serviços e preço claro.',
  },
  {
    icon: ShieldCheck,
    title: 'Manutenção Preventiva',
    subtitle: 'Evite problemas com manutenção programada',
    description:
      'Prolongue a vida útil da sua canalização com um plano de manutenção preventiva: inspeção de canos, verificação de pressão, limpeza de sifões, verificação de fugas e teste de equipamentos. Reduz avarias inesperadas, evita custos elevados e melhora o desempenho. Serviço indicado para casas, condomínios e estabelecimentos comerciais em Lisboa.',
  },
  {
    icon: Waves,
    title: 'Desentupimentos',
    subtitle: 'Todos os tipos de desentupimentos com serviço rápido e profissional',
    description:
      'Realizamos todos os tipos de desentupimentos em casas, apartamentos, condomínios e estabelecimentos comerciais. Fazemos desentupimentos de canos, sanitas, lavatórios, pias, ralos, esgotos, colunas e tubagens em geral. Atuamos em situações urgentes e em serviços programados, com equipa própria, equipamentos adequados, trabalho limpo, acabamento profissional, garantia em todos os serviços e preço claro. Se procura desentupimentos em Lisboa ou empresa de desentupimentos, estamos prontos para ajudar.',
  },
  {
    icon: Bath,
    title: 'Remodelação de Casas de Banho',
    subtitle: 'Remodelação completa com design moderno e funcional',
    description:
      'Especialistas em remodelação completa de casas de banho em Lisboa. Fazemos renovação total com design moderno, instalação de novos sanitários, chuveiros, banheiras, azulejos, pavimentos e toda a canalização. Planeamento personalizado, materiais de qualidade, acabamento profissional, garantia em todos os serviços e orçamento transparente.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block text-sky-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Serviços de Canalização em Lisboa e Margem Sul
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Atendemos toda a Grande Lisboa, Margem Sul e zonas envolventes com técnicos locais. Soluções completas para todas as suas necessidades de canalização, com qualidade profissional, rapidez e garantia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 sm:p-8 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sky-700 font-semibold text-sm mb-4">{service.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    onClick={trackConversion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageCircle size={16} />
                    Pedir Orçamento
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-1 text-sky-700 hover:text-sky-900 font-semibold text-sm px-4 py-2.5 group/link"
                  >
                    Saiba mais
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
