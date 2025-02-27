export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface ProductsData {
  products: Product[];
}

export interface PaginationInfo {
  limit: number;
  offset: number;
  nextOffset: number;
}

export interface PaginatedProductsData extends ProductsData {
  pagination: PaginationInfo;
}
