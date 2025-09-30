

export type Primitive = string | number | boolean | null | undefined;

export type Dict<T = unknown> = Record<string, T>;

export type ApiResponse<T = unknown> = {
  success?: boolean;
  message?: string;
  data?: T;
  [key: string]: unknown;
};

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;      
  limit: number;
};

export type ApiError = {
  status: number;    
  message: string;
  details?: Dict;    
};

export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: ApiError };
