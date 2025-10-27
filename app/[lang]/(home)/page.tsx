import ToDocsBtn from '@/components/to-docs-btn';
import { DOCS } from '@/consts';
import IconMemov2 from '@/components/icons/memov2'; // Corrected import

export default async function HomePage({ params }: { params: Promise<{ lang?: string }> }) {
  const { lang = 'en' } = await params;
  const title = lang === 'fr' ? "Mémoire d'un admin." :
    lang === 'es' ? "Manual del admin." :
      lang === 'ar' ? 'دليل المسؤول.' :
        'Handbook of an admin.';
  const paragraph = lang === 'fr' ? (
    <>
      Je ne suis pas enseignant, ce sont mes propres notes, celles d'un étudiant insignifiant, Aaron (Iso) Pescasio.<br />
      - Contact: <a href="mailto:him@apescasio.fr">him@apescasio.fr</a>
    </>
  ) : lang === 'es' ? (
    <>
      No soy profesor, estas son mis propias notas, las de un estudiante insignificante, Aaron (Iso) Pescasio.<br />
      - Contact: <a href="mailto:him@apescasio.fr">him@apescasio.fr</a>
    </>
  ) : lang === 'ar' ? (
    <>
      لستُ معلماً، هذه ملاحظاتي الخاصة، طالب متواضع، آرون (إيزو) بيسكاسيو.<br />
      - Contact: <a href="mailto:him@apescasio.fr">him@apescasio.fr</a>
    </>
  ) : (
    <>
      I am not a teacher, this is my own, an insignificant student, Aaron (Iso) Pescasio’s notes.<br />
      - Contact: <a href="mailto:him@apescasio.fr">him@apescasio.fr</a>
    </>
  );
  const description = (
    <>
      <a href={`/${lang}/docs/home`}>cd /docs</a>
      <br /><br />
      <span className="text-sm">{paragraph}</span>
    </>
  );

  return (
    <>
      <main className="container flex flex-col gap-8 py-8 lg:gap-10 lg:py-10 max-w-7xl">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-fd-card mb-4 aspect-square rounded-full border p-6 lg:p-6">
            <IconMemov2 className="size-36 shrink-0 lg:size-32 icon-adjust-memo" aria-label="memo.apescasio.fr" />
          </div>
          <h1 className="text-2xl font-semibold lg:text-4xl">{title}</h1>
          <p className="text-fd-muted-foreground lg:text-lg">{description}</p>
        </div>

        {/* Docs */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 items-start gap-4 custom-grid-2">
            {Object.values(DOCS).map(({ label, path, icon: Icon }) => {
              return (
                <ToDocsBtn
                  key={label}
                  title={label}
                  href={path ? (path.startsWith('http') ? path : `/${lang}${path}`) : path} // Handle external URLs
                  icon={<Icon className="size-6 shrink-0 lg:size-4" />}
                />
              );
            })}
          </div>
          <p suppressHydrationWarning className="text-fd-muted-foreground -mt-4 text-center text-sm lg:text-base">
            {`© ${new Date().getFullYear()} Aaron (Iso) Pescasio / `}
            <a href="https://apescasio.fr/" target="_blank" className="hover:text-fd-accent-foreground underline">
              apescasio.fr
            </a>
            {` + `}
            <a href="https://sh2a.org/" target="_blank" className="hover:text-fd-accent-foreground underline">
              sh2a.org
            </a>
            {` + `}
            <a href="https://www.contraelcancer.es/" target="_blank" className="hover:text-fd-accent-foreground underline">
              lucia
            </a>
            {` + `}
            <a href="https://github.com/nouraellm" target="_blank" className="hover:text-fd-accent-foreground underline">
              nouraellm
            </a>
          </p>
        </div>

        {/* Global CSS */}
        <style>{`
  .icon-adjust-memo {
    margin-left: -0.5px;
    margin-bottom: -4px;
    transform: scale(1.1);
  }

  /* Center 1 item (mobile) */
  .custom-grid-2 > *:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  @media (min-width: 1024px) {
    .custom-grid-2 {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      gap: 1.5rem !important;
    }

    .custom-grid-2 > * {
      transform: scale(1.1);
    }

    /* Center 1 item (desktop) */
    .custom-grid-2 > *:last-child:nth-child(odd) {
      grid-column: 2 / 4;
      justify-self: center;
    }

    /* Center 2 items (desktop only) */
    .custom-grid-2 > *:nth-last-child(2):nth-child(odd) {
      grid-column: 2;
      justify-self: center;
    }
    .custom-grid-2 > *:last-child:nth-child(even):nth-last-child(1) {
      grid-column: 3;
      justify-self: center;
    }
  }
`}</style>

      </main>
    </>
  );
}