import NavBar from "../../components/Navbar";
import React, { useState, useEffect } from "react";

export default function LatestPhotos() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch Photos from NASA API
    const fetchPhotos = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${NASA_KEY}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch APODs");
        }
        const data = await response.json();
        setPhotos(data.latest_photos || []); // Ensure that data.latest_photos is an array, or default to an empty array
        setError(null);
      } catch (error) {
        console.error("Error fetching Photos:", error);
        setError(error.message);
        setPhotos([]);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <NavBar />
      <div className="mt-24">
      <div className="mt-24">
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 m-6">
    {Array.isArray(photos) && photos.map((photo, index) => (
      <div key={index} className="top-0 gap-4 h-auto mt-4 relative">
        <div className="bg-white border h-auto border-gray-200  dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg"
            src={photo.img_src}
            alt=""
          />
          <div className="p-4 absolute inset-0 bg-black bg-opacity-50 text-white transition-opacity opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-2">{photo.rover.name}</h2>
            <p className="text-sm text-gray-200 mb-2">Date: {photo.earth_date}</p>
            <p className="text-sm text-gray-200 mb-2">Camera: {photo.camera.full_name}</p>
            {/* Additional details can be added here */}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </>
  );
}
