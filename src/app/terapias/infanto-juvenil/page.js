import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TherapyHero from "@/components/TherapyHero";
import TherapyBody from "@/components/TherapyBody";

export const metadata = {
  title: "Psicología infanto-juvenil | Vincula Tu Mente | Alcalá de Henares",
  description: "Psicología infantil y juvenil en Alcalá de Henares y online. Apoyo emocional y terapéutico para niñas, niños y adolescentes con María Villalba.",
};

const senales = [
  "Tu hijo o hija muestra cambios de humor, irritabilidad o tristeza frecuentes.",
  "Tiene dificultades para gestionar sus emociones, miedos o rabietas.",
  "Está atravesando un cambio importante: separación, duelo, mudanza o nueva etapa escolar.",
  "Notas problemas de autoestima, relaciones o adaptación en el colegio o instituto.",
  "Como familia, buscáis orientación y herramientas para acompañarle mejor.",
  "Quieres un espacio seguro donde tu adolescente pueda expresarse sin sentirse juzgado.",
];

const herramientas = [
  "Evaluación e intervención adaptada a cada etapa del desarrollo.",
  "Educación y regulación emocional con recursos lúdicos y prácticos.",
  "Acompañamiento en autoestima, habilidades sociales y relaciones.",
  "Orientación y pautas para madres, padres y familias.",
  "Prevención y abordaje del acoso escolar y las autolesiones.",
];

export default function InfantoJuvenilPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">
        <TherapyHero
          category="PSICOLOGÍA INFANTO-JUVENIL"
          title="Acompañamiento para"
          titleEm="niñas, niños y adolescentes"
          desc="Apoyo emocional y terapéutico para acompañar a los más jóvenes en su desarrollo y bienestar, con cercanía, juego y herramientas adaptadas a cada edad."
          photo="/media/infantoHeader.jpg"
          phIcon="✦"
          phLabel="Foto · Infanto-juvenil"
          phDesc="Imagen de infancia/adolescencia, sin rostro identificable. Formato horizontal."
        />
        <TherapyBody
          introTitle="Crecer con apoyo y seguridad"
          introParas={[
            "La infancia y la adolescencia están llenas de cambios que no siempre son fáciles de transitar. Un espacio terapéutico cuidado ayuda a niñas, niños y jóvenes a entender lo que sienten y a desarrollar recursos para su día a día.",
            "Trabajo con un enfoque cercano y respetuoso, integrando a la familia en el proceso para que el acompañamiento continúe también en casa.",
          ]}
          senales={senales}
          herramientas={herramientas}
        />
      </main>
      <Footer />
    </>
  );
}
