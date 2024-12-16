// src/app/page.tsx

'use client';

import React, { useState } from 'react';
import { MultiSelect } from '@/components/multi-select';
import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react';

const frameworksList = [
  { value: 'react', label: 'React', icon: Turtle },
  { value: 'angular', label: 'Angular', icon: Cat },
  { value: 'vue', label: 'Vue', icon: Dog },
  { value: 'svelte', label: 'Svelte', icon: Rabbit },
  { value: 'ember', label: 'Ember', icon: Fish },
];

export const TagSelect = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <MultiSelect
      options={frameworksList}
      onValueChange={setSelectedTags}
      defaultValue={selectedTags}
      placeholder="Select Tags"
      variant="inverted"
      animation={0}
      maxCount={3}
    />
  );
};
