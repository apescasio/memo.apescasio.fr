import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { i18n } from '@/lib/i18n';
import { docs, meta } from '@/.source';
import { DOCS } from '@/consts';
import { createElement } from 'react';
import { getDocsInfo } from './utils'; // Added import for getDocsInfo

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  i18n,
  icon(icon) {
    if (!icon) {
      return;
    }

    // Use getDocsInfo to fetch icon details
    const doc = getDocsInfo(icon);
    if (doc) {
      return createElement(doc.icon);
    }

    // Fallback to DOCS constant if getDocsInfo doesn't return a result
    const fallbackDoc = DOCS[icon as keyof typeof DOCS];
    if (fallbackDoc) {
      return createElement(fallbackDoc.icon);
    }
  },
});