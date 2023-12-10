import React from 'react'
import AuthTemplate from '../components/UI Components/AuthTemplate'

const SignUp = () => {
    return (
        <main className='bg-[#000814]'>
            <AuthTemplate 
                heading = "Join the millions learning to code with StudyNotion for free"
                description = "Build skills for today, tomorrow, and beyond."
                spantext = " Education to future-proof your career."
                img = "/assets/signup-image.png"
                bgImage = "/assets/imageBg.png"
                type = "signup"
            />
        </main>
    )
}

export default SignUp