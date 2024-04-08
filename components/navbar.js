// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MoonIcon, BellIcon } from '@heroicons/react/outline'; // Make sure to install @heroicons/react

const Navbar = () => {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-4 py-2">
      {/* Left side - Logo and title */}
      <div className="flex items-center">
      <MoonIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
      </div>

      {/* Center - Moon icon for dark mode */}
      <div className="flex-grow flex justify-center">
      <span className="text-xl font-bold ml-2 text-blue-800">PMS</span>
      </div>

      {/* Right side - Notifications and user info/settings */}
      <div className="flex items-center">
        {/* Notifications icon */}
        <BellIcon className="h-6 w-6 text-gray-600 mr-4 cursor-pointer" />
        
        {/* This could be a user avatar, name, dropdown for user settings, etc. */}
        {/* Replace with actual paths to images/icons and other navigation links */}
        <Image src="/assets/man.png" alt="User Avatar" width={30} height={30} />
      </div>
    </nav>
  );
};

export default Navbar;
