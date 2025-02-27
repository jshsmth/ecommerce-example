import { useState } from "react";
import { getProducts } from "../actions";
import { PaginatedProductsData } from "../../../lib/types/product";

export function useProductTable(initialData: PaginatedProductsData) {
  const [data, setData] = useState<PaginatedProductsData>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  // Keep track of the current page data for smooth transitions
  const [displayData, setDisplayData] =
    useState<PaginatedProductsData>(initialData);

  const handlePrevPage = async () => {
    if (data.pagination.offset === 0) return;

    setIsLoading(true);
    const newOffset = Math.max(
      0,
      data.pagination.offset - data.pagination.limit
    );
    try {
      const newData = await getProducts(data.pagination.limit, newOffset);
      setData(newData);
      setDisplayData(newData);
    } catch (error) {
      console.error("Error fetching previous page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = async () => {
    setIsLoading(true);
    try {
      const newData = await getProducts(
        data.pagination.limit,
        data.pagination.nextOffset
      );
      setData(newData);
      setDisplayData(newData);
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePageSize = async (newLimit: number) => {
    setIsLoading(true);
    try {
      const newData = await getProducts(newLimit, 0);
      setData(newData);
      setDisplayData(newData);
    } catch (error) {
      console.error("Error changing page size:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    displayData,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handleChangePageSize,
    isPrevDisabled: data.pagination.offset === 0 || isLoading,
    isNextDisabled: data.products.length < data.pagination.limit || isLoading,
  };
}
