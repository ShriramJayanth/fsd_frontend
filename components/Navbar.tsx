"use client";

import { useRouter } from "next/navigation";

interface NavBarProps {
  currentPage: string;
}

export default function NavBar({ currentPage }: NavBarProps) {
  const router = useRouter();

  const handleAddEmployeeClick = () => {
    router.push("/");
  };

  const handleViewEmployeesClick = () => {
    router.push("/employee");
  };

  return (
    <div className="h-[10%] w-[100%] flex">
      <div
        onClick={handleAddEmployeeClick}
        className={`h-[100%] w-[10%] flex items-center justify-center cursor-pointer relative transition-all duration-300 ${
          currentPage === "add"
            ? "text-white"
            : "text-gray-400 hover:bg-gray-600"
        }`}
      >
        Add Employee
        {currentPage === "add" && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300"></div>
        )}
      </div>
      <div
        onClick={handleViewEmployeesClick}
        className={`h-[100%] w-[10%] flex items-center justify-center cursor-pointer relative transition-all duration-300 ${
          currentPage === "view"
            ? "text-white"
            : "text-gray-400 hover:bg-gray-600"
        }`}
      >
        View Employees
        {currentPage === "view" && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300"></div>
        )}
      </div>
    </div>
  );
}
