import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-[url('https://getwallpapers.com/wallpaper/full/5/5/6/243117.jpg')] bg-gray-800 bg-blend-multiply"
      style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
      <div className="text-white min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-600">
              SpacEd
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Welcome to SpaceEd. SpaceEd is your gateway to the cosmos, where
              we bring the wonders of astronomy and space science directly to
              you.
            </p>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Expand your cosmic knowledge with SpaceEd. Explore astronomy
              pictures, dive into Mars Rover Photos, and discover Earth's beauty
              from space. Join our community of space enthusiasts and unlock the
              secrets of the universe !
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              At SpaceEd, we aim is to ignite curiosity and foster a deep
              appreciation for the cosmos through engaging educational content
              and interactive experiences. We accomplish this by leveraging
              cutting-edge technology and curated content, inspired by the vast
              resources provided by NASA's public APIs.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold dark:text-white mb-4">NASA APIs</h2>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              SpaceEd utilizes NASA's public APIs, including:
            </p>
            <ul className="list-disc pl-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <li>
                Astronomy Picture of the Day (APOD) API: Provides daily
                astronomy pictures and detailed explanations about celestial
                objects.
              </li>
              <li>
                Mars Rover Photos API: Allows users to explore the Martian
                surface through images captured by NASA's rovers.
              </li>
              <li>
                Earth Polychromatic Imaging Camera (EPIC) API: Offers daily
                imagery of Earth from NASA's DSCOVR satellite.
              </li>
            </ul>
            <p className="text-lg mt-4 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              We are grateful for NASA's commitment to sharing valuable
              resources and data with the public, enabling us to create an
              enriching educational experience for our users.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="text-lg font-bold bg-blue-600 text-white px-6 py-3 rounded-md inline-block hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
