import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const navigate = useNavigate();

  const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      // doSendEmailVerification()
    }
    // navigate("/Home");
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  const handleSignUpClick = () => {
    // Navigate to the register page
    navigate("/Register");
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/Home"} replace={true} />}
      <section
      className="bg-center bg-no-repeat bg-cover bg-[url('https://getwallpapers.com/wallpaper/full/5/b/3/242138.jpg')] bg-gray-500 bg-blend-multiply"
      style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center justify-center py-8 mx-2 md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-10 h-10 mr-4" src="/DesignerCropped.png" alt="logo" />
            <h4 className="text-2xl font-bold dark:text-white"> SpacEd Login</h4>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-80">
            <div className="space-y-4 md:space-y-4 sm:p-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back !
              </h1>
              <form onSubmit={handleSubmit} action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {errorMessage && (
                  <span className="text-red-600 font-bold">{errorMessage}</span>
                )}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium dark:text-gray-500 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isSigningIn}
                  className="w-full  text-white rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900  bg-primary-600 hover:bg-primary-700  focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isSigningIn ? "Signing In..." : "Sign In"}
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  type="button"
                  onClick={handleSignUpClick}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </button>
              </p>
              <div className="flex flex-row text-center w-full">
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-3/4 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700  dark:bg-opacity-80" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2  bg-white left-1/2 dark:text-white dark:bg-gray-800">
                    or
                  </span>
                </div>
              </div>
              <button
                disabled={isSigningIn}
                onClick={(e) => {
                  onGoogleSignIn(e);
                }}
                className={`w-full dark:bg-gray-700 dark:border-gray-600 text-white dark:hover:text-gray-800 flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
                  isSigningIn
                    ? "cursor-not-allowed"
                    : "hover:bg-gray-100 transition duration-300 active:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {isSigningIn ? "Signing In..." : "Continue with Google"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
