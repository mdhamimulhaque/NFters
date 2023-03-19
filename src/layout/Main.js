import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header>header</header>
            <Outlet />
        </div>
    );
};

export default Main;