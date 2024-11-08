"use client";
import React, { useState } from "react";

import DynamicInputField from "../Component/Dynamic";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    verificationCode: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleLogin = () => {
    if (formData.mobileNumber.length >= 10) {
      setShowVerification(true);
    } else {
      setError("Please enter a valid mobile number");
    }
  };

  const handleVerificationSubmit = () => {
    if (formData.verificationCode) {
      console.log("Verifying code:", formData.verificationCode);
    } else {
      setError("Please enter the verification code");
    }
  };

  const handleResend = () => {
    console.log("Resending verification code");
    setError("Verification code resent successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (isLogin) {
      if (showVerification) {
        handleVerificationSubmit();
      } else {
        handleLogin();
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.mobileNumber.length < 10) {
        setError("Please enter a valid mobile number");
        return;
      }
      console.log("Signup data:", formData);
      
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white lg:w-[80%] py-10 mx-auto">
      <div className="hidden lg:flex bg-blue-700 p-12 rounded-lg shadow-md">
        <div className="text-center space-y-6">
          <h2 className="text-white text-4xl font-semibold">
            Social media shared today, tomorrow or by location
          </h2>
          <div className=""></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-lg space-y-8 p-10 rounded-lg">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/icons/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md">
              {error}
            </div>
          )}

          {isLogin ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
                <p className="text-sm text-gray-600">
                  {showVerification
                    ? "Enter the verification code sent to your mobile"
                    : "Enter your mobile number to continue"}
                </p>
              </div>
              <DynamicInputField
                label="Mobile Number"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={(value) => handleInputChange("mobileNumber", value)}
                required
              />
              {showVerification && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.verificationCode}
                      onChange={(e) =>
                        handleInputChange("verificationCode", e.target.value)
                      }
                      placeholder="Enter verification code"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FiEyeOff size={20} /> : <BsEye size={20} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                >
                  {showVerification ? "Verify Code" : "Continue"}
                </button>

                {showVerification && (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="w-full text-sm text-blue-600 hover:text-blue-700"
                  >
                    Did not receive code? Resend
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* Signup Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... Rest of the signup form remains the same ... */}
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-800">
                  Create Account
                </h1>
                <p className="text-sm text-gray-600">
                  For business, band or celebrity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DynamicInputField
                  label="First Name"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(value) => handleInputChange("firstName", value)}
                  required
                />
                <DynamicInputField
                  label="Last Name"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(value) => handleInputChange("lastName", value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DynamicInputField
                  label="Email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(value) => handleInputChange("email", value)}
                  required
                />

                <DynamicInputField
                  label="Mobile Number"
                  type="tel"
                  placeholder="Mobile number"
                  value={formData.mobileNumber}
                  onChange={(value) => handleInputChange("mobileNumber", value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DynamicInputField
                  label="Password"
                  type="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={(value) => handleInputChange("password", value)}
                  required
                />

                <DynamicInputField
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(value) =>
                    handleInputChange("confirmPassword", value)
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
              >
                Create Account
              </button>
            </form>
          )}

          {/* Toggle between Login and Signup */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setShowVerification(false);
                setError("");
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  mobileNumber: "",
                  verificationCode: "",
                });
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isLogin
                ? "Create new account"
                : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
