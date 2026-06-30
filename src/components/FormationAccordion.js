'use client';

import { useState } from 'react';

const svg = (paths) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const icons = {
  heart:     svg(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 12 5 3.5 3.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" />),
  shield:    svg(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>),
  sparkle:   svg(<><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" /><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" /></>),
  floret:    svg(<><circle cx="12" cy="12" r="2.4" /><path d="M12 3c1.8 0 2.6 2 1.8 3.6M12 21c-1.8 0-2.6-2-1.8-3.6M21 12c0 1.8-2 2.6-3.6 1.8M3 12c0-1.8 2-2.6 3.6-1.8" /></>),
  briefcase: svg(<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" /><path d="M2 12h20" /></>),
};

const items = [
  {
    icon: 'heart',
    label: 'Sexología, Terapia de Pareja y Vínculos',
    items: [
      { title: 'Especialización en Sexología y Sexualidad Humana', desc: 'Aplicada a la terapia sexual individual, educación afectivo-sexual y promoción de la sexualidad positiva.' },
      { title: 'Curso específico en Eyaculación Precoz', desc: 'Orientado al abordaje clínico y la mejora de la autoestima sexual.' },
      { title: 'Terapia de Pareja e Intervención ante celopatías e infidelidades', desc: 'Especialización para la resolución de conflictos vinculares, mejora de la comunicación y la intimidad.' },
      { title: 'Mediación en conflictos familiares y con adolescentes', desc: 'Formación orientada a mejorar la convivencia, la comunicación efectiva y la gestión de crisis en el hogar.' },
      { title: 'Prevención Combinada del VIH (PrEP)', desc: 'Formación enfocada en la psicoeducación y la sexualidad informada y segura.' },
    ],
  },
  {
    icon: 'shield',
    label: 'Trauma, Violencia y Psicología Forense',
    items: [
      { title: 'Terapia EMDR (Nivel I y II)', desc: 'Especialización fundamental para la intervención en trauma complejo, trauma relacional y desensibilización de experiencias traumáticas adultas e infantiles.' },
      { title: 'Intervención en Abuso Sexual Infantil (ASI) y Certificado Barnahus', desc: 'Formación aplicada para la prevención, detección y tratamiento de la violencia sexual en la infancia.' },
      { title: 'Intervención en Mujeres Víctimas de Violencia de Género (VG)', desc: 'Especialización para la evaluación, acompañamiento emocional e impacto psicológico de la violencia.' },
      { title: 'Psicología Forense', desc: 'Curso de elaboración de informes periciales y forenses, aplicado a contextos de violencia de género y evaluaciones clínicas integrales.' },
    ],
  },
  {
    icon: 'sparkle',
    label: 'Salud Mental Clínica y Trastornos',
    items: [
      { title: 'Técnico Especialista en TCA (Trastornos de la Conducta Alimentaria)', desc: 'Aplicado para la detección temprana, evaluación y tratamiento cognitivo-conductual.' },
      { title: 'Trastornos Psicóticos y Psicofarmacología', desc: 'Curso enfocado en la psicoeducación para familias, cuidadores y el manejo de primeros episodios psicóticos.' },
      { title: 'Prevención de la autolesión y el suicidio', desc: 'Formación orientada a la evaluación del riesgo suicida, empoderamiento social y derivación.' },
      { title: 'Evaluación Clínica y Terapia Cognitivo-Conductual (TCC)', desc: 'Base metodológica para el diagnóstico diferencial, reestructuración cognitiva y tratamiento de la ansiedad, estrés y bajo estado de ánimo.' },
    ],
  },
  {
    icon: 'floret',
    label: 'Diversidad y Transiciones Vitales',
    items: [
      { title: 'Psicología Afirmativa LGTBI+', desc: 'Especialidad para acompañar a personas en su identidad, orientación o expresión de género, creando un espacio de consulta seguro y promoviendo la inclusión en empresas y colegios.' },
      { title: 'Acompañamiento Perinatal y Transiciones', desc: 'Formación especializada en "Mapaternidad", abordaje de la menopausia, competencias en lactancia inducida y procesos reproductivos no normativos.' },
    ],
  },
  {
    icon: 'briefcase',
    label: 'Psicología Laboral, Organizacional y Desarrollo Personal',
    items: [
      { title: 'Prevención del Acoso Laboral (Mobbing) y Micromachismos', desc: 'Especialización orientada a intervenir sobre el clima laboral y ofrecer estrategias de afrontamiento en entornos de trabajo.' },
      { title: 'Planes de Igualdad en Empresas y Perspectiva de Género', desc: 'Formación para la implementación práctica y legal de políticas de equidad en las plantillas y la dirección.' },
      { title: 'Mindfulness, Work-Life Balance y Resiliencia', desc: 'Herramientas aplicadas para la gestión del estrés crónico, la prevención del burnout y el fomento del autocontrol emocional.' },
      { title: 'Liderazgo e Inteligencia Emocional', desc: 'Formación aplicada para mandos intermedios y directivos.' },
      { title: 'Comunicación Efectiva, Negociación y Resolución de Problemas', desc: 'Especialización transversal para mejorar las "soft skills" tanto en reorientación laboral como en conflictos relacionales.' },
    ],
  },
];

export default function FormationAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map(({ icon, label, items: subitems }, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid rgba(201,168,197,0.25)',
            borderRadius: '12px',
            backgroundColor: expanded === idx ? 'rgba(250,247,251,0.8)' : 'rgba(255,255,255,0.5)',
            overflow: 'hidden',
            transition: 'background 0.3s ease',
            boxShadow: expanded === idx ? '0 4px 15px rgba(0,0,0,0.04)' : 'none',
          }}
        >
          <button
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '40px', height: '40px', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icons[icon]}</span>
              <strong style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.35 }}>{label}</strong>
            </div>
            <span style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '300', lineHeight: '1', userSelect: 'none', flexShrink: 0, marginLeft: '12px' }}>
              {expanded === idx ? '−' : '+'}
            </span>
          </button>
          <div style={{ maxHeight: expanded === idx ? '2000px' : '0px', opacity: expanded === idx ? 1 : 0, transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease', overflow: 'hidden' }}>
            <ul style={{ margin: 0, padding: '0 20px 24px 74px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {subitems.map(({ title, desc }, i) => (
                <li key={i} style={{ position: 'relative', paddingLeft: '14px' }}>
                  <span style={{ position: 'absolute', left: 0, top: '6px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)', opacity: 0.6, display: 'block' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: '2px' }}>{title}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
