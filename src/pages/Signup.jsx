import { useState } from "react";
import InputFields from "../components/InputFields";
import CountryDropdown from "../components/CountryDropdown";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [country, setCountry] = useState("HR");
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 hide-below-880">
        <div className="absolute top-0 left-[10%] w-px h-full border border-gray-100"></div>
        <div className="absolute top-0 left-[30%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[50%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[70%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[90%] w-px h-full border border-gray-100"></div>
      </div>
      <nav className="w-full flex items-center h-20 border-b border-dashed border-gray-200 px-12">
        <span
          className="text-3xl font-bold pl-28 text-gray-800 font-sans tracking-tight"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.04em" }}
        >
          stripe
        </span>
      </nav>
      <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-stretch md:justify-start">
        {/* left side */}
        <div className="hidden md:flex flex-col flex-wrap px-36 mt-15 w-1/2 border-r border-l border-gray-200 z-2 hide-below-880">
          <div className="space-y-10">
            <div className="flex items-start gap-2">
              <span className="mt-1 w-1 h-5 bg-indigo-500 rounded-full block"></span>
              <div>
                <h2 className="font-semibold text-md mb-1">
                  Get started quickly
                </h2>
                <p className="text-gray-600 text-base">
                  Integrate with developer-friendly APIs or choose low-code or
                  pre-built solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 w-1 h-5 bg-indigo-500 rounded-full block"></span>
              <div>
                <h2 className="font-semibold text-md mb-1">
                  Support any business model
                </h2>
                <p className="text-gray-600 text-base">
                  E-commerce, subscriptions, SaaS platforms, marketplaces, and
                  more – all within a unified platform.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 w-1 h-5 bg-indigo-500 rounded-full block"></span>
              <div>
                <h2 className="font-semibold text-md mb-1">
                  Join millions of businesses
                </h2>
                <p className="text-gray-600 text-base">
                  Stripe is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col w-full z-10 md:items-start md:justify-items-start md:w-1/2 min-h-[calc(100vh-5rem)]">
          <form
            className="bg-white border border-gray-200 rounded-md shadow-xl pt-8 pb-0.5 w-[576px] flex flex-col item gap-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold text-left text-gray-600 pl-19 mb-2">
              Create your Stripe account
            </h1>
            <div className="px-10 flex flex-col gap-4">
              <InputFields divId="email" label="Email" type="email" />
              <InputFields divId="username" label="Full name" type="text" />
              <InputFields divId="password" label="Password" type="password" />
              <CountryDropdown
                label="Country"
                value={country}
                onChange={setCountry}
              />
            </div>
            <div className="w-full px-20 mt-2">
              <button
                type="submit"
                className="w-full bg-[#635bff] text-white p-2 rounded font-semibold text-base shadow-sm hover:bg-[#7a6fff] transition"
              >
                Create account
              </button>
            </div>
            <div className="flex items-center my-2 px-20">
              <div className="flex-grow h-px bg-gray-200"></div>
              <span className="mx-4 text-gray-400 text-xs">OR</span>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="w-full px-20 mb-2">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 bg-white text-gray-800 font-medium text-base hover:bg-gray-50 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="w-6 h-6"
                />
                Sign up with Google
              </button>
            </div>
            <div className="w-full px-0.5">
              <div className=" bg-gray-50 rounded-md py-6 text-center text-gray-500 text-sm shadow-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-[#635bff] font-semibold hover:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signin");
                  }}
                >
                  Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <motion.div
        className="fixed left-0 bottom-0 w-full h-90 z-3 pointer-events-none"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          clipPath: "polygon(0 90%, 100% 0, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(90deg, #ff6a00, #ee0979, #43cea2, #185a9d)",
          backgroundSize: "200% 200%",
          opacity: 0.9,
        }}
      />
      <div className="flex mx-50 py-10 h-32 z-10">
        <span className="text-white text-xs py-10 font-medium">
          &copy; Stripe &nbsp;{" "}
          <a href="#" className="underline">
            Privacy & terms
          </a>
        </span>
      </div>
    </div>
  );
}

export default Signup;
