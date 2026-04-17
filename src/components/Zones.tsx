import { MapPin } from 'lucide-react';

const lisboa = [
  'Amadora', 'Loures', 'Odivelas', 'Benfica', 'Algés', 'Oeiras', 'Cacém', 'Sintra',
  'Cascais', 'Belém', 'Restelo', 'Ajuda', 'Alcântara', 'Santos', 'Príncipe Real',
  'Marquês de Pombal', 'Avenidas Novas', 'Alvalade', 'Lumiar', 'Olivais',
];

const margemSul = [
  'Almada', 'Seixal', 'Barreiro', 'Moita', 'Setúbal', 'Montijo', 'Alcochete',
  'Corroios', 'Pragal', 'Cacilhas', 'Trafaria', 'Costa da Caparica',
  'Charneca de Caparica', 'Sobreda', 'Fernão Ferro', 'Sesimbra',
];

export default function Zones() {
  return (
    <section id="zonas" className="py-14 sm:py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block text-sky-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Zonas Atendidas</h2>
          <p className="text-lg text-slate-600">Lisboa e Margem Sul com técnicos locais</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Lisboa', zones: lisboa },
            { title: 'Margem Sul', zones: margemSul },
          ].map((group, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-sky-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-sky-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.zones.map((zone, j) => (
                  <span
                    key={j}
                    className="bg-sky-50 hover:bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium border border-sky-100 transition-colors"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
