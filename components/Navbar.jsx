"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/logo.svg';

import { menu } from '@/data/menu';
import { HiX, HiViewList } from "react-icons/hi"; 

import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import Profile from './Profile';

const Navbar = () => {
  const currentPage = usePathname();
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto px-4 xl:px-0">
      <div className='py-4 flex justify-between items-center'>
      <Image src={logo} alt='logo' priority className='w-32' />
      <SearchBar />
      <HiViewList
        size={30}
        className="cursor-pointer lg:hidden"
        onClick={() => setShow(!show)}
      />

      <div
        className={`fixed lg:relative bg-black lg:bg-transparent
          top-0 w-full h-screen lg:h-auto ${
            show ? 'right-0' : '-right-full'
          } lg:right-0 flex gap-10 flex-col lg:flex-row justify-center
          lg:justify-end items-center transition-all
          duration-300 top_nav`}
      >
        <HiX
          size={30}
          className="text-white absolute top-7 right-7 cursor-pointer lg:hidden"
          onClick={() => setShow(false)}
        />
        {menu.map((item, i) => {
          return (
            <Link
              className={currentPage == item.url ? 'active' : ''}
              key={i}
              href={item.url}
            >
              {item.label}
            </Link>
          );
        })}
        {/* Profile Dropdown - For Mobile */}
        <div className="lg:hidden">
          <Profile /> {/* Profile component inside the mobile menu */}
        </div>

        {/* Profile Dropdown - For Web View */}
        <div className="hidden lg:block">
          <Profile /> {/* Profile component for desktop view */}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
