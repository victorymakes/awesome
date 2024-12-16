class AwsomeService {
  async getAwsomeItems(category?: string, tags?: string[], page?: number): Promise<AwsomeItem[]> {
    page = page || 1;
    const pageSize = 12;
    const items = await (
      await fetch(
        'https://oonmigntisjxczfaulla.supabase.co/storage/v1/object/public/awsome-items/awesome-items.json',
      )
    ).json();

    const start = pageSize * (page - 1);
    const end = start + pageSize;
    return items.slice(start, end);
  }
}

export const awsomeService = new AwsomeService();
