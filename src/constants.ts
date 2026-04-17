export const COMPANY = {
  name: 'Rei da Canalização',
  phone: '916232709',
  phoneDisplay: '916 232 709',
  address: 'Rua Cidade de Castelo Branco 4 rc/c',
  city: 'Lisboa, Portugal',
  domain: 'reidacanalizacao.pt',
  email: 'contacto@reidacanalizacao.pt',
};

export const EMAIL_URL = `mailto:contacto@reidacanalizacao.pt`;

export const WHATSAPP_URL = `https://wa.me/351${COMPANY.phone}?text=${encodeURIComponent(
  'Olá! Gostaria de pedir um orçamento para um serviço de canalização.'
)}`;

export const TEL_URL = `tel:+351${COMPANY.phone}`;
