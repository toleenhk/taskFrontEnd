import React from "react";
import { useState } from "react";
import { FiRepeat } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-white font-al ">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto sm:px-8 py-2  relative">
        <NavLink to="/" className="flex items-center">
          <img
            src="/image/Group 165.png"
            className="h-6 mr-3"
            alt="Flowbite Logo"
          />
        </NavLink>
        <NavLink
          to="/"
          data-collapse-toggle="navbar-multi-level"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </NavLink>
        <div
          className="hidden w-full  md:block md:w-auto z-50"
          id="navbar-multi-level"
        >
          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 text-gray-500 md:flex-row md:space-x-8 md:mt-0 ">
            <nav
              onClick={toggleDropdown}
              className="cursor-pointer mb-0 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
            >
              <div
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4   border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto "
              >
                Research{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </NavLink>
                  </li>
                </ul>
                <div className="py-1">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </NavLink>
                </div>
              </div>
            </nav>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "  text-blue-700  "
                  : " mb-0 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              }
              activeclassname="text-blue-700"
            >
              Solutions
            </NavLink>

            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "  text-blue-700 "
                  : " mb-0 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              }
            >
              Guides
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "  text-blue-700 "
                  : " mb-0 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              }
            >
              For Vendors
            </NavLink>
            <li>
              <button
                type="button"
                className=" text-white flex flex-row items-center align-middle gap-2 bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                <span>Compare</span>
                <FiRepeat />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
