// This file serves as a data source for awesome items
// It imports from the public JSON files at build time

import awesomeItemsJson from '@/data/awesome-items.json';
import categoriesJson from '@/data/awsome-item-categories.json';
import tagsJson from '@/data/awsome-item-tags.json';
import type { AwsomeItem } from '@/model/awsome-item';

export const awesomeItems: AwsomeItem[] = awesomeItemsJson;
export const categories: string[] = categoriesJson;
export const tags: string[] = tagsJson;
