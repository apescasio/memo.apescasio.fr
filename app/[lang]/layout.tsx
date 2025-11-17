// import "fumadocs-ui/style.css";
import './global.css';
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
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

const { provider } = defineI18nUI(i18n, {
  translations: {
    es: {
      displayName: "Spanish",
      toc: "En esta página",
      search: "Buscar",
      lastUpdate: "Última actualización:",
      searchNoResult: "Esta página no tiene resultados",
      previousPage: "Página anterior",
      nextPage: "Página siguiente",
      chooseLanguage: "Elegir lengua",
    },
    ar: {
      displayName: "Arabic",
      toc: "جدول المحتويات",
      search: "بحث",
      lastUpdate: "آخر تحديث:",
      searchNoResult: "لا توجد نتائج في هذه الصفحة",
      previousPage: "الصفحة السابقة",
      nextPage: "الصفحة التالية",
      chooseLanguage: "اختر اللغة",
    },
    fr: {
      displayName: "French",
      toc: "Table des matières",
      search: "Chercher",
      lastUpdate: "Dernière mise à jour:",
      searchNoResult: "Cette page n'a pas de résultats",
      previousPage: "Page précédente",
      nextPage: "Page suivante",
      chooseLanguage: "Choisir la langue",
    },
    en: {
      displayName: "English",
      lastUpdate: "Last updated on:",
    },
  },
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
