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
import { awsomeService } from '@/service/awsome-service';
import Link from 'next/link';
import { AwsomePagination } from '@/components/awsome-pagination';
import { Badge } from '@/components/ui/badge';
import { genPageMetadata, PageProps } from '@/app/seo';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { searchParams }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parameters = await searchParams;
  const category = parameters.category ? (parameters.catagory as string) : undefined;
  const tags = getTagsFromSearchParams(parameters);

  const title = `${category} | ${tags.join('|')}`;

  return genPageMetadata({ title });
}

const getTagsFromSearchParams = (parameters: { [key: string]: string | string[] | undefined }) => {
  let tags: string[];
  if (typeof parameters.tag === 'string') {
    tags = parameters.tag && parameters.tag.length > 0 ? [parameters.tag] : [];
  } else {
    tags = parameters.tag ? (parameters.tag as string[]) : [];
  }
  return tags;
};

const getItems = async (parameters: { [key: string]: string | string[] | undefined }) => {
  const page = Number(parameters.page) || 1;
  const category = parameters.category ? (parameters.catagory as string) : undefined;
  const tags = getTagsFromSearchParams(parameters);
  return await awsomeService.getAwsomeItems(category, tags, page);
};

export const runtime = 'edge';
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const pageData = await getItems(await searchParams);
  return (
    <div>
      <AwsomeSearchForm />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pageData.data.map((item, i) => (
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
                  <div
                    className={
                      'flex h-full flex-col justify-center p-4 text-center text-xl font-bold'
                    }
                  >
                    <div>{item.title}</div>
                  </div>
                )}
              </AspectRatio>
            </CardHeader>
            <CardContent className={'space-y-4 transition duration-200 group-hover:translate-x-2'}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.summary}</CardDescription>
              <div className={'flex flex-wrap justify-start'}>
                {item.tags.map((tag) => (
                  <div key={tag} className={'m-0.5'}>
                    <Badge variant="secondary">{tag}</Badge>
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

      <AwsomePagination current={pageData.page} total={pageData.total} className={'mt-8'} />
    </div>
  );
}
