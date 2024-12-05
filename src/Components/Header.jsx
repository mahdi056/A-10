import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { FaRegUserCircle } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { AuthContext } from './Provider/Authprovider';

const Header = () => {

    const { user,logout } = useContext(AuthContext);
    return (
        <div className='flex justify-between mt-4 w-3/4 mx-auto'>

            <div>
                <img className='w-20 h-12 rounded-md' src={logo} alt="" />
            </div>

            <div className='md:hidden'>

                <FiAlignJustify></FiAlignJustify>
            </div>

            <div className='hidden md:block space-x-4'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/allvisas'>All Visas</NavLink>
                {
                    user && (<NavLink to='/addvisa'>Add Visa</NavLink>)
                }

                {
                    user && (<NavLink to='/myaddedvisa'>My Added Visa</NavLink>)
                }
                {
                   user && (<NavLink to='/myvisaapplication'>My Visa Application</NavLink>) 
                }

                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>

               
            </div>

            <div>

                <div>

                    {user ? (
                        <div className="flex items-center space-x-2">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-10 h-10 rounded-full"
                                title={user.displayName} 
                            />
                            <button onClick={logout} className="btn btn-outline btn-error">Logout</button>
                        </div>
                    ) : (
                        <FaRegUserCircle className="text-gray-600 text-3xl" />
                    )}
                </div>


            </div>

        </div>
    );
};

export default Header;