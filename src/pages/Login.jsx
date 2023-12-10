import React from 'react'
import AuthTemplate from '../components/UI Components/AuthTemplate'

const Login = () => {
    return (
      <main className='h-[92%] bg-[#000814]'>
          <AuthTemplate 
              heading = "Welcome Back"
              description = "Build skills for today, tomorrow, and beyond."
              spantext = " Education to future-proof your career."
              img = "/assets/login-image.png"
              bgImage = "/assets/imageBg.png"
              type = "login"
          />
      </main>
    )
}

export default Login