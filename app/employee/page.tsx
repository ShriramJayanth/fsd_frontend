"use client";

import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  dateOfJoining: string;
}

export default function employee() {
  const [Employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://13.126.171.179:3003/employee/employees"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="bg-gray-700 h-[100vh] w-[100%]">
      <NavBar currentPage="view" />
      <hr className="h-[1%]"></hr>
      <div className="h-[89%] flex items-center justify-center">
        <div className="h-[90%] w-[90%] outline overflow-x-auto">
          <div className="h-[7%] w-[100%] flex flex-row justify-between items-center">
            <div className="h-[100%] w-[10%] flex justify-center items-center outline">
              ID
            </div>
            <div className="h-[100%] w-[15%] flex justify-center items-center outline">
              FirstName
            </div>
            <div className="h-[100%] w-[15%] flex justify-center items-center outline">
              SecondName
            </div>
            <div className="h-[100%] w-[20%] flex justify-center items-center outline">
              Email
            </div>
            <div className="h-[100%] w-[15%] flex justify-center items-center outline">
              Department
            </div>
            <div className="h-[100%] w-[15%] flex justify-center items-center outline">
              Role
            </div>
            <div className="h-[100%] w-[10%] flex justify-center items-center outline">
              DateOfJoining
            </div>
          </div>
          {Employees.map((item, index) => (
            <div
              key={index}
              className="h-[7%] w-[100%] flex flex-row justify-between items-center"
            >
              <div className="h-[100%] w-[10%] flex justify-center items-center outline">
                {item.id}
              </div>
              <div className="h-[100%] w-[15%] flex justify-center items-center outline">
                {item.firstName}
              </div>
              <div className="h-[100%] w-[15%] flex justify-center items-center outline">
                {item.lastName}
              </div>
              <div className="h-[100%] w-[20%] flex justify-center items-center outline">
                {item.email}
              </div>
              <div className="h-[100%] w-[15%] flex justify-center items-center outline">
                {item.department}
              </div>
              <div className="h-[100%] w-[15%] flex justify-center items-center outline">
                {item.role}
              </div>
              <div className="h-[100%] w-[10%] flex justify-center items-center outline">
                {item.dateOfJoining.substring(0, 10)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
