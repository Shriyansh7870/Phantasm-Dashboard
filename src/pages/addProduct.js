import React, { useState } from "react";
import { useForm} from "react-hook-form";
import {
  FaBold,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaLink,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useFormData } from "../context/productContext";

const AddProduct = () => {
  const [isDiscountAdded, setIsDiscountAdded] = useState(false);
  const { formData, setFormData } = useFormData();
  const { register, handleSubmit, setValue } = useForm();
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([null]);
  const [isReturnPolicyAdded, setIsReturnPolicyAdded] = useState(false);

  const [isExpiryAdded, setIsExpiryAdded] = useState(false);

  const handleDiscountToggle = () => {
    setIsDiscountAdded(!isDiscountAdded);
    if (!isDiscountAdded) {
      setValue("discountType", "percentage");
      setValue("discountValue", "");
    } else {
      setValue("discountType", "");
      setValue("discountValue", "");
    }
  };
  const handleReturnPolicyToggle = () => {
    setIsReturnPolicyAdded(!isReturnPolicyAdded);
    if (!isReturnPolicyAdded) {
      setValue("date", "");
      setValue("time", "");
    }
  };
  const handleExpiryToggle = () => {
    setIsExpiryAdded(!isExpiryAdded);
    if (!isExpiryAdded) {
      setValue("expiryDate", "");
    } else {
      setValue("expiryDate", "");
    }
  };
  const handleCoverImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
      setValue("coverImage", e.target.files[0]);
    }
  };

  const handleAdditionalImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...additionalImages];
      newImages[index] = e.target.files[0];
      setAdditionalImages(newImages);
      setValue(`additionalImages[${index}]`, e.target.files[0]);

      if (index === additionalImages.length - 1) {
        setAdditionalImages([...newImages, null]);
      }
    }
  };
  const onSubmit = (data) => {
    setFormData(data); // Save form data to context
    console.log("Form Data: ", data );
    console.log(formData)
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:p-4 p-0 bg-gray-100 min-h-screen"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-4">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h1 className="text-2xl font-semibold mb-6 sm:mb-0 mt-4">
              New Inventory Item
            </h1>
          </div>
          <div className="hidden lg:flex flex-row justify-end space-x-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Save as Draft
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Save & Publish
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-[10px] lg:p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <input
                {...register("productName")}
                type="text"
                placeholder="Product Name"
                className="w-full p-2 border bg-[#EFF1F999] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]">
                <option value="">Select Product Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
              </select>

              <div className="flex justify-between gap-2">
                <input
                  {...register("sellingPrice")}
                  type="text"
                  placeholder="Selling Price"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
                />
                <input
                  {...register("CostPrice")}
                  type="text"
                  placeholder="Cost price"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
                />
              </div>
              <input
                {...register("QuantityStock")}
                type="number"
                placeholder="Quantity in Stock"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
              />
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]">
                <option value="">Select Product Category</option>
                <option value="electronics">Home Delivery</option>
                <option value="clothing">Office Delivery</option>
                <option value="furniture">Work Office</option>
              </select>

              <div className="flex justify-between items-center p-4">
                <div className="text-gray-500 text-lg font-medium">
                  Discount
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-lg font-medium">
                    Add Discount
                  </span>
                  <button
                    type="button"
                    onClick={handleDiscountToggle}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                      isDiscountAdded ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                        isDiscountAdded ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Discount Inputs */}
              {isDiscountAdded && (
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg w-44">
                    <select
                      {...register("discountType")}
                      className="bg-transparent text-gray-500 focus:outline-none w-full"
                    >
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-lg w-44">
                    <input
                      type="number"
                      placeholder="Value"
                      {...register("discountValue", {
                        required: isDiscountAdded,
                      })}
                      className="bg-transparent text-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
              )}

              {/* Expiry Date Toggle */}
              <div className="flex justify-between items-center p-4">
                <div className="text-gray-500 text-lg font-medium">
                  Expiry Date
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-lg font-medium">
                    Add Expiry Date
                  </span>
                  <button
                    type="button"
                    onClick={handleExpiryToggle}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                      isExpiryAdded ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                        isExpiryAdded ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Expiry Date Input */}
              {isExpiryAdded && (
                <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg w-full">
                  <FaRegCalendarAlt className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    {...register("expiryDate", { required: isExpiryAdded })}
                    className="bg-transparent text-gray-500 focus:outline-none w-full"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <textarea
                {...register("shortDesciption")}
                placeholder="Short Description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
                rows="6"
              />
              <div className="p-4">
                <label className="text-gray-600 font-medium mb-2 block">
                  Product Long Description
                </label>
                <div className="border w-auto rounded-lg shadow-sm p-2 bg-gray-50">
                  <div className="flex items-center space-x-2 mb-4">
                    <select className="bg-gray-200 text-gray-700  rounded-md text-sm">
                      <option>Roboto</option>
                    </select>
                    <select className="bg-gray-200 text-gray-700  rounded-md text-sm ml-4">
                      <option>Paragraph</option>
                    </select>

                    {/* Toolbar */}
                    <div className="flex items-center space-x-3 ">
                      {/* Bold */}
                      <button className="text-gray-600 hover:text-black">
                        <FaBold />
                      </button>
                      {/* Underline */}
                      {/* Align Left */}
                      <button className="text-gray-600 hover:text-black">
                        <FaAlignLeft />
                      </button>
                      {/* Align Center */}
                      <button className="text-gray-600 hover:text-black">
                        <FaAlignCenter />
                      </button>
                      {/* Align Right */}
                      <button className="text-gray-600 hover:text-black">
                        <FaAlignRight />
                      </button>
                      {/* Link */}
                      <button className="text-gray-600 hover:text-black">
                        <FaLink />
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      {...register("longdescription")}
                      className="w-full h-40 p-4 bg-gray-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Your text goes here"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Add a long description for your product
                </p>
              </div>
              <div className="flex justify-between items-center p-4">
                <div className="text-gray-500 text-lg font-medium">
                  Return Policy
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-lg font-medium">
                    Add Return Policy
                  </span>
                  <button
                    type="button"
                    onClick={handleReturnPolicyToggle}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                      isReturnPolicyAdded ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                        isReturnPolicyAdded ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Date and Time Inputs for Return Policy */}
              {isReturnPolicyAdded && (
                <div className="mt-4">
                  <label className="text-gray-700">Date Added</label>
                  <div className="flex items-center space-x-4 mt-2">
                    <input
                      type="date"
                      {...register("date", { required: isReturnPolicyAdded })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
                    />
                    <input
                      type="time"
                      {...register("time", { required: isReturnPolicyAdded })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#EFF1F999]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 bg-white rounded-md w-[100vw] lg:w-full">
            {/* Cover Image Uploader */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Upload a cover image for your product.
              </label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-center text-gray-400 relative w-full h-64">
                {coverImage ? (
                  <img
                    src={URL.createObjectURL(coverImage)}
                    alt="Cover"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleCoverImageChange}
                    />
                    <div className="text-center justify-center flex">
                      <img src="/Images/fileUpload.svg" alt="not found" />
                    </div>
                    <div className="flex justify-center items-center mt-1">
                      <span className="space-y-2 mr-1">
                        <img src="/Images/cloudupload.svg" alt="not found" />
                      </span>
                      <span>Upload Image</span>
                    </div>
                    <p className="text-sm">
                      Upload a cover image for your product.
                    </p>
                    <p className="text-sm">
                      File Format jpeg, png Recommended Size 600x600 (1:1)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Images Uploader */}
            <div className="mb-2 text-gray-600">Additional Images</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {additionalImages.map((image, index) => (
                <div
                  key={index}
                  className="border-2 w-full border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 relative h-32 sm:h-40 md:h-48"
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Additional ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <input
                        type="file"
                        accept="image/jpeg, image/png"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => handleAdditionalImageChange(index, e)}
                      />
                      <div className="text-center justify-center flex">
                        <img src="/Images/fileUpload.svg" alt="not found" className="w-6 h-6" />
                      </div>
                      <div className="flex items-center mt-1 p-4">
                        <span className="space-y-2 mr-1">
                          <img src="/Images/cloudupload.svg" alt="not found" className="w-12 h-12" />
                        </span>
                        <span>Upload Image</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer h-32 sm:h-40 md:h-48">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 mt-4 p-4 lg:hidden">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Save as Draft
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Save & Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
