"use client";
import React from "react";
import { useParams } from "next/navigation";
import Card from "@/components/ui/card";
import Progress from "@/components/ui/progress";
import Image from "next/image";

const Students = () => {
  const { id } = useParams();

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-[88vw]">
      <div className="grid grid-cols-4 gap-6 ">
        <Card className="col-span-1 p-4 bg-white shadow rounded-2xl">
          <div className="flex items-center gap-4">
            <Image
              src="/avatar.jpg"
              alt="Student"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{`Cameron Moran${id}`}</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p>Email: user@gmail.com</p>
            <p>Class: 6A</p>
            <p>Lessons: 18</p>
          </div>
        </Card>

        <Card className="col-span-3 p-4 bg-white shadow rounded-2xl">
          <h3 className="text-lg font-semibold">Student's Schedule</h3>
          <div className="grid grid-cols-6 gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-16 bg-white border rounded-md"></div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <Card className="col-span-1 p-4 bg-white shadow rounded-2xl">
          <h3 className="text-lg font-semibold">Performance</h3>
          <Progress value={92} className="mt-4" />
          <p className="text-center mt-2 text-xl font-bold">9.2</p>
        </Card>
        <Card className="col-span-3 p-4 bg-white shadow rounded-2xl">
          <h3 className="text-lg font-semibold">Announcements</h3>
          <div className="mt-4 space-y-2">
            <div className="p-2 bg-gray-100 rounded">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="p-2 bg-gray-100 rounded">
              Another announcement text.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Students;
