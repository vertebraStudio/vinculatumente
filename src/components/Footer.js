'use client';

import Link from 'next/link';

// ============================================================
// FOOTER — Sustituye todos los [PLACEHOLDER] con tus datos reales
// LOGO FOOTER: Versión clara/blanca del logo para fondo oscuro
//   Sustituye "/media/LogoFooter.png" con tu imagen
// ============================================================

export default function Footer() {
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <footer className="footer-global">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-wordmark">Vincula Tu Mente</p>
            <p className="footer-tagline">Psicología y Sexología</p>
            <p className="subtitle">Psicóloga y sexóloga. Te acompaño en relaciones y vínculos, infancia y adolescencia, trauma y apego, y sexología.</p>
            <p className="footer-location">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Consulta presencial en Alcalá de Henares y terapia online en toda España
            </p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', marginTop: '5px' }}>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.5px', fontWeight: 600, padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
                Nº Colegiada M-43581
              </span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-title-styled">Web</h3>
            <ul className="footer-nav-links">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#sobre-mi">Sobre mí</Link></li>
              <li><Link href="/#terapias">Sesiones</Link></li>
              <li><Link href="/#compromiso">Cómo trabajo</Link></li>
              <li><Link href="/talleres">Talleres</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#faq">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h3 className="footer-title-styled">Contacto</h3>
            <div className="brand-contact">
              <a href="tel:+34604807200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +34 604 80 72 00
              </a>
              <a href="mailto:vinculatumente@gmail.com">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                vinculatumente@gmail.com
              </a>
              <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                @vinculatumente
              </a>
              <a href="https://www.linkedin.com/in/villalba-maria" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" /></svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-legal-col">
            <h3 className="footer-title-styled">Legal</h3>
            <div className="footer-legal-links">
              <Link href="/aviso-legal">Aviso Legal</Link>
              <Link href="/politica-privacidad">Política de Privacidad</Link>
              <Link href="/politica-cookies">Política de Cookies</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p>© {new Date().getFullYear()} Vincula Tu Mente — María Villalba López. Todos los derechos reservados.</p>
            <p className="credit-text">Psicóloga y sexóloga en Alcalá de Henares y online en toda España</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-bottom-flex { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; text-align: center; }
        .footer-bottom-flex p { margin: 0; }
        .credit-link { color: rgba(255,255,255,0.8) !important; text-decoration: none !important; font-weight: 500 !important; transition: var(--transition) !important; }
        .credit-link:hover { color: var(--primary) !important; }
        .footer-global { background-color: var(--accent); border-top: none; padding: 60px 0 35px; color: white; }
        .container { padding: 0 80px; }
        .footer-content { display: grid; grid-template-columns: 1.3fr 0.8fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .footer-brand { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .footer-wordmark { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin: 0 0 2px; letter-spacing: 0.02em; }
        .footer-tagline { font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.92rem; color: rgba(255,255,255,0.7); margin: 0 0 14px; }
        .footer-logo { height: 60px; width: auto; margin-bottom: 20px; }
        .subtitle { color: rgba(255,255,255,0.85); font-size: 0.92rem; margin-top: 5px; margin-bottom: 14px; max-width: 400px; line-height: 1.6; }
        .footer-location { display: flex; align-items: center; gap: 7px; font-size: 0.8rem; font-style: italic; color: rgba(255,255,255,0.6); margin-bottom: 18px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.12); max-width: 340px; line-height: 1.5; }
        .footer-nav-col, .footer-contact-col, .footer-legal-col { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .footer-nav-links { display: flex; flex-direction: column; gap: 12px; padding: 0; margin: 0; }
        .footer-nav-links li { list-style: none; }
        .footer-nav-links :global(a) { color: rgba(255,255,255,0.65) !important; font-size: 0.82rem !important; text-decoration: none !important; transition: var(--transition) !important; }
        .footer-nav-links :global(a:hover) { color: var(--primary-light) !important; }
        .footer-title-styled { font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.92); margin-bottom: 20px; font-family: 'Poppins', sans-serif; text-transform: uppercase; letter-spacing: 1.2px; }
        .brand-contact { display: flex; flex-direction: column; gap: 12px; }
        .brand-contact :global(a) { display: flex !important; align-items: center !important; gap: 10px !important; color: rgba(255,255,255,0.78) !important; text-decoration: none !important; font-size: 0.82rem !important; transition: var(--transition) !important; }
        .brand-contact :global(a:hover) { color: #fff !important; }
        .brand-contact :global(svg) { color: rgba(255,255,255,0.92) !important; }
        .footer-legal-links { display: flex; flex-direction: column; gap: 12px; }
        .footer-legal-links :global(a) { color: rgba(255,255,255,0.65) !important; font-size: 0.82rem !important; text-decoration: none !important; transition: var(--transition) !important; }
        .footer-legal-links :global(a:hover) { color: var(--primary-light) !important; }
        .footer-bottom { text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.85rem; color: rgba(255,255,255,0.5); }
        @media (max-width: 1024px) { .footer-content { grid-template-columns: 1fr 1fr; gap: 40px; } }
        @media (max-width: 768px) {
          .container { padding: 0 24px; }
          .footer-content { grid-template-columns: 1fr; gap: 40px; }
          .footer-bottom { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
