// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-4 py-2">
      {/* Left side - Logo and title */}
      <div className="flex items-center">
        {/* Replace the src with the path to your actual logo */}
        <Image src="/path-to-your-logo.svg" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold ml-2">PMS</span>
      </div>

      {/* Right side - User info and settings */}
      <div className="flex items-center">
        {/* This could be a user avatar, name, dropdown for user settings, etc. */}
        <span className="mr-4">Demo User</span>
        {/* Replace with actual paths to images/icons and other navigation links */}
        <Image src="/path-to-demo-user-avatar.svg" alt="User Avatar" width={30} height={30} />
      </div>
    </nav>
  );
};

export default Navbar;
