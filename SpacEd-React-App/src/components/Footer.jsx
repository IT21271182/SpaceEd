import React from 'react';

export default function Footer() {
  return (
    <footer className="static bottom-0 dark left-0 w-full bg-black dark:bg-opacity-30 rounded-lg shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            SpacEd™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/About" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://api.nasa.gov/"
              className="hover:underline me-4 md:me-6"
            >
              Nasa APIs
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IT21271182"
              className="hover:underline me-4 md:me-6"
            >
              Contact
            </a>
          </li>
          
          
        </ul>
      </div>
    </footer>
  );
}
