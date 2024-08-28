import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaBook, FaList, FaUsers, FaUtensils } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex '>
            {/* sidebar */}
            <div className='bg-[#D1A054] w-64 min-h-screen'>
               <ul className='menu space-y-3'>
                <li>
                    <NavLink to='/dashboard'>
                    <FaHome></FaHome>
                    Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/AddItem'>
                    <FaUtensils></FaUtensils>
                    Add Item
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/manageItem'>
                        <FaList></FaList>
                        Manage Items</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/manageBookings'>
                    <FaBook></FaBook>
                    Manage Bookings</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/allUser'>
                    <FaUsers></FaUsers>
                    All Users</NavLink>
                </li>
               </ul>
            </div>
            {/* outlet */}
            <div className='flex-1 '>
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;