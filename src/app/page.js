'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Link from 'next/link';

// Iconos de línea finos (estilo coherente con la marca)
const svg = (paths) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const lineIcons = {
  heart: svg(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 12 5 3.5 3.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" />),
  lock: svg(<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
  sparkle: svg(<><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" /><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" /></>),
  people: svg(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  cap: svg(<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></>),
  award: svg(<><circle cx="12" cy="8" r="6" /><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" /></>),
  message: svg(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
  user: svg(<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>),
  shield: svg(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>),
  floret: svg(<><circle cx="12" cy="12" r="2.4" /><path d="M12 3c1.8 0 2.6 2 1.8 3.6M12 21c-1.8 0-2.6-2-1.8-3.6M21 12c0 1.8-2 2.6-3.6 1.8M3 12c0-1.8 2-2.6 3.6-1.8" /></>),
};

const compromiso = [
  { icon: 'heart', title: 'Un espacio seguro y sin juicios', desc: 'Un lugar cálido y respetuoso donde puedes mostrarte tal y como eres. Aquí no hay etiquetas: solo acompañamiento.' },
  { icon: 'lock', title: 'Confidencialidad y respeto', desc: 'Todo lo que compartes queda protegido. Trabajo desde el rigor y la ética profesional en cada sesión.' },
  { icon: 'sparkle', title: 'Enfoque integral', desc: 'Mente, emociones y sexualidad forman parte de lo mismo: tu bienestar. Lo abordamos de forma conjunta y consciente.' },
  { icon: 'people', title: 'Acompañamiento personalizado', desc: 'Diseñamos un proceso adaptado a ti y a tu ritmo. No estás solx en esto: avanzamos juntxs.' },
];

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(0);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <HomeHero />

        {/* SOBRE MÍ
            FOTO: Retrato cercano de María. Formato vertical, fondo neutro o cálido.
            Sustituir el div.img-placeholder por:
            <img src="/media/maria.jpg" alt="María Villalba, psicóloga y sexóloga" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        */}
        <section id="sobre-mi" className="about reveal" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-image-wrapper reveal" style={{ position: 'relative' }}>
                <div className="about-image" style={{ overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'52% 48% 46% 54% / 48% 52% 48% 52%', position:'relative', zIndex:2, boxShadow:'0 24px 50px rgba(168,123,160,0.22)' }}>
                  <div className="img-placeholder" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '30px' }}>
                    <span className="ph-icon" style={{ fontSize: '2.5rem', opacity: 0.6 }}>🖼️</span>
                    <span className="ph-label" style={{ fontSize: '0.9rem', letterSpacing: '0.06em', fontWeight: 700 }}>Foto de María</span>
                    <span className="ph-desc" style={{ fontSize: '0.8rem', opacity: 0.8, maxWidth: '240px', lineHeight: '1.6' }}>
                      Retrato cercano y profesional.<br />Fondo neutro o cálido.<br />Orientación vertical.
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-content">
                <span className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.user}</span> Sobre mí</span>
                <h2 className="section-title" style={{ textAlign:'left', fontSize:'2.8rem', marginBottom:'22px' }}>Hola, soy<br />María Villalba</h2>
                <p>Soy <strong>psicóloga y sexóloga</strong> especializada en relaciones humanas, desarrollo infantojuvenil, trauma y apego.</p>
                <p>Trabajo desde una perspectiva <strong>integradora, cercana, rigurosa y actual</strong>, orientada a ofrecerte herramientas prácticas para relaciones más conscientes, una comunicación saludable y bienestar emocional en tu día a día.</p>
                <p>Mi enfoque combina <strong>sensibilidad humana, estructura profesional y conocimiento científico</strong>, creando espacios seguros, respetuosos y libres de juicio.</p>
                <p>Creo que tu salud mental y tu bienestar sexual son <strong>igual de importantes</strong>, y que mereces un lugar donde poder cuidarlos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRAYECTORIA / FORMACIÓN */}
        <section id="trayectoria" className="trayectoria reveal" style={{ background:'linear-gradient(180deg, #FFFFFF 0%, #F4EAF2 100%)', position:'relative', overflow:'hidden' }}>
          <div className="container">
            <div className="trayectoria-grid">
              <div className="trayectoria-content">
                <span className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.cap}</span> Formación</span>
                <h2 className="trayectoria-title">Una base académica sólida al servicio de tu bienestar</h2>
                <p className="trayectoria-text">
                  Me gradué en Psicología por la <strong>Universidad Europea Miguel de Cervantes</strong> y me especialicé con el <strong>Máster en Sexología</strong> (Universidad de Extremadura) y el <strong>Máster en Psicología General Sanitaria</strong>.
                </p>
                <p className="trayectoria-text">
                  Continúo formándome de forma permanente en <strong>terapia EMDR</strong>, <strong>psicología infanto-juvenil</strong>, trauma, apego y perspectiva de género, para acompañarte con un enfoque riguroso y actualizado.
                </p>
              </div>
              <div className="trayectoria-list">
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-icon">{lineIcons.cap}</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Grado en Psicología · Máster en Psicología General Sanitaria</h4>
                    <p className="trayectoria-card-desc">U. Europea Miguel de Cervantes · U. Internacional de Valencia</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-icon">{lineIcons.heart}</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Máster en Sexología: Terapia Sexual y de Pareja</h4>
                    <p className="trayectoria-card-desc">Universidad de Extremadura</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-icon">{lineIcons.sparkle}</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Terapia EMDR (Niveles I y II) · Máster en Psicología Infanto-Juvenil</h4>
                    <p className="trayectoria-card-desc">UNED · Especialización en trauma y apego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .trayectoria-grid { display:grid; grid-template-columns:1fr 1.1fr; gap:80px; align-items:center; }
            .trayectoria-subtitle { font-size:0.85rem; font-weight:600; letter-spacing:2px; color:var(--accent); text-transform:uppercase; margin-bottom:15px; display:block; }
            .trayectoria-title { font-size:2.6rem; line-height:1.25; color:var(--text); margin-bottom:24px; font-family:'Playfair Display',serif; }
            .trayectoria-text { font-size:1.05rem; line-height:1.7; color:var(--text); margin-bottom:20px; }
            .trayectoria-list { display:flex; flex-direction:column; gap:24px; }
            .trayectoria-card { background:var(--glass); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); padding:28px 32px; display:flex; align-items:center; gap:24px; border:1px solid rgba(201, 168, 197,0.25); border-radius:16px; transition:transform 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease; }
            .trayectoria-card:hover { transform:translateY(-3px); border-color:var(--accent); box-shadow:0 10px 25px rgba(201, 168, 197,0.18); }
            .trayectoria-card-icon { flex-shrink:0; display:inline-flex; align-items:center; justify-content:center; width:46px; height:46px; border-radius:50%; background:var(--primary-light); color:var(--accent); }
            .trayectoria-card-title { font-size:1.1rem; margin-bottom:4px; color:var(--text); font-family:'Playfair Display',serif; font-weight:600; line-height:1.35; }
            .trayectoria-card-desc { font-size:0.9rem; color:var(--text-muted); margin:0; }
            @media (max-width:992px) { .trayectoria-grid { grid-template-columns:1fr; gap:48px; } .trayectoria-title { font-size:2.2rem; } }
          `}</style>

        </section>

        {/* TERAPIAS
            FOTOS DE TARJETAS: cada eje necesita una foto representativa (formato 4:3).
            Sustituir cada div.img-placeholder por <img src="/media/[foto].jpg" ... />.
        */}
        <section id="terapias" className="terapias reveal" style={{ backgroundColor:'var(--white)', position:'relative', overflow:'hidden' }}>
          <div className="container">
            <div className="terapia-intro-grid">
              <div className="therapy-text">
                <span className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.heart}</span> Terapias</span>
                <h2 className="section-title therapy-title">Mi forma de acompañarte</h2>
                <p>Te acompaño a <strong>comprenderte, aceptarte y vivir relaciones más sanas y conscientes</strong>, integrando lo emocional y lo sexual como parte de un mismo bienestar.</p>
                <p>Cada proceso es único. Partimos de tu historia y tus objetivos para diseñar un acompañamiento personalizado, con herramientas prácticas que puedas aplicar en tu vida cotidiana.</p>
                <p>Atiendo de forma <strong>presencial en Alcalá de Henares</strong> y <strong>online</strong> desde cualquier punto de España, con la misma cercanía y confidencialidad.</p>
              </div>
              <div className="formation-box glass" style={{ border:'1px solid #e8dce6', padding:'30px' }}>
                <h3 style={{ color:'var(--text)', marginBottom:'24px' }}>Formación continua</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  {[
                    { icon:'cap', label:'Postgrados', idx:0, content:'• Máster en Sexología: Terapia Sexual y de Pareja\n• Máster en Psicología General Sanitaria\n• Máster en Psicología Infanto-Juvenil\n• Máster en Terapias de Tercera Generación' },
                    { icon:'award', label:'Especializaciones', idx:1, content:'• Terapia EMDR (Niveles I y II)\n• Trauma y apego · Modelo Barnahus\n• Psicología afirmativa LGTBIQA+\n• Perspectiva de género e igualdad' },
                    { icon:'message', label:'Áreas de trabajo', idx:2, content:'• Ansiedad, autoestima, duelo y gestión emocional\n• Sexualidad y relaciones de pareja\n• Acompañamiento a niñas, niños y adolescentes\n• Educación emocional y sexual' },
                  ].map(({ icon, label, idx, content }) => (
                    <div key={idx} style={{ border:'1px solid rgba(201, 168, 197,0.25)', borderRadius:'12px', backgroundColor:'rgba(255,255,255,0.5)', overflow:'hidden', transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)', boxShadow: expandedSection === idx ? '0 4px 15px rgba(0,0,0,0.04)' : 'none' }}>
                      <button onClick={() => setExpandedSection(expandedSection === idx ? null : idx)} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 20px', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
                          <span className="formation-icon" style={{ margin:0, width:'40px', height:'40px', color:'var(--accent)' }}>{lineIcons[icon]}</span>
                          <strong style={{ fontSize:'1.05rem', color:'var(--text)' }}>{label}</strong>
                        </div>
                        <span style={{ fontSize:'1.4rem', color:'var(--primary)', fontWeight:'300', lineHeight:'1', userSelect:'none' }}>{expandedSection === idx ? '−' : '+'}</span>
                      </button>
                      <div style={{ maxHeight: expandedSection === idx ? '320px' : '0px', opacity: expandedSection === idx ? 1 : 0, transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)', overflow:'hidden' }}>
                        <div style={{ padding:'0 20px 20px 74px', color:'var(--text-muted)', fontSize:'0.92rem', lineHeight:'1.7', whiteSpace:'pre-line' }}>{content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr style={{ border:'none', borderTop:'1px solid rgba(0,0,0,0.07)', marginBottom:'60px' }} />

            {/* Tarjetas de especialidades */}
            <div className="terapia-cards-grid">
              {[
                { href:'/terapias/relaciones-y-vinculos', label:'Relaciones y vínculos', desc:'Te acompaño a construir relaciones más sanas, conscientes y auténticas contigo y con los demás.', phIcon:'♡', phDesc:'Foto cálida sobre vínculos y relaciones. Formato 4:3.' },
                { href:'/terapias/infanto-juvenil', label:'Infanto-juvenil', desc:'Apoyo emocional y terapéutico para niñas, niños y adolescentes en su desarrollo y bienestar.', phIcon:'✦', phDesc:'Foto de infancia/adolescencia (sin rostro identificable). Formato 4:3.' },
                { href:'/terapias/trauma-y-apego', label:'Trauma y apego', desc:'Trabajo especializado para sanar heridas, regular emociones y construir apegos seguros (EMDR).', phIcon:'◎', phDesc:'Foto serena y simbólica sobre calma y sanación. Formato 4:3.' },
                { href:'/terapias/sexologia', label:'Sexología', desc:'Exploras tu sexualidad desde el respeto, el placer y la información, sin juicios y con rigor.', phIcon:'❀', phDesc:'Foto delicada y respetuosa sobre bienestar sexual. Formato 4:3.' },
              ].map(({ href, label, desc, phIcon, phDesc }) => (
                <Link key={href} href={href} style={{ textDecoration:'none', border:'1px solid #e8dce6', borderRadius:'16px' }} className="therapy-mini-card">
                  <div style={{ aspectRatio:'4/3', overflow:'hidden', borderRadius:'16px 16px 0 0' }}>
                    <div className="img-placeholder therapy-mini-img" style={{ height:'100%' }}>
                      <span className="ph-icon">{phIcon}</span>
                      <span className="ph-label">{label}</span>
                      <span className="ph-desc">{phDesc}</span>
                    </div>
                  </div>
                  <div style={{ padding:'20px 20px 22px', backgroundColor:'white', borderRadius:'0 0 16px 16px' }}>
                    <h3 style={{ fontSize:'1.05rem', fontWeight:600, color:'var(--text)', marginBottom:'8px', fontFamily:"'Playfair Display',serif" }}>{label}</h3>
                    <p style={{ fontSize:'0.88rem', color:'var(--text-muted)', lineHeight:'1.6', marginBottom:'16px' }}>{desc}</p>
                    <span style={{ fontSize:'0.85rem', fontWeight:600, color:'var(--accent)' }}>Leer más →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <style jsx>{`
            .terapia-intro-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start; margin-bottom:70px; }
            .terapia-cards-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
            .therapy-mini-card { border-radius:16px; box-shadow:0 2px 12px rgba(0,0,0,0.06); transition:transform 0.3s ease,box-shadow 0.3s ease; display:block; overflow:hidden; }
            .therapy-mini-card:hover { transform:translateY(-6px); box-shadow:0 12px 30px rgba(168,123,160,0.18); }
            @media (max-width:992px) { .terapia-cards-grid { grid-template-columns:repeat(2,1fr); } }
            @media (max-width:768px) {
              .terapia-intro-grid { grid-template-columns:1fr; gap:32px; margin-bottom:40px; }
              .therapy-title { text-align:left; }
            }
            @media (max-width:560px) { .terapia-cards-grid { grid-template-columns:1fr; gap:16px; } }
          `}</style>

        </section>

        {/* CÓMO TRABAJO / MI COMPROMISO */}
        <section id="compromiso" className="compromiso">
          <span className="soft-blob" aria-hidden="true" />
          <div className="container" style={{ position:'relative', zIndex:2 }}>
            <div style={{ textAlign:'center' }}>
              <span className="eyebrow eyebrow-center"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.shield}</span> Cómo trabajo <span className="eyebrow-line" /></span>
            </div>
            <h2 className="section-title">Mi compromiso contigo</h2>
            <p className="section-subtitle">Lo que puedes esperar desde la primera sesión.</p>

            <div className="compromiso-grid">
              {compromiso.map(({ icon, title, desc }, i) => (
                <div key={i} className="compromiso-card">
                  <span className="compromiso-icon">{lineIcons[icon]}</span>
                  <h3 className="compromiso-title">{title}</h3>
                  <p className="compromiso-desc">{desc}</p>
                </div>
              ))}
            </div>

            <div className="compromiso-quote">
              <span className="quote-mark">“</span>
              <p>No tienes que poder con todo para merecer sentirte bien. Está bien pedir ayuda, está bien poner límites, está bien elegirte.</p>
              <span className="quote-author">Tú importas.</span>
            </div>
          </div>

          <style jsx>{`
            .compromiso { position:relative; overflow:hidden; background:linear-gradient(165deg, #F8EFF6 0%, #EEDDEB 55%, #E4CCE1 100%); }
            .soft-blob { position:absolute; width:520px; height:520px; top:-180px; right:-140px; border-radius:50%; filter:blur(80px); background:radial-gradient(circle, rgba(255,255,255,0.6), rgba(255,255,255,0) 70%); z-index:1; pointer-events:none; }
            .compromiso-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-bottom:64px; }
            .compromiso-card { background:#fff; padding:46px 38px; box-shadow:0 18px 40px rgba(168,123,160,0.14); transition:transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s ease, border-radius 0.5s ease; }
            .compromiso-card:nth-child(1) { border-radius:38% 62% 63% 37% / 49% 41% 59% 51%; }
            .compromiso-card:nth-child(2) { border-radius:63% 37% 52% 48% / 56% 49% 51% 44%; }
            .compromiso-card:nth-child(3) { border-radius:48% 52% 38% 62% / 56% 44% 56% 44%; }
            .compromiso-card:nth-child(4) { border-radius:55% 45% 57% 43% / 43% 57% 43% 57%; }
            .compromiso-card:hover { transform:translateY(-8px); box-shadow:0 26px 50px rgba(168,123,160,0.24); border-radius:50% 50% 48% 52% / 50% 48% 52% 50%; }
            .compromiso-icon { display:inline-flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:var(--primary-light); color:var(--accent); margin-bottom:18px; }
            .compromiso-title { font-family:'Playfair Display',serif; font-size:1.18rem; color:var(--text); margin-bottom:10px; line-height:1.3; }
            .compromiso-desc { font-size:0.92rem; color:var(--text-muted); line-height:1.65; margin:0; }
            .compromiso-quote { max-width:760px; margin:0 auto; text-align:center; background:rgba(255,255,255,0.7); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.8); border-radius:46% 54% 48% 52% / 62% 44% 56% 38%; padding:64px 92px; position:relative; box-shadow:0 18px 44px rgba(168,123,160,0.16); }
            .quote-mark { font-family:'Playfair Display',serif; font-size:3.5rem; color:var(--primary); line-height:0; display:block; height:30px; }
            .compromiso-quote p { font-family:'Playfair Display',serif; font-style:italic; font-size:1.5rem; line-height:1.5; color:var(--text); margin:0 0 16px; }
            .quote-author { font-family:'Playfair Display',serif; font-size:1.1rem; color:var(--accent); font-weight:600; }
            @media (max-width:992px) { .compromiso-grid { grid-template-columns:repeat(2,1fr); } }
            @media (max-width:768px) { .compromiso-quote p { font-size:1.25rem; } .compromiso-quote { border-radius:30px; padding:40px 28px; } }
            @media (max-width:560px) { .compromiso-grid { grid-template-columns:1fr; } }
          `}</style>
        </section>

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
