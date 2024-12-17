import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import * as React from 'react';

interface PagePrps extends React.ComponentProps<'nav'> {
  page: number;
  total: number;
  url: string;
}

export const AwsomePagination = ({ page, total, url, className }: PagePrps) => {
  const hasPrevious = page - 1 >= 1;
  const hasNext = page + 1 <= total;
  return (
    <Pagination className={className}>
      <PaginationContent className={'flex w-full justify-center'}>
        <PaginationItem className={hasPrevious ? '' : 'hidden'}>
          <PaginationPrevious href={url + (page - 1)} />
        </PaginationItem>
        <PaginationItem className={hasNext ? '' : 'hidden'}>
          <PaginationNext href={url + (page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
