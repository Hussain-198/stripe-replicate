import { motion } from "framer-motion";
import { useState } from "react";
import InputFields from "../components/InputFields";
import "../pages/Signup";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 hide-below-880 -z-4">
        <div className="absolute top-0 left-[10%] w-px h-full border border-gray-100"></div>
        <div className="absolute top-0 left-[30%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[50%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[70%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[90%] w-px h-full border border-gray-100"></div>
      </div>
      <div className="mt-4 ml-40">
        <span
          className="text-2xl font-bold text-white font-sans tracking-tight"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.04em" }}
        >
          stripe
        </span>
      </div>
      <div>
        <motion.div
          className="fixed left-0 top-0 w-full h-90 -z-3 pointer-events-none"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0% 100%)",
            background:
              "linear-gradient(90deg, #ff6a00, #ee0979, #43cea2, #185a9d)",
            backgroundSize: "200% 200%",
            opacity: 0.9,
          }}
        />
      </div>
      <div className="flex flex-col w-full z-10 justify-center items-center mt-10">
        <form className="bg-white border border-gray-200 rounded-md shadow-xl pt-8 pb-0.5 w-xl flex flex-col item gap-2">
          <h1 className="text-2xl font-bold text-left text-gray-600 pl-19 mb-2 mt-6">
            Sign in to your account
          </h1>
          <div className="px-10 flex flex-col gap-4">
            <InputFields divId="email" label="Email" type="email" />
            <div className="flex flex-col gap-2 px-10">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[#635bff] text-sm font-medium hover:text-black"
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#635bff]"
              />
              <div className="flex items-center mt-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="accent-[#635bff] w-3 h-3"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-gray-600 font-medium text-sm"
                >
                  Remember me on this device
                </label>
              </div>
            </div>
          </div>
          <div className="w-full px-20 mt-2">
            <button
              type="submit"
              className="w-full bg-[#635bff] text-white p-3 rounded text-base shadow-sm hover:bg-[#7a6fff] transition"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center my-2 px-20">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-4 text-gray-400 font-medium text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-0">
            <div className="w-full px-20 mb-2">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-1 border border-gray-300 shadow-md rounded-lg py-2 px-4 bg-white text-gray-800 font-medium text-base transition hover:border-black"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="w-6 h-6"
                />
                Sign in with Google
              </button>
            </div>
            <div className="w-full px-20 mb-2">
              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 shadow-md rounded-lg py-2 px-4 bg-white text-gray-800 font-medium text-base transition hover:border-black"
              >
                Sign in with passkey
              </button>
            </div>
            <div className="w-full px-20 mb-2">
              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 shadow-md rounded-lg py-2 px-4 bg-white text-gray-800 font-medium text-base transition hover:border-black"
              >
                Sign in with SSO
              </button>
            </div>
            <div className="w-full px-0.5 mt-8">
              <div className=" bg-gray-50 rounded-md py-6 text-center text-gray-600 text-sm shadow-sm ">
                New to stripe?{" "}
                <a
                  href="#"
                  className="text-[#635bff] text-sm hover:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Create account
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="flex items-start justify-center mt-6">
          <div className="flex items-start px-6 py-4 w-xl">
            <svg
              className="w-4 h-4 text-gray-400 mt-0.5  mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="8"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M7 11V7a5 5 0 0110 0v4"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              Only install browser extensions from companies you trust.
              Malicious browser extensions can compromise your security by
              reading your passwords.
            </span>
          </div>
        </div>
      </div>
      <div className="flex mx-50 py-10 h-32 z-10 text-gray-600">
        <span className="text-sm py-10 font-medium">
          &copy; Stripe &nbsp; <a href="#">Privacy & terms</a>
        </span>
      </div>
    </div>
  );
}

export default Signin;
