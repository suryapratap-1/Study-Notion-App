import React from 'react'
import { NavLink } from 'react-router-dom'
import SideButton from './SideButton';
import SignButton from './SignButton';

const SideBar = () => {
    return (
        <div className=' relaitive z-50 w-full pb-1 bg-[#000814] px-4'>
            <div className='z-0 flex flex-col text-white'>
                <NavLink to='/'>
                    <SideButton text={"Home"} />
                </NavLink>
                
                <SideButton text={"Catalog"} />

                <NavLink to='about'>
                    <SideButton text={"About Us"} />
                </NavLink>

                <NavLink to='contact'>
                    <SideButton text={"Contact Us"} />
                </NavLink>
            </div>

            <div className=' flex gap-5 py-4 '>
                <NavLink to='login'>
                    <SignButton text={"Login"} />
                </NavLink>
                
                <NavLink to='signup'>
                    <SignButton text={"Signup"} />
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar