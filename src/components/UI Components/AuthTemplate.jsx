import React, { useState } from 'react'
import LoginTemplate from './LoginTemplate'
import SignupTemplate from './SignupTemplate'


const AuthTemplate = ({heading, description, spantext, img, bgImage, type}) => {

    const [UserType, setUserType] = useState("Students");
    
    return (
        <main className={`mx-32 grid grid-cols-2 gap-64 ${type === "signup" ? "pt-8 pb-12" : "pt-16"} `}>
            <div className={`px-8 flex flex-col gap-5 ${type === "signup" ? "pt-4" : "py-8"}`}>
                <h2 className='text-[1.85rem] font-bold text-[#F1F2FF]'>{heading}</h2>
                <p className='text-[#AFB2BF] text-[1.11rem] leading-[1.5rem]'>
                    {description}
                    <span className='text-[#47A5C5] font-Edu italic font-semibold'>{spantext}</span>
                </p>
                <div className='w-fit p-1 flex gap-1 rounded-3xl bg-[#161D29] shadow-inner text-[#999DAA]'>
                    <button className={`${UserType === "Students" ? "bg-[#000814] text-white" : "bg-transparent"} py-1.5 px-[18px] rounded-full`}
                        onClick={() => setUserType("Students")}>
                        Student
                    </button>
                    <button className={`${UserType === "Instructors" ? "bg-[#000814] text-white" : "bg-transparent"} py-1.5 px-[18px] rounded-full`}
                        onClick={() => setUserType("Instructors")}>
                        Instructors
                    </button>
                </div>
                {
                    type === "login" ?
                    <LoginTemplate /> :
                    <SignupTemplate />
                }
            </div>
            <div className='relative'>
                <img src={img} className='relative w-[30vw] z-50' alt="login image" />
                <img src={bgImage} className='absolute w-[30vw] z-0 left-[5%] top-[5%]' alt="background image" />
            </div>
        </main>
    )
}

export default AuthTemplate