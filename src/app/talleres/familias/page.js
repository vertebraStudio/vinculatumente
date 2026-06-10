import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Familias | Vincula Tu Mente | María Villalba',
  description: 'Talleres y formación para familias: adolescencia, educación emocional, sexualidad, redes sociales, convivencia y orientación familiar. Presencial y online.',
  alternates: { canonical: 'https://vinculatumente.es/talleres/familias' },
};

const profile = {
  eyebrow: 'Talleres para familias',
  title: 'Acompañar en familia también se aprende',
  description: 'Formación práctica para padres, madres y tutores que quieren entender mejor a sus hijos e hijas, mejorar la convivencia y construir vínculos más sanos en casa.',
  tagline: 'Herramientas para acompañar mejor',
  color: '#EDE3F0',
  note: 'Talleres presenciales y en formato online o híbrido. Consulta disponibilidad.',
  accent: '#8B6088',
};

const workshops = [
  {
    name: 'Adolescencia: cómo acompañar sin perder la cabeza',
    audience: 'Padres, madres y tutores de adolescentes (12-18 años)',
    problem: 'Los conflictos de convivencia, la comunicación rota, las conductas de riesgo o la sensación de no entender qué le pasa a tu hijo/a.',
    takeaways: [
      'Cómo funciona el cerebro adolescente (y por qué hace lo que hace)',
      'Estrategias de comunicación que no generan conflicto',
      'Cómo acompañar sin controlar ni sobreproteger',
      'Pautas para gestionar los conflictos más frecuentes',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Educación emocional en familia',
    audience: 'Familias con hijos/as de 4 a 12 años',
    problem: 'No saber cómo hablar de emociones en casa, cómo gestionar rabietas o berrinches, o cómo enseñar regulación emocional desde pequeñas edades.',
    takeaways: [
      'Vocabulario emocional básico adaptado a cada edad',
      'Cómo acompañar emociones difíciles sin invalidarlas',
      'Rutinas y juegos para trabajar las emociones en casa',
      'Qué evitar: frases que bloquean el desarrollo emocional',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Hablemos de sexualidad con nuestros hijos e hijas',
    audience: 'Familias con hijos/as de 5 a 16 años (talleres diferenciados por tramo de edad)',
    problem: 'No saber cómo abordar el tema de la sexualidad en casa, el miedo a dar información "antes de tiempo" o no saber cómo responder preguntas incómodas.',
    takeaways: [
      'Qué información es apropiada a cada edad',
      'Vocabulario correcto y normalizado para hablar de sexualidad',
      'Cómo abrir el diálogo en casa de forma natural',
      'Recursos y materiales complementarios por edades',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Redes sociales y pantallas: límites con sentido',
    audience: 'Familias con hijos/as de 8 a 16 años',
    problem: 'El uso excesivo de pantallas, los conflictos por el móvil, los riesgos online o el desconocimiento del mundo digital de tus hijos/as.',
    takeaways: [
      'Por qué enganchan las redes (neurociencia del scroll)',
      'Cómo establecer límites desde el diálogo, no la imposición',
      'Riesgos digitales por edad y cómo prevenirlos',
      'Estrategias de acompañamiento digital en familia',
    ],
    duration: '1,5 – 2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Convivencia y gestión del conflicto familiar',
    audience: 'Familias con dinámicas de conflicto recurrente (hermanos, adolescentes, familias reconstituidas)',
    problem: 'Los conflictos de convivencia que no se resuelven, la falta de límites claros o la comunicación deteriorada que genera tensión constante en casa.',
    takeaways: [
      'Comunicación no violenta aplicada a la familia',
      'Cómo establecer límites con consistencia y sin drama',
      'Estrategias para bajar la escalada del conflicto',
      'Técnicas de reparación del vínculo después del conflicto',
    ],
    duration: '2 h',
    modality: 'Presencial',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Orientación familiar ante situaciones difíciles',
    audience: 'Familias desorientadas ante situaciones nuevas o desbordantes (divorcio, duelo, diagnósticos, crisis)',
    problem: 'No saber cómo actuar, la sensación de soledad o el bloqueo ante una situación que supera los recursos habituales de la familia.',
    takeaways: [
      'Orientación psicológica adaptada a la situación concreta',
      'Pautas de actuación inmediata',
      'Cómo hablar con los hijos/as sobre lo que está pasando',
      'Recursos y redes de apoyo según el tipo de situación',
    ],
    duration: 'Sesión individual o taller grupal (2 h)',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
];

export default function FamiliasTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshops={workshops} />;
}
