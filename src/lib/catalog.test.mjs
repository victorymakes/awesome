import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { queryCatalog } from './catalog.ts';

const items = Array.from({ length: 25 }, (_, index) => ({
  title: `Starter ${index + 1}`,
  summary: index === 0 ? 'Team billing with email' : 'A starter for builders',
  category: index === 24 ? 'Developer Tool' : 'SaaS Boilerplate',
  url: `https://example.com/${index}`,
  tags: index < 3 ? ['Next.js', 'Stripe'] : ['Nuxt.js'],
}));

test('combines keyword, exact category, and all selected technology tags', () => {
  const result = queryCatalog(items, {
    q: 'TEAM billing',
    category: 'SaaS Boilerplate',
    tags: ['Next.js', 'Stripe'],
  });
  assert.equal(result.count, 1);
  assert.equal(result.data[0].title, 'Starter 1');
  assert.equal(queryCatalog(items, { category: 'Developer Tool' }).count, 1);
  assert.equal(queryCatalog(items, { tags: ['Next.js', 'Nuxt.js'] }).count, 0);
});

test('clamps invalid and out-of-range pages without losing the result count', () => {
  for (const page of [-1, 0, NaN, Infinity]) assert.equal(queryCatalog(items, { page }).page, 1);
  const last = queryCatalog(items, { page: 999 });
  assert.equal(last.page, 3);
  assert.equal(last.count, 25);
  assert.equal(last.data.length, 1);
  assert.equal(queryCatalog(items, { page: 2.9 }).data[0].title, 'Starter 13');
});

test('empty filters and no matches have a stable first page', () => {
  assert.equal(queryCatalog(items, { q: '  ', tags: [''] }).count, 25);
  const empty = queryCatalog(items, { q: 'unavailable query', page: 999 });
  assert.deepEqual(empty, { page: 1, total: 0, count: 0, data: [] });
});
