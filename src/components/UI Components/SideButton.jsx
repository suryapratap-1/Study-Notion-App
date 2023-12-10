import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const SideButton = ({text}) => {
    return (
        <button className='w-full py-4 flex items-center justify-between border-b border-gray-600'>
            <p>{text}</p>
            <FaAngleRight className='text-sm'/>
        </button>
    )
}

export default SideButton