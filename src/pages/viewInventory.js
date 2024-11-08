import React, { useEffect, useState } from "react";

import { MdSearch } from "react-icons/md";
import { useFormData } from "../context/productContext";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ProductDetails = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const { formData } = useFormData();
  useEffect(() => {
    console.log("Form Data: ", formData); // Log the form data to the console
  }, [formData]);
  const orders = [
    {
      id: 1,
      orderDate: "12 Aug 2022 - 12:25 am",
      orderType: "Home Delivery",
      unitPrice: "₦25,000.00",
      qty: 2,
      discount: "₦0.00",
      orderTotal: "₦50,000.00",
      status: "Completed",
    },
    {
      id: 1,
      orderDate: "12 Aug 2022 - 12:25 am",
      orderType: "Home Delivery",
      unitPrice: "₦25,000.00",
      qty: 2,
      discount: "₦0.00",
      orderTotal: "₦50,000.00",
      status: "Completed",
    },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orders.map((order) => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (id) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((orderId) => orderId !== id)
        : [...prevSelected, id]
    );
  };
  return (
    <>
      <div className="flex items-center justify-between  mt-1 p-4 rounded-lg ">
        <div className="lg:flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 hidden">
          <h2 className="text-lg font-semibold text-center sm:text-left">
            Polo T-Shirt
          </h2>
          <p className="text-gray-500 text-center sm:text-left">
            Date Added 12 Sept 2022 - 12:55 pm
          </p>
          <div className="flex items-center flex-col sm:flex-row sm:items-center sm:space-x-1 space-y-2 sm:space-y-0 sm:justify-start">
            <span className="text-gray-500">Product URL</span>
            <a
              href="https://1nancystores.com/polo-t-shirt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              1nancystores.com/polo-t-shirt
            </a>
            <button className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16h8m-4-4v8M5 12h14m-4-4H5m0 4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center  text-center lg:hidden w-full text-2xl">
          <h2 className="">Inventery Summary</h2>
        </div>
        <div className="lg:flex space-x-2 hidden">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
            Edit Product
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Unpublish Product
          </button>
        </div>
      </div>
      <div className="w-full  mx-auto pr-4 pl-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex border border-gray-300 rounded-lg  text-white">
            <div className="flex justify-center items-center">
              <img
                src="/Images/shirt.svg"
                alt="not found"
                className="w-32 object-contain p-2"
              />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="mb-4 flex justify-between ">
              <p>
                Last Order :<span>12 Sep 2024</span>
              </p>
              <p className="bg-green-300 p-1 rounded-lg">Published</p>
            </div>
            <div className="flex justify-start gap-20 items-start">
              <div className="flex flex-col items-start">
                <div className="text-sm text-[#5E6366] mb-1">Price</div>
                <div className="text-sm ">₦725,000.00</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">In stock</div>
                <div className="text-2xl font-bold text-gray-900">20</div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="mb-4 flex justify-between ">
              <img src="/Images/pie.svg" alt="not found" />
              <p>All time</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start">
                <div className="text-sm text-[#5E6366] mb-1">Totals Orders</div>
                <div className="text-sm font-bold text-gray-900">
                  ₦500,000.00
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="mb-4 flex justify-between ">
              <img src="/Images/eye.svg" alt="not found" />
              <p>All time</p>
            </div>
            <div className="flex justify-start gap-44 items-start">
              <div className="flex flex-col items-start">
                <div className="text-sm text-red-500 mb-1">Views</div>
                <div className="text-2xl font-bold text-gray-900">1200</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">Favourite</div>
                <div className="text-sm font-bold text-gray-900">23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mx-auto pr-4 pl-4 mt-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="mb-4 flex justify-between ">
              <img src="/Images/bag.svg" alt="not found" />
              <p>All Time</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start">
                <div className="text-sm text-red-500 mb-1">All Orders</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">Pending</div>
                <div className="text-2xl font-bold text-gray-900">0</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">Completed</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="mb-4 flex justify-between ">
              <img src="/Images/bag.svg" alt="not found" />
              <p>All Time</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start">
                <div className="text-sm text-red-500 mb-1">cancled</div>
                <div className="text-2xl font-bold text-gray-900">0</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">Returned</div>
                <div className="text-2xl font-bold text-gray-900">0</div>
              </div>

              {/* Star Rating */}
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-500 mb-1">Damaged</div>
                <div className="text-2xl font-bold text-gray-900">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm p-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-4">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">Purchases</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-grow">
              <MdSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
              <span className="mr-2">
                <img src="/Images/filter.svg" alt="not fond" />
              </span>
              <span className="mr-1">Filter</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
              <span className="mr-2">
                <img src="/Images/calendar.svg" alt="not fond" />
              </span>
              <span className="mr-1">Filter</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
              <span className="mr-2">
                <img src="/Images/send.svg" alt="not fond" />
              </span>
              <span className="mr-1">Share</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
              <span className="mr-2">Bulk Action</span>
              <ChevronDown />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedOrders.length === orders.length}
                    className="w-4 h-4 rounded-lg"
                  />
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Order Date</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Order Type</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-2">Unit Price</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Qty</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Discount</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Order Total</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
                <th className="px-4 py-2 text-left font-medium text-[#5E6366]">
                  <div className="flex">
                    <span className="mr-1">Status</span>
                    <img src="/Images/sort.svg" alt="sort" className="mt-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                      className="w-4 h-4 rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2 text-[#83898C]">
                    {order.orderDate}
                  </td>
                  <td className="px-4 py-2 text-[#83898C]">
                    {order.orderType}
                  </td>
                  <td className="px-4 py-2 text-[#83898C]">
                    {order.unitPrice}
                  </td>
                  <td className="px-4 py-2 text-[#83898C]">{order.qty}</td>
                  <td className="px-4 py-2 text-[#83898C]">{order.discount}</td>
                  <td className="px-4 py-2 text-[#83898C]">
                    {order.orderTotal}
                  </td>
                  <td className="px-4 py-2 text-[#83898C]">
                    <span className="px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:hidden   flex flex-col gap-4 mt-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
            Edit Product
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Unpublish Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
