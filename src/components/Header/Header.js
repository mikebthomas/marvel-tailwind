import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="md:col-span-1 md:flex md:justify-end">
      <nav className="text-right py-2 px-6">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="w-40 md:w-60 lg:w-72">
            <img src={logo} alt="logo" />
          </Link>
          <div
            className="px-4 cursor-pointer md:hidden"
            id="burger"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <ul className={`${showMenu ? "" : "hidden"} md:block`}>
          <li
            className={`text-gray-700 py-1 hover:font-bold ${
              pathname === "/movies" ? "font-bold" : ""
            }`}
          >
            <Link
              to={"/movies"}
              className={`menu-link ${
                pathname === "/movies" ? "border-marvel" : ""
              }`}
            >
              <span className="pr-5">Movies</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </Link>
          </li>
          <li
            className={`text-gray-700 py-1 hover:font-bold ${
              pathname === "/series" ? "font-bold" : ""
            }`}
          >
            <Link
              to={"/series"}
              className={`menu-link ${
                pathname === "/series" ? "border-marvel" : ""
              }`}
            >
              <span className="pr-5">Series</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
