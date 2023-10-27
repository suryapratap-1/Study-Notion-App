import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
 
const Navbar = () => {

//   const [showHamburger, setShowHamburger] = useState(false);
    const [searchBarWidth, setSearchBarWidth] = useState(false)

  return (
    <div className='bg-[#000814]'>
        <nav className={`h-14 px-4 flex items-center justify-between whitespace-nowrap border-b border-slate-700
            xl:w-full xl:px-36 
            lg:px-12
            md:px-10 `
        }>
            <NavLink to='/'>
                <img 
                    src="../assets/study-notion-logo.png" 
                    width={160} height={40}
                    alt="logo" 
                />
            </NavLink>

            <div className='flex items-center gap-6 text-gray-200 text-md'>

                <NavLink to='/' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'}`}>Home</NavLink>
               
                <div className='flex gap-1 items-center'>
                    <h3>Catalog</h3>
                    <BsChevronDown className='mt-1' />
                </div>

                <NavLink to='about' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'}`}>
                    About Us
                </NavLink>
                <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-yellow-300' : 'text-gray-200'}`}>
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

            <div className='flex gap-4'>
                <NavLink to='login'>
                    <button className='px-3 py-2 bg-gray-800 text-gray-400 font-medium text-md border border-slate-700 rounded-md'>
                        Login
                    </button>
                </NavLink>
                
                <NavLink to='signup'>
                    <button className='px-3 py-2 bg-gray-800 text-gray-400 font-medium text-md border border-slate-700 rounded-md'>
                        Signup
                    </button>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar