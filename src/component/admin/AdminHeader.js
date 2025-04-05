import React from "react";

const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
    </header>
  );
};

export default AdminHeader;
