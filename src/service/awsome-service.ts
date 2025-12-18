import { configuration } from '@/configuration/site';
import { AwsomeItem } from '@/model/awsome-item';
import { PageData } from '@/model/page-data';

const BASE_URL = process.env.APP_URL || configuration.siteUrl;

class AwsomeService {
  async getCategories(): Promise<string[]> {
    return await (await fetch(`${BASE_URL}/awsome-items/awsome-item-categories.json`)).json();
  }

  async getTags(): Promise<string[]> {
    return await (await fetch(`${BASE_URL}/awsome-items/awsome-item-tags.json`)).json();
  }

  async getAllAwsomeItems(): Promise<AwsomeItem[]> {
    return await (await fetch(`${BASE_URL}/awsome-items/awesome-items.json`)).json();
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
