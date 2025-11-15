import { DOCS } from '@/consts';

export function getDocsInfo(key: string) {
  const doc = DOCS[key as keyof typeof DOCS];
  if (doc) {
    return doc;
  }
}

export function isIndexPage(path: string, lang: string) {
  const parts = path.split('/');
  if (lang === 'fr') {
    return parts.at(-1) === 'index.mdx';
  }
  return parts.at(-1) === 'index.' + lang + '.mdx';
}

export function getDirname(slugs: string[], isIndex: boolean) {
  if (isIndex) return slugs.at(-1);
  return slugs.at(-2);
}