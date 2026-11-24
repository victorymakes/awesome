'use client';

import { forwardRef, useState, type ButtonHTMLAttributes } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

interface MultiSelectProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value' | 'defaultValue'
> {
  options: { value: string; label: string }[];
  value?: string[];
  defaultValue?: string[];
  onValueChange: (values: string[]) => void;
  placeholder?: string;
}

export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(function MultiSelect(
  {
    options,
    value,
    defaultValue = [],
    onValueChange,
    placeholder = 'All technologies',
    className,
    disabled,
    ...props
  },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue);
  const selected = value ?? internal;
  function change(values: string[]) {
    if (disabled) return;
    setInternal(values);
    onValueChange(values);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          {...props}
          ref={ref}
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            'border-input h-14 w-full justify-between gap-3 px-5 text-left font-mono text-base font-normal sm:h-15 sm:text-lg',
            className,
          )}
        >
          <span className="truncate">
            {selected.length === 0
              ? placeholder
              : selected.length === 1
                ? selected[0]
                : `${selected.length} technologies`}
          </span>
          <ChevronDown className="size-4 shrink-0" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] min-w-64 p-0">
        <Command>
          <CommandInput placeholder="Find a technology…" aria-label="Find a technology" />
          <CommandList>
            <CommandEmpty>No technologies match.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const checked = selected.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    disabled={disabled}
                    onSelect={() =>
                      change(
                        checked
                          ? selected.filter((tag) => tag !== option.value)
                          : [...selected, option.value],
                      )
                    }
                    className="min-h-10 cursor-pointer px-3"
                    aria-label={`${option.label}${checked ? ', selected' : ''}`}
                  >
                    <span
                      className={cn(
                        'border-input flex size-4 shrink-0 items-center justify-center rounded-sm border',
                        checked && 'border-primary bg-primary text-primary-foreground',
                      )}
                      aria-hidden="true"
                    >
                      {checked && <Check className="size-3" />}
                    </span>
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="flex items-center justify-between border-t p-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={disabled || selected.length === 0}
            onClick={() => change([])}
          >
            Clear selection
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
});
