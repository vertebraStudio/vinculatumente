import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Empresas | Vincula Tu Mente | María Villalba',
  description: 'Formación para empresas: burnout, prevención del acoso laboral, igualdad, comunicación efectiva, liderazgo emocional y reducción del absentismo. Presencial y online.',
  alternates: { canonical: 'https://vinculatumente.es/talleres/empresas' },
};

const profile = {
  eyebrow: 'Formación para empresas y organizaciones',
  title: 'Equipos más sanos, organizaciones más fuertes',
  description: 'Programas de formación psicológica para empresas, departamentos de RRHH y equipos directivos. Intervenciones que mejoran el clima laboral, la igualdad y el bienestar de las personas.',
  tagline: 'Formación con impacto real en tu organización',
  color: '#EDE8F2',
  accent: '#7A5580',
};

const workshops = [
  {
    name: 'Burnout: reconocer, prevenir y recuperarse',
    audience: 'Equipos de trabajo, mandos intermedios y RRHH',
    problem: 'El agotamiento laboral crónico, la alta rotación, la pérdida de motivación o el absentismo asociado al estrés sostenido en el trabajo.',
    takeaways: [
      'Qué es el síndrome de burnout y cómo se diferencia del estrés',
      'Indicadores de alerta a nivel individual y de equipo',
      'Estrategias de prevención colectiva e individual',
      'Herramientas de recuperación y plan de acción',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Prevención del acoso laboral y las microagresiones',
    audience: 'Plantillas completas, departamentos de RRHH y dirección',
    problem: 'Una cultura organizacional con dinámicas tóxicas, la falta de protocolos claros o comportamientos que generan malestar aunque "nadie los vea".',
    takeaways: [
      'Marco legal básico sobre acoso laboral en España',
      'Qué son las microagresiones y cómo identificarlas',
      'Protocolo de actuación y vías de denuncia seguras',
      'Cómo crear una cultura de empresa donde esto no ocurra',
    ],
    duration: '2 – 3 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Igualdad real en la organización',
    audience: 'Directivos, RRHH y responsables de igualdad',
    problem: 'Las brechas de género no visibilizadas, los planes de igualdad sin implementar o una cultura organizacional que no integra la diversidad de forma real.',
    takeaways: [
      'Diagnóstico de brecha de género en la organización',
      'Marco normativo actualizado (Ley Orgánica de Igualdad)',
      'Metodología participativa para implementar medidas reales',
      'Indicadores para medir el avance y rendir cuentas',
    ],
    duration: '3 – 4 h o programa estructurado',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Comunicación efectiva y gestión del conflicto',
    audience: 'Equipos de trabajo y mandos intermedios',
    problem: 'Los conflictos no resueltos, la comunicación deficiente entre departamentos, las reuniones ineficaces o la dificultad para dar y recibir feedback de forma constructiva.',
    takeaways: [
      'Modelo de comunicación no violenta aplicado al entorno laboral',
      'Herramientas de escucha activa y empatía en equipos',
      'Técnicas de resolución de conflictos sin perder autoridad',
      'Cómo dar y recibir feedback que mejora sin dañar',
    ],
    duration: '2 – 3 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Liderazgo emocionalmente inteligente',
    audience: 'Mandos intermedios y directivos',
    problem: 'Un liderazgo que genera desgaste en el equipo, la dificultad para motivar personas o la falta de habilidades emocionales para gestionar situaciones complejas.',
    takeaways: [
      'Modelo de liderazgo emocional basado en evidencia',
      'Autoconciencia emocional como herramienta de liderazgo',
      'Estrategias para motivar equipos diversos',
      'Gestión del propio estrés directivo sin trasladarlo al equipo',
    ],
    duration: '3 – 4 h o programa estructurado',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Bienestar laboral y reducción del absentismo',
    audience: 'Responsables de personas, RRHH y dirección',
    problem: 'Una tasa de absentismo alta, la desmotivación generalizada, el presentismo o un clima laboral deteriorado que afecta a la productividad y la retención del talento.',
    takeaways: [
      'Diagnóstico básico de clima y bienestar psicosocial',
      'Plan de acción personalizado a la realidad de la organización',
      'Herramientas de bienestar que no requieren grandes inversiones',
      'Estrategias de engagement y pertenencia a largo plazo',
    ],
    duration: 'Programa estructurado (varias sesiones)',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
];

export default function EmpresasTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshops={workshops} />;
}
