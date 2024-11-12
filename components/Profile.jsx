import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white"
        onClick={toggleDropdown}
      >
        <FaUserCircle size={24} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-gray-800">
          <ul className="py-2">
            <li>
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
            </li>
            <li>
              <Link href="/mystore" className="block px-4 py-2 hover:bg-gray-100">My Store</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
