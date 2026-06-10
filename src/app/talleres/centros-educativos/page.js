import WorkshopProfileBody from '@/components/WorkshopProfileBody';

export const metadata = {
  title: 'Talleres para Centros Educativos | Vincula Tu Mente | María Villalba',
  description: 'Programas para centros educativos: educación afectivo-sexual, diversidad, consentimiento, prevención de violencias sexuales y salud mental en el aula. Presencial.',
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
  photo: '/media/tallerCentrosEducativos.jpg',
  benefits: [
    'Mejora de la convivencia y prevención del bullying en el aula',
    'Reducción de la ansiedad académica y emocional en el alumnado',
    'Contenidos alineados con la LOMLOE en educación emocional y afectivo-sexual',
    'Formación reconocida para equipos docentes y orientadores',
  ],
};

const workshopGroups = [
  {
    theme: 'Sexualidad, vínculos y diversidad',
    workshops: [
      {
        name: 'Educación sexual integral con perspectiva de género',
        audience: 'Equipos docentes y comunidad educativa',
        problem: 'La ausencia de una educación sexual rigurosa en el currículo escolar, basada en evidencia, adaptada a cada etapa y con perspectiva de género y diversidad real.',
        takeaways: [
          'Qué es la educación sexual integral y por qué es urgente en los centros',
          'Contenidos clave adaptados a cada etapa educativa',
          'Cómo integrarla de forma transversal en la práctica docente',
          'Recursos didácticos y referencias curriculares actualizadas',
        ],
        duration: '3 – 4 h o programa estructurado',
        modality: 'Presencial',
      },
      {
        name: 'Diversidad sexual y de género en contextos educativos',
        audience: 'Equipos docentes y orientadores',
        problem: 'La falta de herramientas del profesorado para abordar la diversidad sexual y de género en el aula, gestionar situaciones de discriminación y crear entornos realmente inclusivos.',
        takeaways: [
          'Marco conceptual: orientación sexual, identidad y expresión de género',
          'Cómo gestionar situaciones de discriminación o acoso LGTBI+ en el centro',
          'Protocolo de actuación y recursos institucionales disponibles',
          'Claves para crear una cultura de aula inclusiva y segura',
        ],
        duration: '3 – 4 h',
        modality: 'Presencial',
      },
      {
        name: 'Prevención de violencias sexuales',
        audience: 'Alumnado de ESO, Bachillerato y comunidad educativa',
        problem: 'La normalización de comportamientos de riesgo, el desconocimiento de qué constituye violencia sexual o la falta de protocolos claros para actuar en el centro.',
        takeaways: [
          'Qué es la violencia sexual y sus formas, incluida la violencia digital',
          'Cómo identificar situaciones de riesgo y pedir ayuda con seguridad',
          'Protocolo de actuación del centro y recursos externos de apoyo',
          'Estrategias de prevención comunitaria en el entorno escolar',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial',
      },
      {
        name: 'Sexualidad, consentimiento y prevención del abuso',
        audience: 'Alumnado de ESO y equipos docentes',
        problem: 'La desinformación sobre consentimiento, la normalización de actitudes coercitivas o el desconocimiento de cómo identificar y reportar situaciones de abuso.',
        takeaways: [
          'Qué es el consentimiento y cómo se expresa y respeta en la práctica',
          'Diferencia entre presión, manipulación y violencia sexual',
          'Cómo actuar si tú o alguien cercano está en una situación de abuso',
          'Recursos de apoyo dentro y fuera del centro educativo',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
      {
        name: 'Ghosting, validación y autoestima digital',
        audience: 'Alumnado de ESO y Bachillerato',
        problem: 'El impacto del ghosting, el orbiting y la búsqueda de validación online en la autoestima y el bienestar emocional del alumnado adolescente.',
        takeaways: [
          'Qué es el ghosting y por qué tiene tanto peso emocional en la adolescencia',
          'Relación entre validación digital y autoestima real',
          'Cómo identificar relaciones digitales saludables y no saludables',
          'Estrategias de autocuidado emocional en entornos digitales',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Adolescencia, familia y entorno educativo',
    workshops: [
      {
        name: 'Autoestima y redes sociales',
        audience: 'Alumnado de ESO y Bachillerato',
        problem: 'El impacto de las redes sociales en la autoestima del alumnado, la comparación constante, los filtros y la presión por la imagen que alimentan la inseguridad y el malestar emocional.',
        takeaways: [
          'Cómo funcionan los mecanismos de validación en redes y por qué enganchan',
          'Relación entre uso de redes, imagen corporal y autoconcepto',
          'Herramientas para construir una autoestima sólida offline',
          'Estrategias de uso crítico y consciente de las redes sociales',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
      {
        name: 'Uso saludable del móvil y dopamina digital',
        audience: 'Alumnado y comunidad educativa',
        problem: 'La dificultad para controlar el uso del móvil, la distracción en el aula, el insomnio asociado a las pantallas o la dependencia de la estimulación digital constante.',
        takeaways: [
          'Cómo el móvil activa el sistema de recompensa del cerebro',
          'Diferencia entre uso habitual y uso problemático de dispositivos',
          'Técnicas de gestión del tiempo de pantalla aplicables desde el primer día',
          'Cómo crear rutinas digitales saludables en el contexto escolar y personal',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
      {
        name: 'Prevención de conductas autolíticas',
        audience: 'Equipos docentes, orientadores y familias',
        problem: 'El aumento de conductas autolíticas en adolescentes, el desconocimiento del profesorado sobre cómo detectarlas y actuar, y el miedo a hablar del tema por si se empeora.',
        takeaways: [
          'Qué son las conductas autolíticas y por qué aparecen en la adolescencia',
          'Señales de alerta que pueden observarse en el aula o el centro',
          'Cómo hablar del tema con el/la alumno/a sin aumentar el riesgo',
          'Protocolo de actuación y derivación a servicios especializados',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial',
      },
      {
        name: 'Identidad digital y autoestima',
        audience: 'Alumnado joven',
        problem: 'La construcción de una identidad digital distorsionada, la presión por proyectar una imagen perfecta en redes y el impacto en el autoconcepto y la salud mental de los jóvenes.',
        takeaways: [
          'Qué es la identidad digital y cómo se forma en la adolescencia',
          'Relación entre identidad online, autoconcepto y bienestar emocional',
          'Herramientas para construir una presencia digital auténtica y sana',
          'Estrategias de gestión de la reputación digital y la privacidad',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Talleres educativos y familiares',
    workshops: [
      {
        name: 'Técnicas de estudio y gestión del tiempo',
        audience: 'Estudiantes',
        problem: 'La falta de organización, los malos hábitos de estudio, la procrastinación o el esfuerzo alto con resultados bajos que generan frustración y ansiedad académica.',
        takeaways: [
          'Sistema de organización y planificación personalizable',
          'Técnicas de estudio activo basadas en neurociencia del aprendizaje',
          'Herramientas de gestión del tiempo y la agenda escolar',
          'Estrategias anti-procrastinación aplicables desde el primer día',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
      {
        name: 'Gestión de pantallas y redes sociales',
        audience: 'Familias y adolescentes',
        problem: 'La distracción constante del móvil en el aula, el impacto en la convivencia escolar y la dificultad para promover un uso saludable de las pantallas desde el contexto educativo.',
        takeaways: [
          'Qué hay detrás del uso compulsivo del móvil en el alumnado adolescente',
          'Cómo establecer normas de uso digital en el aula que el alumnado entienda y respete',
          'Actividades y dinámicas para trabajar el uso consciente de pantallas en clase',
          'Cómo acompañar al alumnado con uso problemático sin estigmatizar',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
      {
        name: 'Educación emocional para adolescentes',
        audience: 'Centros educativos',
        problem: 'La falta de recursos para gestionar emociones intensas, los conflictos relacionales en el aula o la dificultad para identificar y expresar lo que se siente sin explotar ni bloquearse.',
        takeaways: [
          'Vocabulario emocional básico adaptado a la adolescencia',
          'Técnicas de regulación emocional aplicables en situaciones de estrés',
          'Cómo comunicar lo que se siente sin herir ni callarse',
          'Estrategias para gestionar conflictos con iguales y con adultos',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
      {
        name: 'Cómo detectar señales de malestar emocional',
        audience: 'Familias y educadores',
        problem: 'La dificultad para distinguir entre la "normalidad adolescente" y señales reales de sufrimiento emocional, y el miedo a intervenir mal o agravar la situación al acercarse al alumno/a.',
        takeaways: [
          'Señales de alerta emocional observables en el contexto escolar',
          'Diferencia entre tristeza pasajera, duelo y sintomatología clínica en jóvenes',
          'Cómo iniciar una conversación de apoyo sin invadir ni minimizar',
          'Protocolo de actuación y derivación a orientación o servicios de salud mental',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
      {
        name: 'Bullying, convivencia y bienestar escolar',
        audience: 'Centros educativos',
        problem: 'Las dinámicas de acoso escolar, la falta de herramientas para intervenir o una cultura de centro donde el bullying se normaliza o se ignora.',
        takeaways: [
          'Qué es el bullying y cómo se diferencia del conflicto puntual',
          'Roles en el acoso: víctima, agresor, espectador y sus dinámicas',
          'Protocolo de detección e intervención adaptado al centro',
          'Cómo construir una cultura de convivencia positiva en el aula',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Salud mental, trauma y bienestar emocional',
    workshops: [
      {
        name: 'Prevención del suicidio y autolesiones',
        audience: 'Docentes, orientadores y equipos educativos',
        problem: 'El desconocimiento del profesorado sobre cómo identificar señales de riesgo de suicidio o autolesiones en el alumnado, y el miedo a hablar del tema por si se empeora la situación.',
        takeaways: [
          'Mitos y realidades sobre el suicidio y las autolesiones en adolescentes',
          'Señales de alerta observables en el aula y en el centro educativo',
          'Cómo hablar del suicidio con el/la alumno/a sin aumentar el riesgo',
          'Protocolo de actuación y recursos de derivación especializada',
        ],
        duration: '2 – 3 h',
        modality: 'Presencial',
      },
      {
        name: 'Trastornos de la conducta alimentaria: detección temprana',
        audience: 'Equipos docentes, orientadores y familias',
        problem: 'La dificultad del profesorado y los orientadores para detectar señales tempranas de un TCA en el alumnado, y la falta de protocolo claro para actuar y derivar sin empeorar la situación.',
        takeaways: [
          'Qué son los TCA y cuáles son los más frecuentes en adolescentes',
          'Señales de alerta físicas y conductuales observables en el aula',
          'Cómo abordar la situación con el/la alumno/a y su familia',
          'Protocolo de derivación a orientación y recursos especializados',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
    ],
  },
  {
    theme: 'Talleres emocionales y bienestar',
    workshops: [
      {
        name: 'Autoestima y seguridad personal',
        audience: 'Alumnado adolescente',
        problem: 'La baja autoestima, la inseguridad y el miedo a la opinión del grupo que condicionan el bienestar emocional del alumnado y limitan su desarrollo personal y su participación en el aula.',
        takeaways: [
          'Qué es la autoestima y cómo se construye en la adolescencia',
          'Diferencia entre autoestima real y autoconfianza situacional',
          'Herramientas prácticas para reforzar la seguridad personal',
          'Estrategias de autocompasión y diálogo interno saludable',
        ],
        duration: '2 h',
        modality: 'Presencial',
      },
      {
        name: 'Gestión del estrés y ansiedad',
        audience: 'Alumnado y equipos educativos',
        problem: 'El estrés académico, la ansiedad ante los exámenes o la dificultad para manejar la presión del día a día que afecta al rendimiento, la salud y el bienestar del alumnado.',
        takeaways: [
          'Qué es la ansiedad y cómo funciona en el cuerpo del adolescente',
          'Diferencia entre estrés útil y estrés que bloquea',
          'Técnicas de regulación del sistema nervioso aplicables en el aula',
          'Cómo construir rutinas de autocuidado que prevengan el agotamiento',
        ],
        duration: '1,5 – 2 h',
        modality: 'Presencial',
      },
    ],
  },
];

export default function CentrosEducativosTalleresPage() {
  return <WorkshopProfileBody profile={profile} workshopGroups={workshopGroups} />;
}
