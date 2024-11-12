import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon from react-icons

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <form action="/search" method="GET" className="relative inline-block">
            <div className="relative">
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-lg" />
                <input
                    type="text"
                    name="q"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search Creator/Product"
                    className="pl-10 w-72 h-9 rounded-full border border-gray-300 focus:outline-none"
                />
            </div>
            <button type="submit" className="hidden">Search</button> {/* Hidden button if not needed */}
        </form>
    );
};

export default SearchBar;
