
import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='max-w-7xl mx-auto'>
             <nav className="flex items-center justify-between p-4 bg-[#F)F$EC]">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://i.ibb.co/3WhJwVB/photo-2023-05-14-11-00-12.jpg" alt="Logo" className="w-full h-8 mr-2" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Menu 4</a>
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
            <a href="#" className="block my-2 hover:text-gray-300">Home</a>
            <a href="#" className="block my-2 hover:text-gray-300">Blog</a>
            <a href="#" className="block my-2 hover:text-gray-300">About</a>
            <a href="#" className="block my-2 hover:text-gray-300">Menu 4</a>
          </div>
        )}
      </div>

      {/* Login and Cart Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-white rounded-lg py-2 px-4 text-sm hover:bg-white hover:text-gray-900">
          Login
        </button>
        <button className="border border-white rounded-lg py-2 px-4 text-sm hover:bg-white hover:text-gray-900">
          Cart
        </button>
      </div>
    </nav>
            
        </div>
    );
};

export default Header;