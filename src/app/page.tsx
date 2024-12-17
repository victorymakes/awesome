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
  if (typeof parameters.tags === 'string') {
    tags = parameters.tags && parameters.tags.length > 0 ? [parameters.tags] : [];
  } else {
    tags = parameters.tags as string[];
  }
  const pageData = await awsomeService.getAwsomeItems(category, tags, page);
  const items = pageData.data;
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

      <AwsomePagination page={pageData.page} total={pageData.total} url={''} className={'mt-8'} />
    </div>
  );
}
