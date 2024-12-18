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

const getUrl = (currentPage: number, newPage: number, total: number) => {
  if (newPage < 1 || newPage > total) {
    return undefined;
  }

  const headerList = headers();
  let url = headerList.get('x-current-url') || '/';
  if (url.includes('page=')) {
    url = url.replaceAll(`page=${currentPage}`, `page=${newPage}`);
  } else {
    url = url.includes('?') ? `${url}&page=${newPage}` : `${url}?page=${newPage}`;
  }
  return url;
};

export const AwsomePagination = ({ current, total, className }: PagePrps) => {
  const previous = getUrl(current, current - 1, total);
  const next = getUrl(current, current + 1, total);
  return (
    <Pagination className={className}>
      <PaginationContent className={'flex w-full justify-center'}>
        <PaginationItem className={previous ? '' : 'hidden'}>
          <PaginationPrevious href={previous} />
        </PaginationItem>
        <PaginationItem className={next ? '' : 'hidden'}>
          <PaginationNext href={next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
