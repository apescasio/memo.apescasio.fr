import { defineDocs } from 'fumadocs-mdx/config';
import { defineConfig } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});
export default defineConfig({
  lastModifiedTime: 'git',
});