import ToDocsBtn from '@/components/to-docs-btn';
import { DOCS } from '@/consts';

export default async function HomePage({ params }: { params: Promise<{ lang?: string }> }) {
  const { lang = 'en' } = await params;
  const title = lang === 'fr' ? "Mémoire d'un admin" : 'Handbook of an admin';
  const description = (
    <a href={`/${lang}/docs/home`} >
      cd /docs
    </a>
  );

  return (
    <>
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