import React from "react";
import { GoPersonFill } from "react-icons/go";
// import { HiOutlineBell } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded p-2">
          <FiSearch className="text-gray-500" />
          {/* <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none"
          /> */}
        </div>
        
        <button>
          <IoIosNotifications className="text-gray-500" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
        <button className="relative">
          <BsPersonCircle className="text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
