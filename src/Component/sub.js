import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Sub = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddProduct = () => {
    navigate("/addProduct");
  };

  return (
    <div>
      {location.pathname === "/" && (
        <div className="flex flex-col sm:flex-row justify-between items-center p-4">
          <h2 className=" text-2xl font-bold text-[#45464E] mb-4 sm:mb-0">
            Inventory Summary
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
            onClick={handleAddProduct}
          >
            <FaPlus className="mr-2" />
            Add a New Product
          </button>
        </div>
      )}
    </div>
  );
};

export default Sub;
