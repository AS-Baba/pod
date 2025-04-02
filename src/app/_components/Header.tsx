"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white  px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex items-center space-x-15">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={700}
            height={700}
            className="w-[150px] object-fit"
          />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 font-[550] hover:text-black">
              Buyer
            </a>
            <a href="#" className="text-[#6d60f6] font-[700] hover:text-black">
              Seller
            </a>
          </nav>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">
            Help Center
          </a>
          <Button variant="outline">Log In</Button>
          <Button variant="default">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-[#6D60F6]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-center space-y-4">
          <a href="#" className="text-gray-700 hover:text-black">
            Buyer
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Seller
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Help Center
          </a>
          <Button variant="outline">Login</Button>
        </div>
      )}
    </header>
  );
}
