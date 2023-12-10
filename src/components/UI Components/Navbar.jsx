import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import SideBar from './sideBar';
import toast from 'react-hot-toast';
 
const Navbar = ({loggedIn, setLoggedIn}) => {

    const [sideNav, setSideNav] = useState(false)
    const [searchBarWidth, setSearchBarWidth] = useState(false)

    return (
        <nav className='bg-[#000814] flex flex-col'>
            <div className={`h-14 px-4 flex items-center justify-between whitespace-nowrap border-b border-slate-700
                md:px-10 lg:px-12 xl:w-full xl:px-36 
            `}>
                <NavLink to='/'>
                    <img src="../assets/study-notion-logo.png" width={160} height={40} alt="logo" />
                </NavLink>

                <div className='hidden md:flex items-center gap-6 text-gray-200 text-md'>

                    <NavLink to='/' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'} hover:text-yellow-300`}>Home</NavLink>
                
                    {/* <div className='flex gap-1 items-center'>
                        <h3>Catalog</h3>
                        <BsChevronDown className='mt-1' />
                    </div> */}

                    <NavLink to='about' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'} hover:text-yellow-300`}>
                        About Us
                    </NavLink>
                    <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'} hover:text-yellow-300`}>
                        Contact Us
                    </NavLink>

                    <div onClick={() => setSearchBarWidth(true)} onMouseLeave={() => setSearchBarWidth(false)}
                        className={`flex items-center ${searchBarWidth ? 'w-40 gap-8' : 'w-32'} py-1 px-3 bg-gray-700 rounded-2xl`}>
                        <input className='w-20 bg-transparent outline-none'
                            type="text" 
                            placeholder='Search'
                        />
                        <AiOutlineSearch style={{fontSize: "1.2rem", fontWeight: "bold", color: '#9E9E9E'}} />
                    </div>
                    
                </div>

                <div className='hidden md:flex gap-2 md:gap-4'>
                    {
                        !loggedIn &&
                        <NavLink to='login'>
                            <button className=' px-2 py-1 bg-gray-800 text-gray-400 font-medium text-sm md:text-base border border-slate-700 rounded-md
                                md:px-3 md:py-2'>
                                Login
                            </button>
                        </NavLink>
                    }

                    {
                        !loggedIn &&
                        <NavLink to='signup'>
                            <button className=' px-2 py-1 bg-gray-800 text-gray-400 font-medium text-sm md:text-base border border-slate-700 rounded-md
                                md:px-3 md:py-2'>
                                Signup
                            </button>
                        </NavLink>
                    }
                    
                    {
                        loggedIn &&
                        <NavLink to='/'>
                            <button onCanPlay={() => {
                                setLoggedIn(false)
                                toast.success("Logged Out")
                            }}
                                className=' px-2 py-1 bg-gray-800 text-gray-400 font-medium text-sm md:text-base border border-slate-700 rounded-md
                                md:px-3 md:py-2'>
                                Log out
                            </button>
                        </NavLink>
                    }

                    {
                        loggedIn &&
                        <NavLink to='dashboard'>
                            <button className=' px-2 py-1 bg-gray-800 text-gray-400 font-medium text-sm md:text-base border border-slate-700 rounded-md
                                md:px-3 md:py-2'>
                                Dashboard
                            </button>
                        </NavLink>
                    }                    
                </div>

                <div className='block md:hidden'>
                    {
                        sideNav ? 
                        <RxCross2 onClick={() => setSideNav(!sideNav)} className='text-white text-2xl' /> :
                        <RxHamburgerMenu onClick={() => setSideNav(!sideNav)} className='text-white text-2xl' />
                    }
                    
                </div>
            </div>

            <div className={`${sideNav ? "block" : "hidden"} md:hidden`}>
                <SideBar />
            </div>
        </nav>
    )
}

export default Navbar