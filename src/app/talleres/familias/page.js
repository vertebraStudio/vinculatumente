import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Familias | Vincula Tu Mente | María Villalba',
  description: 'Talleres para familias sobre sexualidad, vínculos, redes sociales y diversidad. María Villalba, psicóloga y sexóloga en Alcalá de Henares y online.',
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
  photo: '/media/tallerFamilias.jpg',
  benefits: [
    'Mejora de la comunicación con hijos e hijas adolescentes',
    'Herramientas prácticas para gestionar conflictos en casa con calma',
    'Mayor seguridad para acompañar etapas difíciles sin sobreproteger',
    'Espacios de aprendizaje compartido con otras familias',
  ],
};

const workshopGroups = [
  {
    theme: 'Sexualidad, vínculos y diversidad',
    workshops: [
      {
        name: 'Pornografía, redes y construcción de la sexualidad',
        audience: 'Familias con hijos/as adolescentes',
        problem: 'El uso de pornografía como referente sexual en adolescentes, la distorsión de las expectativas sobre el sexo y la falta de espacios en familia para hablar de ello con naturalidad.',
        takeaways: [
          'Cómo impacta el porno en la sexualidad adolescente y sus relaciones',
          'Estrategias para abrir el diálogo en casa sin generar vergüenza',
          'Acompañamiento digital en familia: límites desde el diálogo',
          'Recursos para trabajarlo en casa sin conflicto',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Pornografía y autoestima',
        audience: 'Familias con adolescentes y jóvenes',
        problem: 'El impacto del consumo de pornografía en la autoestima, la imagen corporal y las expectativas sobre las relaciones afectivosexuales en la adolescencia.',
        takeaways: [
          'Cómo afecta el porno a la autoimagen y la autoestima en jóvenes',
          'Relación entre pornografía, expectativas y relaciones reales',
          'Cómo hablar de autoestima y sexualidad en casa sin tabúes',
          'Recursos digitales contrastados para familias y jóvenes',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Sexualidad y discapacidad: derechos, placer y acompañamiento',
        audience: 'Familias, profesionales y población general',
        problem: 'Los tabúes sobre la sexualidad de las personas con discapacidad y la dificultad de las familias para abordar este tema con naturalidad y desde los derechos.',
        takeaways: [
          'La sexualidad como derecho universal, también con discapacidad',
          'Cómo hablar de sexualidad con personas con discapacidad en casa',
          'Estrategias de apoyo y acompañamiento sin sobreproteger',
          'Recursos y referencias especializadas para familias',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Ghosting, validación y autoestima digital',
        audience: 'Familias con hijos/as adolescentes y jóvenes',
        problem: 'El impacto emocional de las redes sociales en la autoestima de los jóvenes, el ghosting, la búsqueda de validación online y los vínculos afectivos que se construyen y destruyen en entornos digitales.',
        takeaways: [
          'Qué es el ghosting y por qué duele tanto emocionalmente',
          'Relación entre validación digital y autoestima real',
          'Cómo acompañar a hijos/as cuando sufren por algo que pasa en redes',
          'Estrategias para un uso más consciente y sano del entorno digital',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Afectividad y relaciones en personas con discapacidad',
        audience: 'Familias y profesionales de atención directa',
        problem: 'La negación o invisibilización de las necesidades afectivas y relacionales de las personas con discapacidad por parte de familias y profesionales del entorno.',
        takeaways: [
          'Marco ético y de derechos en afectividad, sexualidad y discapacidad',
          'Cómo acompañar las relaciones afectivas respetando la autonomía',
          'Herramientas de comunicación y apoyo sin sobreprotección',
          'Casos prácticos y protocolos de actuación familiar',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Adolescencia, familia y entorno educativo',
    workshops: [
      {
        name: 'Acompañamiento a adolescentes y conflictos familiares',
        audience: 'Familias',
        problem: 'Los conflictos de convivencia en casa, la sensación de perder la conexión con el adolescente o no saber cómo actuar ante sus cambios de conducta y sus resistencias.',
        takeaways: [
          'Claves del desarrollo adolescente para entender qué está pasando',
          'Técnicas de mediación y comunicación familiar basadas en evidencia',
          'Cómo establecer límites sin romper el vínculo',
          'Estrategias de reparación cuando el conflicto ya ha ocurrido',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Ansiedad adolescente y presión social',
        audience: 'Adolescentes y familias',
        problem: 'El aumento de la ansiedad en la adolescencia, la presión del grupo, el miedo al fracaso o la dificultad de la familia para acompañar sin minimizar ni sobreproteger.',
        takeaways: [
          'Por qué la ansiedad se dispara en la adolescencia y cómo se manifiesta',
          'Diferencia entre preocupación normal y señales de alerta',
          'Técnicas de regulación emocional adaptadas a jóvenes',
          'Cómo acompañar desde casa sin aumentar la presión',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Límites saludables sin gritos',
        audience: 'Padres y madres',
        problem: 'La dificultad para poner límites de forma consistente sin acabar gritando, cediendo o generando conflicto, y la falta de herramientas para gestionar la frustración propia.',
        takeaways: [
          'Por qué los límites son una forma de cuidado y no de control',
          'Cómo establecer normas claras que se respeten sin batalla diaria',
          'Estrategias de respuesta ante la desobediencia o el desafío',
          'Cómo gestionar tu propio desbordamiento emocional en el proceso',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Prevención de conductas autolíticas',
        audience: 'Familias y adolescentes',
        problem: 'El desconocimiento sobre qué son las conductas autolíticas, el miedo a hablar del tema o la falta de herramientas para actuar cuando se detectan señales en un hijo/a.',
        takeaways: [
          'Qué son las conductas autolíticas y por qué aparecen',
          'Cómo hablar del tema sin aumentar el riesgo',
          'Señales de alerta y cómo actuar con calma y eficacia',
          'Recursos de apoyo profesional urgente y continuado',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
    ],
  },
  {
    theme: 'Talleres educativos y familiares',
    workshops: [
      {
        name: 'Crianza positiva y acompañamiento emocional',
        audience: 'Familias y AMPAS',
        problem: 'La falta de herramientas para gestionar la crianza desde la calma, el desbordamiento ante el conflicto cotidiano y la dificultad para acompañar el malestar emocional de los hijos sin perder la propia regulación.',
        takeaways: [
          'Bases de la crianza positiva y el apego seguro aplicadas al día a día',
          'Técnicas de regulación emocional propia ante el conflicto familiar',
          'Cómo acompañar el malestar de los hijos sin sobreproteger ni ignorar',
          'Comunicación no violenta y resolución de conflictos en casa',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Adolescencia, límites y comunicación',
        audience: 'Familias',
        problem: 'La ruptura en la comunicación con el adolescente, la dificultad para establecer límites que se respeten y los conflictos cotidianos que generan distancia emocional en casa.',
        takeaways: [
          'Claves del desarrollo adolescente para entender la resistencia y los cambios',
          'Cómo poner límites claros sin generar confrontación ni ruptura del vínculo',
          'Técnicas de mediación y comunicación familiar efectiva',
          'Estrategias de reparación para retomar la conexión tras el conflicto',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Gestión de pantallas y redes sociales',
        audience: 'Familias y adolescentes',
        problem: 'Los conflictos por el uso del móvil en casa, la dificultad para establecer normas de uso y el impacto del consumo digital en el estado emocional, el sueño y las relaciones del adolescente.',
        takeaways: [
          'Qué necesidades cubre el uso de pantallas en la adolescencia y por qué es tan difícil regular',
          'Cómo establecer acuerdos digitales en familia desde el diálogo y no la prohibición',
          'Señales de uso problemático de pantallas y cuándo buscar ayuda profesional',
          'Estrategias de acompañamiento digital que fortalecen la confianza y la autonomía',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Cómo detectar señales de malestar emocional',
        audience: 'Familias y educadores',
        problem: 'La dificultad para distinguir entre la "normalidad adolescente" y señales reales de sufrimiento emocional que requieren atención o intervención profesional.',
        takeaways: [
          'Señales de alerta emocional en adolescentes: qué observar',
          'Diferencia entre tristeza, duelo y depresión en jóvenes',
          'Cómo abrir la conversación cuando notas que algo no va bien',
          'Cuándo y cómo derivar a un profesional de salud mental',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Escuela para familias',
        audience: 'AMPAS y familias',
        problem: 'La sensación de no tener herramientas suficientes para acompañar la crianza y la adolescencia, y la falta de espacios formativos continuados accesibles para las familias del centro.',
        takeaways: [
          'Contenidos psicoeducativos adaptados a las etapas de los hijos/as',
          'Espacio de reflexión y aprendizaje compartido entre familias',
          'Herramientas prácticas para aplicar desde casa',
          'Acceso continuado a recursos y seguimiento del proceso',
        ],
        duration: 'Programa continuado (varias sesiones)',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Salud mental, trauma y bienestar emocional',
    workshops: [
      {
        name: 'Prevención del suicidio y autolesiones',
        audience: 'Familias',
        problem: 'El desconocimiento de las familias sobre cómo identificar señales de riesgo de suicidio o autolesiones en sus hijos/as, y el miedo a hablar del tema por si se empeora la situación.',
        takeaways: [
          'Mitos y realidades sobre el suicidio y las autolesiones en jóvenes',
          'Señales de alerta que pueden observarse en casa y en el entorno cercano',
          'Cómo hablar del suicidio sin aumentar el riesgo: protocolo seguro',
          'Recursos de apoyo urgente y continuado para familias',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Psicoeducación en trastornos psicóticos',
        audience: 'Familias y cuidadores',
        problem: 'La desinformación sobre los trastornos psicóticos, el miedo, la culpa o el agotamiento que sienten las familias y cuidadores que acompañan a una persona con un trastorno de este tipo sin herramientas ni referentes claros.',
        takeaways: [
          'Qué son los trastornos psicóticos y qué no son: desmontando mitos',
          'Cómo funciona la psicosis desde dentro y cómo afecta a la persona',
          'Pautas de comunicación y convivencia para familias y cuidadores',
          'Cómo cuidarse mientras se cuida: prevención del burnout del cuidador',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial u online',
      },
      {
        name: 'Trastornos de la conducta alimentaria: detección temprana',
        audience: 'Familias',
        problem: 'La dificultad para detectar señales tempranas de un TCA, la confusión entre "hacer dieta" y un problema real, y el miedo a nombrar lo que se observa por temor a empeorar la situación.',
        takeaways: [
          'Qué son los TCA y cuáles son los más frecuentes en jóvenes',
          'Señales de alerta físicas y conductuales para detectar a tiempo',
          'Cómo hablar con el/la joven cuando se sospecha un TCA',
          'Protocolo de derivación y recursos especializados disponibles',
        ],
        duration: '2 h',
        modality: 'Presencial u online',
      },
    ],
  },
];

export default function FamiliasTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshopGroups={workshopGroups} />;
}
