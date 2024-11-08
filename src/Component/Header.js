import React from "react";
import Sub from "./sub";

const Header = () => {
  return (
    <>
      <div className="w-full bg-white shadow-lg xl:sticky fixed lg:sticky md:block top-0 z-30">
        <header className="flex justify-between items-center px-4 py-3">
          <h1 className="text-2xl font-bold hidden md:block">Inventory</h1>

          <div className="flex items-center gap-2 w-full md:w-auto lg:justify-between justify-end">
            <button className="px-4 py-2 bg-gray-200 rounded-md hidden md:flex items-center">
              Nanny's Shop
              <svg
                className="w-3 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="mt-1 ">
              <img
                src="/Images/Notification.svg"
                alt="Notification"
                className="w-6 h-6"
              />
            </div>
            <div className="mt-1 ">
              <img
                src="/Images/profile.svg"
                alt="Profile"
                className="w-8 h-8 md:ml-0 ml-auto"
              />
            </div>
          </div>
        </header>
      </div>
      <div className="mt-14 lg:mt-2">
        <Sub />
      </div>
    </>
  );
};

export default Header;
