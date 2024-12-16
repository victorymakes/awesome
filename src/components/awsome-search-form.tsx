'use client';

import React, { useState } from 'react';
import { MultiSelect } from '@/components/multi-select';
import { Cat, ChevronRight, Dog, Fish, Rabbit, Search, Turtle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
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

const tagOptions = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'ember', label: 'Ember' },
];

const categoryOptions = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'ember', label: 'Ember' },
];

export const AwsomeSearchForm = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = React.useState(searchParams.get('category'));
  const [tags, setTags] = React.useState(searchParams.get('tags')?.split(',') || []);

  return (
    <form className={'w-full'} action="/" method="GET">
      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Select name={'category'}>
          <SelectTrigger className="w-full text-muted-foreground">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((item, i) => (
              <SelectItem key={i} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input name={'tags'} hidden value={tags.join('|')} />
        <MultiSelect
          modalPopover={true}
          options={tagOptions}
          onValueChange={setTags}
          defaultValue={tags}
          placeholder="Select Tags"
          variant="inverted"
          animation={0}
          maxCount={3}
        />
        <Button type={'submit'}>
          {' '}
          <Search />
          Search
        </Button>
      </div>
    </form>
  );
};
