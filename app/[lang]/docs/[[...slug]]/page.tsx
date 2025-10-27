import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { getDocsInfo } from '@/lib/utils';
import { createElement } from 'react';
import Hero from '@/components/hero';
import { DOCS, getTranslatedDesc } from '@/consts';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.file.name === 'index' ? [] : page.data.toc}>
      {page.file.name === 'index' ? (
        <IndexHead folder={page.file.dirname} lang={params.lang} />
      ) : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

function IndexHead({ folder, lang }: { folder: string; lang: string }) {
  const docsInfo = getDocsInfo(folder);

  if (!docsInfo) {
    return null;
  }

  const { icon, title } = docsInfo;
  const desc = getTranslatedDesc(folder as keyof typeof DOCS, lang);

  return (
    <>
      <Hero
        title={title}
        desc={desc}
        icon={createElement(icon, { className: 'size-12 shrink-0' })}
      />
      <hr />
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}