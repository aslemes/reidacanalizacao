import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Ricardo Almeida',
    city: 'Lisboa',
    text: 'Detetaram uma fuga que outros canalizadores não conseguiram encontrar. Profissionais de topo, sem partir paredes. Recomendo vivamente!',
  },
  {
    name: 'Sofia Mendes',
    city: 'Oeiras',
    text: 'Chegaram em menos de uma hora para uma emergência à noite. Preço honesto e trabalho impecável. Ficou tudo a funcionar perfeitamente.',
  },
  {
    name: 'Pedro Ferreira',
    city: 'Almada',
    text: 'Fizeram a remodelação completa da minha casa de banho. Resultado fantástico, cumpriram os prazos e o orçamento acordado. Cinco estrelas!',
  },
  {
    name: 'Catarina Nunes',
    city: 'Cascais',
    text: 'Equipa muito educada e organizada. Explicaram tudo antes de começar e deixaram o espaço limpo no final. Voltarei a contratar sem hesitar.',
  },
  {
    name: 'Miguel Rodrigues',
    city: 'Seixal',
    text: 'Instalaram a canalização nova do meu apartamento com acabamento profissional. Materiais de qualidade e garantia do serviço. Excelente experiência.',
  },
  {
    name: 'Helena Vieira',
    city: 'Sintra',
    text: 'Resolveram um entupimento complicado que já arrastava há dias. Rápidos, eficientes e com preço transparente. O melhor canalizador da zona!',
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  const visible = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section id="avaliacoes" className="py-14 sm:py-20 bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block text-sky-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Testemunhos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Avaliações de Clientes</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja o que os nossos clientes dizem sobre o nosso serviço
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-sky-50 items-center justify-center text-sky-600 transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Seguinte"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-sky-50 items-center justify-center text-sky-600 transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {visible.map((review, i) => (
              <div
                key={`${index}-${i}`}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-sky-100 relative animate-fadeInUp ${i > 0 ? 'hidden md:block' : ''}`}
              >
                <Quote className="absolute top-6 right-6 text-sky-100" size={48} />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 relative z-10">"{review.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-sky-50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-sm text-slate-500">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para avaliação ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-sky-600' : 'w-2 bg-sky-300 hover:bg-sky-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
