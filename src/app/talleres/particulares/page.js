import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Particulares | Vincula Tu Mente | María Villalba',
  description: 'Talleres y sesiones informativas sobre terapia online, sexología, vínculos, trauma y bienestar emocional. María Villalba, psicóloga y sexóloga en Alcalá de Henares y online.',
  alternates: { canonical: 'https://vinculatumente.es/talleres/particulares' },
};

const profile = {
  eyebrow: 'Talleres para particulares',
  title: 'Formación para tu bienestar personal',
  description: 'Espacios formativos para personas adultas que quieren comprender mejor su mundo emocional, su sexualidad y sus relaciones. Talleres divulgativos, prácticos y libres de juicio.',
  tagline: 'Aprende, comprende, avanza',
  color: '#F4E9F1',
  accent: '#A87BA0',
};

const workshops = [
  {
    name: 'Psicoeducación: ¿es para mí la terapia psicológica?',
    audience: 'Personas adultas que contemplan iniciar terapia',
    problem: 'El miedo a dar el primer paso, no saber si la terapia es para una misma o tener dudas sobre cómo funciona el proceso psicológico.',
    takeaways: [
      'Qué es la terapia psicológica y qué no es',
      'Señales de que puede ser un buen momento para empezar',
      'Cómo elegir terapeuta y qué preguntar',
      'Diferencias entre terapia presencial y online',
    ],
    duration: '1,5 h',
    modality: 'Online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Sexualidad sin tabúes: autoconocimiento y placer informado',
    audience: 'Personas adultas de cualquier orientación o identidad',
    problem: 'La desinformación, la vergüenza o la dificultad para hablar de sexualidad de forma natural, saludable y sin juicios.',
    takeaways: [
      'Conceptos clave sobre sexualidad y diversidad',
      'Herramientas de autoconocimiento sexual',
      'Vocabulario para comunicar el deseo y los límites',
      'Recursos y referencias para seguir aprendiendo',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Vínculos sanos: cómo salir de la dependencia emocional',
    audience: 'Personas con patrones relacionales que generan sufrimiento',
    problem: 'La dependencia emocional, el miedo al abandono, los celos o la dificultad para poner límites en las relaciones afectivas.',
    takeaways: [
      'Qué es la dependencia emocional y cómo se forma',
      'Tu estilo de apego y cómo te influye',
      'Técnicas de regulación emocional en el vínculo',
      'Estrategias para construir relaciones más seguras',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Entender el trauma: cuando el pasado pesa en el presente',
    audience: 'Personas adultas que quieren comprender sus respuestas emocionales',
    problem: 'Las respuestas emocionales intensas, los bloqueos inexplicables o la sensación de que el pasado sigue interfiriendo en el presente.',
    takeaways: [
      'Qué es el trauma y cómo se almacena en el cuerpo',
      'La conexión entre trauma, apego y relaciones',
      'Respuestas automáticas: por qué reacciono así',
      'Recursos de regulación emocional basados en evidencia',
    ],
    duration: '2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
  {
    name: 'Herramientas para el bienestar emocional cotidiano',
    audience: 'Cualquier persona adulta que quiera gestionar mejor sus emociones',
    problem: 'La ansiedad del día a día, la dificultad para gestionar emociones intensas o la sensación de estar siempre al límite sin saber por qué.',
    takeaways: [
      'Cómo funcionan las emociones y para qué sirven',
      'Técnicas de regulación emocional aplicables de inmediato',
      'Estrategias de autocuidado sostenible',
      'Plan personal de bienestar emocional',
    ],
    duration: '1,5 – 2 h',
    modality: 'Presencial u online',
    price: 'Solicitar propuesta',
  },
];

export default function ParticularesTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshops={workshops} />;
}
