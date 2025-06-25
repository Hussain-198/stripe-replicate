import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
];

export default function CountryDropdown({
  value,
  onChange,
  label = "Country",
}) {
  const [open, setOpen] = useState(false);
  const selected = countries.find((c) => c.code === value) || countries[0];

  return (
    <div className="flex flex-col gap-2 pl-10 pr-10">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
        {label}
        <div className="relative group inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="white"
            />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="12"
              fill="#6366f1"
              fontFamily="Arial"
              fontWeight="bold"
            >
              i
            </text>
          </svg>
          <div
            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-[320px] bg-white text-gray-800 text-base shadow-2xl rounded-2xl px-6 py-4 z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 border border-gray-200 text-left select-none font-medium"
            style={{
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.4",
              boxShadow: "0 8px 32px 0 rgba(60,72,88,0.15)",
            }}
          >
            <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
              <div
                className="w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45 shadow-sm"
                style={{ boxShadow: "0 2px 8px 0 rgba(60,72,88,0.10)" }}
              ></div>
            </div>
            Select the country or region where your business is incorporated. If
            you're an individual, select where you're doing business from.
          </div>
        </div>
      </label>
      <div className="relative">
        <button
          type="button"
          className="w-full flex items-center justify-between border border-gray-300 shadow-md rounded-lg px-4 py-2 text-gray-700 text-sm bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="flex items-center gap-2">
            <span className="text-xl">{selected.flag}</span>
            <span>{selected.name}</span>
          </span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
            >
              {countries.map((country) => (
                <li
                  key={country.code}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                    value === country.code ? "bg-blue-100" : ""
                  }`}
                  onClick={() => {
                    onChange(country.code);
                    setOpen(false);
                  }}
                >
                  <span className="text=xl">{country.flag}</span>
                  <span>{country.name}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
