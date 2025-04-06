import React from "react";
import AdminNavbar from "@component/admin/AdminNav";
import AdminHeader from "@component/admin/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      {/* Sidebar Navigation */}
      <AdminNavbar />
      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <AdminHeader />
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
