import React from 'react'
import { BsFacebook, BsGoogle, BsTwitter, BsYoutube } from 'react-icons/bs'


// 6e727f

const Footer = () => {
  return (
    <div className='bg-[#161d29] px-36 pt-16 
        lg:px-36
        md:px-20
        sm:px-16
    '>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
                <img src="../assets/study-notion-logo.png" width={160} height={40} alt="logo" />
                <h3 className=' text-base text-slate-300 font-semibold'>Company</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>About</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Careers</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Affiliates</h3>
                <div className='flex gap-3'>
                    <BsFacebook style={{color:"gray", fontSize:"1.1rem"}}/>
                    <BsGoogle style={{color:"gray", fontSize:"1.1rem"}}/>
                    <BsTwitter style={{color:"gray", fontSize:"1.1rem"}}/>
                    <BsYoutube style={{color:"gray", fontSize:"1.1rem"}}/>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-base text-slate-300 font-semibold'>Resources</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Articles</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Blog</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Chart Sheet</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Code challenges</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Docs</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Projects</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Videos</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Workspaces</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-base text-slate-300 font-semibold'>Support</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Help Center</h3>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-base text-slate-300 font-semibold'>Plans</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Paid memberships</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>For students</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Business solutions</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-base text-slate-300 font-semibold'>Community</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Forums</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Chapters</h3>
                    <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Events</h3>
                </div>
            </div>

            <div className='w-[1px] h-[82vh] bg-gray-800'></div>
            
            <div className='flex flex-col gap-3'>
                <h3 className='text-base text-slate-300 font-semibold'>Subjects</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>AI</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Cloud Computing</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Code Foundations</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Computer Science</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Cybersecurity</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Data Analytics</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Data Science</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Data Visualization</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Developer Tools</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>DevOps</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Game Development</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>IT</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Machine Learning</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Math</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Mobile Development</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Web Design</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Web Development</h3>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-base text-slate-300 font-semibold'>Languages</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Bash</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>C++</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>C#</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Go</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>HTML & CSS</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Java</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>JavaScript</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Kotlin</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>PHP</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Python</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>R</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Ruby</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>SQL</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Swift</h3>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-base text-slate-300 font-semibold'>Career building</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Career paths</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Career services</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Interview prep</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Professional certification</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>-</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Full Catalog</h3>
                <h3 className=' text-sm font-medium text-[#6e727f] hover:text-slate-300'>Beta Content</h3>
            </div>
        </div>

        <div className='w-full h-[2px] mt-5 bg-gray-800'></div>

        <div className='flex justify-between w-full py-14 px-2'>
            <div className='flex gap-3'>
                <h3 className='text-sm font-medium text-[#6e727f] hover:text-slate-300'>Privacy Policy</h3>
                <div className='h-[3vh] w-[1px] bg-gray-700'></div>
                <h3 className='text-sm font-medium text-[#6e727f] hover:text-slate-300'>Cookie Policy</h3>
                <div className='h-[3vh] w-[1px] bg-gray-700'></div>
                <h3 className='text-sm font-medium text-[#6e727f]'>Terms</h3>
            </div>

            <div>
                <h3 className='text-sm font-medium text-[#6e727f]'>Made by Surya, Sumanta, Sunit & Srinibash 🗿 © 2023 Studynotion</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer