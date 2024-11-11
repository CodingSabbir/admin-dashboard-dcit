"use client"
import React, { useState } from 'react';
import { HiMail, HiUser, HiEye, HiEyeOff } from 'react-icons/hi';
import Link from 'next/link';
import ThemeContextProvider from '@/app/Components/Context/ThemeContextProvider';
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <ThemeContextProvider>
    <div className="font-[sans-serif] bg-white text-dark md:h-screen dark:bg-gray-800 dark:text-white">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 h-full ">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className=" md:text-3xl text-2xl font-extrabold max-md:text-center">Sign Up </h3>
            </div>

            {/* Name Input */}
            <div>
              <label className="text-gray-800 text-lg dark:text-white  block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full text-gray-400 bg-transparent text-md border-b border-gray-300  px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
                <HiUser className="absolute right-2 text-gray-500" size={20} /> {/* User icon to the right */}
              </div>
            </div>

            {/* Email Input */}
            <div className="mt-6">
              <label className="text-gray-800 text-lg dark:text-white  block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-gray-400 bg-transparent text-md border-b border-gray-300  px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <HiMail className="absolute right-2 text-gray-500" size={20} /> {/* Mail icon to the right */}
              </div>
            </div>

            {/* Password Input */}
            <div className="mt-6">
              <label className="text-gray-800 text-lg dark:text-white  block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full text-gray-400 bg-transparent text-md border-b border-gray-300  px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <HiEyeOff
                    onClick={togglePassword}
                    className="absolute right-2 text-gray-500 cursor-pointer"
                    size={20}
                  />
                ) : (
                  <HiEye
                    onClick={togglePassword}
                    className="absolute right-2 text-gray-500 cursor-pointer"
                    size={20}
                  />
                )}
              </div>
            </div>

           

            {/* Submit Button */}
            <div className="mt-12">
              <button
                type="button"
                className="w-full py-3 px-6 text-md tracking-wider font-semibold rounded-md bg-[#008080] text-white focus:outline-none"
              >
              Sign Up 
              </button>
              <p className="text-md mt-6 text-gray-800 dark:text-white">
                Already have an account? <Link href={"/authentication/signin"} className="text-[#008080] font-semibold hover:underline ml-1">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </ThemeContextProvider>
  );
};

export default SignUpForm;
