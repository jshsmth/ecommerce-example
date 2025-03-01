import React from "react";
import { Button } from "@repo/ui";
import { useSearchParams } from "next/navigation";

interface PaginationFooterProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  isLoading: boolean;
}

export function PaginationFooter({
  currentPage,
  totalItems,
  itemsPerPage,
  onPrevPage,
  onNextPage,
  isPrevDisabled,
  isNextDisabled,
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
        <div className="flex space-x-3">
          <Button
            onClick={onPrevPage}
            disabled={isPrevDisabled || isLoading}
            variant="secondary"
            size="md"
            className={`flex items-center ${
              isPrevDisabled || isLoading
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
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
            Previous
          </Button>
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
