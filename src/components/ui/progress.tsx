import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full h-4 overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
