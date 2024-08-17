import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCart } from "react-use-cart";
import { FiHome, FiUser, FiShoppingCart, FiAlignLeft } from "react-icons/fi";

import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import { SidebarContext } from "@context/SidebarContext";
import CategoryDrawer from "@component/drawer/CategoryDrawer";

const MobileFooter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer, toggleCategoryDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <>
      <Mobile toggleCartDrawer={toggleCartDrawer} totalItems={totalItems} />
    </>
  );
};

function Mobile({ toggleCartDrawer, totalItems }) {
  return (
    <footer className="lg:hidden fixed z-30 top-16 opacity-15 flex items-center justify-between w-full h-16 px-3 sm:px-10">
      <Link href="/">
        <a className="mr-3 lg:mr-12 xl:mr-12 md:hidden lg:block">
          <Image
            width={110}
            height={40}
            src="/logo/everlia-logo.png"
            alt="logo"
          />
        </a>
      </Link>

      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="text-xl text-white" rel="noreferrer" aria-label="Home">
            <button className="text-white px-2 py-2 text-[14px] mr-4 bg-slate-900 rounded">
              Vendor/Resellers
            </button>
          </a>
        </Link>

        <button
          onClick={toggleCartDrawer}
          className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg"
        >
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            {totalItems}
          </span>
          <FiShoppingCart color="#1E1E1E" className="w-6 h-6 drop-shadow-xl" />
        </button>
      </div>
    </footer>
  );
}

export default dynamic(() => Promise.resolve(MobileFooter), { ssr: false });
