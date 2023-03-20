import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <main className='px-5 xl:px-[120px] py-10 overflow-x-hidden'>
                <Outlet />
            </main>

        </div>
    );
};

export default Main;