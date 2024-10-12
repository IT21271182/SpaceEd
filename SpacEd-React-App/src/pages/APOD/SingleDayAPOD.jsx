import NavBar from "../../components/Navbar";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";
import { useEffect } from "react";

export default function SingleDayAPOD() {
  const [showExplanation, setShowExplanation] = useState(false);

  const [Day, setDay] = useState(new Date());
  const [ApodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch APODs from NASA API
  const fetchApods = async () => {
    if (!Day) {
      alert("Please select the date");
      return;
    }

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${
      Day.toISOString().split("T")[0]
    }`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APODs");
      }
      const data = await response.json();
      setApodData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching APODs:", error);
      setError(error.message);
      setApodData(null); // Clear apod data state if fetching fails
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className=" mt-24 flex justify-center items-center mx-6">
          <div className="">
            <h2 className=" mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Select Your Desired Date for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-500">
                APOD
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center p-2 space-x-4">
                <div date-rangepicker className="flex ">
                  <div className="">
                    <Datepicker
                      selected={Day}
                      autoHide={true}
                      onSelectedDateChanged={(date) => setDay(date)}
                      icon={false}
                    />
                  </div>
                </div>
                <button
                  onClick={fetchApods}
                  className="px-5 py-2.5 text-sm font-medium w-auto text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center bg-white border border-gray-200 rounded-lg shadow ml-6 mr-6 my-6 dark:border-gray-700 dark:bg-gray-800">
          {ApodData && (
            <img
              className="object-fill w-full rounded-t-lg h-96 md:h-auto md:w-2/3 md:rounded-none md:rounded-s-lg p-4a"
              src={ApodData.hdurl}
              alt="APOD Image"
            />
          )}
          <div className="flex flex-col justify-between p-4 leading-normal ">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              APOD :
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {ApodData && ApodData.date} {/* Display Date */}
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {ApodData && ApodData.title} {/* Display Title */}
            </h5>
            <button
              className="px-4 py-2 mt-2 w-auto text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
      </div>
    </>
  );
}
