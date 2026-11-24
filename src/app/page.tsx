import Link from 'next/link';
import { ArrowRight, ArrowUpRight, SearchX } from 'lucide-react';
import { AwsomeSearchForm } from '@/components/awsome-search-form';
import { AwsomePagination } from '@/components/awsome-pagination';
import { Button } from '@/components/ui/button';
import { awsomeService } from '@/service/awsome-service';
import { cn } from '@/lib/utils';

type Parameters = Record<string, string | string[] | undefined>;
const single = (value: string | string[] | undefined) =>
  Array.isArray(value) ? (value[0] ?? '') : (value ?? '');
const shortDescriptions: Record<string, string> = {
  'saas-boilerplate.dev': 'Nuxt starter with teams, billing and email.',
  Mkdirs: 'Directory starter with listings, payments and CMS.',
};
const priorityTags = [
  'Next.js',
  'TanStack Start',
  'Cloudflare Workers',
  'Nuxt.js',
  'Remix',
  'Better Auth',
  'tRPC',
  'Prisma ORM',
  'Stripe',
  'Sanity',
];

export default async function Home({ searchParams }: { searchParams: Promise<Parameters> }) {
  const params = await searchParams;
  const category = single(params.category);
  const q = single(params.q);
  const selectedTags = (
    Array.isArray(params.tag) ? params.tag : params.tag ? [params.tag] : []
  ).filter(Boolean);
  const [pageData, allItems, categories, tags] = await Promise.all([
    awsomeService.getAwsomeItems(category, selectedTags, Number(single(params.page)), q),
    awsomeService.getAllAwsomeItems(),
    awsomeService.getCategories(),
    awsomeService.getTags(),
  ]);
  const paginationParams = new URLSearchParams();
  if (category) paginationParams.set('category', category);
  if (q) paginationParams.set('q', q);
  selectedTags.forEach((tag) => paginationParams.append('tag', tag));
  const filtered = Boolean(q || category || selectedTags.length);
  return (
    <>
      <section aria-labelledby="directory-title" className="relative pt-12 sm:pt-16 lg:pt-[4.1vw]">
        <div
          aria-hidden="true"
          className="bg-primary/15 dark:bg-foreground/20 pointer-events-none absolute top-0 right-0 hidden h-full w-3/5 [mask-image:url('/images/line-wave.svg')] [mask-size:contain] [mask-position:right_top] [mask-repeat:no-repeat] md:block"
        />
        <h1 id="directory-title" className="text-display text-foreground relative z-10">
          <span className="block font-sans text-[0.96em] tracking-[-0.04em]">Your next</span>{' '}
          <span className="font-display block">starting point.</span>
        </h1>
        <p className="relative z-10 mt-7 font-mono text-base leading-relaxed sm:mt-8 sm:text-xl lg:text-[clamp(1.25rem,1.95vw,2rem)]">
          Discover <span className="text-primary font-bold tabular-nums">{allItems.length}</span>{' '}
          curated SaaS boilerplates and developer tools.
        </p>
      </section>
      <AwsomeSearchForm categories={categories} tags={tags} />
      <section
        id="results"
        aria-label="Resource directory"
        aria-live="polite"
        aria-atomic="false"
        className="border-border scroll-mt-6 border-t"
      >
        {filtered && (
          <p role="status" className="text-muted-foreground border-b py-5 font-mono text-sm">
            {pageData.count} {pageData.count === 1 ? 'resource' : 'resources'} found
            {q ? ` for “${q}”` : ''}
          </p>
        )}
        {pageData.data.map((item, index) => {
          const featured =
            !filtered && pageData.page === 1 && index === 0 && item.title === 'LaunchSaaS';
          const uniqueTags = [...new Set(item.tags)];
          const displayTags = [...uniqueTags].sort(
            (a, b) =>
              (priorityTags.includes(a) ? priorityTags.indexOf(a) : 100) -
              (priorityTags.includes(b) ? priorityTags.indexOf(b) : 100),
          );
          return (
            <article
              key={`${item.url}-${item.title}-${index}`}
              data-featured={featured || undefined}
              className={cn(
                'group grid min-w-0 gap-4 border-b transition-colors lg:grid-cols-[minmax(0,1.095fr)_minmax(0,1.336fr)_minmax(0,1fr)_auto] lg:items-center lg:gap-7',
                featured
                  ? 'border-primary/35 bg-primary/5 hover:bg-primary/10 dark:border-primary/50 dark:bg-primary/15 dark:hover:bg-primary/20 border px-5 py-7 sm:px-7 lg:min-h-36'
                  : 'border-border hover:bg-muted/35 py-6 lg:min-h-21 lg:py-3.5 lg:first:min-h-27',
              )}
            >
              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                <h2 className="min-w-0 text-2xl leading-tight font-bold tracking-tight [overflow-wrap:anywhere] sm:text-3xl lg:text-[clamp(1.4rem,2.25vw,2.2rem)]">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'decoration-primary group-hover:text-primary focus-visible:text-primary underline-offset-4',
                      featured && 'text-primary',
                    )}
                  >
                    {item.title}
                  </a>
                </h2>
                {featured && (
                  <span className="border-primary/30 bg-primary text-primary-foreground rounded-sm border px-2 py-1 text-xs font-semibold tracking-normal">
                    Featured
                  </span>
                )}
              </div>
              <p
                className={cn(
                  'text-foreground/90 min-w-0 text-sm leading-relaxed sm:text-base lg:font-mono lg:text-[1.0625rem]',
                  !featured && 'line-clamp-2 lg:line-clamp-1',
                )}
                title={item.summary}
              >
                {shortDescriptions[item.title] ?? item.summary}
              </p>
              <details className="relative min-w-0 font-mono text-xs leading-relaxed lg:border-l lg:pl-7 lg:text-[1.0625rem]">
                <summary
                  className={cn(
                    'text-foreground/90 hover:text-primary cursor-pointer list-none underline-offset-4 hover:underline',
                    !featured && 'truncate',
                  )}
                  aria-label={`Show all technologies for ${item.title}`}
                >
                  {displayTags.slice(0, 3).join(', ')}
                </summary>
                <div className="bg-popover text-popover-foreground absolute right-0 z-20 mt-2 w-64 rounded-md border p-4 text-sm shadow-md">
                  {uniqueTags.join(', ')}
                </div>
              </details>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex min-h-10 items-center gap-2 justify-self-start font-mono text-sm font-semibold whitespace-nowrap lg:justify-self-end',
                  featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-3'
                    : 'text-primary underline-offset-4 hover:underline lg:text-lg',
                )}
                aria-label={`Visit ${item.title} website, opens in a new tab`}
              >
                {featured ? 'Explore LaunchSaaS' : 'Visit website'}{' '}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            </article>
          );
        })}
        {pageData.count === 0 && (
          <div className="py-20 text-center sm:py-28">
            <SearchX className="text-muted-foreground mx-auto mb-5 size-8" aria-hidden="true" />
            <h2 className="text-3xl font-semibold tracking-tight">No matching resources.</h2>
            <p className="text-muted-foreground mt-3">
              Try a different keyword or remove a technology filter.
            </p>
            <Button asChild className="mt-7">
              <Link href="/" scroll={false}>
                Clear filters <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        )}
      </section>
      <AwsomePagination
        current={pageData.page}
        total={pageData.total}
        queryString={paginationParams.toString()}
      />
      <aside className="mt-20 flex flex-col justify-between gap-5 border-t py-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Know a good starting point?</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Help another builder find it. Contributions happen on GitHub.
          </p>
        </div>
        <Link
          href="/faq#contribute"
          className="text-primary inline-flex items-center gap-2 font-mono text-sm hover:underline"
        >
          Share a resource <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </aside>
    </>
  );
}
