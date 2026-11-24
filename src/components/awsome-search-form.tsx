'use client';

import { useEffect, useState, useTransition, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, LoaderCircle, Search, X } from 'lucide-react';
import { MultiSelect } from '@/components/multi-select';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchProps {
  categories: string[];
  tags: string[];
}

export function AwsomeSearchForm({ categories, tags: options }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serialized = searchParams.toString();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [category, setCategory] = useState(searchParams.get('category') ?? '');
  const [tags, setTags] = useState(searchParams.getAll('tag').filter(Boolean));
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    const params = new URLSearchParams(serialized);
    setQuery(params.get('q') ?? '');
    setCategory(params.get('category') ?? '');
    setTags(params.getAll('tag').filter(Boolean));
  }, [serialized]);

  function update(next: { q?: string; category?: string; tags?: string[] } = {}) {
    const params = new URLSearchParams();
    const q = (next.q ?? query).trim();
    const cat = next.category ?? category;
    const selected = next.tags ?? tags;
    if (q) params.set('q', q);
    if (cat) params.set('category', cat);
    [...new Set(selected)].forEach((tag) => params.append('tag', tag));
    const qs = params.toString();
    startTransition(() => router.push(qs ? `/?${qs}` : '/', { scroll: false }));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    update();
  }
  const active = Boolean(
    searchParams.get('q') ||
    searchParams.get('category') ||
    searchParams.getAll('tag').some(Boolean),
  );
  return (
    <form
      action="/"
      method="get"
      onSubmit={submit}
      aria-label="Search and filter resources"
      aria-busy={pending}
      className="mt-11 mb-[3.1875rem] sm:mt-12"
    >
      <div className="grid items-end gap-5 md:grid-cols-4 lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-7">
        <div className="relative md:col-span-4 lg:col-span-1">
          <label htmlFor="resource-search" className="sr-only">
            Search resources
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-7.5 size-5 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            id="resource-search"
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources"
            disabled={pending}
            className="border-input bg-background text-foreground placeholder:text-muted-foreground h-14 w-full rounded-md border pr-14 pl-20 font-mono text-base outline-offset-4 disabled:opacity-60 sm:h-15 sm:text-lg"
          />
          <Button
            id="search-submit"
            type="submit"
            variant="ghost"
            size="icon"
            aria-label="Search resources"
            disabled={pending}
            className="text-primary absolute top-1/2 right-2 -translate-y-1/2"
          >
            {pending ? (
              <LoaderCircle className="animate-spin" aria-hidden="true" />
            ) : (
              <ArrowRight aria-hidden="true" />
            )}
          </Button>
        </div>
        <div className="min-w-0 md:col-span-2 lg:col-span-1">
          <label
            id="category-label"
            htmlFor="category-filter"
            className="relative -top-1.5 mb-2 block pl-2 font-mono text-sm font-medium sm:text-lg/6"
          >
            Category
          </label>
          <input type="hidden" name="category" value={category} />
          <Select
            value={category || 'all'}
            disabled={pending}
            onValueChange={(value) => {
              const next = value === 'all' ? '' : value;
              setCategory(next);
              update({ category: next });
            }}
          >
            <SelectTrigger
              id="category-filter"
              aria-labelledby="category-label"
              className="border-input h-14 px-5 font-mono text-base sm:h-15 sm:text-lg"
            >
              <SelectValue placeholder="All resources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All resources</SelectItem>
              {categories.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-0 md:col-span-2 lg:col-span-1">
          <label
            id="technology-label"
            htmlFor="technology-filter"
            className="relative -top-1.5 mb-2 block pl-1 font-mono text-sm font-medium sm:text-lg/6"
          >
            Technology
          </label>
          <MultiSelect
            id="technology-filter"
            aria-labelledby="technology-label"
            options={options.map((tag) => ({ label: tag, value: tag }))}
            value={tags}
            disabled={pending}
            onValueChange={(selected) => {
              setTags(selected);
              update({ tags: selected });
            }}
          />
          {tags.map((tag) => (
            <input key={tag} type="hidden" name="tag" value={tag} />
          ))}
        </div>
      </div>
      {active && (
        <div
          className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs"
          aria-label="Active filters"
        >
          {searchParams.get('q') && (
            <span className="bg-muted rounded-sm px-3 py-2">Search: {searchParams.get('q')}</span>
          )}
          {category && <span className="bg-muted rounded-sm px-3 py-2">{category}</span>}
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="secondary"
              size="sm"
              type="button"
              disabled={pending}
              className="h-8 font-mono text-xs"
              onClick={() => {
                const next = tags.filter((value) => value !== tag);
                setTags(next);
                update({ tags: next });
              }}
              aria-label={`Remove ${tag} filter`}
            >
              {tag}
              <X className="size-3" aria-hidden="true" />
            </Button>
          ))}
          <Link
            href="/"
            scroll={false}
            className="text-primary ml-1 px-2 py-2 underline underline-offset-4"
          >
            Clear all
          </Link>
        </div>
      )}
      <span role="status" className="sr-only">
        {pending ? 'Updating resources…' : ''}
      </span>
    </form>
  );
}
