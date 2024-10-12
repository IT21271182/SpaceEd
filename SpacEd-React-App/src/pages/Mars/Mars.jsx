import NavBar from "../../components/Navbar";
import { useState } from "react";
import React from "react";

export default function Mars() {
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const fetchPhotos = async () => {
    if (!rover || !camera) {
      alert("Please select rover and camera.");
      return;
    }

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${NASA_KEY}&sol=1000&${camera}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPhotos(data.photos);
      setError(null);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setError(error.message);
      setPhotos([]); // Clear photos state if fetching fails
    }

    console.log(photos);
  };

  const renderCameraOptions = () => {
    switch (rover) {
      case "curiosity":
        return (
          <>
            <option value="">Select Camera</option>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mast">Mast Camera</option>
            <option value="chemcam">Chemistry and Camera Complex</option>
            <option value="mahli">Mars Hand Lens Imager</option>
            <option value="mardi">Mars Descent Imager</option>
            <option value="navcam">Navigation Camera</option>
          </>
        );
      case "opportunity":
        return (
          <>
            <option value="">Select Camera</option>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="navcam">Navigation Camera</option>
            <option value="pancam">Panoramic Camera</option>
            <option value="minites">
              Miniature Thermal Emission Spectrometer (Mini-TES)
            </option>
          </>
        );
      case "spirit":
        return (
          <>
            <option value="">Select Camera</option>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="navcam">Navigation Camera</option>
            <option value="pancam">Panoramic Camera</option>
            <option value="minites">
              Miniature Thermal Emission Spectrometer (Mini-TES)
            </option>
          </>
        );
      default:
        return <option value="">Select Camera</option>;
    }
  };

  return (
    <>
      <NavBar />
      <div className=" mt-24 flex justify-center items-center mx-6">
        <div className="">
          <h2 className=" mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Explore Mars Rover Photos: Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-500">
              Rover and Camera
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="flex items-center p-2 space-x-4">
              <div className="flex ">
                <div className="relative mx-4 text-white ">
                  <select
                    id="roverSelect"
                    value={rover}
                    onChange={(e) => setRover(e.target.value)}
                    className=" bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800"
                  >
                    <option value="">Select Rover</option>
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                  </select>
                </div>
                <div className="relative mx-4 text-white">
                  <select
                    id="cameraSelect"
                    value={camera}
                    onChange={(e) => setCamera(e.target.value)}
                    className=" bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800"
                  >
                    {renderCameraOptions()}
                  </select>
                </div>
                <button
                  onClick={fetchPhotos}
                  className="px-5 py-2.5 text-sm font-medium w-auto text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 m-6">
        {photos.map((photo, index) => (
          <div key={index} className="top-0 gap-4 h-auto mt-4 relative">
            <div className="bg-white border h-auto border-gray-200  dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                className="h-auto max-w-full rounded-lg"
                src={photo.img_src}
                alt=""
              />
              <div className="p-4 absolute inset-0 bg-black bg-opacity-50 text-white transition-opacity opacity-0 hover:opacity-100 flex justify-center items-center">
                <h2 className="text-lg font-semibold mb-2">
                  Captured Date : {photo.earth_date}{" "}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
