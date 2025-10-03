import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Settings,
  Plus,
  LogOut,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

const DashboardSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/Login");

  };

  const menuItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/dashboard/services", icon: Package, label: "Services" },
    { path: "/dashboard/create-service", icon: Plus, label: "Create Service" },
    // { path: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col bg-black border-r border-[#FFD700]/30 w-64 max-h-[100vh]">
        {/* Logo */}
        <div className="p-6 border-b border-[#FFD700]/30 flex">
          <img src="/Aktora_Logo-1.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h2 className="text-lg font-bold text-[#FFD700]">AKTORA EVENTS</h2>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6">
          <nav className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div whileHover={{ scale: 1.05 }} key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                      ? "bg-[#FFD700] text-black shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-[#FFD700]/20"
                      }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-[#FFD700]/30">
          <button
            type="button"
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center bg-[#FFD700] text-black hover:bg-[#e6c200] p-3 rounded-md "
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black border-b border-[#FFD700]/30 px-4 py-3 flex  z-50">
        {/* Replace /logo.png with your actual logo path */}
        <img src="/Aktora_Logo-1.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h2 className="text-lg font-bold text-[#FFD700]">AKTORA EVENTS</h2>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-[#FFD700]/30 flex justify-around items-center py-2 z-50">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex flex-col items-center text-xs ${isActive(item.path)
                ? "text-[#FFD700]"
                : "text-gray-400 hover:text-white"
                }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-xs text-gray-400 hover:text-[#FFD700]"
        >
          <LogOut className="w-6 h-6 mb-1" />
          Logout
        </button>
      </div>

      {/* Push mobile content down (so it doesn't hide under top navbar) */}
      <div className="md:hidden h-14" />
    </>
  );
};

export default DashboardSidebar;