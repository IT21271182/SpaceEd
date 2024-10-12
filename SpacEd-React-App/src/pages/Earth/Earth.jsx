import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../components/Navbar";
import { Carousel } from "flowbite-react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Earth() {
  const [slides, setSlides] = useState([
    { url: "" }, // Initial state with an empty URL
    { url: "" }, // Initial state with an empty URL
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [photos, setPhotos] = useState([]);
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  
  }, [currentIndex]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPhotos(data);

      // Extracting the image URLs from the fetched data and storing them in the slides state
      const imageUrls = data.map(photo => ({
        url: `https://epic.gsfc.nasa.gov/archive/natural/${photo.date.split(" ")[0].replace(/-/g, "/")}/png/${photo.image}.png`
      }));
      setSlides(imageUrls);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };


  const photoGridRef = useRef(null);

  const scrollToPhotoGrid = () => {
    photoGridRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar />

      <div className="grid md:grid-cols-2 pt-5 mt-5 mb-5">
        <div className="p-8 md:p-12 h-[650px] w-[650px] mx-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-12 p-8 md:p-12 bg-white border h-auto border-gray-200  dark:border-gray-700 dark:bg-gray-800 rounded-lg my-auto px-4">
          <h5 className="mb-4 text-4xl dark:text-white font-bold tracking-tight">
            Earth Imaging Gallery
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-500">
              EPIC
            </span>
          </h5>
          <p className="text-lg font-normal  text-gray-500 dark:text-gray-400 mb-4 text-justify">
            This gallery provides information on the daily images collected by
            DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument by
            NASA. Uniquely positioned at the Earth-Sun Lagrange point, EPIC
            provides full disc imagery of our planet, offering breathtaking
            views of Earth from space. EPIC captures unique perspectives of
            certain astronomical events such as lunar transits.
          </p>
          <button
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={scrollToPhotoGrid}
          >
            View Images
            <svg
              className="w-6 h-6 ms-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div ref={photoGridRef} className="grid grid-cols-2 md:grid-cols-6 mt-0 gap-4 m-6">
        {photos.map((photo, index) => (
          <div key={index}>
            <div className="bg-white border h-auto border-gray-200  dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md">
              <img
                className="h-auto max-w-full rounded-t-lg"
                src={`https://epic.gsfc.nasa.gov/archive/natural/${photo.date
                  .split(" ")[0]
                  .replace(/-/g, "/")}/png/${photo.image}.png`}
                alt="EPIC img"
              />
              <div className="p-4 flex justify-center items-center">
                <p className="mx-auto flex justify-center items-center text-gray-800 dark:text-gray-400 font-normal">
                  {photo.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
