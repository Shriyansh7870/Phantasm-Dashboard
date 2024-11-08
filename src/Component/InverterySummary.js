import React from "react";

const InventorySummary = ({
  totalProducts,
  activeProducts,
  lowStockAlert,
  expiredProducts,
}) => {
  return (
    <div className="w-full mx-auto px-4">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left Section - Blue Card */}
        <div className="flex-1 bg-blue-500 rounded-lg p-4 text-white">
          <div className="mb-4 flex justify-between items-center">
            <img src="/Images/Folder.svg" alt="Folder icon" />
            
          </div>
          <div className="flex justify-start gap-32 items-center">
          <div >
              <div className="text-sm font-medium ">All Products</div>
              <div className="text-2xl font-bold mt-1">{totalProducts}</div>
            </div>
            <div>
              <div className="text-sm font-medium opacity-90">Active</div>
              <div className="text-2xl font-bold mt-1">
                {activeProducts} <span className="text-sm ml-1">86%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6">
          <div className="mb-6 flex justify-between items-center">
            <img src="/Images/User.svg" alt="User icon" />
            <p className="text-sm md:text-base">This Week</p>
          </div>
          <div className="flex flex-row justify-between">
            {/* Low Stock Alert */}
            <div className="flex flex-col items-start">
              <div className="text-sm text-red-500">Low Stock Alert</div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {lowStockAlert}
              </div>
            </div>

            {/* Expired */}
            <div className="flex flex-col items-start">
              <div className="text-sm text-gray-500">Expired</div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {expiredProducts}
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex flex-col items-start">
              <div className="text-sm text-gray-500">1 Star Rating</div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySummary;
