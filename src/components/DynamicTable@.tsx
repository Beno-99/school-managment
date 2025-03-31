import React, { ReactNode } from "react";

interface DynamicProps {
  column: Column[];
  data?: any[];
  className?: string;
  render: () => ReactNode;
}

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}
const DynamicTable1 = (props: DynamicProps) => {
  return (
    <>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          {props.column &&
            props.column.map((col: any, index: number) => (
              <th
                className={`px-4 py-2 text-center text-sm font-medium text-gray-500`}
                key={col.key}
              >
                {col.label}
              </th>
            ))}
        </thead>
        <tbody>{props.render()}</tbody>
      </table>
    </>
  );
};

export default DynamicTable1;
