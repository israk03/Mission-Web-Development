import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Result } from "postcss";

export default function Header() {
  const { user, signOutUser } = useContext(AuthContext);

  // sign out user
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successfully.");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink to="login">Login</NavLink>
      </li>
      <li>
        <NavLink to="register">Register</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="orders">Orders</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">AUTH MOHA MILON</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <a className="btn">{user?.email}</a>
            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}