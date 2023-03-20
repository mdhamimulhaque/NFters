import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/NFters.png';
import LogoWhite from '../../assets/images/NFters-white.png';
import SearchIcon from '../../assets/images/icons/search.png';
import { IoMenu, IoClose } from "react-icons/io5";
import PrimaryOutletButton from '../Buttons/PrimaryOutletButton';
import PrimaryOutletWhiteButton from '../Buttons/PrimaryOutletWhiteButton';
import PrimaryCommonButton from '../Buttons/PrimaryCommonButton';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            id: 1,
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/",
            name: "Marketplace"
        },
        {
            id: 3,
            path: "/",
            name: "Resource"
        },
        {
            id: 4,
            path: "/",
            name: "About"
        }
    ]
    return (
        <header className="w-full border-b-[1px] border-line_gray px-5 xl:px-[120px]  flex justify-center py-10">
            <section className='logo_area flex items-center w-full lg:w-auto justify-between lg:gap-8 xl:gap-16'>
                <Link to='/'>
                    <img src={Logo} alt="logo" />
                </Link>
                <button className='lg:hidden active:outline-none text-deep_gray'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoMenu className="text-3xl" />
                </button>
                <nav className="hidden lg:flex flex-wrap items-center font-DMSans font-medium">
                    {
                        navItems.map(navItem =>
                            <Link key={navItem.id} to={navItem.path}
                                className='lg:mr-3 xl:mr-12'>
                                {navItem.name}
                            </Link>)
                    }
                </nav>
            </section>

            <section className='hidden lg:flex items-center lg:gap-2 xl:gap-5'>
                <div className='flex items-center relative'>
                    <input placeholder='Search'
                        type="text"
                        className='search-input' />
                    <img src={SearchIcon} alt="search"
                        className='absolute top-3.5 right-7' />
                </div>

                <PrimaryCommonButton>Upload</PrimaryCommonButton>
                <PrimaryOutletButton>Connect Wallet</PrimaryOutletButton>
            </section>

            {/* responsive navbar */}
            <div className={`h-screen  flex flex-col py-4 px-4 fixed top-0  lg:hidden bg-primary text-base z-50 uppercase text-center font-semibold transition-all duration-500 } ${isOpen ? "w-full left-0" : "w-0 left-[999px]"}`}>
                <button
                    className="absolute right-7 top-10 z-10 lg:hidden rounded-md active:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoClose className="text-white text-3xl" />
                </button>
                <div className='flex flex-col justify-center font-DMSans items-center gap-10 mt-10'>
                    <Link to='/'>
                        <img src={LogoWhite} alt="logo" />

                    </Link>
                    {
                        navItems.map(navItem => <Link key={navItem.id} to={navItem.path} className=" text-white ">{navItem.name}</Link>)
                    }
                </div>



                <section className='flex items-center flex-col gap-5 mt-5'>
                    <div className='flex items-center relative'>
                        <input placeholder='Search'
                            type="text"
                            className='search-input' />
                        <img src={SearchIcon} alt="search"
                            className='absolute top-3.5 right-7' />
                    </div>
                    <div className='flex gap-2'>
                        <PrimaryOutletWhiteButton>Upload</PrimaryOutletWhiteButton>
                        <PrimaryOutletWhiteButton>Connect Wallet</PrimaryOutletWhiteButton>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;