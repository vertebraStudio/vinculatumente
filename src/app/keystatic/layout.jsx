// Layout dedicado del admin de Keystatic.
// No incluye Header/Footer del sitio; el chrome (WhatsApp, ScrollToTop, CookieBanner)
// se autoesconde en /keystatic mediante usePathname en cada componente.

export const metadata = {
  title: 'Vincula Tu Mente · CMS',
  robots: { index: false, follow: false },
};

export default function KeystaticLayout({ children }) {
  return children;
}
