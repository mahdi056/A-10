import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { FaRegUserCircle } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
    return (
        <div className='flex justify-between mt-4 w-3/4 mx-auto'>

            <div>
                <img className='w-12 h-12 rounded-md' src={logo} alt="" />
            </div>

            <div className='md:hidden'>
                <FiAlignJustify></FiAlignJustify>
            </div>

            <div className='hidden md:block space-x-4'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/allvisas'>All Visas</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
            </div>

            <div>

                <FaRegUserCircle></FaRegUserCircle>
            </div>

        </div>
    );
};

export default Header;