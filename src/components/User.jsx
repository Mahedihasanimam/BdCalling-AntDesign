import React from 'react';
import UserTable from './UserTable';

const User = () => {
    return (
        <div>
            <div className='text-center mx-auto max-w-lg my-6'>
                <h1 className='text-4xl font-bold'>Our Users</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus non rerum, ex cupiditate excepturi quas?</p>
            </div>
            <div>
                <UserTable/>
            </div>
        </div>
    );
};

export default User;