import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/data/faqs';
import { categories } from '@/data';

export const metadata: Metadata = {
  title: 'Frequently asked questions',
  description: 'How to find resources, contribute to AwesomeLists, and get in touch.',
  alternates: { canonical: '/faq' },
};

const groups = [
  {
    id: 'about',
    title: 'About the directory',
    ids: ['what-is-awesomelists', 'why-created', 'open-source', 'launchsaas'],
  },
  {
    id: 'finding-resources',
    title: 'Finding resources',
    ids: ['search-filter', 'categories', 'dark-mode', 'mobile-friendly'],
  },
  {
    id: 'contribute',
    title: 'Contributing',
    ids: [
      'how-to-submit',
      'submission-guidelines',
      'contribute',
      'file-structure',
      'duplicate-items',
    ],
  },
  { id: 'contact', title: 'Getting in touch', ids: ['contact'] },
];

function Answer({ id, text }: { id: string; text: string }) {
  if (id === 'search-filter')
    return (
      <div className="space-y-4">
        <p>
          Enter a name or keyword in the search field and press Enter, or use its arrow button.
          Search covers titles, summaries, categories, and technology tags.
        </p>
        <p>
          Choose a category or select technologies to refine the results. All selected technologies
          must match. Category and technology changes apply automatically; filters can be combined
          with a keyword.
        </p>
        <p>
          Use Clear all to start again. Your search and filters stay in the URL, so you can share a
          result or use your browser’s back button. Pagination keeps your filters.
        </p>
      </div>
    );
  if (id === 'categories')
    return (
      <div className="space-y-4">
        <p>The collection currently has these categories:</p>
        <ul className="list-inside list-disc space-y-2">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <p>
          Use the Technology filter to narrow the collection by framework, database, authentication,
          billing, or other integrations. Suggest a new category through a GitHub pull request when
          an existing one does not fit.
        </p>
      </div>
    );
  if (id === 'how-to-submit')
    return (
      <div className="space-y-5">
        <p>
          Contributions happen through GitHub. Add a resource you have used or reviewed, with an
          accurate description and a working URL.
        </p>
        <ol className="list-outside list-decimal space-y-2 pl-5">
          <li>
            Fork the{' '}
            <a
              className="text-primary underline underline-offset-4"
              href="https://github.com/victorymakes/awesome"
              target="_blank"
              rel="noopener noreferrer"
            >
              AwesomeLists repository
            </a>
            .
          </li>
          <li>
            Add your resource to{' '}
            <code className="bg-muted rounded-sm px-1.5 py-0.5 text-sm">
              src/data/awesome-items.json
            </code>
            .
          </li>
          <li>Use an existing category and relevant technology tags.</li>
          <li>Submit a pull request describing the addition.</li>
        </ol>
        <pre className="bg-muted overflow-x-auto rounded-md border p-5 font-mono text-sm leading-relaxed">
          <code>
            {JSON.stringify(
              {
                title: 'Your project name',
                summary: 'A concise, accurate description.',
                url: 'https://example.com',
                category: 'SaaS Boilerplate',
                tags: ['Next.js', 'TypeScript'],
              },
              null,
              2,
            )}
          </code>
        </pre>
        <p>
          Check for duplicates before submitting. Mention any new category or tag in your pull
          request.
        </p>
      </div>
    );
  return <p className="whitespace-pre-line">{text}</p>;
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14" aria-labelledby="faq-title">
        <h1
          id="faq-title"
          className="font-display text-[clamp(3.2rem,7.4vw,8rem)] leading-none font-bold tracking-[-0.035em] text-balance dark:font-medium"
        >
          Questions, answered.
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed sm:text-2xl">
          A little context for a better starting point.
        </p>
      </section>
      <nav
        aria-label="FAQ topics"
        className="flex flex-wrap gap-x-8 gap-y-4 border-b pb-8 font-mono text-sm sm:text-base"
      >
        <span className="text-muted-foreground">On this page:</span>
        {groups.map((group) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            {group.title}
          </a>
        ))}
      </nav>
      {groups.map((group) => (
        <section
          id={group.id}
          key={group.id}
          aria-labelledby={`${group.id}-title`}
          className="grid scroll-mt-6 gap-5 border-b py-8 sm:py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.8fr)] lg:gap-16"
        >
          <h2
            id={`${group.id}-title`}
            className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:max-w-52"
          >
            {group.title}
          </h2>
          <Accordion
            type="multiple"
            defaultValue={group.id === 'about' || group.id === 'contribute' ? [group.ids[0]] : []}
            className="min-w-0 [&>div:first-child>h3>button]:pt-0"
          >
            {group.ids.map((id) => {
              const faq = faqs.find((entry) => entry.id === id);
              if (!faq) return null;
              return (
                <AccordionItem key={id} value={id} className="last:border-b-0">
                  <AccordionTrigger className="hover:text-primary gap-6 py-5 text-left text-lg leading-snug font-semibold tracking-tight hover:no-underline sm:text-xl [&>svg]:size-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground max-w-[75ch] pb-7 text-base leading-relaxed sm:text-lg">
                    <Answer id={id} text={faq.answer} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      ))}
      <section className="flex flex-col justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Still have a question?
          </h2>
          <p className="text-muted-foreground mt-3">
            Open an issue, suggest an improvement, or help grow the collection.
          </p>
        </div>
        <Button asChild className="h-12 self-start font-mono">
          <a
            href="https://github.com/victorymakes/awesome/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </section>
      <Link
        href="/"
        className="text-primary inline-flex min-h-11 items-center gap-3 font-mono text-sm hover:underline"
      >
        Back to the directory <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </>
  );
}
