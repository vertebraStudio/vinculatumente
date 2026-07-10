import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso Legal | Vincula Tu Mente | María Villalba",
  description: "Aviso legal del sitio web de María Villalba (Vincula Tu Mente), psicóloga y sexóloga colegiada. Información sobre la titular, condiciones de uso y responsabilidades.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Header solid={true} />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>

        <section className="legal-section-header">
          <div className="container">
            <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</span>
            <h1 style={{ fontSize: '2.5rem', fontFamily: "var(--font-playfair), serif", color: 'var(--text)', marginTop: '10px', marginBottom: '10px' }}>Aviso Legal</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: julio de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. Datos Identificativos del Titular del Sitio Web">
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web www.vinculatumente.es es:</p>
                <LegalTable rows={[
                  ["Titular", "María Villalba López"],
                  ["N.I.F.", "41618060C"],
                  ["Número de colegiada", "M-43581 — Colegio Oficial de Psicólogos de Madrid"],
                  ["Domicilio profesional", "Calle Senda de la Cultura, 7 – 1B, 28806, Alcalá de Henares (Madrid)"],
                  ["Teléfono", "+34 667 236 523"],
                  ["Correo electrónico", "info@vinculatumente.com"],
                  ["Actividad profesional", "Psicología y Sexología"],
                  ["Plataforma web", "Web estática (Keystatic CMS) — Alojada en Vercel Inc."],
                  ["DPD / Consultora RGPD", "Dataibéricalex S.L. — dpo@dataiberica.com"],
                ]} />
              </LegalSection>

              <LegalSection title="2. Objeto y Ámbito de Aplicación">
                <p>El presente Aviso Legal regula el acceso, la navegación y el uso del sitio web www.vinculatumente.es (en adelante, «el Sitio Web»), así como las responsabilidades derivadas de su utilización. El acceso al Sitio Web o su uso en cualquier forma implica la aceptación de las condiciones aquí establecidas.</p>
                <p>El Sitio Web tiene carácter exclusivamente informativo y profesional: presenta los servicios de psicología y sexología de MARÍA VILLALBA LÓPEZ, incluye un blog de contenido psicoeducativo y permite el contacto directo con la psicóloga mediante enlace de correo electrónico y botón de WhatsApp. No se realizan ventas online ni se gestionan transacciones económicas a través del Sitio Web.</p>
                <p>MARÍA VILLALBA LÓPEZ se reserva el derecho a modificar en cualquier momento el presente Aviso Legal, siendo responsabilidad del usuario su lectura periódica.</p>
              </LegalSection>

              <LegalSection title="3. Propiedad Intelectual e Industrial">
                <p>La totalidad de los contenidos del Sitio Web —incluyendo textos, artículos del blog, fotografías, gráficos, logotipos, el nombre comercial «Víncula Tu Mente» e imágenes— son propiedad de MARÍA VILLALBA LÓPEZ o de sus proveedores de contenidos, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial (Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, y Ley 17/2001, de 7 de diciembre, de Marcas).</p>
                <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquiera de los contenidos del Sitio Web sin la autorización expresa y por escrito de MARÍA VILLALBA LÓPEZ, salvo la visualización e impresión para uso estrictamente personal y privado del usuario.</p>
                <p>Los contenidos del blog psicoeducativo podrán compartirse en redes sociales siempre que se cite expresamente la fuente (Víncula Tu Mente — www.vinculatumente.es) y no se modifique el contenido original.</p>
              </LegalSection>

              <LegalSection title="4. Condiciones de Uso del Sitio Web">
                <p>El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal y las buenas costumbres, absteniéndose de:</p>
                <ol>
                  <li>Utilizar el Sitio Web con fines ilícitos, ilegales o contrarios a los derechos de terceros.</li>
                  <li>Intentar acceder, utilizar o manipular los sistemas informáticos del Sitio Web o de terceros.</li>
                  <li>Reproducir, copiar, distribuir o comunicar públicamente los contenidos del Sitio Web sin autorización.</li>
                  <li>Difundir contenidos falsos, engañosos, difamatorios o que atenten contra el honor y la intimidad de personas físicas, en particular de profesionales sanitarios.</li>
                  <li>Utilizar el Sitio Web para el envío de comunicaciones comerciales no solicitadas.</li>
                </ol>
              </LegalSection>

              <LegalSection title="5. Carácter Informativo del Contenido. Limitación de Responsabilidad Sanitaria">
                <p>Los contenidos publicados en el blog del Sitio Web tienen carácter exclusivamente divulgativo y psicoeducativo. En ningún caso constituyen diagnóstico clínico, tratamiento, consejo médico ni sustituto de la atención psicológica o sanitaria profesional e individualizada.</p>
                <p>MARÍA VILLALBA LÓPEZ no se responsabiliza de las decisiones que el usuario pueda tomar basándose en la información publicada en el blog. Ante cualquier duda de índole clínica o sanitaria, el usuario debe consultar con un profesional de la salud mental debidamente colegiado.</p>
                <p>MARÍA VILLALBA LÓPEZ no garantiza la disponibilidad o continuidad del Sitio Web y excluye, con el alcance permitido por el ordenamiento jurídico, cualquier responsabilidad por daños derivados de su uso o de la imposibilidad de acceso al mismo.</p>
              </LegalSection>

              <LegalSection title="6. Política de Enlaces">
                <p>El Sitio Web puede contener enlaces a sitios web de terceros (plataformas de citas Doctoralia, redes sociales Instagram y TikTok, etc.). MARÍA VILLALBA LÓPEZ no tiene control sobre dichos sitios ni se responsabiliza de sus contenidos, políticas de privacidad o prácticas. La inclusión de un enlace no implica recomendación ni asociación con el sitio enlazado.</p>
                <p>Cualquier persona que desee establecer un enlace hacia www.vinculatumente.es debe obtener autorización previa y por escrito de MARÍA VILLALBA LÓPEZ. El enlace solo podrá dirigirse a la página principal del Sitio Web.</p>
              </LegalSection>

              <LegalSection title="7. Protección de Datos de Carácter Personal">
                <p>El tratamiento de los datos personales de los usuarios del Sitio Web se rige por la Política de Privacidad publicada en www.vinculatumente.es, accesible desde el pie de página. El uso de cookies se regula en la Política de Cookies, igualmente accesible desde el pie de página. Ambos documentos forman parte integrante del presente Aviso Legal.</p>
                <p>MARÍA VILLALBA LÓPEZ ha designado voluntariamente como Delegado de Protección de Datos (DPD) a DATAIBÉRICALEX S.L., en atención a que su actividad implica el tratamiento de datos de salud de categoría especial (Art. 9 RGPD), con el fin de reforzar las garantías de protección de datos de sus pacientes: Dataibéricalex S.L. — dpo@dataiberica.com.</p>
              </LegalSection>

              <LegalSection title="8. Legislación Aplicable y Jurisdicción Competente">
                <p>El presente Aviso Legal se rige en su integridad por la legislación española. Las partes se someten, con renuncia expresa a cualquier otro fuero, a la jurisdicción de los Juzgados y Tribunales de Alcalá de Henares para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web.</p>
                <p>En el supuesto de que el usuario tenga la condición de consumidor, la elección de fuero no afectará a los derechos reconocidos por la normativa de consumidores y usuarios.</p>
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
