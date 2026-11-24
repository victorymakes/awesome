import type { AwsomeItem } from '@/model/awsome-item';

export const CATALOG_PAGE_SIZE = 12;

export interface CatalogQuery {
  category?: string;
  tags?: string[];
  page?: number;
  q?: string;
}

export function queryCatalog(items: readonly AwsomeItem[], query: CatalogQuery = {}) {
  const words = (query.q ?? '').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const selectedTags = [...new Set(query.tags?.filter(Boolean) ?? [])];
  const matches = items.filter((item) => {
    if (query.category && item.category !== query.category) return false;
    if (!selectedTags.every((tag) => item.tags.includes(tag))) return false;
    const text = [item.title, item.summary, item.description, item.category, ...item.tags]
      .filter(Boolean)
      .join(' ')
      .toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  });
  const total = Math.ceil(matches.length / CATALOG_PAGE_SIZE);
  const requested = Number.isFinite(query.page) ? Math.floor(query.page!) : 1;
  const page = Math.min(Math.max(1, requested), Math.max(1, total));
  return {
    page,
    total,
    count: matches.length,
    data: matches.slice((page - 1) * CATALOG_PAGE_SIZE, page * CATALOG_PAGE_SIZE),
  };
}
