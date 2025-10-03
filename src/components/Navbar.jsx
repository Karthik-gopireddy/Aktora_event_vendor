import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  if (isAuthenticated) {
    return null; // Don't show navbar on dashboard
  }

  return (
    <nav className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/70 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Aktora_Logo-1.png"
              alt="logo"
              className="w-[32px] h-[32px] rounded-md mr-2"
            />
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent"
            >
              AKTORA EVENTS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/")
                  ? "text-[#FFD700]"
                  : "text-white hover:text-white"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/about")
                  ? "text-[#FFD700]"
                  : "text-white hover:text-white"
                }`}
            >
              About Us
            </Link>
            <Link
              to="/service"
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/service")
                  ? "text-[#FFD700]"
                  : "text-white hover:text-white"
                }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/contact")
                  ? "text-[#FFD700]"
                  : "text-white hover:text-white"
                }`}
            >
              Contact
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/20"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 pb-4 animate-slide-down">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/")
                ? "text-[#FFD700]"
                : "text-white hover:text-white"
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/about")
                ? "text-[#FFD700]"
                : "text-white hover:text-white"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/contact")
                ? "text-[#FFD700]"
                : "text-white hover:text-white"
              }`}
          >
            Contact
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/20"
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;