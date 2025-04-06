import AdminLayout from "@component/admin/AdminLayout";
import React from "react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Orders", value: 152, color: "text-blue-600" },
          { title: "Total Products", value: 87, color: "text-green-600" },
          { title: "Total Users", value: 1245, color: "text-yellow-600" },
          { title: "Revenue", value: "$12,345", color: "text-purple-600" },
        ].map((card, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className={`text-2xl font-semibold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </section>

      {/* Recent Orders Table */}
      <section className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#1234", customer: "John Doe", amount: "$120", status: "Pending", statusColor: "text-yellow-500" },
              { id: "#1235", customer: "Jane Smith", amount: "$95", status: "Shipped", statusColor: "text-green-500" },
            ].map((order, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.customer}</td>
                <td className="border p-2">{order.amount}</td>
                <td className={`border p-2 ${order.statusColor}`}>{order.status}</td>
                <td className="border p-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;
