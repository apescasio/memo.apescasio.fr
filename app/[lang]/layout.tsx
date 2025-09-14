import './global.css';
import 'fumadocs-ui/style.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const isFrench = lang === 'fr';
  const isSpanish = lang === 'es';
  const isArabic = lang === 'ar';

  return {
    metadataBase: new URL('https://memo.apescasio.fr'),
    title: isFrench
      ? "Mémoire d'un admin."
      : isSpanish
        ? "Manual del admin."
        : isArabic
          ? 'دليل المسؤول.'
          : 'Handbook of an admin.',
    description: isFrench ? 'cd /docs' : isSpanish ? 'cd /docs' : isArabic ? 'cd /docs' : 'cd /docs',
    keywords: isFrench
      ? ['mémoire', 'admin', 'docs', 'documentation', 'code', 'open-source', 'handbook', 'system', 'network', 'azure', 'intune', 'admin-sys', 'apescasio']
      : isSpanish
        ? ['memoria', 'admin', 'docs', 'documentación', 'código', 'código-abierto', 'manual', 'sistema', 'red', 'azure', 'intune', 'admin-sys', 'apescasio']
        : isArabic
          ? ['دليل', 'مشرف', 'مستندات', 'توثيق', 'كود', 'مفتوح المصدر', 'نظام', 'شبكة', 'azure', 'intune', 'apescasio']
          : ['memory', 'admin', 'docs', 'documentation', 'code', 'open-source', 'handbook', 'system', 'network', 'azure', 'intune', 'admin-sys', 'apescasio'],
    openGraph: {
      type: 'website',
      url: '/',
      title: isFrench
        ? "Mémoire d'un admin."
        : isSpanish
          ? "Manual del admin."
          : isArabic
            ? 'دليل المسؤول.'
            : 'Handbook of an admin.',
      description: isFrench ? 'cd /docs' : isSpanish ? 'cd /docs' : isArabic ? 'cd /docs' : 'cd /docs',
      siteName: isFrench ? "memo.apescasio.fr" : 'memo.apescasio.fr',
      images: [
        {
          url: '/images/memo-128.png',
          alt: isFrench
            ? "Mémoire d'un admin."
            : isSpanish
              ? "Manual del admin."
              : isArabic
                ? 'دليل المسؤول.'
                : 'Handbook of an admin.',
        },
      ],
    },
  };
}

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
                name: 'Spanish',
                locale: 'es',
              },
              {
                name: 'Arabic',
                locale: 'ar',
              },
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
              es: {
                toc: 'En esta página',
                search: 'Buscar',
                lastUpdate: 'Última actualización',
                searchNoResult: 'Esta página no tiene resultados',
                previousPage: 'Página anterior',
                nextPage: 'Página siguiente',
                chooseLanguage: 'Elegir lengua',
              },
              ar: {
                toc: 'جدول المحتويات',
                search: 'بحث',
                lastUpdate: 'آخر تحديث',
                searchNoResult: 'لا توجد نتائج في هذه الصفحة',
                previousPage: 'الصفحة السابقة',
                nextPage: 'الصفحة التالية',
                chooseLanguage: 'اختر اللغة',
              },
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