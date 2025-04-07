"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [password, setPasswordValue] = useState("password");

  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left - Form */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Login</h2>
            <p className="text-sm">
              Don&#39;t have an account?{" "}
              <a href="#" className="text-[#6d60f6] font-medium">
                Sign Up
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Enter your email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-[#E1E1E1] rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6d60f6]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter password</label>
              <div className="flex items-center border border-[#E1E1E1] rounded">
                  <input
                    type={password}
                    placeholder="Enter your password"
                    className="w-full  px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6d60f6]"
                  />
                  <span className="btn btn-primary mx-2" onClick={toggle}>
                    {password === "password" ? (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-slash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                    )}
                  </span>
              </div>
            </div>

            <button className="w-full bg-[#6d60f6] text-white py-2 rounded hover:bg-[#6d60f6] transition">
              Log In
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-xs text-gray-500">or login with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="flex items-center justify-center w-full border border-[#6d60fd] py-2 rounded text-sm gap-2 hover:bg-gray-50">
              <FcGoogle />
              Continue with google
            </button>

            <button className="flex items-center justify-center w-full border border-[#6d60fd] py-2 rounded text-sm gap-2 hover:bg-gray-50">
              <FaFacebook />
              Continue with facebook
            </button>
          </div>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden md:block bg-[#FAF8F1]">
        <Image
          src="/assets/images/login.jpg"
          alt="pattern"
          className="w-full h-full object-cover"
          width={900}
          height={900}
        />
      </div>
    </div>
  );
}
