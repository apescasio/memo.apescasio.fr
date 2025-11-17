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

  const titles: Record<string, string> = {
    fr: "Mémoire d'un admin.",
    es: "Manual del admin.",
    ar: "دليل المسؤول.",
    en: "Handbook of an admin.",
  };

  const title = titles[lang] ?? titles.en;

  const description = "cd /docs";
  const baseUrl = "https://memo.apescasio.fr";
  const imageUrl = `${baseUrl}/images/memo-128.png`;

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,
    keywords: [
      "admin", "docs", "documentation", "code", "open-source", "handbook",
      "system", "network", "azure", "intune", "admin-sys", "apescasio"
    ],

    openGraph: {
      type: "website",
      url: "/",
      title,
      description,
      siteName: "memo.apescasio.fr",
      images: [{ url: imageUrl, alt: title }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    icons: {
      icon: imageUrl,
      apple: imageUrl,
      shortcut: imageUrl,
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
