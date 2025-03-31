"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ITEM_PER_PAGE } from "./lib/settings";

// interface PaginationProps {
//   page: number;
//   count: number;
//   nextPage: () => void;
//   prevPage: () => void;
// }

const Pagination = ({ page, count }: { page: number; count: number }) => {
  // const [page, setPage] = useState(0);
  // const [limitPage, setLimitPage] = useState(10);

  // const handlePageChange = (status: boolean) => {
  //   if (status === true) {
  //     setPage(page + 1);
  //   } else if (status === false) {
  //     setPage(page - 1);
  //   }
  // };

  // console.log(props.count);

  return (
    <>
      <div className="flex justify-between items-center w-[400px] mt-3">
        {/* <button onClick={() => handlePageChange(false)}>
          <ArrowLeft
            size={"30px"}
            className="p-2 bg-gray-200 rounded-md border-black rounded-2 hover:bg-gray-400"
          />
        </button> */}

        {/* page {page} of {limitPage}
        <button onClick={() => handlePageChange(true)}>
          <ArrowRight
            size={"30px"}
            className="p-2 bg-gray-200 rounded-md border-black rounded-2 hover:bg-gray-400"
          />
        </button> */}
        <button
          disabled
          className="py-2 px-4 rounded-md text-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className={`${
                    pageIndex === page ? "bg-blue-300" : ""
                  } bg-lamaSky`}
                  key={pageIndex}
                >
                  {pageIndex}
                </button>
              );
            }
          )}

          <button className="px-2 rounded-sm bg-gray-200">1</button>
        </div>

        <button
          disabled
          className="py-2 px-4 rounded-md text-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
