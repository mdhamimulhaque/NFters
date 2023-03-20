import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <main className=' py-10 overflow-x-hidden'>
                <Outlet />
            </main>

        </div>
    );
};

export default Main;