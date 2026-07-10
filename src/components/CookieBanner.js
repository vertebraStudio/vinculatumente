"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieBanner() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("vtm-cookie-consent");
    if (!consent) {
      // Small timeout to show banner smoothly
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("vtm-cookie-consent", "acknowledged");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setShowBanner(false);
  };

  if (pathname && pathname.startsWith('/keystatic')) return null;
  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-card glass">
        <div className="cookie-banner-content">
          <h4 className="cookie-banner-title">Tu privacidad nos importa</h4>
          <p className="cookie-banner-text">
            Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para su correcto funcionamiento. No utilizamos cookies de análisis, personalización ni publicidad. Consulta más detalles en nuestra{" "}
            <Link href="/politica-cookies" className="cookie-policy-link">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            onClick={handleAcknowledge}
            className="cookie-btn cookie-btn-primary"
            id="btn-acknowledge-cookies"
          >
            Entendido
          </button>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner-overlay {
          position: fixed;
          bottom: 24px;
          left: 24px;
          right: 24px;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cookie-banner-card {
          width: 100%;
          max-width: 850px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(168, 123, 160, 0.15);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: center;
        }

        .cookie-banner-content {
          flex: 1;
        }

        .cookie-banner-title {
          font-family: 'Sabon', var(--font-playfair), serif;
          font-size: 1.2rem;
          color: var(--text);
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .cookie-banner-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        .cookie-policy-link {
          color: #A87BA0;
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .cookie-policy-link:hover {
          color: var(--text);
        }

        .cookie-banner-actions {
          display: flex;
          gap: 12px;
          white-space: nowrap;
        }

        /* Strict AEPD requirement: EQUAL VISUAL WEIGHT */
        .cookie-btn {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          min-width: 160px;
          text-align: center;
          display: inline-block;
        }

        /* Both buttons have matching shapes and weights */
        .cookie-btn-primary {
          background-color: #A87BA0;
          border: 2px solid #A87BA0;
          color: white;
        }

        .cookie-btn-primary:hover {
          background-color: #C9A8C5;
          border-color: #C9A8C5;
          transform: translateY(-1px);
        }

        .cookie-btn-secondary {
          background-color: transparent;
          border: 2px solid #A87BA0;
          color: #A87BA0;
        }

        .cookie-btn-secondary:hover {
          background-color: rgba(168, 123, 160, 0.05);
          transform: translateY(-1px);
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .cookie-banner-overlay {
            bottom: 16px;
            left: 16px;
            right: 16px;
          }

          .cookie-banner-card {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .cookie-banner-actions {
            width: 100%;
            flex-direction: column;
            gap: 10px;
          }

          .cookie-btn {
            width: 100%;
            min-width: unset;
          }
        }
      `}</style>
    </div>
  );
}
