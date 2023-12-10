import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../app/Auth/LoginSlice';

const LoginTemplate = ({setLoggedIn}) => {
    const [FormData, setFormData] = useState({email: "", password: ""});
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
    console.log("FormData = ", FormData);
    console.log("user = ", formData);  

    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            <label htmlFor="email" className='flex flex-col gap-1 text-[#F1F2FF]'>
                <p>Enter Email <sup className='text-red-500'>*</sup></p>
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
            <label htmlFor="password" className='flex flex-col gap-1 text-[#F1F2FF]'>
                <p>Enter Password <sup className='text-red-500'>*</sup></p>
                <input 
                    className='w-full p-3 rounded-lg bg-[#161D29] shadow-inner'
                    onChange={changeHandler} 
                    type="password" 
                    name="password" 
                    placeholder='Enter password'
                    value={FormData.password} 
                    id="password" 
                    required
                />
                <div className='w-full text-end'>
                    <button className='text-sm text-[#47A5C5]'>Forgot Password</button>
                </div>
            </label>
            <button className='w-full py-2 font-medium bg-[#FFD60A] rounded-lg'>Sign In</button>
        </form>
    )
}

export default LoginTemplate