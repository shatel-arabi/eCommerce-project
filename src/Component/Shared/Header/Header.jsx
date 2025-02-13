import React, { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
  
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/home" className="font-bold text-xl">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-bold text-xl">
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
        <NavLink to="/sign-up" className="font-bold text-xl">
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
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL ||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }
            
            onError={(e) => (e.target.src = loading)} 
            // Fallback to the loading image if error occurs
             />
        </div>
      </div>
   
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a >
            {user?.displayName}
            {/* <span  className="badge"></span> */}
          </a>
        </li>
        <li><a>{user?.email}</a></li>
        <li>
          {
            user?.email? <a onClick={logOut}>Logout</a> : <Link to="/login">Sign In </Link>
          }</li>
      </ul>
    </div>
    </div>
  );
};

export default Header;
