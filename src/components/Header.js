'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================================
// HEADER — Vincula Tu Mente
// Barra editorial: transparente sobre el hero, crema al hacer scroll.
// ============================================================

export default function Header({ solid = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsMobileDropdownOpen(false);
  };

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setIsMobileDropdownOpen(!isMobileDropdownOpen);
    } else {
      setIsMenuOpen(false);
    }
  };

  const close = () => { setIsMenuOpen(false); setIsMobileDropdownOpen(false); };

  return (
    <header className={`header ${isScrolled || solid ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <Link href="/" onClick={close} className="logo-link" aria-label="Vincula Tu Mente — Inicio">
            <span className="logo-mark">
              <img src="/media/Logo.jpeg" alt="Vincula Tu Mente — María Villalba, psicóloga y sexóloga" />
            </span>
            <span className="logo-text">
              <span className="logo-name">Vincula Tu Mente</span>
              <span className="logo-sub">Psicología y Sexología</span>
            </span>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={close}>Inicio</Link></li>
            <li><Link href="/#sobre-mi" onClick={close}>Sobre mí</Link></li>
            <li className={`has-dropdown ${isMobileDropdownOpen ? 'mobile-dropdown-open' : ''}`}>
              <Link href="/#terapias" className="dropdown-trigger" onClick={handleDropdownClick}>
                Terapias <span className={`arrow ${isMobileDropdownOpen ? 'rotated' : ''}`}>▾</span>
              </Link>
              <div className="dropdown-card">
                <div className="dropdown-inner">
                  <Link href="/terapias/relaciones-y-vinculos" onClick={close}>Relaciones y vínculos</Link>
                  <Link href="/terapias/infanto-juvenil" onClick={close}>Infanto-juvenil</Link>
                  <Link href="/terapias/trauma-y-apego" onClick={close}>Trauma y apego</Link>
                  <Link href="/terapias/sexologia" onClick={close}>Sexología</Link>
                </div>
              </div>
            </li>
            <li><Link href="/#compromiso" onClick={close}>Cómo trabajo</Link></li>
            <li><Link href="/blog" onClick={close}>Blog</Link></li>
            <li><Link href="/#faq" onClick={close}>FAQ</Link></li>
            <li><Link href="/contacto" onClick={close}>Contacto</Link></li>
            <li className="mobile-cta">
              <Link href="/contacto" className="btn-cta" onClick={close}>Reservar cita</Link>
            </li>
          </ul>
        </nav>

        <div className="cta desktop-cta">
          <Link href="/contacto" className="btn-cta">Reservar cita</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .header.scrolled {
          background: rgba(250, 248, 250, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(168, 123, 160, 0.18);
          box-shadow: 0 6px 24px rgba(26, 20, 22, 0.04);
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          padding: 22px 40px;
          transition: padding 0.4s ease;
        }
        .header.scrolled .header-inner { padding: 12px 40px; }

        :global(.logo-link) { display: flex !important; align-items: center !important; gap: 13px !important; }
        .logo-mark { flex-shrink: 0; width: 50px; height: 50px; border-radius: 50%; overflow: hidden; background: #fff; border: 1px solid rgba(168,123,160,0.25); box-shadow: 0 4px 12px rgba(168,123,160,0.18); display: inline-flex; align-items: center; justify-content: center; transition: width 0.4s ease, height 0.4s ease; }
        .logo-mark img { width: 118%; height: 118%; object-fit: cover; display: block; }
        .header.scrolled .logo-mark { width: 44px; height: 44px; }
        .logo-text { display: flex; flex-direction: column; line-height: 1.15; }
        .logo-name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: var(--text); letter-spacing: 0.01em; }
        .logo-sub { font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.72rem; color: var(--accent); letter-spacing: 0.02em; }

        .nav ul {
          display: flex;
          gap: 30px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav a {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          color: var(--text);
          font-size: 0.74rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          position: relative;
          padding: 4px 0;
          transition: color 0.25s ease;
        }
        .nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav a:hover { color: var(--accent); }
        .nav a:hover::after { width: 100%; }

        .arrow { font-size: 0.6rem; opacity: 0.6; transition: transform 0.3s ease; }
        .has-dropdown { position: relative; }
        .dropdown-card {
          position: absolute;
          top: calc(100% + 22px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: 250px;
          background: #fff;
          border: 1px solid rgba(168, 123, 160, 0.15);
          border-radius: 16px;
          padding: 10px;
          box-shadow: 0 14px 40px rgba(26, 20, 22, 0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
        }
        .dropdown-card::before { content: ''; position: absolute; top: -30px; left: 0; right: 0; height: 36px; background: transparent; }
        .has-dropdown:hover .dropdown-card { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
        .has-dropdown:hover .arrow { transform: rotate(180deg); color: var(--accent); }
        .dropdown-inner { display: flex; flex-direction: column; gap: 2px; }
        .dropdown-inner :global(a) {
          padding: 11px 16px;
          border-radius: 10px;
          font-size: 0.82rem !important;
          letter-spacing: 0.02em !important;
          text-transform: none !important;
          color: #4A4248 !important;
          font-weight: 400 !important;
          transition: all 0.2s ease;
          display: block !important;
        }
        .dropdown-inner :global(a)::after { display: none; }
        .dropdown-inner :global(a:hover) { background-color: var(--primary-light); color: var(--accent) !important; padding-left: 22px !important; }

        :global(.btn-cta) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 10px 24px !important;
          border-radius: 50px !important;
          background-color: transparent !important;
          color: var(--accent) !important;
          border: 1.5px solid var(--accent) !important;
          font-weight: 600 !important;
          font-size: 0.72rem !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase !important;
          text-decoration: none !important;
          white-space: nowrap !important;
          transition: all 0.3s ease !important;
        }
        :global(.btn-cta:hover) {
          background-color: var(--accent) !important;
          color: #fff !important;
          box-shadow: 0 6px 18px rgba(168, 123, 160, 0.3) !important;
        }

        .mobile-cta { display: none; }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 4px;
        }
        .bar { width: 24px; height: 2px; background-color: var(--text); border-radius: 2px; transition: var(--transition); }
        .bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 900px) {
          .header.scrolled, .header { background: rgba(250, 248, 250, 0.96); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(168, 123, 160, 0.15); }
          .header-inner { padding: 12px 20px; position: relative; }
          .header.scrolled .header-inner { padding: 10px 20px; }
          .logo-sub { display: none; }
          .logo-mark { width: 42px; height: 42px; }

          .nav {
            position: absolute;
            top: calc(100% + 0px);
            left: 0;
            right: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            background: #fff;
            transition: all 0.4s ease-in-out;
            display: flex;
            flex-direction: column;
          }
          .nav-open {
            max-height: 85vh;
            overflow-y: auto;
            padding: 16px 24px 28px;
            box-shadow: 0 14px 30px rgba(26, 20, 22, 0.1);
            border-bottom: 1px solid rgba(168, 123, 160, 0.15);
          }
          .nav ul { flex-direction: column; gap: 4px; align-items: stretch; width: 100%; }
          .nav ul li { width: 100%; box-sizing: border-box; }
          .nav a { font-size: 0.95rem; letter-spacing: 0.04em; text-transform: none; padding: 12px 0; }
          .nav a::after { display: none; }
          .has-dropdown .dropdown-card { display: none !important; }
          .has-dropdown.mobile-dropdown-open .dropdown-card {
            position: relative !important; top: auto !important; left: auto !important; transform: none !important;
            width: 100% !important; opacity: 1 !important; visibility: visible !important;
            box-shadow: none !important; border: none !important; padding: 0 0 6px 14px !important;
            margin-top: 2px !important; display: block !important; background: transparent !important;
          }
          .has-dropdown.mobile-dropdown-open .arrow { transform: rotate(180deg); color: var(--accent); }
          .menu-toggle { display: flex; }
          .desktop-cta { display: none; }
          .mobile-cta { display: block; margin-top: 14px; }
          .mobile-cta :global(.btn-cta) { width: 100% !important; padding: 14px 24px !important; font-size: 0.78rem !important; }
        }
      `}</style>
    </header>
  );
}
