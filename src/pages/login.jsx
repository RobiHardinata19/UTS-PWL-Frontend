/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import LoginAdminLayout from "../Components/LoginAdminLayout";

// import { useState } from "react";

// const [Hide, setHide] = useState(true);

const LoginPages = () => (
  <LoginAdminLayout>
    <div className="w-2/3">
      <div className="font-bold text-3xl text-primary mb-2 text-center">
        Welcome Back
      </div>
      <p className="font-semibold text-3xl text-start my-4">Log in</p>
      <p className="font-thin text-start mb-8"> Enter your details below</p>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          id="email"
          className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-[#FFAB2D] focus:border-[#FFAB2D] h-9 px-2"
          placeholder="Email or Phone Number"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <input
          type="text"
          id="email"
          className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-[#FFAB2D] focus:border-[#FFAB2D] h-9 px-2"
          placeholder="Password"
          required
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-primary w-full rounded-md p-2 font-semibold text-white hover:bg-[#BF282F]">
          <a href="/home">Login</a>
        </button>
        <div className="W flex gap-2 justify-center items-center mt-3">
          <p>Don't have an account?</p>
          <a className="text-primary" href="/createaccount">
            Create Account
          </a>
        </div>
      </div>
    </div>
  </LoginAdminLayout>
);

export default LoginPages;
