"use client";
import React, { useState } from "react";
// import logo512 from "./assets/logo512.png";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Workflows'
        },
        {
            id: 4,
            link: 'Plans'
        },
        {
            id: 5,
            link: 'Reviews'
        },
        {
            id: 6,
            link: 'Contact'
        },
    ]
    return (
        <div className="flex justify-between items-center w-full h-20 text-black fixed px-4 text-xl bg-white z-20">
            <div className="flex justify-between items-center px-1">
                {/* <img src="./assets/logo512.png" alt="radiance-logo" className="w-10 px-1"/> */}
                <img
                    src="https://media.licdn.com/dms/image/D560BAQE2TwMhuKwwfQ/company-logo_200_200/0/1682286861308?e=2147483647&v=beta&t=x7YCabilgsMCrSMKPCZAb39fGChNmVC2IiIpdh3LBXY"
                    className="mr-3 h-6 sm:h-9 mix-blend-normal"
                    alt="Radiance AI Logo"
                />
                <div className="font-bold">Radiance AI</div>
            </div>

            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li key={link.id} className='px-4 py-2 cursor-pointer text-black hover:scale-105 duration-200 font-medium capitalize'>
                        <Link to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                ))}
                <a href="/login"
                    className="inline-flex bg-blue-500 justify-center items-center  px-7 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">Login</a>
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='flex justify-center flex-col items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(link => (
                        <li key={link.id} className='p-4 cursor-pointer text-4xl py-6 capitalize'>
                            <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Navbar;
