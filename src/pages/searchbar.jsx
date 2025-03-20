import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { Input } from '../components/ui/input';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const SearchBar = ({ users, setFilteredUsers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Check if users is an array before applying filter
    const handleSearch = useCallback(
        debounce((search) => {
            if (Array.isArray(users)) {
                // Only filter if users is an array
                const filtered = users.filter(user =>
                    user.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredUsers(filtered);
            }
        }, 500), // Debounce delay of 500ms
        [users] // Recreate debounce function when `users` changes
    );

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);  // Update search term in state
        handleSearch(searchValue);   // Trigger debounced search
    };

    return (
        <LazyLoadComponent>
            <section className='my-3 py-5'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-4/5 flex flex-col items-center justify-center container mx-auto'>

                        <div className="w-full flex items-center justify-center">
                            <h2 className='text-6xl font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Search USers</h2>
                        </div>

                        <div className='w-full flex items-center justify-center my-5'>
                            <Input
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                                placeholder="Search Users"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    );
};

export default SearchBar;
