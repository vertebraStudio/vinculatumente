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
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: mayo de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. ¿Qué son las Cookies?">
                <p>Una cookie es un fichero que se descarga en tu dispositivo (ordenador, smartphone o tablet) al acceder a determinadas páginas web. Permiten a un sitio web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan, pueden utilizarse para reconocer al usuario.</p>
              </LegalSection>

              <LegalSection title="2. Tipos de Cookies que Utilizamos">
                <p>Este sitio web utiliza únicamente cookies técnicas indispensables para su funcionamiento y cookies de terceros asociadas a herramientas integradas voluntariamente por el usuario:</p>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', margin: '24px 0 12px' }}>2.1 Cookies Técnicas (Estrictamente necesarias)</h3>
                <p>Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen (como identificar la sesión o recordar el estado del consentimiento de privacidad). Estas cookies no requieren el consentimiento del usuario (art. 22.2 LSSI-CE) ya que sin ellas la web no funcionaría.</p>
                <ul>
                  <li><strong>Sesión de navegación</strong> (Propia / Sesión): Permite la correcta navegación por el sitio web.</li>
                  <li><strong>Preferencias de consentimiento</strong> (Propia / 1 año): Almacena tu respuesta ante el aviso de privacidad y configuración de cookies.</li>
                </ul>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', margin: '24px 0 12px' }}>2.2 Cookies de Terceros (Opcionales)</h3>
                <p>Este sitio web no utiliza cookies propias de análisis estadístico ni de publicidad. Sin embargo, integra una herramienta externa de terceros:</p>
                <ul>
                  <li><strong>Google Maps</strong> (Geolocalización y preferencias): Para facilitar la localización física de la dirección profesional, el sitio web incrusta el mapa interactivo de Google Maps. Esta herramienta de terceros puede descargar cookies en tu navegador para recordar tus preferencias de mapas, estadísticas de uso e identificar tu cuenta de Google si tienes la sesión iniciada en ese navegador.</li>
                  <li><strong>Redes Sociales</strong>: La web incluye enlaces a perfiles externos (como Instagram). El mero hecho de visitar esta landing no instala cookies de dichas plataformas; solo se aplicará su propia política de cookies si decides hacer clic en el enlace y ser redirigido a ellas.</li>
                </ul>
                <p>El uso de las cookies de Google está sujeto a la política de privacidad de Google, disponible en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</p>
              </LegalSection>

              <LegalSection title="3. Cómo Gestionar, Bloquear o Desactivar las Cookies">
                <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo en cualquier momento mediante la configuración de las opciones del navegador que utilices. A continuación, te facilitamos los enlaces oficiales de soporte de los principales navegadores:</p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari (Mac)</a></li>
                  <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
                <p>Ten en cuenta que si bloqueas las cookies de terceros (Google Maps), el mapa interactivo dejará de mostrarse o de funcionar correctamente dentro de la web.</p>
              </LegalSection>

              <LegalSection title="4. Consentimiento y Panel de Configuración">
                <p>Al acceder a este sitio web, se te muestra un aviso informativo (banner) sobre el uso de cookies. Tienes la opción de "Aceptar todas" para permitir la carga del mapa interactivo, o "Rechazar" (o configurar) para navegar de forma 100% limpia sin que se active la herramienta de Google. Tu elección se guardará durante un periodo máximo de 12 meses.</p>
                <p>Puedes retirar o modificar tu consentimiento en cualquier momento eliminando las cookies de tu navegador o volviendo a desplegar el panel de configuración de la web.</p>
              </LegalSection>

              <LegalSection title="5. Actualización de la Política">
                <p>El titular puede modificar esta Política de Cookies en función de exigencias legislativas o para adaptarla a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD). Para cualquier duda, puedes contactar en <a href="mailto:vinculatumente@gmail.com">vinculatumente@gmail.com</a>.</p>
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
