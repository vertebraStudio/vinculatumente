import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TherapyHero from "@/components/TherapyHero";
import TherapyBody from "@/components/TherapyBody";

export const metadata = {
  title: "Psicología para adolescentes y adultos | Vincula Tu Mente | Alcalá de Henares y Online",
  description: "Acompañamiento psicológico para adolescentes y adultos en Alcalá de Henares y online. Ansiedad, autoestima, duelo, burnout, relaciones y bienestar emocional. María Villalba, psicóloga colegiada.",
  alternates: { canonical: "https://vinculatumente.es/terapias/adultos" },
};

const senales = [
  "Sientes ansiedad, estrés o te cuesta gestionar tus emociones en el día a día.",
  "Tu autoestima está por los suelos o no sabes muy bien quién eres fuera de los roles que ocupas.",
  "Cargas con experiencias difíciles del pasado que siguen afectando tu presente.",
  "Tus relaciones afectivas o sexuales no son como te gustaría que fueran.",
  "Atraviesas un duelo, una separación o un cambio vital que no sabes cómo manejar.",
  "El trabajo te tiene agotadx emocionalmente y ya no encuentras energía para nada más.",
  "Quieres explorar tu identidad o tu orientación en un espacio seguro y sin juicios.",
  "Sientes que te falta algo, pero no consigues identificar qué es.",
];

const herramientas = [
  "Gestión emocional: identificar, nombrar y regular lo que sientes sin que te desborde.",
  "Autoestima y autoconocimiento: construir una relación más amable y honesta contigo.",
  "Procesamiento de experiencias difíciles y trabajo sobre el impacto del pasado.",
  "Habilidades relacionales: comunicación, límites y vínculos más conscientes.",
  "Acompañamiento en duelos, rupturas y transiciones vitales.",
  "Herramientas cognitivas y psicoeducativas adaptadas a tu ritmo y realidad.",
  "Enfoque afirmativo e inclusivo con la diversidad afectivo-sexual e identitaria.",
];

export default function AdultosPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">
        <TherapyHero
          category="ADOLESCENTES Y ADULTOS"
          title="Un espacio para ti,"
          titleEm="a tu ritmo"
          desc="En Vincula Tu Mente el trabajo con adolescentes y adultos se adapta a las necesidades emocionales, relacionales y personales de cada persona, desde un espacio seguro, cercano y basado en la evidencia."
          photo="/media/imagenDePrueba1.jpg"
          phIcon="✦"
          phLabel="Foto · Adolescentes y adultos"
          phDesc="Imagen cálida y cercana. Formato horizontal."
        />
        <TherapyBody
          introTitle="Adaptado a tu historia y tu momento"
          introParas={[
            "Cada persona llega con su propio recorrido. No hay dos procesos iguales: lo que trabajamos, el ritmo y las herramientas que usamos se ajustan a lo que tú necesitas en este momento de tu vida.",
            "El enfoque combina herramientas cognitivas, emocionales y psicoeducativas, siempre desde la cercanía, el rigor y el respeto por tu proceso.",
          ]}
          senales={senales}
          herramientas={herramientas}
          ctaNote="Disponible en modalidad presencial en Alcalá de Henares y online en toda España."
          precios={[
            ["Sesión individual", "1h", "50 €"],
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
