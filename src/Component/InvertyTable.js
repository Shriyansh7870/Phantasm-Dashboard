import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

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

const InventoryTable = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
  });

  const handleCheckboxChange = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const IndentMenu = ({ size = 16, color = "#6E7079" }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.16667H2C1.72667 5.16667 1.5 4.94 1.5 4.66667C1.5 4.39333 1.72667 4.16667 2 4.16667H14C14.2733 4.16667 14.5 4.39333 14.5 4.66667C14.5 4.94 14.2733 5.16667 14 5.16667Z"
        fill="#00092E"
      />
      <path
        d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
        fill="#00092E"
      />
      <path
        d="M9.33341 11.8333H6.66675C6.39341 11.8333 6.16675 11.6067 6.16675 11.3333C6.16675 11.06 6.39341 10.8333 6.66675 10.8333H9.33341C9.60675 10.8333 9.83341 11.06 9.83341 11.3333C9.83341 11.6067 9.60675 11.8333 9.33341 11.8333Z"
        fill="#00092E"
      />
    </svg>
  );

  const SortableHeader = ({ label, sortKey }) => (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => handleSort(sortKey)}
    >
      <span className="mr-2">{label}</span>
      <IndentMenu />
    </div>
  );

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 lg:p-8 overflow-x-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">Inventory Items</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-auto flex-grow">
            <MdSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 " />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="lg:gap-x-1 flex flex-wrap justify-between gap-y-4">
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
      </div>
      <div className="border border-gray-100"></div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 text-left">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedProducts.length === products.length &&
                  products.length > 0
                }
                className="w-4 h-4 rounded-lg text-[#CFD3D4]"
              />
            </th>
            <th className="p-3 text-left text-[#6E7079]"></th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Product Name" sortKey="name" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Category" sortKey="category" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Unit Price" sortKey="unitPrice" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="In-Stock" sortKey="inStock" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Discount" sortKey="discount" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Total Value" sortKey="totalValue" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Action" sortKey="action" />
            </th>
            <th className="p-3 text-left text-[#6E7079]">
              <SortableHeader label="Status" sortKey="status" />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="border-t border-gray-100">
              <td className="p-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                  className="w-4 h-4 rounded-lg text-[#CFD3D4]"
                />
              </td>

              <Link to={"/productDetails"} className="flex items-center mt-1">
                <img
                  src={product.Image}
                  alt={product.product}
                  className="w-10 h-10 object-contain"
                />
              </Link>
              <td className="p-3 text-[#6E7079]">
                <Link
                  to={"/productDetails"}
                  className="text-[#6E7079]"
                >
                  {product.product}
                </Link>
              </td>
              <td className="p-3 text-[#6E7079]">{product.category}</td>
              <td className="p-3 text-[#6E7079]">{product.price}</td>
              <td className="p-3 text-[#6E7079]">{product.stock}</td>
              <td className="p-3 text-[#6E7079]">{product.discount}</td>
              <td className="p-3 text-[#6E7079]">{product.total}</td>
              <td className="p-2">
                <button
                  className={`${
                    product.status === "Published"
                      ? "bg-gray-300 hover:bg-gray-400 text-[#6E7079]"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } px-4 py-1 rounded`}
                >
                  {product.status === "Published" ? "Unpublish" : "Publish"}
                </button>
              </td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded ${
                    product.status === "Published"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border border-gray-200 mt-2"></div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:bg-gray-300"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryTable;
