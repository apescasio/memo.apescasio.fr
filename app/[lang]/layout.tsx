import './global.css';
import 'fumadocs-ui/style.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="https://apescasio.fr/icon.svg" />
        
      </head>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider
          i18n={{
            locale: lang,
            locales: [
              {
                name: 'French',
                locale: 'fr',
              },
              {
                name: 'English',
                locale: 'en',
              },
              // {
              //   name: 'Chinese',
              //   locale: 'cn',
              // },
            ],
            translations: {
              fr: {
                toc: 'Table des matières',
                search: 'Chercher',
                lastUpdate: 'Dernière mise à jour',
                searchNoResult: 'Cette page n\'a pas de résultats',
                previousPage: 'Page précédente',
                nextPage: 'Page suivante',
                chooseLanguage: 'Choisir la langue',
              },
            }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}