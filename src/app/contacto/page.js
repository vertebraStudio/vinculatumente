import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "./ContactHero";

export const metadata = {
  title: "Contacto | Vincula Tu Mente | Psicóloga y Sexóloga en Alcalá de Henares y Online",
  description: "Contacta con María Villalba, psicóloga y sexóloga en Alcalá de Henares y online. Reserva tu primera cita o resuelve tus dudas por WhatsApp, teléfono o email.",
};

export default function ContactoPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">

        <ContactHero />

        <section style={{ padding: '80px 5%', backgroundColor: 'var(--white)' }}>
          <div className="therapy-layout">

            {/* ── COLUMNA PRINCIPAL ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

              <div className="reveal">
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.8rem', fontWeight: 600, marginBottom: '20px', color: 'var(--text)' }}>
                  ¿Cómo puedo ayudarte?
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  Si tienes alguna pregunta antes de tu primera cita o simplemente quieres saber más sobre cómo trabajo, no dudes en escribirme. Elige la vía que te resulte más cómoda: respondo personalmente a cada mensaje.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  Dar el primer paso no tiene por qué ser difícil. A veces, un mensaje es todo lo que se necesita para empezar. No estás solx en esto.
                </p>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eadce6' }} />

              <div className="reveal">
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.8rem', fontWeight: 600, marginBottom: '30px', color: 'var(--text)' }}>
                  Vías de contacto
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>

                  {/* WhatsApp */}
                  <a href="https://wa.me/34604807200" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', borderRadius: '16px', backgroundColor: 'var(--white)', border: '1px solid #eadce6', textDecoration: 'none', transition: 'all 0.2s ease', position: 'relative' }} className="contact-card-link">
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(37, 211, 102, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.62rem', fontWeight: 600, border: '1px solid rgba(15, 81, 50, 0.18)', color: '#0f5132', backgroundColor: 'rgba(25, 135, 84, 0.05)', padding: '4px 10px', borderRadius: '50px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Preferente</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>WhatsApp</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Escríbeme en cualquier momento. Suelo responder de forma inmediata o en un plazo máximo de 24 horas.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Enviar mensaje directo →
                    </span>
                  </a>

                  {/* Teléfono */}
                  <a href="tel:+34604807200" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', borderRadius: '16px', backgroundColor: 'var(--white)', border: '1px solid #eadce6', textDecoration: 'none', transition: 'all 0.2s ease' }} className="contact-card-link">
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Llamada telefónica</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Si prefieres hablar directamente. Lunes a viernes de 9:00 a 15:00 y miércoles de 9:00 a 21:00.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Llamar ahora →
                    </span>
                  </a>

                  {/* Email */}
                  <a href="mailto:vinculatumente@gmail.com" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', borderRadius: '16px', backgroundColor: 'var(--white)', border: '1px solid #eadce6', textDecoration: 'none', transition: 'all 0.2s ease' }} className="contact-card-link">
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Correo electrónico</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Para consultas, colaboraciones o si prefieres contarme tu situación de forma más extensa.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', wordBreak: 'break-all' }}>
                      vinculatumente@gmail.com →
                    </span>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', borderRadius: '16px', backgroundColor: 'var(--white)', border: '1px solid #eadce6', textDecoration: 'none', transition: 'all 0.2s ease' }} className="contact-card-link">
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Instagram y TikTok</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Sígueme para contenido sobre bienestar emocional, sexualidad y reflexiones del día a día.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      @vinculatumente →
                    </span>
                  </a>

                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eadce6' }} />

              {/* Modalidades */}
              <div className="reveal">
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.8rem', fontWeight: 600, marginBottom: '20px', color: 'var(--text)' }}>
                  Modalidad de atención
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px', color: 'var(--text-muted)' }}>
                  Puedes elegir la modalidad que mejor se adapte a ti. Las sesiones presenciales tienen lugar en Alcalá de Henares y las online están disponibles desde cualquier punto de España, con la misma cercanía, rigor y confidencialidad.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div style={{ background: 'var(--off-white)', border: '1px solid #eadce6', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--accent)', flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </span>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--text)', margin: '0 0 6px', fontFamily: "var(--font-playfair), serif", fontSize: '1.1rem' }}>Sesiones presenciales</p>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>En consulta en Alcalá de Henares (Madrid). Un espacio cálido y confidencial para que te sientas cómodx desde el primer momento.</p>
                    </div>
                  </div>
                  <div style={{ background: 'var(--off-white)', border: '1px solid #eadce6', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--accent)', flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    </span>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--text)', margin: '0 0 6px', fontFamily: "var(--font-playfair), serif", fontSize: '1.1rem' }}>Sesiones online</p>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>Por videollamada, desde cualquier lugar de España. Sin desplazamientos, con toda la comodidad y privacidad de tu espacio.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '120px' }}>

              {/* Perfil */}
              <div style={{ backgroundColor: 'var(--white)', border: '1px solid #eadce6', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <img src="/media/vinculatumenteLogo.jpg" alt="Vincula Tu Mente" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, mixBlendMode: 'multiply' }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', margin: 0 }}>María Villalba</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>Psicóloga y sexóloga</p>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '16px' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>Nº Colegiada M-43581</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>
                  <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    @vinculatumente
                  </a>
                </p>
              </div>

              {/* Consulta */}
              <div style={{ backgroundColor: 'var(--white)', border: '1px solid #eadce6', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 16px' }}>Consulta</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 2px' }}>Ubicación</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>Alcalá de Henares, Madrid · Online en toda España</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12,7 12,12 15.5,14" /></svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 2px' }}>Disponibilidad</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>Escríbeme y buscamos un horario que se adapte a ti.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ backgroundColor: 'var(--accent)', borderRadius: '16px', padding: '28px 24px', color: 'white' }}>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.4rem', fontWeight: 600, marginBottom: '12px', color: 'white', lineHeight: '1.3' }}>
                  ¿Empezamos?
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
                  Escríbeme por WhatsApp — es la forma más rápida de contactar y resolver cualquier duda inicial.
                </p>
                <a href="https://wa.me/34604807200" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 20px', backgroundColor: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: '50px', color: 'white', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Escribir por WhatsApp →
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
