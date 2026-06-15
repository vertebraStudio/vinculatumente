import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

// ============================================================
// FUENTES — servidas desde el CDN de Vercel (sin petición a Google)
// Variable CSS inyectada en <html>: var(--font-poppins) y var(--font-playfair)
// ============================================================
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

// ============================================================
// METADATA — Vincula Tu Mente · María Villalba
// ============================================================
export const metadata = {
  metadataBase: new URL("https://vinculatumente.es"),
  title: "Vincula Tu Mente | Psicóloga y Sexóloga en Alcalá de Henares y Online | María Villalba",
  description: "María Villalba, psicóloga y sexóloga en Alcalá de Henares y online en toda España. Especialista en relaciones y vínculos, infanto-juvenil, trauma y apego, y sexología. Pide tu cita.",
  keywords: [
    "psicóloga Alcalá de Henares",
    "sexóloga Alcalá de Henares",
    "psicóloga online España",
    "sexóloga online",
    "terapia de pareja online",
    "psicología infantojuvenil",
    "trauma y apego",
    "terapia online España",
  ],
  alternates: {
    canonical: "https://vinculatumente.es",
  },
  openGraph: {
    title: "Vincula Tu Mente | María Villalba · Psicóloga y Sexóloga en Alcalá de Henares",
    description: "Un espacio seguro para comprenderte, aceptarte y vivir relaciones más sanas y conscientes. Consulta presencial en Alcalá de Henares y online en toda España.",
    url: "https://vinculatumente.es",
    siteName: "Vincula Tu Mente",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/media/vinculatumenteLogo.jpg",
        width: 1600,
        height: 1600,
        alt: "Vincula Tu Mente — María Villalba, psicóloga y sexóloga",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Vincula Tu Mente | María Villalba · Psicóloga y Sexóloga",
    description: "Un espacio seguro para comprenderte, aceptarte y vivir relaciones más sanas y conscientes. Alcalá de Henares y online en toda España.",
    images: ["/media/vinculatumenteLogo.jpg"],
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
    "image": "https://vinculatumente.es/media/vinculatumenteLogo.jpg",
    "@id": "https://vinculatumente.es",
    "url": "https://vinculatumente.es",
    "telephone": "+34 604 80 72 00",
    "email": "info@vinculatumente.com",
    "priceRange": "€€",
    "areaServed": "ES",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcalá de Henares",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
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
    <html lang="es" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
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
