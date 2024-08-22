export interface PaginationResult<T> {
  content: T[];
  total: number;
  page: number;
  limit: number;
}

export interface IErrorMessage {
  code: string;
  message: string;
  property?: string;
}
