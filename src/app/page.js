import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FormationAccordion from "@/components/FormationAccordion";
import HomeBlogSection from "@/components/HomeBlogSection";
import Link from 'next/link';
import Image from 'next/image';

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

export default async function Home() {

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
                  <Image src="/media/maria-profile-3.png" alt="María Villalba, psicóloga y sexóloga" width={600} height={750} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} sizes="(max-width: 900px) 80vw, 35vw" />
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
                <span className="eyebrow eyebrow-section"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.cap}</span> Formación</span>
                <h2 className="trayectoria-title">Una base académica sólida al servicio de tu bienestar</h2>
                <p className="trayectoria-text">
                  Me gradué en Psicología por la <strong>Universidad Europea Miguel de Cervantes</strong> y me especialicé con el <strong>Máster en Sexología: Educación, Terapia Sexual y de Pareja</strong> (Universidad de Extremadura).
                </p>
                <p className="trayectoria-text">
                  Continúo formándome de forma permanente en <strong>terapia EMDR</strong>, <strong>psicología infanto-juvenil</strong>, trauma, apego y perspectiva de género, para acompañarte con un enfoque riguroso y actualizado.
                </p>
              </div>
              <div className="trayectoria-list">
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-icon">{lineIcons.cap}</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Grado en Psicología</h4>
                    <p className="trayectoria-card-desc">Universidad Europea Miguel de Cervantes</p>
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
                    <h4 className="trayectoria-card-title">Terapia EMDR (Niveles I y II)</h4>
                    <p className="trayectoria-card-desc">UNED · Trauma complejo y apego</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-icon">{lineIcons.user}</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Máster en Psicología Infantil y Juvenil</h4>
                    <p className="trayectoria-card-desc">Edeca · Acompañamiento a niñas, niños y adolescentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>

        {/* TERAPIAS
            FOTOS DE TARJETAS: cada eje necesita una foto representativa (formato 4:3).
            Sustituir cada div.img-placeholder por <img src="/media/[foto].jpg" ... />.
        */}
        <section id="terapias" className="terapias reveal" style={{ backgroundColor:'var(--white)', position:'relative', overflow:'hidden' }}>
          <div className="container">
            <div className="terapia-intro-grid">
              <div className="therapy-text">
                <span className="eyebrow eyebrow-section"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.heart}</span> Sesiones</span>
                <h2 className="section-title therapy-title">Mi forma de acompañarte</h2>
                <p>Te acompaño a <strong>comprenderte, aceptarte y vivir relaciones más sanas y conscientes</strong>, integrando lo emocional y lo sexual como parte de un mismo bienestar.</p>
                <p>Cada proceso es único. Partimos de tu historia y tus objetivos para diseñar un acompañamiento personalizado, con herramientas prácticas que puedas aplicar en tu vida cotidiana.</p>
                <p>Atiendo de forma <strong>presencial en Alcalá de Henares</strong> y también <strong>online</strong> desde cualquier punto de España, manteniendo la misma cercanía, rigor y confidencialidad.</p>
              </div>
              <div className="formation-box glass" style={{ border:'1px solid #e8dce6', padding:'30px' }}>
                <h3 style={{ color:'var(--text)', marginBottom:'24px' }}>Formación continua</h3>
                <FormationAccordion />
              </div>
            </div>

            <hr style={{ border:'none', borderTop:'1px solid rgba(0,0,0,0.07)', marginBottom:'60px' }} />

            {/* Tarjetas de especialidades */}
            <div className="terapia-cards-grid">
              {[
                { href:'/terapias/relaciones-y-vinculos', label:'Relaciones y vínculos', desc:'Te acompaño a construir relaciones más sanas, conscientes y auténticas contigo y con los demás.', photo:'/media/relacionesHeader.jpg' },
                { href:'/terapias/infanto-juvenil', label:'Infanto-juvenil', desc:'Apoyo emocional y terapéutico para niñas, niños y adolescentes en su desarrollo y bienestar.', photo:'/media/infantoHeader.jpg' },
                { href:'/terapias/trauma-y-apego', label:'Trauma y apego', desc:'Trabajo especializado para sanar heridas, regular emociones y construir apegos seguros (EMDR).', photo:'/media/imagenDeprueba3.jpg' },
                { href:'/terapias/sexologia', label:'Sexología', desc:'Exploras tu sexualidad desde el respeto, el placer y la información, sin juicios y con rigor.', photo:'/media/sexologiaHeader.jpg' },
              ].map(({ href, label, desc, photo }) => (
                <Link key={href} href={href} style={{ textDecoration:'none', border:'1px solid #e8dce6', borderRadius:'16px' }} className="therapy-mini-card">
                  <div style={{ aspectRatio:'4/3', overflow:'hidden', borderRadius:'16px 16px 0 0', position:'relative' }}>
                    <Image src={photo} alt={label} fill style={{ objectFit:'cover' }} sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <div style={{ padding:'20px 20px 22px', backgroundColor:'white', borderRadius:'0 0 16px 16px', flex:1, display:'flex', flexDirection:'column' }}>
                    <h3 style={{ fontSize:'1.05rem', fontWeight:600, color:'var(--text)', marginBottom:'8px', fontFamily:"var(--font-playfair),serif" }}>{label}</h3>
                    <p style={{ fontSize:'0.88rem', color:'var(--text-muted)', lineHeight:'1.6', marginBottom:'16px', flex:1 }}>{desc}</p>
                    <span style={{ fontSize:'0.85rem', fontWeight:600, color:'var(--accent)' }}>Leer más →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>


        </section>

        {/* TALLERES */}
        <section id="talleres" className="terapias reveal" style={{ backgroundColor:'var(--off-white)', position:'relative', overflow:'hidden' }}>
          <div className="container">
            <div className="terapia-intro-grid">
              <div className="therapy-text">
                <span className="eyebrow eyebrow-section"><span className="eyebrow-line" /><span className="eyebrow-ic">{lineIcons.cap}</span> Talleres y Formación</span>
                <h2 className="section-title therapy-title">Formación que transforma</h2>
                <p>Diseño talleres, charlas y programas formativos sobre <strong>sexualidad, vínculos, salud mental e igualdad</strong> para empresas, centros educativos, entidades sociales y equipos profesionales.</p>
                <p>Cada intervención se adapta al grupo, el contexto y los objetivos. <strong>Presencial en Alcalá de Henares, online o híbrido</strong>.</p>
                <Link href="/talleres" style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginTop:'8px', fontSize:'0.88rem', fontWeight:600, color:'var(--accent)', textDecoration:'none' }}>
                  Ver todas las propuestas
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="formation-box glass" style={{ border:'1px solid #e8dce6', padding:'28px 30px', display:'flex', flexDirection:'column', gap:'6px' }}>
                <h3 style={{ color:'var(--text)', marginBottom:'16px', fontFamily:"var(--font-playfair),serif", fontSize:'1.1rem' }}>Formato flexible</h3>
                {[
                  ['Píldoras formativas', '1,5 – 2h'],
                  ['Talleres generales', '3 – 4h'],
                  ['Formaciones para empresas', '2h'],
                  ['Programas estructurados', 'paquete cerrado'],
                ].map(([name, dur]) => (
                  <div key={name} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid rgba(201,168,197,0.15)' }}>
                    <span style={{ fontSize:'0.88rem', color:'var(--text)', fontWeight:500 }}>{name}</span>
                    <span style={{ fontSize:'0.8rem', color:'var(--accent)', fontWeight:600 }}>{dur}</span>
                  </div>
                ))}
                <p style={{ fontSize:'0.8rem', color:'var(--text-muted)', marginTop:'14px', lineHeight:1.6 }}>
                  Contenido a medida · Enfoque riguroso · Presencial u online
                </p>
              </div>
            </div>

            <hr style={{ border:'none', borderTop:'1px solid rgba(0,0,0,0.07)', marginBottom:'60px' }} />

            {/* Tarjetas de perfiles */}
            <div className="terapia-cards-grid">
              {[
                { color:'#F4E9F1', accent:'#A87BA0', photo:'/media/tallerParticulares.jpg', label:'Para particulares', desc:'Talleres sobre terapia online, sexología, vínculos, trauma y bienestar emocional.', href:'/talleres/particulares' },
                { color:'#EDE3F0', accent:'#8B6088', photo:'/media/tallerFamilias.jpg', label:'Para familias', desc:'Formación sobre adolescencia, educación emocional, sexualidad y convivencia familiar.', href:'/talleres/familias' },
                { color:'#F8F0F7', accent:'#9B6E97', photo:'/media/tallerCentrosEducativos.jpg', label:'Para centros educativos', desc:'Programas de educación afectivo-sexual, bullying, ansiedad y salud mental en el aula.', href:'/talleres/centros-educativos' },
                { color:'#EDE8F2', accent:'#7A5580', photo:'/media/tallerEmpresas.jpg', label:'Para empresas', desc:'Talleres de burnout, acoso laboral, igualdad, liderazgo y bienestar organizacional.', href:'/talleres/empresas' },
              ].map(({ color, accent, photo, label, desc, href }) => (
                <Link key={label} href={href} style={{ textDecoration:'none', border:'1px solid #e8dce6', borderRadius:'16px' }} className="therapy-mini-card">
                  <div style={{ aspectRatio:'4/3', overflow:'hidden', borderRadius:'16px 16px 0 0', background: color, position:'relative' }}>
                    <Image src={photo} alt={label} fill style={{ objectFit:'cover' }} sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <div style={{ padding:'20px 20px 22px', backgroundColor:'white', borderRadius:'0 0 16px 16px', flex:1, display:'flex', flexDirection:'column' }}>
                    <h3 style={{ fontSize:'1.05rem', fontWeight:600, color:'var(--text)', marginBottom:'8px', fontFamily:"var(--font-playfair),serif" }}>{label}</h3>
                    <p style={{ fontSize:'0.88rem', color:'var(--text-muted)', lineHeight:'1.6', marginBottom:'16px', flex:1 }}>{desc}</p>
                    <span style={{ fontSize:'0.85rem', fontWeight:600, color: accent }}>Ver talleres →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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

        </section>

        {/* BLOG */}
        <HomeBlogSection />

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
