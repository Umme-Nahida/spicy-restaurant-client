import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-blue-500 flex'>
            {/* sider */}
            <div className='bg-[#D1A054] w-64 min-h-screen'>
                <ul className='menu space-y-2'>
                    <li>
                        <NavLink to='/dashboard'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItem'>Add Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItem'>Manage Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBookings'>Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allUsers'>All User</NavLink>
                    </li>
                </ul>
               
            </div>
            {/* outlet */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;