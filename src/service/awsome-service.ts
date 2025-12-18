import { env } from '@/lib/env';
import { AwsomeItem } from '@/model/awsome-item';
import { PageData } from '@/model/page-data';

class AwsomeService {
  private async fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text.substring(0, 200)}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Expected JSON but got ${contentType}: ${text.substring(0, 200)}`);
    }

    return await response.json();
  }

  async getCategories(): Promise<string[]> {
    try {
      const url = `${env.APP_URL}/awsome-items/awsome-item-categories.json`;
      return await this.fetchJson(url);
    } catch (error) {
      console.error('Fetch awesome item categories error.', error);
      throw error;
    }
  }

  async getTags(): Promise<string[]> {
    try {
      const url = `${env.APP_URL}/awsome-items/awsome-item-tags.json`;
      return await this.fetchJson(url);
    } catch (error) {
      console.error('Fetch awesome item tags error.', error);
      throw error;
    }
  }

  async getAllAwsomeItems(): Promise<AwsomeItem[]> {
    try {
      const url = `${env.APP_URL}/awsome-items/awesome-items.json`;
      console.log('Fetching awesome items from URL:', url);
      return await this.fetchJson(url);
    } catch (error) {
      console.error(
        `Fetch awesome items error. ${JSON.stringify({
          message: (error as Error).message,
          stack: (error as Error).stack,
        })}`,
      );
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
