import React from 'react'

const SignButton = ({text}) => {
    return (
        <button className='px-8 py-2 bg-[#161d29] text-gray-400 font-medium text-sm md:text-base border border-slate-700 rounded-md'>
            {text}
        </button>
    )
}

export default SignButton