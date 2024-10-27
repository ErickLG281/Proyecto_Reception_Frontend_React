import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/poshpicks.png";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="w-full py-2 top-0 transition duration-300 ease-in-out z-40 fixed"
    >
      <div className="bg-[#191A1C] px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="flex items-center ml-4 mt-2">
            <img src={Logo} width={200} className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-[#dadada] border-b-2 border-[#191A1C] hover:border-amber-500 mx-4 transition duration-300 ease-in-out"
            >
              Home
            </NavLink>
            <NavLink
              to="/reception/category"
              className="text-lg inline-flex font-medium leading-6 text-[#dadada] border-b-2 border-[#191A1C] hover:border-amber-500 mx-4 transition duration-300 ease-in-out"
            >
              Reception
            </NavLink>
            <NavLink
              to="/about-us"
              className="text-lg inline-flex font-medium leading-6 text-[#dadada] border-b-2 border-[#191A1C] hover:border-amber-500 mx-4 transition duration-300 ease-in-out"
            >
              About Us
            </NavLink>
            <Link
              to="/company/login"
              type="button"
              className="ml-8 inline-flex items-center rounded-md border border-transparent bg-[#e69e00] px-6 py-3 text-base font-bold text-black shadow-sm hover:bg-[#ffb20c] transition duration-300 ease-in-out"
            >
              Company Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
