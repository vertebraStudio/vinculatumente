import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TherapyHero from "@/components/TherapyHero";
import TherapyBody from "@/components/TherapyBody";

export const metadata = {
  title: "Sexología | Vincula Tu Mente | Sexóloga en Alcalá de Henares",
  description: "Terapia sexológica en Alcalá de Henares y online. Sexualidad, deseo, placer, disfunciones, identidad y educación sexual desde el respeto, con María Villalba.",
};

const senales = [
  "Tienes dudas o malestar relacionados con tu sexualidad o tu deseo.",
  "Experimentas dificultades sexuales como dolor, anorgasmia o eyaculación precoz.",
  "Quieres mejorar la comunicación sexual y la intimidad en tu pareja.",
  "Buscas explorar tu identidad, orientación o expresión sin juicios.",
  "Sientes que arrastras mitos o culpa en torno al sexo.",
  "Deseas información rigurosa y un espacio seguro para hablar de sexualidad.",
];

const herramientas = [
  "Abordaje de deseo, placer y disfunciones sexuales.",
  "Terapia de pareja y comunicación sexual.",
  "Educación sexual rigurosa y libre de mitos.",
  "Acompañamiento desde la psicología afirmativa LGTBIQA+.",
  "Salud sexual: prevención, autoconocimiento y bienestar.",
];

export default function SexologiaPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">
        <TherapyHero
          category="SEXOLOGÍA"
          title="Vive tu sexualidad"
          titleEm="con libertad y sin juicios"
          desc="Un espacio para explorar tu sexualidad desde el respeto, el placer y la información. Hablar de sexo es hablar de salud, bienestar y de ti."
          phIcon="❀"
          phLabel="Foto · Sexología"
          phDesc="Imagen delicada y respetuosa sobre bienestar sexual. Formato horizontal."
        />
        <TherapyBody
          introTitle="Tu bienestar sexual también importa"
          introParas={[
            "La sexualidad forma parte de quienes somos, pero rara vez encontramos un lugar donde hablar de ella con libertad. Aquí puedes hacerlo: sin tabúes, sin culpa y con información rigurosa.",
            "Como sexóloga, te acompaño a comprender tu deseo, resolver dificultades y vivir tu sexualidad de forma plena, respetuosa y consciente, sea cual sea tu identidad u orientación.",
          ]}
          senales={senales}
          herramientas={herramientas}
        />
      </main>
      <Footer />
    </>
  );
}
