import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-75 text-white p-4 backdrop-filter backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4 cursor-pointer">
            News Portal
          </h1>
        </div>

        <nav className="flex space-x-6 font-bold">
          <Link to="/" className="hover:text-[#B37201]">
            Home
          </Link>
          <Link
            to="/news?category=entertainment"
            className="hover:text-[#B37201]"
          >
            Entertainment
          </Link>
          <Link to="/news?category=politics" className="hover:text-[#B37201]">
            Politics
          </Link>
          <Link to="/news?category=science" className="hover:text-[#B37201]">
            Science
          </Link>
          <Link to="/news?category=sports" className="hover:text-[#B37201]">
            Sports
          </Link>
          <Link to="/news?category=technology" className="hover:text-[#B37201]">
            Technology
          </Link>
          <Link to="/news?category=world" className="hover:text-[#B37201]">
            World
          </Link>
        </nav>

        <div className="flex space-x-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
