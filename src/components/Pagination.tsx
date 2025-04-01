"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ITEM_PER_PAGE } from "./lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  return (
    <>
      <div className="flex justify-between items-center w-[400px] mt-3">
        <button
          disabled={!hasPrev}
          className="py-2 px-4 rounded-md text-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => changePage(page - 1)}
        >
          Prev
        </button>
        <div>
          {Array.from(
            { length: Math.ceil(count / ITEM_PER_PAGE) },
            (_, index) => {
              const pageIndex = index + 1;
              return (
                <button
                  key={pageIndex}
                  onClick={() => changePage(pageIndex)}
                  className={`px-2 rounded-sm ${
                    pageIndex === page ? "bg-blue-300" : ""
                  }`}
                >
                  {pageIndex}
                </button>
              );
            }
          )}
        </div>

        <button
          disabled={!hasNext}
          className="py-2 px-4 rounded-md text-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => changePage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
