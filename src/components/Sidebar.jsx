import React from "react";
import { MdHome, MdShoppingBag, MdSell } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#3A4D39] h-screen w-[120px] fixed top-0 left-0 z-10 border-r-2 border-[#3A4D39]">
      <div className="text-2xl font-bold p-5">
        <h1 className="text-[#ECE3CE] text-2xl font-bold">
          Syaf
          <br />
          <b>SHOP</b>
        </h1>
      </div>
      <ul className="font-bold flex flex-col gap-[30px] w-full items-center">
        <li>
          <NavLink
            to="/"
            className="text-[#ECE3CE] hover:text-[#739072] p-[5px]"
          >
            <MdHome size={36} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/produk"
            className="text-[#ECE3CE] hover:text-[#739072] p-[10px]"
          >
            <MdShoppingBag size={36} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jual"
            className="text-[#ECE3CE] hover:text-[#739072] p-[10px]"
          >
            <MdSell size={36} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
