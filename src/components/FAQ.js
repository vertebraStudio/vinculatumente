'use client';

import { useState } from 'react';

// ============================================================
// FAQ — Personaliza las preguntas y respuestas según tu consulta
// ============================================================
const faqs = [
  {
    question: "¿Atiendes online o de forma presencial?",
    answer: "Ambas. Tengo consulta presencial en Alcalá de Henares y también realizo terapia online por videollamada para que puedas conectarte desde cualquier punto de España, con la misma cercanía y confidencialidad."
  },
  {
    question: "¿Cómo puedo pedir mi primera cita?",
    answer: "Puedes escribirme por WhatsApp, llamarme o enviarme un email a vinculatumente@gmail.com. Te responderé lo antes posible y resolveremos juntxs cualquier duda antes de empezar, sin compromiso."
  },
  {
    question: "¿Qué duración tienen las sesiones?",
    answer: "Las sesiones suelen durar unos 50-60 minutos. La frecuencia la ajustamos a tu situación y a tu ritmo, sin prisas."
  },
  {
    question: "¿En qué puedes ayudarme?",
    answer: "Trabajo relaciones y vínculos, psicología infanto-juvenil, trauma y apego (con EMDR) y sexología. También ansiedad, autoestima, duelo, gestión emocional, perspectiva de género y diversidad."
  },
  {
    question: "¿Trabajas con niñas, niños y adolescentes?",
    answer: "Sí. Acompaño a menores y adolescentes en su desarrollo y bienestar emocional, integrando a la familia en el proceso con pautas y orientación."
  },
  {
    question: "¿Trabajas con parejas y relaciones afectivas?",
    answer: "Sí. Acompaño procesos vinculares de todo tipo: parejas, relaciones no monógamas, vínculos en transformación o en crisis. Trabajo la comunicación, la intimidad y la sexualidad desde un enfoque afirmativo e inclusivo."
  },
  {
    question: "¿La consulta de sexología es un espacio seguro?",
    answer: "Totalmente. Es un espacio confidencial, respetuoso y libre de juicios, con un enfoque inclusivo y afirmativo LGTBIQA+. Hablar de sexualidad es hablar de salud y bienestar."
  },
  {
    question: "¿Qué precio tienen las sesiones?",
    answer: "Escríbeme por WhatsApp o email y te informo de las tarifas actualizadas y de las modalidades disponibles según lo que necesites."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow eyebrow-center"><span className="eyebrow-line" /><span className="eyebrow-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span> Dudas frecuentes <span className="eyebrow-line" /></span>
        </div>
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <p className="section-subtitle">Resuelvo tus dudas principales antes de comenzar el proceso terapéutico.</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item glass ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq { background-color: var(--off-white); }
        .faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; }
        .faq-item { cursor: pointer; border-radius: 12px; padding: 20px; transition: var(--transition); border: 1px solid rgba(201, 168, 197,0.1); }
        .faq-item:hover { border-color: var(--primary-light); transform: translateY(-2px); }
        .faq-item.open { border-color: var(--primary); background: var(--white); }
        .faq-question { display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .faq-question h3 { margin: 0; font-size: 1.1rem; color: var(--text); transition: var(--transition); }
        .faq-item.open .faq-question h3 { color: var(--primary); }
        .faq-icon { font-size: 1.5rem; color: var(--primary); font-weight: 300; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out, padding 0.3s ease; padding-top: 0; }
        .faq-item.open .faq-answer { max-height: 200px; padding-top: 15px; }
        .faq-answer p { margin: 0; color: var(--text-muted); line-height: 1.6; }
      `}</style>
    </section>
  );
}
