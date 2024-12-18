import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import * as React from 'react';

interface PagePrps extends React.ComponentProps<'nav'> {
  previous?: string;
  next?: string;
}

export const AwsomePagination = ({ previous, next, className }: PagePrps) => {
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
