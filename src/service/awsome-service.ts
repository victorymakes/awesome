import { env } from '@/lib/env';
import { AwsomeItem } from '@/model/awsome-item';
import { PageData } from '@/model/page-data';

class AwsomeService {
  async getCategories(): Promise<string[]> {
    try {
      return await (await fetch(`${env.APP_URL}/awsome-items/awsome-item-categories.json`)).json();
    } catch (error) {
      console.error('Fetch awesome item categories error.', error);
      throw error;
    }
  }

  async getTags(): Promise<string[]> {
    try {
      return await (await fetch(`${env.APP_URL}/awsome-items/awsome-item-tags.json`)).json();
    } catch (error) {
      console.error('Fetch awesome item tags error.', error);
      throw error;
    }
  }

  async getAllAwsomeItems(): Promise<AwsomeItem[]> {
    try {
      return await (await fetch(`${env.APP_URL}/awsome-items/awesome-items.json`)).json();
    } catch (error) {
      console.error(`Fetch awesome items error. ${JSON.stringify(error)}`);
      throw error;
    }
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
