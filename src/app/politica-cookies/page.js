import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Cookies | Vincula Tu Mente | María Villalba",
  description: "Política de cookies del sitio web de María Villalba (Vincula Tu Mente), psicóloga y sexóloga. Información sobre los tipos de cookies utilizadas y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <>
      <Header solid={true} />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>

        <section className="legal-section-header">
          <div className="container">
            <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</span>
            <h1 style={{ fontSize: '2.5rem', fontFamily: "var(--font-playfair), serif", color: 'var(--text)', marginTop: '10px', marginBottom: '10px' }}>Política de Cookies</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: julio de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. ¿Qué son las Cookies?">
                <p>Las cookies son pequeños archivos de texto que un sitio web almacena en el dispositivo del usuario cuando este lo visita. Se utilizan habitualmente para recordar preferencias, analizar el comportamiento de navegación, identificar sesiones de usuario y personalizar contenidos.</p>
                <p>El uso de cookies está regulado en España por el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), en su redacción conforme a la Ley 9/2014, y en el Reglamento (UE) 2016/679 (RGPD). La Agencia Española de Protección de Datos (AEPD) ha publicado una Guía sobre el uso de las cookies (última actualización: enero de 2024) que establece los criterios de cumplimiento aplicables.</p>
              </LegalSection>

              <LegalSection title="2. Cookies en www.vinculatumente.es">
                <p>El sitio web www.vinculatumente.es ha sido diseñado con un enfoque de privacidad por defecto («privacy by design»). Como resultado de una auditoría técnica realizada mediante las herramientas de desarrollo del navegador (DevTools → Application → Cookies y Network → Third Party), se ha verificado lo siguiente:</p>
                <LegalTable rows={[
                  ["✅ Cero cookies propias depositadas", "Ni antes ni después de interactuar con el sitio web."],
                  ["✅ Cero peticiones a terceros detectadas", "No se cargan recursos externos de analítica, publicidad ni redes sociales en la navegación estándar."],
                  ["✅ El CMP bloquea correctamente", "El gestor de consentimiento (banner de cookies) bloquea correctamente antes del consentimiento del usuario."],
                ]} />
                <p>En consecuencia, el sitio web www.vinculatumente.es <strong>no utiliza cookies propias ni de terceros que requieran el consentimiento del usuario</strong> conforme a la LSSI-CE y el RGPD.</p>
              </LegalSection>

              <LegalSection title="3. Cookies Estrictamente Necesarias">
                <p>El único tipo de cookie que podría estar presente en el Sitio Web son las cookies técnicas o estrictamente necesarias, que no requieren consentimiento del usuario por ser imprescindibles para el correcto funcionamiento del servicio, conforme a lo dispuesto en el artículo 22.2 LSSI-CE y las directrices de la AEPD.</p>
                <p>En la actualidad, Vercel Inc. (proveedor de hosting del Sitio Web) puede establecer cookies de sesión estrictamente técnicas para garantizar el correcto funcionamiento y la seguridad del servicio. Estas cookies no identifican al usuario ni permiten seguimiento alguno.</p>
                <CookieTable
                  headers={["Nombre / Origen", "Tipo", "Titular", "Finalidad", "Duración"]}
                  rows={[
                    ["_vercel_*", "Técnica / Necesaria", "Vercel Inc.", "Correcto funcionamiento y seguridad del hosting web.", "Sesión"],
                  ]}
                />
              </LegalSection>

              <LegalSection title="4. Cookies que este Sitio Web NO Utiliza">
                <p>A diferencia de otros sitios web, www.vinculatumente.es no utiliza:</p>
                <ol>
                  <li>Cookies analíticas o de medición (p. ej. Google Analytics, Matomo): no están instaladas ni activas. El banner de cookies no debe hacer referencia a cookies de medición mientras esta situación se mantenga.</li>
                  <li>Cookies de personalización o preferencias del usuario.</li>
                  <li>Cookies publicitarias o de seguimiento de terceros.</li>
                  <li>Píxeles de seguimiento de redes sociales (Facebook Pixel, TikTok Pixel, etc.).</li>
                  <li>Recursos externos del widget de WhatsApp: el botón de WhatsApp visible en el Sitio Web no carga recursos externos de Meta antes ni después de la interacción del usuario.</li>
                </ol>
                <p>Si en el futuro se implementaran herramientas de analítica u otras cookies que requieran consentimiento, esta Política de Cookies se actualizará de forma previa a su activación y se solicitará el consentimiento expreso del usuario mediante el gestor de consentimiento (CMP).</p>
              </LegalSection>

              <LegalSection title="5. Cómo Gestionar y Desactivar las Cookies">
                <p>El usuario puede gestionar, bloquear o eliminar las cookies desde la configuración de su navegador. A continuación se indican los enlaces de ayuda de los principales navegadores:</p>
                <ol>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ol>
                <p>La desactivación de las cookies estrictamente necesarias podría afectar al correcto funcionamiento del Sitio Web. La desactivación de cookies de terceros no afectará a la funcionalidad del Sitio Web en su estado actual.</p>
              </LegalSection>

              <LegalSection title="6. Actualización de la Política de Cookies">
                <p>MARÍA VILLALBA LÓPEZ se reserva el derecho a modificar la presente Política de Cookies para adaptarla a cambios técnicos en el Sitio Web, nuevas directrices de la AEPD o modificaciones legislativas. Cualquier cambio significativo en el uso de cookies que requiera consentimiento se comunicará al usuario con carácter previo a su implementación, solicitando nuevamente el consentimiento cuando sea necesario.</p>
                <p>Para cualquier consulta relativa al uso de cookies en www.vinculatumente.es, puede contactar con nosotros en <a href="mailto:info@vinculatumente.com">info@vinculatumente.com</a> o con la Delegada de Protección de Datos: Dataibéricalex S.L. — <a href="mailto:dpo@dataiberica.com">dpo@dataiberica.com</a>.</p>
              </LegalSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>{title}</h2>
      {children}
    </div>
  );
}

function LegalTable({ rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', marginBottom: '16px' }}>
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
            <td style={{ padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', width: '40%', verticalAlign: 'top' }}>{label}</td>
            <td style={{ padding: '10px 0', color: 'var(--text-muted)', fontSize: '0.9rem', verticalAlign: 'top' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CookieTable({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', marginTop: '16px', marginBottom: '16px' }}>
      <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ textAlign: 'left', padding: '10px 14px', fontSize: '0.8rem', fontWeight: 700, color: '#fff', backgroundColor: 'var(--accent)', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '10px 14px', color: 'var(--text-muted)', fontSize: '0.85rem', verticalAlign: 'top' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
