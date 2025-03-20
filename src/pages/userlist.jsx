import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function UserList({ users }) {
    return (
        <LazyLoadComponent>
            <section className="my-3 py-5">
                <div className='w-full flex items-center justify-center'>
                    <div className='w-4/5 flex items-center justify-center container mx-auto'>
                        <ul className='w-full flex items-center justify-center'>
                            {users.map((user) => (
                                <li key={user.id} className='list-disc'>
                                    <h3 className='text-6xl font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>{user.name}</h3>
                                    <p className='text-2xl font-medium'>{user.email}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    );
};

export default UserList;
