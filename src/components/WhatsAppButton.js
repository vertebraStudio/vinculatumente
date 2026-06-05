'use client';

import { usePathname } from 'next/navigation';

const WHATSAPP_NUMBER = "34604807200";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname && pathname.startsWith('/keystatic')) return null;
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="30" cy="30" r="30" fill="#25D366"/>
        <path d="M30 13C20.6 13 13 20.6 13 30c0 3.1.8 6 2.3 8.5L13 47l8.8-2.3C24 46.2 26.9 47 30 47c9.4 0 17-7.6 17-17S39.4 13 30 13zm8.4 23.3c-.4 1-2.1 1.9-2.9 2-.8.1-1.5.4-5-1-4.2-1.7-6.9-6-7.1-6.3-.2-.3-1.7-2.3-1.7-4.3s1.1-3 1.5-3.4c.4-.4.8-.5 1.1-.5h.8c.3 0 .6.1.9.7.3.7 1.1 2.6 1.2 2.8.1.2.1.4 0 .7-.1.2-.2.4-.4.7-.2.2-.4.5-.5.7-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.5 1.3 1.2 2.5 1.6 2.8 1.8.4.2.6.1.8-.1.2-.3.9-1 1.2-1.4.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.4.4.2.7.3.8.5.1.3.1 1.4-.3 2.4z" fill="white"/>
      </svg>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 12px rgba(37,211,102,0.4));
          border-radius: 50%;
        }
        .whatsapp-float:hover { transform: scale(1.1) translateY(-5px); filter: drop-shadow(0 6px 16px rgba(37,211,102,0.55)); }
        .whatsapp-float svg { width: 100%; height: 100%; }
        @media (max-width: 768px) { .whatsapp-float { bottom: 20px; right: 20px; width: 56px; height: 56px; } }
      `}</style>
    </a>
  );
}
