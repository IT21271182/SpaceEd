import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the home page
    navigate("/Register");
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate("/Login");
  };

  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-[url('https://getwallpapers.com/wallpaper/full/5/b/3/242138.jpg')] bg-gray-500 bg-blend-multiply h-screen"
      style={{
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Discover the Space with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-600">
            SpacEd
          </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          We ignite curiosity for the cosmos through curated content and
          interactive experiences
          <br />
          Explore astronomy pictures, Mars Rover Photos, and Earth's beauty
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            onClick={handleGetStartedClick}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button
            onClick={handleLoginClick}
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}
