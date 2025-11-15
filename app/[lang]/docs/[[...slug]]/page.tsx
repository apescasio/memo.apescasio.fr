import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { getDirname, getDocsInfo, isIndexPage } from "@/lib/utils";
import { createElement } from "react";
import Hero from "@/components/hero";
import { DOCS, getTranslatedDesc } from "@/consts";
// import { getGithubLastEdit } from "fumadocs-core/content/github";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { slug, lang } = await params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;

  // const time = await getGithubLastEdit({
  //   owner: "apescasio",
  //   repo: "memo.apescasio.fr",
  //   path: `content/docs/${page.path}`,
  // });
  // console.log("Last edit time:", time);
  const isIndex = isIndexPage(page.path, lang);
  const dirName = getDirname(page.slugs, isIndex);
  return (
    <DocsPage
      toc={isIndex ? undefined : page.data.toc}
      tableOfContent={isIndex ? undefined : { style: "clerk" }}
      full={page.data.full}
      lastUpdate={page.data.lastModified ? new Date(page.data.lastModified) : undefined}
    >
      {isIndex && dirName ? (
        <IndexHead folder={dirName} lang={lang} />
      ) : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX
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
        icon={createElement(icon, { className: "size-12 shrink-0" })}
      />
      <hr />
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const page = source.getPage(slug, lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
