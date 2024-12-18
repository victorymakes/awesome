import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { AwsomeSearchForm } from '@/components/awsome-search-form';
import { Skeleton } from '@/components/skeleton';
import { awsomeService } from '@/service/awsome-service';
import Link from 'next/link';
import { AwsomePagination } from '@/components/awsome-pagination';
import { Badge } from '@/components/ui/badge';

const getPageUrl = (
  page: number,
  total: number,
  category: string,
  tags: string[],
  next: boolean,
) => {
  console.log(`page: ${page}`);
  page = next ? page + 1 : page - 1;
  return page >= 1 && page <= total
    ? `/?page=${page}&category=${category}&${tags.map((tag) => (tag ? `tag=${tag}` : '')).join('&')}`
    : undefined;
};

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const parameters = await searchParams;
  const page = Number(parameters.page) || 1;
  const category = parameters.category as string;
  let tags: string[];
  if (typeof parameters.tag === 'string') {
    tags = parameters.tag && parameters.tag.length > 0 ? [parameters.tag] : [];
  } else {
    tags = parameters.tag ? (parameters.tag as string[]) : [];
  }
  const pageData = await awsomeService.getAwsomeItems(category, tags, page);
  const items = pageData.data;

  const previous = getPageUrl(page, pageData.total, category, tags, false);
  const next = getPageUrl(page, pageData.total, category, tags, true);
  console.log(`previous: ${previous}`);
  console.log(`next: ${next}`);
  return (
    <div>
      <AwsomeSearchForm />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <Card key={i} className={'group flex flex-col justify-between hover:shadow-xl'}>
            <CardHeader>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                ) : (
                  <Skeleton />
                )}
              </AspectRatio>
            </CardHeader>
            <CardContent className={'space-y-4 transition duration-200 group-hover:translate-x-2'}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.summary}</CardDescription>
              <div className={'flex flex-wrap justify-start'}>
                {item.tags.map((tag) => (
                  <div className={'m-0.5'}>
                    <Badge variant="outline">{tag}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="ghost" asChild>
                <Link href={item.url} target={'_blank'}>
                  Read More
                  <ChevronRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <AwsomePagination previous={previous} next={next} className={'mt-8'} />
    </div>
  );
}
