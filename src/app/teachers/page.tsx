"use client";

import Pagination from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../../utils/apiClient";
import Table from "../../components/DynamicTable@";

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
  bloodType: string;
  img: string;
  sex: string;
  classes: [{ name: string; capacity: number }];
  subjects: [{ name: string; capacity: number }];
  lessons: [{ name: string; capacity: number }];
  createdAt: string;
}

const TeacherPage = () => {
  const [teachersFetch, setTeachersFetch] = useState<Teacher[]>([]);
  const [page, setPage] = useState(1);
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers", page], // Query key includes page number

    queryFn: async () => {
      const response = await apiClient.get(
        `teacher/getAllTeachers?page=${page}`
      );
      console.log("fetched Teachers :", response.data.teachers);
      if (Array.isArray(response.data.teachers)) {
        console.log("stateData :", response.data.teachers);
        setTeachersFetch(response.data.teachers);
      }

      return Array.isArray(response.data.teachers)
        ? response.data.teachers
        : [];
    },
  });
  console.log("stateData :", teachersFetch);
  useEffect(() => {
    if (!Array.isArray(teachersFetch)) {
      console.error("API response is not an array:", teachersFetch);
    }
  }, [teachersFetch]);
  const columns = [
    {
      key: "id",
      label: "ID",
      sortable: true,
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "subjects",
      label: "Subjects",
      sortable: false,
    },
    {
      key: "classes",
      label: "classes",
    },
    {
      key: "phone",
      label: "Phone",
      sortable: false,
    },
    {
      key: "address",
      label: "Address",
      sortable: false,
    },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle edit
            }}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle delete
            }}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const bodyRender = () => (
    <>
      {teachers.map((teacher: Teacher, index: number) => (
        <tr key={index} className="text-center">
          <td>{teacher.id}</td>
          <td>{teacher.name}</td>
          <td>
            {teacher.subjects && teacher.subjects.length > 0
              ? `(${teacher.subjects
                  .map((subject) => subject.name)
                  .join(", ")})`
              : "No Subjects"}
          </td>
          <td>
            {teacher.classes && teacher.classes.length > 0
              ? `(${teacher.classes.map((cls) => cls.name).join(", ")})`
              : "No classes"}
          </td>
          <td>{teacher.phone}</td>
          <td>{teacher.address}</td>
          <td className="flex justify-center gap-3">
            <button className="bg-green-300 py-1 px-3 rounded-xl text-green-900 hover:bg-green-400">
              Edit
            </button>
            <button className="bg-red-300 py-1 px-3 rounded-xl text-red-900 hover:bg-red-400">
              Action
            </button>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="p-6 w-[83vw] ">
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <div className="flex flex-col justify-center text-center items-center">
        <Table
          column={columns}
          render={bodyRender}
          className="rounded-lg shadow "
        />
        {/* <Pagination count={}page={}/> */}
      </div>
    </div>
  );
};

export default TeacherPage;
