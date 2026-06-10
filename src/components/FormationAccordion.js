'use client';

import { useState } from 'react';

const svg = (paths) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const icons = {
  cap:     svg(<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></>),
  award:   svg(<><circle cx="12" cy="8" r="6" /><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" /></>),
  message: svg(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
};

const items = [
  { icon: 'cap',     label: 'Postgrados',         content: '• Máster en Sexología: Educación, Terapia Sexual y de Pareja (U. Extremadura)\n• Máster en Terapias de Tercera Generación (CEP Psicología y Educación)\n• Máster en Psicología Infantil y Juvenil (Edeca)' },
  { icon: 'award',   label: 'Especializaciones',   content: '• Terapia EMDR (Niveles I y II) — UNED\n• Intervención en Abuso Sexual Infantil y Barnahus\n• Psicología afirmativa LGTBIQA+\n• Perspectiva de género e igualdad\n• Técnico Especialista en TCA\n• Prevención del suicidio y autolesiones' },
  { icon: 'message', label: 'Áreas de trabajo',    content: '• Ansiedad, autoestima, duelo y gestión emocional\n• Sexualidad, pareja y vínculos\n• Acompañamiento a niñas, niños y adolescentes\n• Trauma y apego\n• Perspectiva de género y diversidad' },
];

export default function FormationAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map(({ icon, label, content }, idx) => (
        <div
          key={idx}
          style={{ border: '1px solid rgba(201,168,197,0.25)', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.5)', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', boxShadow: expanded === idx ? '0 4px 15px rgba(0,0,0,0.04)' : 'none' }}
        >
          <button
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ margin: 0, width: '40px', height: '40px', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icons[icon]}</span>
              <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>{label}</strong>
            </div>
            <span style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '300', lineHeight: '1', userSelect: 'none' }}>
              {expanded === idx ? '−' : '+'}
            </span>
          </button>
          <div style={{ maxHeight: expanded === idx ? '320px' : '0px', opacity: expanded === idx ? 1 : 0, transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden' }}>
            <div style={{ padding: '0 20px 20px 74px', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
