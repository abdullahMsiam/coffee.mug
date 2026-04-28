import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;