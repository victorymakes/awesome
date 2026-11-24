export interface PageData<T> {
  page: number;
  total: number;
  count: number;
  data: T;
}
