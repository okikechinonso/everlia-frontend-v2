import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsCircleSquare } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <aside className="h-[100vh] w-64 bg-[#ffffff] text-grey  space-y-6">
      <h2 className="text-[25px] font-bold text-center">Everlia</h2>
      <nav id="admin-nav"  style={{ background: "red" }}>
        <ul className="space-y-3">
          <li>
            <MdDashboard />
            <Link href="/" className="block  rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <BsCircleSquare />
            <Link
              href="/admin/products"
              className="block  rounded hover:bg-gray-700"
            >
              Products
            </Link>
          </li>
          <li>
            <FaTag />
            <Link
              href="/orders"
              className="block  rounded hover:bg-gray-700"
            >
              Orders
            </Link>
          </li>
          <li>
            <FaUsers />
            <Link href="/users" className="block  rounded hover:bg-gray-700">
              Users
            </Link>
          </li>
          <li>
          <SiGoogleanalytics />

            <Link
              href="/admin/reports"
              className="block  rounded hover:bg-gray-700"
            >
              Reports
            </Link>
          </li>
          <li>
            <IoSettingsOutline />
            <Link
              href="/settings"
              className="block  rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <button className="flex items-center px-6 w-full hover:bg-red-700">
        <AiOutlineLogout />
        <a href="#" className="block  rounded">
          Logout
        </a>
      </button>
    </aside>
  );
};

export default AdminNavbar;
