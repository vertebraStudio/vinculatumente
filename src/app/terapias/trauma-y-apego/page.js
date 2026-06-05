import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TherapyHero from "@/components/TherapyHero";
import TherapyBody from "@/components/TherapyBody";

export const metadata = {
  title: "Trauma y apego · EMDR | Vincula Tu Mente | Alcalá de Henares",
  description: "Terapia de trauma y apego con EMDR en Alcalá de Henares y online. Sana heridas, regula tus emociones y construye apegos seguros con María Villalba.",
};

const senales = [
  "Arrastras experiencias dolorosas del pasado que siguen afectando a tu presente.",
  "Sientes emociones intensas que te cuesta regular o entender.",
  "Tienes recuerdos, pensamientos o sensaciones que vuelven una y otra vez.",
  "Te cuesta confiar, sentirte seguro o seguir en tus vínculos.",
  "Has vivido situaciones de pérdida, violencia o ruptura difíciles de elaborar.",
  "Quieres sanar de raíz, no solo gestionar los síntomas.",
];

const herramientas = [
  "Terapia EMDR (Niveles I y II) para el procesamiento del trauma.",
  "Regulación emocional y del sistema nervioso.",
  "Trabajo con el apego y los vínculos significativos.",
  "Recursos de seguridad, estabilización y autocuidado.",
  "Acompañamiento en duelo, violencia y experiencias adversas.",
];

export default function TraumaApegoPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">
        <TherapyHero
          category="TRAUMA Y APEGO · EMDR"
          title="Sanar heridas,"
          titleEm="construir apegos seguros"
          desc="Un trabajo especializado y respetuoso para procesar el dolor del pasado, regular tus emociones y reconstruir una sensación de seguridad contigo y con los demás."
          photo="/media/imagenDeprueba3.jpg"
          phIcon="◎"
          phLabel="Foto · Trauma y apego"
          phDesc="Imagen serena y simbólica sobre calma y sanación. Formato horizontal."
        />
        <TherapyBody
          introTitle="Lo que duele también se puede sanar"
          introParas={[
            "El trauma no es solo lo que nos pasó, sino la huella que dejó en cómo sentimos y nos relacionamos. Con un acompañamiento cuidado y a tu ritmo, esas heridas pueden integrarse y dejar de condicionar tu presente.",
            "Trabajo desde la terapia EMDR y un enfoque centrado en el apego, creando un espacio seguro donde reconstruir la confianza, contigo y con quienes te rodean.",
          ]}
          senales={senales}
          herramientas={herramientas}
        />
      </main>
      <Footer />
    </>
  );
}
