import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Centros Educativos | Vincula Tu Mente | María Villalba',
  description: 'Programas para centros educativos: educación afectivo-sexual, bullying, ansiedad académica, técnicas de estudio, prevención digital y salud mental. Presencial.',
  alternates: { canonical: 'https://vinculatumente.es/talleres/centros-educativos' },
};

const profile = {
  eyebrow: 'Programas para centros educativos',
  title: 'Formación que llega donde el currículo no llega',
  description: 'Programas y talleres para alumnado, equipos docentes y orientadores. Intervenciones psicoeducativas diseñadas para el aula, basadas en evidencia y adaptadas a cada etapa educativa.',
  tagline: 'Contenido que transforma el aula',
  color: '#F8F0F7',
  note: 'Principalmente presencial. Consulta disponibilidad para formato online.',
  accent: '#9B6E97',
};

const workshops = [
  {
    name: 'Educación afectivo-sexual en el aula',
    audience: 'Alumnado de ESO y Bachillerato (adaptable a Primaria)',
    problem: 'La desinformación sexual, el uso de la pornografía como referencia, las relaciones poco saludables o la ausencia de educación sexual en el currículo.',
    takeaways: [
      'Información rigurosa y adaptada sobre sexualidad y diversidad',
      'Vocabulario correcto y normalizado',
      'Claves para construir relaciones afectivas sanas',
      'Canal abierto para preguntas sin juicio',
    ],
    duration: '2 – 4 h (programa ampliable a varias sesiones)',
    modality: 'Presencial',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Bullying: prevención, detección e intervención',
    audience: 'Equipos docentes, tutores y orientadores',
    problem: 'La dificultad para detectar el acoso, la falta de herramientas para intervenir o una cultura de centro que no prioriza la convivencia positiva.',
    takeaways: [
      'Cómo identificar el bullying: señales en víctima, agresor y espectador',
      'Protocolo de actuación paso a paso',
      'Estrategias de intervención con cada rol',
      'Cómo implicar a las familias en el proceso',
    ],
    duration: '3 – 4 h',
    modality: 'Presencial',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Ansiedad académica: cuando el estrés bloquea el aprendizaje',
    audience: 'Alumnado de 3º ESO – 2º Bachillerato y equipos docentes',
    problem: 'Los bloqueos ante exámenes, el perfeccionismo paralizante, el miedo al fracaso o los síntomas de ansiedad que interfieren en el rendimiento escolar.',
    takeaways: [
      'Cómo funciona la ansiedad y por qué aparece en contextos académicos',
      'Técnicas de regulación emocional para antes y durante los exámenes',
      'Estrategias cognitivas para gestionar la presión',
      'Señales de alerta y cuándo buscar ayuda profesional',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Técnicas de estudio y gestión del tiempo',
    audience: 'Alumnado de 1º ESO a Bachillerato',
    problem: 'La falta de organización, los malos hábitos de estudio, la procrastinación o el esfuerzo alto con resultados bajos.',
    takeaways: [
      'Sistema de organización y planificación personalizable',
      'Técnicas de estudio activo basadas en neurociencia del aprendizaje',
      'Herramientas de gestión del tiempo y la agenda',
      'Estrategias anti-procrastinación aplicables desde el primer día',
    ],
    duration: '2 – 3 h',
    modality: 'Presencial',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Uso saludable de redes y prevención del riesgo digital',
    audience: 'Alumnado de 5º Primaria a 2º ESO, familias y equipos docentes',
    problem: 'El ciberacoso, el grooming, el sexting, la adicción a pantallas o la falta de criterio crítico para moverse en el entorno digital.',
    takeaways: [
      'Mapa de riesgos digitales por edad y plataforma',
      'Herramientas de autoprotección online',
      'Cómo actuar si algo va mal: protocolos de actuación',
      'Estrategias para un uso crítico y saludable de las redes',
    ],
    duration: '1,5 – 2 h por sesión',
    modality: 'Presencial',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Salud mental en el aula: herramientas para docentes',
    audience: 'Equipos docentes y orientadores',
    problem: 'El aumento de casos de ansiedad, depresión y autolesiones en el alumnado y la sensación del profesorado de no tener formación para acompañarlos.',
    takeaways: [
      'Psicoeducación sobre los trastornos más frecuentes en adolescentes',
      'Protocolo de detección y derivación al servicio de orientación',
      'Cómo acompañar sin desbordarse ni excederse en el rol',
      'Autocuidado docente: recursos para no quemarse',
    ],
    duration: '3 – 4 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
];

export default function CentrosEducativosTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshops={workshops} />;
}
