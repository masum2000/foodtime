
import React, { useState } from 'react';
import {  FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='w-10/12 mx-auto py-5'>
             <nav className="flex items-center justify-between p-4 bg-[#F)F$EC]">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://i.ibb.co/3WhJwVB/photo-2023-05-14-11-00-12.jpg" alt="Logo" className="w-full h-8 mr-2" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className=" p-3 font-bold rounded-md hover:bg-green-700 hover:text-white ">Home</a>
        <a href="#" className="p-3 font-bold rounded-md hover:bg-green-700 hover:text-white ">Blog</a>
        <a href="#" className="p-3 font-bold rounded-md hover:bg-green-700 hover:text-white ">About Us</a>
        <a href="#" className="p-3 font-bold rounded-md hover:bg-green-700 hover:text-white ">En</a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Hamburger Menu Button */}
        <button
          className="text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-0 mt-12 bg-gray-900 text-white py-2 px-4">
            <a href="#" className="block p-3 font-bold hover:bg-green-700 ">Home</a>
            <a href="#" className="block p-3 font-bold  hover:bg-green-700">Blog</a>
            <a href="#" className="block p-3 font-bold hover:bg-green-700">About</a>
            
          </div>
        )}
      </div>

      {/* Login and Cart Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border bg-green-700 font-bold border-white rounded-full py-2 text-white px-4 text-sm hover:bg-green-300 hover:text-black">
          Login
        </button>
        <button className="border bg-green-700 text-white rounded-full py-4 px-4 text-sm hover:bg-green-300 hover:text-black">
        <FaShoppingCart />
        </button>
      </div>
    </nav>
            
        </div>
    );
};

export default Header;