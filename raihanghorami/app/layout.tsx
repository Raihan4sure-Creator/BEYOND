import type { Metadata, Viewport } from 'next';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { RevealObserver } from '@/components/RevealObserver';
import { site } from '@/content/site';

const title = `${site.name} · ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title,
    description: site.description,
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image', title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: '#f4f3ef',
  colorScheme: 'light',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#raihan`,
      name: site.name,
      url: site.url,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      sameAs: [...site.social, ...site.elsewhere].map((s) => s.href),
      description: site.description,
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      worksFor: { '@id': `${site.company.url}/#organization` },
      knowsAbout: ['Video production', 'Creative direction', 'Post-production', 'Motion graphics', 'AI automation', 'Team building'],
    },
    {
      '@type': 'Organization',
      '@id': `${site.company.url}/#organization`,
      name: site.company.name,
      url: site.company.url,
      founder: { '@id': `${site.url}/#raihan` },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: 'en-GB',
      publisher: { '@id': `${site.url}/#raihan` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Enables reveal animations only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
