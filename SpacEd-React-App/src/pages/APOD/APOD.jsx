import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";
import { useEffect } from "react";

export default function APOD() {
  const [showExplanation, setShowExplanation] = useState(false);

  //API Data fetch
  const [ApodData, setApodData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setApodData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setApodData(apiData);
        console.log("DATA\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIData();
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSearch = () => {
    // Add your search functionality here
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto flex items-center bg-white border border-gray-200 rounded-lg shadow ml-6 mr-6 mt-24 mb-6 dark:border-gray-700 dark:bg-gray-800">
        {ApodData && (
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-2/3 md:rounded-none md:rounded-s-lg p-4a"
            src={ApodData.hdurl}
            alt="APOD Image"
          />
        )}
        <div className="flex flex-col justify-between p-4 leading-normal ">
          <h5 className="mb-2 text-4xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-500">
              APOD :
            </span>
          </h5>
          <h5 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Astronomy Picture of the Day
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {ApodData && ApodData.date} {/* Display Date */}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ApodData && ApodData.title} {/* Display Title */}
          </h5>
          <button
            name="Read More"
            className="px-4 py-2 mt-2 w-1/3 text-base font-medium  text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            {showExplanation ? "Close" : "Read More"}
          </button>
        </div>
      </div>
      {showExplanation && (
        <div className="fixed top-0 rounded-lg right-0 w-1/2 h-full z-50 bg-black bg-opacity-50 ">
          <div className="my-auto rounded-lg mt-20 w-full dark:border-gray-700 dark:bg-gray-800 font-normal text-gray-700 dark:text-gray-400 border border-gray-200 h-auto p-4">
            <button
              className="absolute top-4 p-2 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={() => setShowExplanation(false)}
            >
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-gray-700 font-light dark:text-white text-justify">
              <h6 className="font-bold p-2 mt-6"> Explanation </h6>
              <p className="p-2 mb-6 text-base text-gray-500 dark:text-gray-400">
                {ApodData && ApodData.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
