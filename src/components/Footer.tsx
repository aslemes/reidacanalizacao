import { Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY, TEL_URL, EMAIL_URL } from '../constants';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-br from-sky-900 via-blue-900 to-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.jpeg" alt="Rei da Canalização" className="h-14 w-14 object-contain rounded-lg" />
              <div>
                <div className="font-extrabold text-lg leading-tight">REI DA</div>
                <div className="font-bold text-sm text-sky-300 leading-tight">CANALIZAÇÃO</div>
              </div>
            </div>
            <p className="text-sky-100 text-sm leading-relaxed mb-6">
              Especialistas em serviços de canalização em Lisboa. Reparação urgente, desentupimentos,
              instalação e manutenção. Técnicos locais, atendimento 24h e orçamentos gratuitos.
            </p>

            <div className="space-y-3">
              <a href={TEL_URL} className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-sky-800 flex items-center justify-center group-hover:bg-sky-700 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-semibold">{COMPANY.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-sky-100">
                <div className="w-9 h-9 rounded-lg bg-sky-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-sm">
                  <div>{COMPANY.address}</div>
                  <div className="text-sky-300">{COMPANY.city}</div>
                </div>
              </div>
              <a href={EMAIL_URL} className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors group break-all">
                <div className="w-9 h-9 rounded-lg bg-sky-800 flex items-center justify-center group-hover:bg-sky-700 transition-colors flex-shrink-0">
                  <Mail size={16} />
                </div>
                <span className="text-sm">{COMPANY.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Serviços</h4>
            <ul className="space-y-3 text-sky-100 text-sm">
              <li><a href="#servicos" className="hover:text-white transition-colors">Detecção de Fugas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Reparação de Canalização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Instalação de Canalização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Manutenção Preventiva</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Remodelação de Casas de Banho</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Zonas Atendidas</h4>
            <ul className="space-y-3 text-sky-100 text-sm">
              <li>Lisboa</li>
              <li>Amadora</li>
              <li>Oeiras</li>
              <li>Almada</li>
              <li>Seixal</li>
              <li>Setúbal</li>
              <li className="text-sky-300 italic">+ Muitas outras zonas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Informação</h4>
            <ul className="space-y-3 text-sky-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sky-800 text-center text-sky-300 text-sm">
          © {new Date().getFullYear()} REI DA CANALIZAÇÃO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
