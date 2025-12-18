import { awesomeItems, categories, tags } from '@/data';
import { AwsomeItem } from '@/model/awsome-item';
import { PageData } from '@/model/page-data';

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
  ): Promise<PageData<AwsomeItem[]>> {
    page = page || 1;
    const pageSize = 12;
    const items = (await this.getAllAwsomeItems()).filter((item) => {
      return (
        (category ? item.category === category : true) &&
        (tags ? tags.every((tag) => item.tags.includes(tag)) : true)
      );
    });

    const start = pageSize * (page - 1);
    const end = Math.min(items.length, start + pageSize);
    const total = Math.ceil(items.length / pageSize);
    return {
      page: page,
      total: total,
      data: items.slice(start, end),
    };
  }
}

export const awsomeService = new AwsomeService();
