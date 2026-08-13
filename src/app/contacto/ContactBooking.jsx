'use client';

const BOOKING_URL = 'https://outlook.office.com/book/Sesiones@vinculatumente.com/?ismsaljsauthenabled';

export default function ContactBooking() {
  return (
    <section id="reservar" className="booking-section">
      <div className="container">
        <div className="booking-head">
          <span className="eyebrow eyebrow-section">
            <span className="eyebrow-line" />
            <span className="eyebrow-ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </span>
            Reserva online
          </span>
          <h2 className="booking-title">Elige tu día y hora</h2>
          <p className="booking-desc">
            Reserva tu cita directamente desde aquí, sin esperas. Elige el hueco que mejor te venga y recibirás la confirmación al momento.
          </p>
        </div>

        <div className="booking-frame-wrap">
          <iframe
            src={BOOKING_URL}
            title="Reservar cita — Vincula Tu Mente"
            className="booking-frame"
            loading="lazy"
          />
        </div>

        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="booking-fallback">
          ¿No carga bien? Ábrelo en una pestaña nueva →
        </a>
      </div>

      <style jsx>{`
        .booking-section {
          padding: 90px 5%;
          background: var(--off-white);
        }
        .booking-head {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 40px;
        }
        .booking-title {
          font-family: var(--font-playfair), serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--text);
          margin: 14px 0 14px;
        }
        .booking-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0;
        }
        .booking-frame-wrap {
          /* Microsoft Bookings no tiene un modo de escritorio ancho: su
             contenido se queda centrado en ~640px pase lo que pase con el
             ancho del iframe. Ajustamos el contenedor a ese ancho real para
             que no queden huecos vacíos a los lados. */
          max-width: 640px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #eadce6;
          box-shadow: 0 10px 40px rgba(26, 20, 22, 0.06);
          background: #fff;
        }
        .booking-frame {
          width: 100%;
          height: 850px;
          border: none;
          display: block;
        }
        .booking-fallback {
          display: block;
          text-align: center;
          margin: 20px auto 0;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
        }
        .booking-fallback:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .booking-section { padding: 60px 5%; }
          .booking-frame { height: 680px; }
        }
      `}</style>
    </section>
  );
}
