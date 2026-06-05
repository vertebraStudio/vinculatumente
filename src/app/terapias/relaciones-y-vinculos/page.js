import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TherapyHero from "@/components/TherapyHero";
import TherapyBody from "@/components/TherapyBody";

export const metadata = {
  title: "Relaciones y vínculos | Vincula Tu Mente | Psicóloga en Alcalá de Henares",
  description: "Terapia de relaciones y vínculos en Alcalá de Henares y online. Aprende a vincularte de forma sana, pon límites y construye relaciones conscientes con María Villalba.",
};

const senales = [
  "Repites patrones que te hacen daño en tus relaciones de pareja, familia o amistad.",
  "Te cuesta poner límites o decir que no sin sentir culpa.",
  "Sientes que pierdes la conexión contigo cuando te vinculas con los demás.",
  "Te gustaría mejorar la comunicación y la intimidad en tu relación de pareja.",
  "Atraviesas una ruptura, un conflicto o una crisis de pareja.",
  "Quieres conocerte mejor para construir relaciones más auténticas.",
];

const herramientas = [
  "Identificación de tus patrones y estilos de vínculo.",
  "Comunicación asertiva, límites y resolución de conflictos.",
  "Autoestima, autoconocimiento y seguridad personal.",
  "Acompañamiento en rupturas, celos e infidelidades.",
  "Terapia de pareja: comunicación, intimidad y reconstrucción del vínculo.",
];

export default function RelacionesVinculosPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">
        <TherapyHero
          category="RELACIONES Y VÍNCULOS"
          title="Construye relaciones"
          titleEm="más sanas y conscientes"
          desc="Un espacio para entender cómo te vinculas, sanar las dinámicas que te hacen daño y construir relaciones más auténticas contigo y con quienes te rodean."
          photo="/media/relacionesHeader.jpg"
          phIcon="♡"
          phLabel="Foto · Relaciones y vínculos"
          phDesc="Imagen cálida sobre conexión y relaciones. Formato horizontal."
        />
        <TherapyBody
          introTitle="Reaprender a vincularte"
          introParas={[
            "La forma en que nos relacionamos dice mucho de nuestra historia. A veces repetimos dinámicas que nos alejan de lo que queremos, sin saber muy bien por qué. Aquí trabajamos para comprenderlas y transformarlas.",
            "Desde un enfoque cercano y libre de juicios, te acompaño a vincularte de una manera más consciente: contigo en primer lugar, y también con tu pareja, tu familia y tus amistades.",
          ]}
          senales={senales}
          herramientas={herramientas}
        />
      </main>
      <Footer />
    </>
  );
}
