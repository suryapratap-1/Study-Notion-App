import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SignupTemplate = () => {
    const [FormData, setFormData] = useState({email: ""}, {password: ""});
    const formData = useSelector(state => state.user)
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData((prevData) => (
                {
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            )
        )
    }
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(
            login({
                email : FormData.email,
                password : FormData.password
            }
        ))
    }

    return (
        <main>
            <form onSubmit={submitHandler} className='flex flex-col gap-5'>
                <div className='w-full flex gap-5'>
                    <label htmlFor="firstName" className='w-full flex flex-col gap-1 text-[#F1F2FF]'>
                        <p>First Name <sup className='text-red-500'>*</sup></p>
                        <input 
                            className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                            type="text" 
                            name='firstName'
                            placeholder='Enter first name'
                        />
                    </label>
                    <label htmlFor="lastName" className='w-full flex flex-col gap-1 text-[#F1F2FF]'>
                        <p>Last Name <sup className='text-red-500'>*</sup></p>
                        <input 
                            className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                            type="text" 
                            name='lastName'
                            placeholder='Enter last name'
                        />
                    </label>
                </div>

                <label htmlFor="email" className='flex flex-col gap-1 text-[#F1F2FF]'>
                    <p>Email Address <sup className='text-red-500'>*</sup></p>
                    <input 
                        className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                        onChange={changeHandler}
                        type="email" 
                        name="email" 
                        placeholder='Enter email address'
                        value={FormData.email} 
                        id="email" 
                        required
                    />
                </label>
                <div className='w-full flex gap-5'>
                    <label htmlFor="firstName" className='w-full flex flex-col gap-1 text-[#F1F2FF]'>
                        <p>Create Password <sup className='text-red-500'>*</sup></p>
                        <input 
                            className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                            type="password" 
                            name='firstName'
                            placeholder='Enter first name'
                        />
                    </label>
                    <label htmlFor="lastName" className='w-full flex flex-col gap-1 text-[#F1F2FF]'>
                        <p>Confirm Password <sup className='text-red-500'>*</sup></p>
                        <input 
                            className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                            type="password" 
                            name='lastName'
                            placeholder='Enter last name'
                        />
                    </label>
                </div>
                <button className='w-full py-2 font-medium bg-[#FFD60A] rounded-lg'>Create Account</button>
            </form>
        </main>
    )
}

export default SignupTemplate