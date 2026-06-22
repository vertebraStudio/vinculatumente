import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Equipo | Vincula Tu Mente',
  description: 'Conoce al equipo de Vincula Tu Mente: profesionales especializados en psicología y sexología. María Villalba, psicóloga y sexóloga colegiada en Alcalá de Henares y online.',
  alternates: { canonical: 'https://vinculatumente.es/equipo' },
};

const equipo = [
  {
    slug: 'maria-villalba',
    name: 'María Villalba',
    title: 'Psicóloga y Sexóloga',
    colegiada: 'N.º Colegiada M-43581',
    photo: '/media/maria-profile-2.png',
    bio: 'Especializada en relaciones humanas, desarrollo infanto-juvenil, trauma y apego. Trabaja desde una perspectiva integradora, cercana y rigurosa, integrando la salud emocional y sexual como parte de un mismo bienestar.',
    especialidades: ['Trauma y apego (EMDR)', 'Sexología y pareja', 'Psicología infanto-juvenil', 'Perspectiva de género', 'Psicología afirmativa LGTBI+'],
  },
];

export default function EquipoPage() {
  return (
    <>
      <Header solid={true} />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>

        <section style={{ padding: '64px 5% 40px' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Vincula Tu Mente</span>
            <h1 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)', marginTop: '10px', marginBottom: '16px' }}>
              Nuestro equipo
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: 0 }}>
              Profesionales especializados en psicología y sexología. Aunque el proyecto nace de la mano de una sola persona, la estructura de Vincula Tu Mente está pensada para crecer y dar cabida a más profesionales comprometidos con el bienestar emocional y sexual.
            </p>
          </div>
        </section>

        <section style={{ padding: '20px 5% 100px' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div className="eq-grid">
              {equipo.map((p) => (
                <Link key={p.slug} href={`/equipo/${p.slug}`} className="eq-card">
                  <div className="eq-photo-wrap">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                      sizes="(max-width: 600px) 100vw, 420px"
                    />
                  </div>
                  <div className="eq-body">
                    <h2 className="eq-name">{p.name}</h2>
                    <p className="eq-title">{p.title}</p>
                    <p className="eq-colegiada">{p.colegiada}</p>
                    <p className="eq-bio">{p.bio}</p>
                    <p className="eq-tags">
                      {p.especialidades.join(' · ')}
                    </p>
                    <span className="eq-cta">Ver perfil completo →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .eq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }
        .eq-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid rgba(201,168,197,0.2);
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(168,123,160,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .eq-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(168,123,160,0.16);
        }
        .eq-photo-wrap {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #F4E9F1;
        }
        .eq-body {
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .eq-name {
          font-family: var(--font-playfair), serif;
          font-size: 1.5rem;
          color: var(--text);
          margin: 0;
          font-weight: 600;
        }
        .eq-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent);
          margin: 0;
        }
        .eq-colegiada {
          font-size: 0.76rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          margin: 0 0 8px;
        }
        .eq-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 0 14px;
        }
        .eq-tags {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 18px;
        }
        .eq-cta {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          margin-top: auto;
        }
      `}</style>
    </>
  );
}
