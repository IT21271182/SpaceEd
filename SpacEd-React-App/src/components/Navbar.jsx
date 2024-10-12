import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { doSignOut } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark dark:bg-gray-900 dark:border-t-0 dark:rounded-b-lg fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3.5">
        <Link
          to="/Home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="DesignerCropped.png" className="h-10" alt="SpacEd Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            SpacEd
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 6H3V5h18v1zM21 11H3v1h18v-1zM21 17H3v1h18v-1z"
                />
              </svg>
            </button>
          </div>
          <Link
            onClick={() => {
              doSignOut().then(() => {
                navigate("/");
              });
            }}
            className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log Out
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:items-center md:justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/Home"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 px-3  dark:bg-gray-900 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <Dropdown label="APOD" inline>
                <Dropdown.Item>
                  <Link
                    to="/APOD"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Today's APOD
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/SingleDayAPOD"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    One-Day APOD
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/DateRangeAPOD"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Date Range APOD
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li className="block py-2 px-3  dark:bg-gray-900 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <Dropdown label="Mars Rover Photos" inline>
                <Dropdown.Item>
                  <Link
                    to="/LatestPhotos"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Latest Photos
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/Mars"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Filter Photos
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li>
              <Link
                to="/Earth"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Earth Imagine Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
