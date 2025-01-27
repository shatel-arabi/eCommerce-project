import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/home" className="font-bold text-2xl">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-bold text-2xl">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-bold text-xl">
          Contact
        </Link>
        {/* <NavLink to="/contact">Contact</NavLink> */}
      </li>
      <li>
        <NavLink to="/sign-up" className="font-bold text-2xl">
          Sign Up
        </NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar justify-between bg-orange-500 ">
      <div className="w-full navbar-start justify-between  md:justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* small device */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-10 md:w-16 h-8 md:h-11 " src={logo} alt="" />
        </Link>
      </div>
      {/* large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
