import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa6";
import useCartItem from "../Hooks/useCartItem";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [cart]=useCartItem()
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/dashoboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/ourMenu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Our Shop</Link>
      </li>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">{cart.length}</span>
        <button className="text-2xl mt-1"><FaCartPlus></FaCartPlus> </button>
      </div>
    </>
  );

  const handleLogOut = () => {
    LogOut().then(() => {
      // user logOut successfylly
      toast.success("user LogOut successfully");
    });
  };
  return (
    <div className="bg-[#FCCB05] bg-opacity-70 text-white fixed w-full z-[999] backdrop-blur-xl ">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Spicy Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <>
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a className="justify-between">LogOut</a>{" "}
                  </li>
                </>
              ) : (
                // if no user available
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
