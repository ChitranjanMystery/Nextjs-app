"use client"
import { useState } from 'react';
import Link from 'next/link';

const Tab = () => {
  const [active, setActive] = useState('Travel');

  const handleActiveChange = (item) => {
    setActive(item);
  };

  const tabItems = ['Travel', 'Digital', 'Brand', 'Merch'];

  return (
    <div className="flex justify-around items-center bg-black text-white p-4 rounded-lg">
      {tabItems.map((item) => (
        <div key={item} onClick={() => handleActiveChange(item)} className="relative cursor-pointer">
          <Link href={`/${item.toLowerCase()}`} className={`hover:text-gray-300 ${active === item ? 'font-bold' : ''}`}>
            {item}
          </Link>
          {active === item && (
            <div className="absolute left-0 right-0 h-[2px] bg-green-400 mt-1"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tab;
