import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import * as React from 'react';
import { headers } from 'next/headers';

interface PagePrps extends React.ComponentProps<'nav'> {
  current: number;
  total: number;
}

const getUrl = async (currentPage: number, newPage: number, total: number) => {
  if (newPage < 1 || newPage > total) {
    return undefined;
  }

  const headerList = await headers();
  let url = headerList.get('x-current-url') || '/';
  if (url.includes('page=')) {
    url = url.replaceAll(`page=${currentPage}`, `page=${newPage}`);
  } else {
    url = url.includes('?') ? `${url}&page=${newPage}` : `${url}?page=${newPage}`;
  }
  return url;
};

export const AwsomePagination = async ({ current, total, className }: PagePrps) => {
  const previous = await getUrl(current, current - 1, total);
  const next = await getUrl(current, current + 1, total);
  return (
    <Pagination className={className}>
      <PaginationContent className={'flex w-full justify-center'}>
        {previous ? (
          <PaginationItem>
            <PaginationPrevious href={previous} />
          </PaginationItem>
        ) : null}
        {next ? (
          <PaginationItem>
            <PaginationNext href={next} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
