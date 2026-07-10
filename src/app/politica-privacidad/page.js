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
            <h1 style={{ fontSize: '2.5rem', fontFamily: "var(--font-playfair), serif", color: 'var(--text)', marginTop: '10px', marginBottom: '10px' }}>Política de Privacidad</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: julio de 2026</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>

              <LegalSection title="1. Responsable del Tratamiento">
                <p>De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de que el responsable del tratamiento de los datos personales recabados a través de este sitio web es:</p>
                <LegalTable rows={[
                  ["Responsable", "María Villalba López"],
                  ["N.I.F.", "41618060C"],
                  ["Nº Colegiada", "M-43581 — Colegio Oficial de Psicólogos de Madrid"],
                  ["Domicilio profesional", "Calle Senda de la Cultura, 7 – 1B, 28806, Alcalá de Henares (Madrid)"],
                  ["Correo electrónico", "info@vinculatumente.com"],
                  ["Teléfono", "+34 667 236 523"],
                  ["DPD (Delegado de Protección de Datos)", "Dataibéricalex S.L. — Avenida Primero de Mayo 38, 9, 46017, Valencia — dpo@dataiberica.com"],
                ]} />
                <p>MARÍA VILLALBA LÓPEZ ha designado voluntariamente como Delegado de Protección de Datos (DPD) a DATAIBÉRICALEX S.L., en atención a que su actividad implica el tratamiento de datos de salud de categoría especial (Art. 9 RGPD), con el fin de reforzar las garantías de protección de datos de sus pacientes.</p>
              </LegalSection>

              <LegalSection title="2. Finalidades del Tratamiento, Base Jurídica y Plazos de Conservación">
                <p>A través del Sitio Web www.vinculatumente.es no se recaban datos personales mediante formularios propios. El contacto con la psicóloga se produce exclusivamente por las siguientes vías, que implican el tratamiento de los datos facilitados voluntariamente por el usuario:</p>
                <DataTable
                  headers={["Finalidad", "Base jurídica", "Plazo de conservación"]}
                  rows={[
                    [
                      "Atención de consultas y solicitudes de información enviadas por correo electrónico (info@vinculatumente.com) o mediante el enlace de WhatsApp del Sitio Web",
                      "Art. 6.1.f) RGPD: interés legítimo del responsable en dar respuesta a las comunicaciones recibidas. Art. 6.1.a) RGPD: consentimiento del interesado al iniciar el contacto.",
                      "Hasta la resolución de la consulta. Si el contacto deriva en una relación profesional, los datos se incorporan al expediente clínico según los plazos del tratamiento 4.1 del RAT (mínimo 5 años, Ley 41/2002).",
                    ],
                    [
                      "Gestión de citas y agenda a través de Doctoralia (enlace externo desde el Sitio Web)",
                      "Art. 6.1.b) RGPD: ejecución de medidas precontractuales y del contrato de prestación de servicios. La gestión de datos en Doctoralia se rige por la política de privacidad de Doctoralia Internet S.L.",
                      "Durante la vigencia de la relación profesional y los plazos legales aplicables.",
                    ],
                    [
                      "Gestión de datos de tráfico web (dirección IP, datos de navegación) por parte de Vercel Inc. como proveedor de hosting — sin acceso de la responsable a estos datos",
                      "Art. 6.1.f) RGPD: interés legítimo del proveedor de hosting en la seguridad y el funcionamiento del servicio.",
                      "Conforme a la política de retención de Vercel Inc. (vercel.com/legal/privacy-policy). La responsable no almacena logs de acceso propios.",
                    ],
                  ]}
                />
                <p>MARÍA VILLALBA LÓPEZ no realiza elaboración de perfiles automatizada ni toma de decisiones automatizadas que produzcan efectos jurídicos significativos sobre el usuario. El Sitio Web no dispone de formularios de contacto que almacenen datos en bases de datos propias, ni utiliza herramientas de analítica web activas.</p>
              </LegalSection>

              <LegalSection title="3. Destinatarios y Encargados del Tratamiento">
                <p>Los datos personales facilitados a través del Sitio Web podrán ser comunicados a los siguientes destinatarios en función de la finalidad del tratamiento:</p>
                <ol>
                  <li>Vercel Inc. (EE.UU.) — encargado del tratamiento: proveedor de hosting del Sitio Web. Accede exclusivamente a los datos de tráfico web (logs) necesarios para el funcionamiento y la seguridad del servicio.</li>
                  <li>Meta Platforms Ireland Ltd. (WhatsApp) — cuando el usuario utiliza el botón de WhatsApp del Sitio Web para iniciar contacto, el tratamiento de los datos en la aplicación WhatsApp se rige por la política de privacidad de Meta Platforms Ireland Ltd.</li>
                  <li>Doctoralia Internet S.L. — cuando el usuario accede a la plataforma de citas a través del enlace del Sitio Web. Doctoralia actúa como responsable independiente conforme a su propia política de privacidad.</li>
                  <li>DATAIBÉRICALEX S.L. — DPD y consultora de protección de datos. Puede acceder a los datos en el ejercicio de sus funciones como DPD.</li>
                </ol>
                <p>Los datos personales no se venden, alquilan ni ceden a terceros con fines comerciales o publicitarios.</p>
              </LegalSection>

              <LegalSection title="4. Transferencias Internacionales de Datos">
                <p>Algunos proveedores utilizados por el Sitio Web tienen sede en países fuera del Espacio Económico Europeo (EEE), lo que implica transferencias internacionales de datos:</p>
                <ol>
                  <li>Vercel Inc. (EE.UU.): proveedor de hosting. La transferencia está amparada en el Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework, DPF — Decisión de Adecuación de la Comisión Europea de 10 de julio de 2023) y en Cláusulas Contractuales Tipo (CCT). El DPA de Vercel está disponible en vercel.com/legal/dpa.</li>
                  <li>Meta Platforms Ireland Ltd. / WhatsApp (EE.UU.): si el usuario utiliza el enlace de WhatsApp del Sitio Web, el tratamiento de datos por parte de Meta se ampara en el DPF UE-EE.UU. y Cláusulas Contractuales Tipo. Meta actúa como responsable independiente.</li>
                </ol>
                <p>No se realizan otras transferencias internacionales de datos a través del Sitio Web.</p>
              </LegalSection>

              <LegalSection title="5. Derechos de los Interesados">
                <p>En cualquier momento puede ejercer los siguientes derechos reconocidos por el RGPD y la LOPDGDD:</p>
                <ol>
                  <li><strong>Derecho de acceso</strong>: conocer qué datos personales tratamos sobre usted.</li>
                  <li><strong>Derecho de rectificación</strong>: solicitar la corrección de datos inexactos o incompletos.</li>
                  <li><strong>Derecho de supresión</strong> («derecho al olvido»): solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos.</li>
                  <li><strong>Derecho a la limitación del tratamiento</strong>: solicitar que el tratamiento de sus datos quede restringido en determinadas circunstancias.</li>
                  <li><strong>Derecho de oposición</strong>: oponerse al tratamiento basado en el interés legítimo del responsable.</li>
                  <li><strong>Derecho a la portabilidad</strong>: recibir sus datos en formato estructurado cuando el tratamiento se base en el consentimiento o en un contrato.</li>
                  <li><strong>Derecho a retirar el consentimiento</strong>: cuando el tratamiento se base en el consentimiento, tiene derecho a retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo.</li>
                </ol>
                <p>Para ejercer cualquiera de estos derechos, envíe una solicitud escrita acreditando su identidad a: <a href="mailto:info@vinculatumente.com">info@vinculatumente.com</a> o a la dirección postal: Calle Senda de la Cultura, 7 – 1B, 28806, Alcalá de Henares (Madrid). Recibirá respuesta en el plazo máximo de un mes, prorrogable por dos meses adicionales si la complejidad lo justifica.</p>
              </LegalSection>

              <LegalSection title="6. Derecho a Presentar Reclamación ante la AEPD">
                <p>Si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), autoridad de control competente en España: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a> — C/ Jorge Juan, 6, 28001 Madrid.</p>
                <p>Con carácter previo, puede contactar con la Delegada de Protección de Datos para intentar resolver cualquier duda o incidencia: Dataibéricalex S.L. — Avenida Primero de Mayo 38, 9, 46017, Valencia — <a href="mailto:dpo@dataiberica.com">dpo@dataiberica.com</a>.</p>
              </LegalSection>

              <LegalSection title="7. Menores de Edad">
                <p>MARÍA VILLALBA LÓPEZ presta servicios psicológicos tanto a adultos como a menores de edad (a través de sus representantes legales). En el caso de que el contacto inicial a través del Sitio Web sea iniciado por un menor de edad sin la supervisión de sus progenitores o tutores legales, se solicitará la acreditación de la representación legal antes de continuar cualquier tratamiento.</p>
                <p>Los datos de menores de edad recabados en el marco de la relación profesional se tratan con las garantías reforzadas establecidas en el RAT de MARÍA VILLALBA LÓPEZ para el tratamiento 4.1 (Historia Clínica).</p>
              </LegalSection>

              <LegalSection title="8. Actualización de la Política de Privacidad">
                <p>MARÍA VILLALBA LÓPEZ se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, resoluciones de la AEPD o cambios en los servicios del Sitio Web. En caso de cambios sustanciales, se publicará un aviso en el Sitio Web y, cuando corresponda, se solicitará nuevamente el consentimiento. La fecha de la última actualización figura en el encabezado de este documento.</p>
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

function DataTable({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', marginTop: '16px', marginBottom: '16px' }}>
      <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse' }}>
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
