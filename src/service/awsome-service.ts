import { awesomeItems, categories, tags } from '@/data';
import { AwsomeItem } from '@/model/awsome-item';
import { PageData } from '@/model/page-data';
import { queryCatalog } from '@/lib/catalog';

class AwsomeService {
  async getCategories(): Promise<string[]> {
    return categories;
  }

  async getTags(): Promise<string[]> {
    return tags;
  }

  async getAllAwsomeItems(): Promise<AwsomeItem[]> {
    return awesomeItems;
  }

  async getAwsomeItems(
    category?: string,
    tags?: string[],
    page?: number,
    q?: string,
  ): Promise<PageData<AwsomeItem[]>> {
    return queryCatalog(await this.getAllAwsomeItems(), { category, tags, page, q });
  }
}

export const awsomeService = new AwsomeService();
