import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Doc from '../types/doc';
import { ELECTRON_APP } from './utils';

const docsDirectory = ELECTRON_APP ? join(process.cwd(), 'renderer', '_docs') : join(process.cwd(), '_docs');

export function getDocSlugs() {
  return fs.readdirSync(docsDirectory);
}

export function getDocBySlug(slug: string, fields: string[]) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Doc = {
    slug: '',
    content: '',
    title: '',
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field as keyof Doc] = data[field];
    }
  });

  return items;
}

export function getAllDocs(fields: string[]) {
  const slugs = getDocSlugs();
  const docs = slugs.map(slug => getDocBySlug(slug, fields));
  return docs;
}
