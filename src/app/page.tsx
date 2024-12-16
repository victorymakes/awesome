import projects from '@/configuration/projects';
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
import { Cat, ChevronRight, Dog, Fish, Rabbit, Search, Turtle } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { TagSelect } from '@/components/tag-select';
import { AwsomeSearchForm } from '@/components/awsome-search-form';

export default function Home() {
  return (
    <div>
      <AwsomeSearchForm />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((item, i) => (
          <Card className={'group hover:shadow-xl'}>
            <CardHeader>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent
              className={'space-y-1.5 transition duration-200 group-hover:translate-x-2'}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="ghost">
                Read More
                <ChevronRight />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
