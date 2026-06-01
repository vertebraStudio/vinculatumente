import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

// ============================================================
// METADATA — Vincula Tu Mente · María Villalba
// ============================================================
export const metadata = {
  metadataBase: new URL("https://vinculatumente.es"),
  title: "Vincula Tu Mente | Psicóloga y Sexóloga en Alcalá de Henares | María Villalba",
  description: "María Villalba, psicóloga y sexóloga en Alcalá de Henares y online en toda España. Especialista en relaciones y vínculos, infanto-juvenil, trauma y apego, y sexología. Pide tu cita.",
  keywords: [
    "psicóloga Alcalá de Henares",
    "sexóloga Alcalá de Henares",
    "terapia de pareja Alcalá de Henares",
    "psicología infantojuvenil",
    "trauma y apego",
    "terapia online España",
  ],
  alternates: {
    canonical: "https://vinculatumente.es",
  },
  openGraph: {
    title: "Vincula Tu Mente | María Villalba · Psicóloga y Sexóloga",
    description: "Un espacio seguro para comprenderte, aceptarte y vivir relaciones más sanas y conscientes. Alcalá de Henares y online.",
    url: "https://vinculatumente.es",
    siteName: "Vincula Tu Mente",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/media/FavIcon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Vincula Tu Mente — María Villalba",
    "image": "https://vinculatumente.es/media/Logo.jpeg",
    "@id": "https://vinculatumente.es",
    "url": "https://vinculatumente.es",
    "telephone": "+34 604 80 72 00",
    "email": "hola@vinculatumente.com",
    "priceRange": "€€",
    "areaServed": "ES",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcalá de Henares",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4818,
      "longitude": -3.3643
    },
    "knowsAbout": [
      "Psicología", "Sexología", "Terapia de pareja",
      "Relaciones y vínculos", "Psicología infantojuvenil", "Trauma y apego", "EMDR"
    ],
    "availableLanguage": "es",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
