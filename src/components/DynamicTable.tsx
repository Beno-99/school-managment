"use client";

import { Teacher } from "@/app/teachers/page";
import React, { useEffect, useState } from "react";

type SortDirection = "asc" | "desc";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any) => React.ReactNode;
}

interface Props {
  columns: Column[];
  data: Teacher[];
  className?: string;
  isLoading?: boolean;
}

const Table: React.FC<Props> = ({
  columns,
  data,
  className = "",
  isLoading = false,
}) => {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn as keyof typeof a]; // ✅ Explicitly tell TypeScript
      const bValue = b[sortColumn as keyof typeof b];

      if (aValue === bValue) return 0;

      const compareResult = aValue > bValue ? 1 : -1;
      return sortDirection === "asc" ? compareResult : -compareResult;
    });
  }, [data, sortColumn, sortDirection]);

  const renderCellValue = (value: any): React.ReactNode => {
    // Handle null or undefined
    if (value === null || value === undefined) {
      return '-';
    }
    
    // Handle arrays (like classes, subjects, lessons)
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <div key={index} className="text-xs">
          {typeof item === 'object' ? item.name || JSON.stringify(item) : item}
        </div>
      ));
    }
    
    // Handle objects
    if (typeof value === 'object') {
      return value.name || JSON.stringify(value);
    }
    
    // Return primitive values as is
    return value;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin border-t-transparent" />
      </div>
    );
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={`overflow-x-auto  ${className}`}>
      <table className="min-w-full  bg-white border border-gray-200 ">
        <thead className="bg-gray-50 ">
          <tr>
            {columns &&
              columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={`
                  px-4 py-2 text-center text-sm font-medium text-gray-500
                  ${column.sortable ? "cursor-pointer hover:bg-gray-100" : ""}
                `}
                >
                  <div className="flex items-center gap-2 justify-center">
                    {column.label}
                    {column.sortable && sortColumn === column.key && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {data &&
            data?.map((row: any, rowIndex: React.Key | null | undefined) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-4 py-2 text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(row[column.key])
                      : renderCellValue(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
