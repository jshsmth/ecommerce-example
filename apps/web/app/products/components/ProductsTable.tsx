"use client";

import { useState } from "react";
import { PaginatedProductsData } from "../../../lib/types/product";
import { getProducts } from "../actions";

interface ProductsTableProps {
  initialData: PaginatedProductsData;
}

export default function ProductsTable({ initialData }: ProductsTableProps) {
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
                value={data.pagination.limit}
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

          {/* Fixed height container to prevent layout shift */}
          <div className="relative min-h-[400px]">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${isLoading ? "opacity-40" : "opacity-100"}`}
            >
              {displayData.products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-medium">{product.title}</h3>
                  <p className="text-gray-600 mt-1">${product.price}</p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Overlay loading indicator */}
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
                disabled={data.pagination.offset === 0 || isLoading}
                className={`px-4 py-2 rounded ${
                  data.pagination.offset === 0 || isLoading
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  data.products.length < data.pagination.limit || isLoading
                }
                className={`px-4 py-2 rounded ${
                  data.products.length < data.pagination.limit || isLoading
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
