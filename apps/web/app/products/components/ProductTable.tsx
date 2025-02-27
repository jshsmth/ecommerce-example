"use client";

import { ProductCard } from "./ProductCard";
import { PaginatedProductsData } from "../../../lib/types/product";
import { useProductTable } from "../hooks/useProductTable";

interface ProductsTableProps {
  initialData: PaginatedProductsData;
}

export function ProductsTable({ initialData }: ProductsTableProps) {
  const {
    displayData,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handleChangePageSize,
    isPrevDisabled,
    isNextDisabled,
  } = useProductTable(initialData);

  return (
    <div>
      {displayData?.products && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="flex items-center space-x-2">
              <label htmlFor="pageSize" className="text-sm">
                Items per page:
              </label>
              <select
                id="pageSize"
                className="border rounded px-2 py-1 text-sm"
                value={displayData.pagination.limit}
                onChange={(e) => handleChangePageSize(Number(e.target.value))}
                disabled={isLoading}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${isLoading ? "opacity-40" : "opacity-100"}`}
            >
              {displayData.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-600">
              Showing items {displayData.pagination.offset + 1} to{" "}
              {displayData.pagination.offset + displayData.products.length}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={isPrevDisabled}
                className={`px-4 py-2 rounded ${
                  isPrevDisabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={isNextDisabled}
                className={`px-4 py-2 rounded ${
                  isNextDisabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
