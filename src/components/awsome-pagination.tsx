import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  current: number;
  total: number;
  queryString: string;
}

export function AwsomePagination({ current, total, queryString }: PaginationProps) {
  if (total <= 1) return null;
  function href(page: number) {
    const params = new URLSearchParams(queryString);
    params.set('page', String(page));
    return `/?${params.toString()}#results`;
  }
  return (
    <nav
      aria-label="Resource pagination"
      className="mt-8 flex items-center justify-between gap-3 font-mono text-sm"
    >
      {current > 1 ? (
        <Button asChild variant="outline">
          <Link href={href(current - 1)} rel="prev">
            <ArrowLeft aria-hidden="true" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="outline" disabled>
          <ArrowLeft aria-hidden="true" />
          Previous
        </Button>
      )}
      <span className="text-muted-foreground text-center">
        Page <span className="text-foreground tabular-nums">{current}</span> of{' '}
        <span className="tabular-nums">{total}</span>
      </span>
      {current < total ? (
        <Button asChild variant="outline">
          <Link href={href(current + 1)} rel="next">
            Next
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" disabled>
          Next
          <ArrowRight aria-hidden="true" />
        </Button>
      )}
    </nav>
  );
}
