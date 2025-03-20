import React, { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const ContactForm = React.lazy(() => import('../pages/ContactForm'));
const HeroSection = React.lazy(() => import('../pages/home'));
const PricingTable = React.lazy(() => import('../pages/PricingTable'));
const SearchBar = React.lazy(() => import('../pages/searchbar'));

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.log('Error fetching users:', error));
  }, []);

  return (
    <>
      <HeroSection />
      <PricingTable />
      <ContactForm />
      <SearchBar
        users={users}
        setFilteredUsers={setFilteredUsers}
      />
      <LazyLoadComponent>
        <div className='w-full flex items-center justify-center'>
          <div className="w-4/5 flex flex-col items-center justify-center">
            <h3 className='text-6xl font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Users</h3>
            <ul className='flex flex-col items-start justify-center mt-3 py-5'>
              {filteredUsers.map(user => (
                <li
                  key={user.id}
                  className='list-disc'
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default App;
