'use client';

import React, { useEffect, useState } from 'react';
import { MultiSelect } from '@/components/multi-select';
import { Search, XIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Option {
  value: string;
  label: string;
}

export const AwsomeSearchForm = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || undefined);
  const [tags, setTags] = useState(searchParams.getAll('tag'));
  const [tagOptions, setTagOptions] = useState<Option[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);

  const getCategories = async () => {
    return await (await fetch('/api/categories')).json();
  };

  const getTags = async () => {
    return await (await fetch('/api/tags')).json();
  };

  useEffect(() => {
    getCategories().then((categories) => {
      const options = categories.map((category: string) => {
        return { value: category, label: category };
      });
      setCategoryOptions(options);
    });

    getTags().then((tags) => {
      const options = tags.map((tag: string) => {
        return { value: tag, label: tag };
      });
      setTagOptions(options);
    });
  }, []);

  const defaultTags = tags.length === 1 && tags[0] === '' ? [] : tags;

  return (
    <form className={'w-full'} action="/" method="GET">
      <div className="mb-8 grid gap-4 xl:grid-cols-3">
        <div className="relative w-full">
          <Select name={'category'} value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full text-muted-foreground ring-0 focus:!ring-transparent focus-visible:!ring-0">
              <SelectValue placeholder="Select Category">
                <Badge>{category}</Badge>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((item, i) => (
                <SelectItem key={i} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
              <SelectSeparator />
              <Button
                className="w-full px-2"
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setCategory('');
                }}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
          {category && (
            <div
              className={
                'absolute right-8 top-1/2 flex -translate-y-1/2 items-center justify-between'
              }
            >
              <button
                onClick={() => {
                  setCategory('');
                }}
                className="mx-2 rounded-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <XIcon className="h-4 w-4" />
              </button>
              <Separator orientation="vertical" className="mr-2 h-full min-h-6" />
            </div>
          )}
        </div>
        <MultiSelect
          value={tags}
          defaultValue={defaultTags}
          modalPopover={false}
          options={tagOptions}
          onValueChange={setTags}
          placeholder="Select Tags"
          variant="inverted"
          animation={0}
          maxCount={3}
        />
        {tags.map((tag) =>
          tag ? <input key={tag} readOnly={true} name={'tag'} hidden value={tag} /> : null,
        )}
        <Button type={'submit'}>
          {' '}
          <Search />
          Search
        </Button>
      </div>
    </form>
  );
};
