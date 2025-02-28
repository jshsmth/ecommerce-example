export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  onSale?: boolean;
  discount?: number;
  popular?: boolean;
}

export interface ApiResponse {
  status: string;
  message: string;
  products: Product[];
}

export interface PaginationInfo {
  limit: number;
  offset: number;
  nextOffset: number;
}

export interface PaginatedProductsResponse {
  status: string;
  message: string;
  products: Product[];
}

export interface PaginatedProductsData {
  products: Product[];
  pagination: PaginationInfo;
  totalCount: number;
  hasMore: boolean;
}
