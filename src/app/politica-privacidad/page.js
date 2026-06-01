import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | Vincula Tu Mente | María Villalba",
  description: "Política de privacidad del sitio web de María Villalba (Vincula Tu Mente), psicóloga y sexóloga. Información sobre el tratamiento de tus datos personales conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Header solid={true} />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>

        <section className="legal-section-header">
          <div className="container">
            <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</span>
            <h1 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", color: 'var(--text)', marginTop: '10px', marginBottom: '10px' }}>Política de Privacidad</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: mayo de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. Responsable del Tratamiento">
                <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), se informa de los siguientes datos del responsable del tratamiento:</p>
                <LegalTable rows={[
                  ["Titular / Responsable", "María Villalba López"],
                  ["Actividad", "Psicóloga General Sanitaria y Sexóloga"],
                  ["Nº de Colegiada", "M-43581 (Colegio Oficial de la Psicología de Madrid)"],
                  ["Ámbito de atención", "Alcalá de Henares (Madrid) y online en toda España"],
                  ["Email de contacto", "hola@vinculatumente.com"],
                  ["Teléfono", "+34 604 80 72 00"],
                ]} />
              </LegalSection>

              <LegalSection title="2. Datos que Recopilamos">
                <p>A través del formulario de contacto del sitio web, podemos recopilar los siguientes datos personales:</p>
                <ul>
                  <li><strong>Nombre y apellidos</strong>: para identificarte y dirigirnos a ti de forma personalizada.</li>
                  <li><strong>Dirección de correo electrónico</strong>: para poder responderte y gestionar la comunicación contigo.</li>
                  <li><strong>Número de teléfono</strong> (opcional): para facilitarte el contacto por vía telefónica si así lo prefieres.</li>
                  <li><strong>Mensaje libre</strong>: el contenido de tu consulta o solicitud de cita.</li>
                </ul>
                <p>No recopilamos datos sensibles de categoría especial (como datos de salud) a través del formulario web. Si en el mensaje incluyes información relativa a tu salud, esta se tratará con la máxima confidencialidad, bajo el secreto profesional propio de la práctica psicológica, tal y como establece el Código Deontológico del Psicólogo.</p>
              </LegalSection>

              <LegalSection title="3. Finalidad y Base Jurídica del Tratamiento">
                <p>Los datos personales que nos facilitas serán tratados con las siguientes finalidades y bases legales:</p>
                <ul>
                  <li><strong>Gestión de consultas y solicitudes de cita</strong> (base legal: consentimiento del interesado al enviar el formulario; artículo 6.1.a del RGPD).</li>
                  <li><strong>Comunicación con el usuario</strong> para responder a sus mensajes y resolver dudas (base legal: aplicación de medidas precontractuales o interés legítimo; artículo 6.1.b / 6.1.f del RGPD).</li>
                  <li><strong>Prestación de servicios de asistencia sanitaria (terapia psicológica)</strong>, si se formaliza una relación terapéutica. En este supuesto:
                    <ul>
                      <li>Para datos personales identificativos, la base legal es la <strong>ejecución de un contrato de prestación de servicios</strong> (artículo 6.1.b del RGPD).</li>
                      <li>Para datos relativos a la salud, la base es la <strong>prestación de asistencia o tratamiento sanitario</strong> sobre la base del derecho de la Unión o de los Estados miembros, y bajo la responsabilidad de un profesional sujeto a la obligación de secreto profesional (artículo 9.2.h del RGPD, en relación con la Ley 41/2002 de Autonomía del Paciente).</li>
                    </ul>
                  </li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Conservación de los Datos">
                <p>Los datos personales se conservarán durante el tiempo necesario para atender tu consulta y, en caso de relación terapéutica, durante el tiempo que establezca la normativa aplicable en materia de documentación clínica (Ley 41/2002, de Autonomía del Paciente), con un mínimo de 5 años desde la última intervención.</p>
                <p>Una vez finalizada la relación y vencidos los plazos legales de conservación, los datos serán suprimidos de forma segura.</p>
              </LegalSection>

              <LegalSection title="5. Destinatarios de los Datos">
                <p>Los datos personales no serán cedidos ni comunicados a terceros, salvo en los siguientes casos:</p>
                <ul>
                  <li>Cuando exista una obligación legal que lo requiera.</li>
                  <li>Proveedores de servicios tecnológicos necesarios para el funcionamiento del sitio web (ej. servicio de alojamiento web), con quienes se suscribirán los correspondientes contratos de encargado del tratamiento.</li>
                </ul>
                <p>En ningún caso se venderán, alquilarán ni cederán tus datos personales a terceros con fines comerciales.</p>
              </LegalSection>

              <LegalSection title="6. Tus Derechos">
                <p>En virtud del RGPD y la LOPDGDD, tienes derecho a:</p>
                <ul>
                  <li><strong>Acceso</strong>: obtener confirmación sobre si se están tratando tus datos y acceder a ellos.</li>
                  <li><strong>Rectificación</strong>: solicitar la corrección de datos inexactos o incompletos.</li>
                  <li><strong>Supresión</strong> ("derecho al olvido"): solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                  <li><strong>Oposición</strong>: oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
                  <li><strong>Limitación del tratamiento</strong>: solicitar que se restrinja el tratamiento de tus datos.</li>
                  <li><strong>Portabilidad</strong>: recibir tus datos en un formato estructurado y de uso común.</li>
                  <li><strong>Retirar el consentimiento</strong>: en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
                </ul>
                <p>Para ejercer cualquiera de estos derechos, puedes dirigirte por escrito al correo electrónico <a href="mailto:hola@vinculatumente.com">hola@vinculatumente.com</a>. En cumplimiento de las directrices actuales de la Agencia Española de Protección de Datos (AEPD), no es obligatorio adjuntar sistemáticamente una copia de tu DNI; únicamente te solicitaremos aportar una prueba de identidad (como una copia de tu DNI o equivalente) si existieran dudas razonables sobre tu identidad para poder verificarla de forma segura.</p>
                <p>Asimismo, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a> si consideras que el tratamiento de tus datos infringe la normativa vigente.</p>
              </LegalSection>

              <LegalSection title="7. Confidencialidad y Secreto Profesional">
                <p>Como profesional sanitario/a colegiado/a, el/la titular está sujeto al secreto profesional establecido en el Código Deontológico del Psicólogo y en la Ley de Autonomía del Paciente. Toda la información compartida en el contexto de la relación terapéutica es estrictamente confidencial y no podrá ser divulgada sin el consentimiento expreso del paciente, salvo en los supuestos legalmente establecidos.</p>
              </LegalSection>

              <LegalSection title="8. Seguridad de los Datos">
                <p>El responsable del tratamiento adopta las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, de conformidad con el artículo 32 del RGPD, con el fin de evitar el acceso no autorizado, la pérdida, alteración o revelación no autorizada de los datos personales.</p>
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
            <td style={{ padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', width: '42%', verticalAlign: 'top' }}>{label}</td>
            <td style={{ padding: '10px 0', color: 'var(--text-muted)', fontSize: '0.9rem', verticalAlign: 'top' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
