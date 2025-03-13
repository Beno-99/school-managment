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
      const aValue = a[sortColumn as keyof typeof a];
      const bValue = b[sortColumn as keyof typeof b];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortDirection === "asc"
        ? aValue > bValue
          ? 1
          : -1
        : aValue < bValue
        ? 1
        : -1;
    });
  }, [data, sortColumn, sortDirection]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin border-t-transparent" />
      </div>
    );
  }

  useEffect(() => {
    console.log("Table data:", data);
  }, [data]);

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && handleSort(column.key)}
                className={`px-4 py-2 text-center text-sm font-medium text-gray-500 ${
                  column.sortable ? "cursor-pointer hover:bg-gray-100" : ""
                }`}
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
          {/* {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className="px-4 py-2 text-sm text-gray-900"
                >
                  {(() => {
                    const value = row[column.key as keyof typeof row];
                    console.log(`Rendering [${column.key}]:`, value); // Debug log

                    if (column.render) return column.render(value);
                    if (typeof value === "object" && value !== null)
                      return JSON.stringify(value);
                    return value;
                  })()}
                </td>
              ))}
            </tr>
          ))} */}
          {sortedData.map((teacher, index: number) => (
            <tr key={index}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>
                {teacher.subjects?.map((subject: any, subIndex: number) => (
                  <span>
                    {subject.lenght > 1
                      ? `(${teacher.subjects
                          .map((subject) => subject.name)
                          .join(", ")})`
                      : `${subject.name}`}
                    {subIndex}
                  </span>
                ))}
              </td>
              <td>
                {teacher.subjects?.map((subject: any, subIndex: number) => (
                  <span>
                    {subject.lenght > 1
                      ? `(${teacher.subjects
                          .map((subject) => subject.name)
                          .join(", ")})`
                      : `${subject.name}`}
                    {subIndex}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
