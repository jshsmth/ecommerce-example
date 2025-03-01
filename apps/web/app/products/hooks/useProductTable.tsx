import { useState } from "react";
import { trpc } from "../../providers";
import { keepPreviousData } from "@tanstack/react-query";

export function useProductTable() {
  const [query, setQuery] = useState({
    limit: 10,
    page: 1,
  });

  const productsQuery = trpc.product.getProducts.useQuery(query, {
    placeholderData: keepPreviousData,
  });

  const handlePrevPage = () => {
    if (!productsQuery.isSuccess) return;

    const newPage = Math.max(1, query.page - 1);
    setQuery({
      ...query,
      page: newPage,
    });
  };

  const handleNextPage = () => {
    if (!productsQuery.isSuccess || !productsQuery.data?.hasMore) return;

    const newPage = query.page + 1;
    setQuery({
      ...query,
      page: newPage,
    });
  };

  const handleChangePageSize = (newLimit: number) => {
    setQuery({
      limit: newLimit,
      page: 1, // Reset to first page when changing page size
    });
  };

  const currentPage = query.page - 1; // Convert to 0-based for display purposes
  const isPrevDisabled = query.page === 1 || productsQuery.isFetching;
  const isNextDisabled =
    productsQuery.isFetching ||
    !productsQuery.isSuccess ||
    !productsQuery.data?.hasMore;

  return {
    data: productsQuery.data,
    isLoading: productsQuery.isLoading,
    handlePrevPage,
    handleNextPage,
    handleChangePageSize,
    isPrevDisabled,
    isNextDisabled,
    currentPage,
    isError: productsQuery.isError,
  };
}
