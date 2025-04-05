import Link from "next/link";

const AdminNavbar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 space-y-6">
      <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
      <nav>
        <ul className="space-y-3">
          <li><Link href="/" className="block p-3 rounded hover:bg-gray-700">Dashboard</Link></li>
          <li><Link href="/admin/products" className="block p-3 rounded hover:bg-gray-700">Products</Link></li>
          <li><Link href="/orders" className="block p-3 rounded hover:bg-gray-700">Orders</Link></li>
          <li><Link href="/users" className="block p-3 rounded hover:bg-gray-700">Users</Link></li>
          <li><Link href="/admin/reports" className="block p-3 rounded hover:bg-gray-700">Reports</Link></li>
          <li><Link href="/settings" className="block p-3 rounded hover:bg-gray-700">Settings</Link></li>
          <li><a href="#" className="block p-3 rounded bg-red-600 hover:bg-red-700">Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;