import React from 'react';
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/*Top Navbar */}
            <Navbar/>
            {/* Dynamic Page  */}
            <div>
            <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;