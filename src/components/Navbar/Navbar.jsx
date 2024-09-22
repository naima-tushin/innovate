"use client";
import { useState } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#363636] text-white py-4 md:py-8 px-4 md:px-6 lg:px-32 flex items-center justify-between">
            {/* Hamburger Menu Icon */}
            <button className="text-2xl md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "flex" : "hidden"} absolute top-16 left-0 w-full bg-[#363636] flex-col items-center py-4 space-y-2 md:space-y-0 md:flex md:relative md:flex-row md:space-x-8 lg:space-x-32 md:bg-transparent md:py-0 md:top-auto md:left-auto md:w-auto md:order-1`}>
                <a href="#home" className="flex items-center space-x-2 md:space-x-2">
                    <span>Home</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#event" className="flex items-center space-x-2 md:space-x-2">
                    <span>Event</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#contact" className="flex items-center space-x-2 md:space-x-2">
                    <span>Contact</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#blog" className="flex items-center space-x-2 md:space-x-2">
                    <span>Blog</span>
                    <FaChevronDown className="text-xs" />
                </a>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full w-[60%] max-w-xs md:max-w-[35%] lg:max-w-[25%] md:ml-auto md:order-2">
                <input type="text" placeholder="Search" className="bg-transparent outline-none text-[#000000] placeholder-gray-300 py-2 px-4 text-sm md:text-xl w-full" />
                <FaSearch className="text-black text-lg md:text-2xl mr-4" />
            </div>
        </nav>
    );
};

export default Navbar;
