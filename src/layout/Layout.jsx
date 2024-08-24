import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer/Footer';

const Layout = () => {
    const location = useLocation()
    console.log(location)
    const isHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {isHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet> 
           {isHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Layout;