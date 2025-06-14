import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, userSignOut, setLoading } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then((result) => setLoading(false))
      .catch((error) => console.log(error));
  };
  const link = [
    <div className="flex gap-8">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/myApply"}>myApply</NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"}>Add Job</NavLink>
      </li>
      <li>
        <NavLink to={"/addedJobList"}>Added Job List</NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="navbar bg-gray-50 border-b border-gray-200 ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">
          <span className="text-green-600">Job</span> Seeker
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              SignOut
            </button>
          </>
        ) : (
          <div className="">
            <Link to={"/register"} className="btn">
              Register
            </Link>
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
