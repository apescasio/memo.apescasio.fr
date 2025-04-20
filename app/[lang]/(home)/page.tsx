import ToDocsBtn from '@/components/to-docs-btn';
import { DOCS } from '@/consts';
import Head from 'next/head';

// Metadata generation for SEO and link previews
export async function generateMetadata({ params }: { params: Promise<{ lang?: string }> }) {
  const { lang } = await params;
  const title = lang === 'fr' ? "Mémoire d'un admin" : 'Handbook of an admin';
  const description = lang === 'fr' ? 'cd /docs' : 'cd /docs';
  const image = 'https://apescasio.fr/memo-128.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 256,
          height: 256,
          alt: title,
        },
      ],
      url: `https://memo.apescasio.fr/${lang}`,
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang?: string }> }) {
  const { lang = 'en' } = await params;
  const title = lang === 'fr' ? "Mémoire d'un admin" : 'Handbook of an admin';
  const description = 'cd /docs';
  const image = 'https://apescasio.fr/memo-128.png';
  const url = `https://memo.apescasio.fr/${lang}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <main className="container flex flex-col gap-8 py-8 lg:gap-16 lg:py-16 max-w-7xl">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-fd-card mb-4 aspect-square rounded-full border p-6 lg:p-6">
            <img src="/images/real_icon.svg" alt="Tech Stack Icon" className="size-32 shrink-0 lg:size-32 icon-adjust" />
          </div>
          <h1 className="text-2xl font-semibold lg:text-4xl">{title}</h1>
          <p className="text-fd-muted-foreground lg:text-lg">{description}</p>
        </div>

        {/* Docs */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 items-start gap-4 custom-grid-2">
            {Object.values(DOCS).map(({ label, path, icon: Icon }) => {
              return <ToDocsBtn key={label} title={label} href={path} icon={<Icon className="size-6 shrink-0 lg:size-4" />} />;
            })}
          </div>
          <br />
          <br />
          <p suppressHydrationWarning className="text-fd-muted-foreground -mt-4 text-center text-sm lg:text-base">
            {`© ${new Date().getFullYear()} Aaron Pescasio / `}
            <a href="https://apescasio.fr/" target="_blank" className="hover:text-fd-accent-foreground underline">
              apescasio.fr
            </a>
          </p>
        </div>

        {/* Global CSS */}
        <style>{`
          .icon-adjust {
            margin-left: -0.5px;
            margin-bottom: -4px;
          }
          @media (min-width: 1024px) {
            .custom-grid-2 {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
              gap: 1.5rem !important;
            }
            .custom-grid-2 > * {
              transform: scale(1.1);
            }
          }
        `}</style>
      </main>
    </>
  );
}
