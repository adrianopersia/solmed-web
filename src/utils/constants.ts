export const CONTACT = {
  email: 'solmedsa1@yahoo.com.ar',
  whatsapp: {
    numero: '5492616672585',
    numeroAlt: '5492616672553',
    principal: 'https://wa.link/3r6e8a',
    flotante: 'https://wa.link/okqu0e',
    distribuidores: 'https://wa.link/b1g481',
  },
  ubicacion: 'Mendoza, Argentina',
} as const;

export const SITE = {
  name: 'Solmed',
  slogan: 'Soluciones Médicas',
  fraseEstrategica: 'Stock inmediato para que la solución no espere.',
  fraseInstitucional: '20 años acompañando a profesionales de la salud con rapidez y confianza.',
  anos: 20,
} as const;

export const ESPECIALIDADES = [
  {
    id: 'gastroenterologia',
    label: 'Gastroenterología',
    descripcion: 'Insumos especializados para procedimientos gastrointestinales y ostomías.',
    icon: 'gastro',
  },
  {
    id: 'urologia',
    label: 'Urología',
    descripcion: 'Catéteres, sondas y bolsas recolectoras para tratamientos urológicos.',
    icon: 'uro',
  },
  {
    id: 'orl',
    label: 'ORL',
    descripcion: 'Instrumental y descartables para otorrinolaringología.',
    icon: 'orl',
  },
  {
    id: 'otras',
    label: 'Otras especialidades',
    descripcion: 'Descartables, insumos generales y material para diversas especialidades.',
    icon: 'otras',
  },
] as const;

export type EspecialidadId = (typeof ESPECIALIDADES)[number]['id'];

export function buildWhatsAppUrl(nombre: string): string {
  const texto = encodeURIComponent(
    `Hola, quisiera solicitar presupuesto por el siguiente producto: ${nombre}`
  );
  return `https://wa.me/${CONTACT.whatsapp.numero}?text=${texto}`;
}
