import React from 'react';
// import Style from './Layout.module.css';
import Footer from './../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Offline } from "react-detect-offline";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <div>
                <Offline>
                    <div className='network'>
                        <i className='fas fa-wifi'></i> You are offline (surprise!)
                    </div>
                </Offline>
            </div>
            <Footer />
        </>
    );
}
