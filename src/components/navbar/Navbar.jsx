import React from 'react';
import { Link } from 'react-router';

const navbarItems = (
    <>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/shop">Shop</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/contact">Contact</Link>
    </li>
    </>
)

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className="navbar bg-white text-black container shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navbarItems}
                        </ul>
                    </div>
                    <Link to="/" 
                    className="
                    text-2xl font-bold text-amber-900 hover:text-amber-700
                    transition duration-300 hover:-translate-y-0.5 ease-out
                    "
                    >CoffeeMug</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navbarItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;