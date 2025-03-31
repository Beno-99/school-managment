"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ITEM_PER_PAGE } from "./lib/settings";

interface PaginationProps {
  page: number;
  count: number;
}

const Pagination = (props: PaginationProps) => {
  const [page, setPage] = useState(0);
  const [limitPage, setLimitPage] = useState(10);

  const handlePageChange = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div className="flex justify-between w-[800px] mt-3">
        <button>
          <ArrowLeft
            size={"30px"}
            className="p-2 bg-gray-200 rounded-md border-black rounded-2 hover:bg-gray-400"
          />
        </button>
        <div>
          {Array.from(
            { length: Math.ceil(props.count / ITEM_PER_PAGE) },
            (_, index) => {
              const pageIndex = index + 1;
              return (
                <button
                  className={`${pageIndex === page ? "bg-blue-300" : ""}`}
                  key={pageIndex}
                >
                  {pageIndex}
                </button>
              );
            }
          )}
          <div></div>
        </div>
        {/* page {page} of {limitPage} */}
        <button onClick={handlePageChange}>
          <ArrowRight
            size={"30px"}
            className="p-2 bg-gray-200 rounded-md border-black rounded-2 hover:bg-gray-400"
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
