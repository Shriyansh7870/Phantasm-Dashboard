import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-gray-700"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 max-h-full bg-white shadow-lg flex flex-col items-center py-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-[86px] lg:h-full h-full`}
      >
        <div className="flex flex-col items-center space-y-6 w-full h-full">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="/Images/logo.svg" alt="Logo" className="mb-6" />
        </Link>
          <img src="/Images/Category.svg" alt="Category" />
          <img src="/Images/message.svg" alt="Message" />
          <img src="/Images/User.svg" alt="User" />

          {/* Active Folder Icon */}
          <div className="bg-[#5570F1] rounded-md p-2">
            <img src="/Images/Folder.svg" alt="Folder" />
          </div>

          <img src="/Images/mess.svg" alt="Mess" />
          <img src="/Images/Setting.svg" alt="Settings" />

          <div className="flex-grow"></div>
          <div className="space-y-6 mb-6">
            <img src="/Images/headphone.svg" alt="Headphone" />
            <img src="/Images/container.svg" alt="Container" />
            <img src="/Images/back.svg" alt="Back" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-0 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
