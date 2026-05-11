import type { EspecialidadId } from '@utils/constants';

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  especialidad: EspecialidadId;
  imagen?: string;
  tags?: string[];
}

// Datos placeholder — reemplazar con el catálogo real de SOLMED
export const PRODUCTOS: Producto[] = [
  // Gastroenterología
  {
    id: 'g-001',
    nombre: 'Sonda Nasogástrica',
    descripcion: 'Para alimentación enteral y drenaje gástrico. Disponible en varios calibres.',
    especialidad: 'gastroenterologia',
    tags: ['sonda', 'nutrición'],
  },
  {
    id: 'g-002',
    nombre: 'Bolsa de Colostomía',
    descripcion: 'Sistema de drenaje para ostomía. Opaco, recortable, con filtro de carbón.',
    especialidad: 'gastroenterologia',
    tags: ['ostomía', 'bolsa'],
  },
  {
    id: 'g-003',
    nombre: 'Kit de Ileostomía',
    descripcion: 'Sistema completo de dos piezas para ileostomía con barrera protectora.',
    especialidad: 'gastroenterologia',
    tags: ['ostomía', 'kit'],
  },
  {
    id: 'g-004',
    nombre: 'Cánula de Gastrostomía',
    descripcion: 'Dispositivo para acceso enteral percutáneo. Balloon de silicona.',
    especialidad: 'gastroenterologia',
    tags: ['sonda', 'gastrostomía'],
  },

  // Urología
  {
    id: 'u-001',
    nombre: 'Catéter Foley 14Fr',
    descripcion: 'Catéter vesical de doble vía con balón de 10 cc. Siliconado.',
    especialidad: 'urologia',
    tags: ['catéter', 'foley'],
  },
  {
    id: 'u-002',
    nombre: 'Catéter Foley 16Fr',
    descripcion: 'Catéter vesical de doble vía con balón de 10 cc. Siliconado.',
    especialidad: 'urologia',
    tags: ['catéter', 'foley'],
  },
  {
    id: 'u-003',
    nombre: 'Bolsa Colectora de Orina 2L',
    descripcion: 'Bolsa de drenaje urinario con válvula antirreflujo. Con tubo de 90 cm.',
    especialidad: 'urologia',
    tags: ['bolsa', 'orina'],
  },
  {
    id: 'u-004',
    nombre: 'Sonda Nelaton',
    descripcion: 'Para cateterismo intermitente. Punta redondeada, superficie lisa.',
    especialidad: 'urologia',
    tags: ['sonda', 'cateterismo'],
  },

  // ORL
  {
    id: 'o-001',
    nombre: 'Espéculo Nasal Descartable',
    descripcion: 'Para examen nasal. Autoclavable o de un solo uso. Varios tamaños.',
    especialidad: 'orl',
    tags: ['espéculo', 'nasal'],
  },
  {
    id: 'o-002',
    nombre: 'Tubo de Traqueotomía',
    descripcion: 'Con balón de baja presión y cánula interna desmontable.',
    especialidad: 'orl',
    tags: ['traqueotomía', 'tubo'],
  },
  {
    id: 'o-003',
    nombre: 'Sonda de Aspiración',
    descripcion: 'Para aspiración de secreciones nasales y orales. Punta atraumática.',
    especialidad: 'orl',
    tags: ['sonda', 'aspiración'],
  },

  // Otras especialidades
  {
    id: 'e-001',
    nombre: 'Guantes de Nitrilo (caja x100)',
    descripcion: 'Sin polvo, alta resistencia. Tallas S, M, L, XL.',
    especialidad: 'otras',
    tags: ['guantes', 'descartable'],
  },
  {
    id: 'e-002',
    nombre: 'Mascarilla FFP2 / KN95',
    descripcion: 'Protección respiratoria alta eficiencia. Homologada.',
    especialidad: 'otras',
    tags: ['mascarilla', 'protección'],
  },
  {
    id: 'e-003',
    nombre: 'Venda Elástica 10cm',
    descripcion: 'Venda cohesiva de alta elasticidad para inmovilización y compresión.',
    especialidad: 'otras',
    tags: ['venda', 'ortopedia'],
  },
  {
    id: 'e-004',
    nombre: 'Jeringa Descartable 20ml',
    descripcion: 'Con aguja hipodérmica. Pistón de goma suave. Esterilizada.',
    especialidad: 'otras',
    tags: ['jeringa', 'descartable'],
  },
];
