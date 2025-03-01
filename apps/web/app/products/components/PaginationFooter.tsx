import React from "react";
import { Button } from "@repo/ui";
import { useSearchParams } from "next/navigation";

interface PaginationFooterProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  isFirstDisabled: boolean;
  isLastDisabled: boolean;
  isLoading: boolean;
}

export function PaginationFooter({
  currentPage,
  totalItems,
  itemsPerPage,
  onPrevPage,
  onNextPage,
  onFirstPage,
  onLastPage,
  isPrevDisabled,
  isNextDisabled,
  isFirstDisabled,
  isLastDisabled,
  isLoading,
}: PaginationFooterProps) {
  const searchParams = useSearchParams();
  const page = searchParams ? Number(searchParams.get("page")) || 1 : 1;
  const limit = searchParams ? Number(searchParams.get("limit")) || 10 : 10;

  // Calculate the range of items being displayed
  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white/95 shadow-sm py-3 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 bg-gray-25 px-4 py-2 rounded-md">
          {totalItems > 0 ? (
            <>
              Showing{" "}
              <span className="font-medium text-gray-700">{startItem}</span> to{" "}
              <span className="font-medium text-gray-700">{endItem}</span> of
              approximately{" "}
              <span className="font-medium text-gray-700">{totalItems}+</span>{" "}
              items
              <span className="ml-2 text-xs text-gray-400">
                (Page {page}, {limit} per page)
              </span>
            </>
          ) : (
            "No items to display"
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Button
              onClick={onFirstPage}
              disabled={isFirstDisabled || isLoading}
              variant="outline"
              size="sm"
              className={`flex items-center justify-center p-1 min-w-[32px] min-h-[32px] rounded-md ${
                isFirstDisabled || isLoading
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Go to first page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </Button>

            <Button
              onClick={onPrevPage}
              disabled={isPrevDisabled || isLoading}
              variant="outline"
              size="sm"
              className={`flex items-center justify-center p-1 min-w-[32px] min-h-[32px] rounded-md ${
                isPrevDisabled || isLoading
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Go to previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
          </div>

          <div className="flex items-center justify-center bg-blue-50 text-blue-700 font-medium rounded-full w-8 h-8">
            {page}
          </div>

          <div className="flex items-center space-x-1">
            <Button
              onClick={onNextPage}
              disabled={isNextDisabled || isLoading}
              variant="outline"
              size="sm"
              className={`flex items-center justify-center p-1 min-w-[32px] min-h-[32px] rounded-md ${
                isNextDisabled || isLoading
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-blue-50 text-blue-600"
              }`}
              aria-label="Go to next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>

            <Button
              onClick={onLastPage}
              disabled={isLastDisabled || isLoading}
              variant="outline"
              size="sm"
              className={`flex items-center justify-center p-1 min-w-[32px] min-h-[32px] rounded-md ${
                isLastDisabled || isLoading
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-blue-50 text-blue-600"
              }`}
              aria-label="Go to last page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7m-8-14l7 7-7 7"
                />
              </svg>
            </Button>
          </div>

          <Button
            onClick={onNextPage}
            disabled={isNextDisabled || isLoading}
            variant="primary"
            size="md"
            className={`flex items-center ${
              isNextDisabled || isLoading ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
