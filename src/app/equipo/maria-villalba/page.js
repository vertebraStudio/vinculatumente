import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormationAccordion from "@/components/FormationAccordion";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'María Villalba — Psicóloga y Sexóloga | Vincula Tu Mente',
  description: 'Conoce a María Villalba, psicóloga y sexóloga colegiada (M-43581), especializada en relaciones, trauma, apego y sexología. Atención presencial en Alcalá de Henares y online en toda España.',
  alternates: { canonical: 'https://vinculatumente.es/equipo/maria-villalba' },
};

const svg = (paths) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const icons = {
  cap:     svg(<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></>),
  heart:   svg(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 12 5 3.5 3.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" />),
  sparkle: svg(<><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" /><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" /></>),
  user:    svg(<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>),
};

const formacion = [
  { icon: 'cap',     title: 'Grado en Psicología',                           sub: 'Universidad Europea Miguel de Cervantes' },
  { icon: 'heart',   title: 'Máster en Sexología: Terapia Sexual y de Pareja', sub: 'Universidad de Extremadura' },
  { icon: 'sparkle', title: 'Terapia EMDR (Niveles I y II)',                  sub: 'UNED · Trauma complejo y apego' },
  { icon: 'user',    title: 'Máster en Psicología Infantil y Juvenil',        sub: 'Edeca · Acompañamiento a niñas, niños y adolescentes' },
];

export default function MariaVillalbaPage() {
  return (
    <>
      <Header solid={true} />
      <main>

        {/* PERFIL */}
        <section className="mv-hero">
          <div className="container mv-hero-inner">
            <Link href="/equipo" className="mv-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
              Volver al equipo
            </Link>

            <div className="mv-profile-grid">
              <div className="mv-photo-col">
                <div className="mv-photo-blob">
                  <Image
                    src="/media/maria-profile-2.png"
                    alt="María Villalba, psicóloga y sexóloga"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                    sizes="(max-width: 900px) 80vw, 420px"
                    priority
                  />
                </div>
              </div>

              <div className="mv-content-col">
                <span className="mv-eyebrow">Psicóloga y Sexóloga</span>
                <h1 className="mv-name">María Villalba</h1>
                <p className="mv-colegiada">N.º Colegiada M-43581 · Colegio Oficial de la Psicología de Madrid</p>

                <p className="mv-bio">Soy <strong>psicóloga y sexóloga</strong> especializada en relaciones humanas, desarrollo infanto-juvenil, trauma y apego.</p>
                <p className="mv-bio">Trabajo desde una perspectiva <strong>integradora, cercana, rigurosa y actual</strong>, orientada a ofrecer herramientas prácticas para relaciones más conscientes, una comunicación saludable y bienestar emocional en el día a día.</p>
                <p className="mv-bio">Mi enfoque combina <strong>sensibilidad humana, estructura profesional y conocimiento científico</strong>, creando espacios seguros, respetuosos y libres de juicio.</p>
                <p className="mv-bio">Creo que la salud mental y el bienestar sexual son <strong>igual de importantes</strong>, y que toda persona merece un lugar donde poder cuidarlos.</p>

                <div className="mv-ctas">
                  <Link href="/contacto" className="mv-btn-primary">Reservar sesión</Link>
                  <a href="https://wa.me/34604807200" target="_blank" rel="noopener noreferrer" className="mv-btn-ghost">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMACIÓN ACADÉMICA */}
        <section className="mv-formation">
          <div className="container" style={{ maxWidth: '1080px' }}>
            <div className="mv-formation-grid">
              <div>
                <span className="eyebrow eyebrow-section"><span className="eyebrow-line" /> Formación académica</span>
                <h2 className="mv-section-title">Una base académica sólida al servicio del bienestar</h2>
                <p className="mv-formation-text">
                  Graduada en Psicología por la <strong>Universidad Europea Miguel de Cervantes</strong> y especializada con el <strong>Máster en Sexología: Educación, Terapia Sexual y de Pareja</strong> (Universidad de Extremadura).
                </p>
                <p className="mv-formation-text">
                  Con formación permanente en <strong>terapia EMDR</strong>, <strong>psicología infanto-juvenil</strong>, trauma, apego y perspectiva de género, para ofrecer un acompañamiento riguroso y actualizado.
                </p>
              </div>
              <div className="mv-cards-list">
                {formacion.map(({ icon, title, sub }) => (
                  <div key={title} className="trayectoria-card glass">
                    <span className="trayectoria-card-icon">{icons[icon]}</span>
                    <div className="trayectoria-card-content">
                      <h4 className="trayectoria-card-title">{title}</h4>
                      <p className="trayectoria-card-desc">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESPECIALIZACIONES */}
        <section style={{ background: '#fff', padding: '80px 5%' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="eyebrow eyebrow-section"><span className="eyebrow-line" /> Especializaciones y áreas de trabajo</span>
            <h2 className="mv-section-title" style={{ marginBottom: '36px' }}>Formación especializada y en permanente actualización</h2>
            <FormationAccordion />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #8B5E86 100%)', padding: '80px 5%', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '580px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '16px' }}>
              ¿Quieres empezar?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '32px' }}>
              Reserva una primera consulta sin compromiso. Presencial en Alcalá de Henares u online desde cualquier punto de España.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', backgroundColor: '#fff', color: 'var(--accent)', borderRadius: '50px', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
                Reservar sesión
              </Link>
              <a href="https://wa.me/34604807200" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: '#25D366', color: '#fff', borderRadius: '50px', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.06em', textDecoration: 'none', boxShadow: '0 8px 20px rgba(37,211,102,0.35)' }}>
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .mv-hero {
          padding: 140px 5% 80px;
          background: linear-gradient(180deg, #FBF7FB 0%, #fff 100%);
        }
        .mv-hero-inner { max-width: 1080px; }
        .mv-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          margin-bottom: 44px;
        }
        .mv-profile-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 64px;
          align-items: center;
        }
        .mv-photo-blob {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 52% 48% 46% 54% / 48% 52% 48% 52%;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(168,123,160,0.22);
          background: #F4E9F1;
        }
        .mv-eyebrow {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }
        .mv-name {
          font-family: var(--font-playfair), serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: var(--text);
          margin: 0 0 8px;
          line-height: 1.1;
        }
        .mv-colegiada {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0 0 28px;
          letter-spacing: 0.04em;
        }
        .mv-bio {
          color: var(--text-muted);
          line-height: 1.75;
          margin: 0 0 12px;
        }
        .mv-ctas {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .mv-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 13px 28px;
          background: var(--accent);
          color: #fff;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 8px 22px rgba(168,123,160,0.3);
          transition: all 0.3s ease;
        }
        .mv-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(168,123,160,0.42); }
        .mv-btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 13px 24px;
          color: var(--text);
          border: 1.5px solid rgba(168,123,160,0.4);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .mv-btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

        .mv-formation {
          background: linear-gradient(180deg, #fff 0%, #F4EAF2 100%);
          padding: 80px 5%;
        }
        .mv-formation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .mv-section-title {
          font-family: var(--font-playfair), serif;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          color: var(--text);
          margin: 14px 0 22px;
          line-height: 1.2;
        }
        .mv-formation-text {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .mv-cards-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .mv-hero { padding: 120px 5% 60px; }
          .mv-profile-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mv-photo-blob {
            width: 68%;
            max-width: 280px;
            margin: 0 auto;
          }
          .mv-formation-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
