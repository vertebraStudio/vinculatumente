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
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: mayo de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. Datos del Titular">
                <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
                <LegalTable rows={[
                  ["Titular", "María Villalba López"],
                  ["Actividad", "Psicóloga y Sexóloga"],
                  ["Nº de Colegiada", "M-43581 (Colegio Oficial de la Psicología de Madrid)"],
                  ["Ámbito de atención", "Alcalá de Henares (Madrid) y terapia online en toda España"],
                  ["Teléfono", "+34 604 80 72 00"],
                  ["Email", "info@vinculatumente.com"],
                  ["Sitio web", "https://vinculatumente.es"],
                ]} />
                <p style={{ marginTop: '16px', fontSize: '0.92rem', fontStyle: 'italic' }}>
                  Como profesional que ejerce una actividad regulada y colegiada en España, el/la titular se rige por las normas profesionales vigentes en el <strong>Código Deontológico del Psicólogo</strong>, emitido por el Consejo General de la Psicología de España, accesible de manera pública y gratuita a través de la web institucional del colegio oficial correspondiente.
                </p>
              </LegalSection>

              <LegalSection title="2. Objeto y Ámbito de Aplicación">
                <p>El presente Aviso Legal regula el acceso y uso del sitio web, así como los contenidos, productos y servicios publicados en él. El acceso al sitio web implica la aceptación plena y sin reservas de todos los términos y condiciones establecidos en el presente Aviso Legal.</p>
                <p>El titular se reserva el derecho a modificar en cualquier momento el contenido de este sitio web, sin previo aviso, por lo que se recomienda al usuario su revisión periódica.</p>
              </LegalSection>

              <LegalSection title="3. Condiciones de Uso">
                <p>El usuario se compromete a utilizar el sitio web y los servicios de conformidad con la ley, el presente Aviso Legal, la moral, las buenas costumbres y el orden público. Con carácter enunciativo y no limitativo, el usuario deberá abstenerse de:</p>
                <ul>
                  <li>Reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular.</li>
                  <li>Suprimir, manipular o de cualquier forma alterar el copyright y demás datos identificativos del titular.</li>
                  <li>Utilizar los contenidos y los servicios del sitio web con fines o efectos ilícitos.</li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Propiedad Intelectual e Industrial">
                <p>Todos los contenidos del sitio web (textos, imágenes, fotografías, gráficos, logotipos, iconos, software, etc.) son propiedad del titular o de terceros que han autorizado su uso, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.</p>
                <p>Queda expresamente prohibida la reproducción total o parcial de los contenidos de este sitio web sin la autorización expresa y por escrito del titular.</p>
              </LegalSection>

              <LegalSection title="5. Responsabilidad">
                <p>El titular no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web. Tampoco se responsabiliza por:</p>
                <ul>
                  <li>La interrupción del funcionamiento del sitio web o la falta de disponibilidad del mismo.</li>
                  <li>Los virus u otros elementos en los contenidos que puedan causar alteraciones en los sistemas informáticos de los usuarios.</li>
                  <li>El incumplimiento de las leyes, la falta de honestidad, la mala fe, los usos y los hábitos perniciosos por parte de terceros.</li>
                </ul>
              </LegalSection>

              <LegalSection title="6. Legislación Aplicable y Jurisdicción">
                <p>La relación entre el titular y el usuario se regirá por la normativa española vigente.</p>
                <p>Para la resolución de cualquier conflicto derivado del acceso o uso del sitio web, en caso de que el usuario actúe con la condición de consumidor y usuario (paciente), las partes se someterán a la jurisdicción de los Juzgados y Tribunales del domicilio del consumidor. En caso contrario, o de no ostentar dicha condición legal de consumidor, las partes se someten, de mutuo acuerdo y con renuncia a cualquier otro fuero, a los Juzgados y Tribunales de la ciudad de Alcalá de Henares.</p>
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
