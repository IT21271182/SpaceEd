import NavBar from "../../components/Navbar";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

export default function DateRangeAPOD() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [apods, setApods] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch APODs from NASA API
  const fetchApods = async () => {
    if (!startDate || !endDate) {
      alert("Please select start and end dates.");
      return;
    }

    console.log(startDate);
    console.log(endDate);

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&start_date=${
      startDate.toISOString().split("T")[0]
    }&end_date=${endDate.toISOString().split("T")[0]}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APODs");
      }
      const data = await response.json();
      setApods(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching APODs:", error);
      setError(error.message);
      setApods([]); // Clear apods state if fetching fails
    }

    console.log(apods);
  };

  return (
    <>
      <NavBar />
      <div>
        <div className=" mt-24 mb-6 flex justify-center items-center mx-6">
          <div className="">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-500">
                APOD
              </span>{" "}
              Date Range
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center p-2 space-x-4">
                <div date-rangepicker className="flex">
                  <div className="relative">
                    <Datepicker
                      selected={startDate}
                      autoHide={true}
                      onSelectedDateChanged={(date) => setStartDate(date)}
                      icon={false}
                    />
                  </div>
                  <span className="mx-4 text-gray-500">to</span>
                  <div className="relative">
                    <Datepicker
                      selected={endDate}
                      autoHide={true}
                      onSelectedDateChanged={(date) => setEndDate(date)}
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

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 m-6">
          {apods.map((apod, index) => (
            <div key={index} className="top-0 gap-4 h-auto mt-4 relative">
              <div className="bg-white border h-auto border-gray-200  dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  className="h-auto max-w-full rounded-t-lg"
                  src={apod.url}
                  alt=""
                />
                <div className="p-4 absolute inset-0 bg-black bg-opacity-50 text-white transition-opacity opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
                  <h2 className="text-xl text-white font-semibold ">{apod.title}</h2>
                  <p className="text-sm text-white">{apod.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
