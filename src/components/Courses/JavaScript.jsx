import React, { useState } from 'react'
import { javascriptInfo } from '../../data/courseInfoList'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { FaShareSquare } from 'react-icons/fa'
import { BsCameraVideo } from 'react-icons/bs'
import { SlArrowUp } from 'react-icons/sl'
import { IoIosArrowDown } from 'react-icons/io'
import { NavLink } from 'react-router-dom'


const JavaScript = () => {

  const [section1Clicked, setSection1Clicked] = useState(false);
  const [section2Clicked, setSection2Clicked] = useState(false);

  function collapseAll() {
    setSection1Clicked(false)
    setSection2Clicked(false)
  }


  return (
    <div className='w-full bg-[#000814]'>

      <div className=' flex flex-row gap-[5%] mx-4 py-6 md:mx-12 lg:py-14 xl:mx-32 '>
          <div className='w-[65%] flex flex-col justify-center gap-28'>
              <div className='text-lg flex flex-col gap-3'>
                  <h1 className='text-4xl font-bold text-white'>
                      {javascriptInfo.title}
                  </h1>
                  <p className='text-gray-400'>
                      {javascriptInfo.subHeading}
                  </p>
                  <p className='flex gap-3'>
                      <span className=' flex gap-1 items-center text-yellow-500 text-lg font-semibold'>
                        3
                        <img src="../../assets/fullStar.svg" alt="" />
                        <img src="../../assets/fullStar.svg" alt="" />
                        <img src="../../assets/fullStar.svg" alt="" />
                        <img src="../../assets/holoStar.svg" alt="" />
                        <img src="../../assets/holoStar.svg" alt="" />
                      </span>
                      <span className='text-white text-lg'>
                        {javascriptInfo.reviews}
                      </span>
                      <span className='text-gray-400'>
                        {javascriptInfo.enrolled}
                      </span>
                  </p>
                  <p className='text-white'>
                      Created by {javascriptInfo.creator}
                  </p>
                  <div className='flex flex-row items-center gap-4 text-gray-300'>
                      <AiOutlineInfoCircle style={{fontSize:"1.3rem", color:"white"}}/>
                      <p>{javascriptInfo.date}</p>
                      <BsGlobe />
                      <p>{javascriptInfo.language}</p>
                  </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4 p-8 border border-gray-500'>
                  <h3 className='text-3xl font-bold text-white'>
                    What you'll learn
                  </h3>
                  <p className='text-gray-100'>
                    {javascriptInfo.toLearn}
                  </p>
                </div>

                {/* Course Content  */}
                <div className='text-white flex flex-col gap-3'>
                    <h3 className='text-3xl font-semibold'>Course Content</h3>
                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-2'>
                          <p>3 Section(s)</p>
                          <p>5 Lecture(s)</p>
                        </div>
                        <p onClick={collapseAll}
                          className='text-yellow-400 cursor-pointer'>
                            Collapse all sections
                        </p>
                    </div>
                </div>

                <div>
                    <div className='border border-gray-500'>
                      <div onClick={() => setSection1Clicked(!section1Clicked)}
                          className='flex flex-row justify-between px-8 pt-6 pb-8 bg-gray-700 cursor-pointer'>
                          <div className='flex flex-row items-center gap-4 text-white'>
                            {
                              section1Clicked ? 
                              (<SlArrowUp />) 
                              : 
                              (<IoIosArrowDown />)
                            }
                            <p className='text-lg'>Introduction</p>
                          </div>
                          <p className='text-lg text-yellow-400'>1 Lecture(s)</p>
                      </div>
                      <div 
                          className={`flex flex-col ${section1Clicked ? 'block' : 'hidden'}`}
                      >
                          <div className='flex flex-row gap-3 items-center px-8 py-3 text-lg border border-gray-700'>
                              <BsCameraVideo style={{color:"white", fontSize:"1.3rem"}} />
                              <p className='text-white'>Lecture 1</p>
                          </div>
                      </div>
                    </div>


                    <div className='border border-gray-500'>
                      <div onClick={() => setSection2Clicked(!section2Clicked)}
                          className='flex flex-row justify-between px-8 pt-6 pb-8 bg-gray-700 cursor-pointer'>
                          <div className='flex flex-row items-center gap-4 text-white'>
                            {
                              section2Clicked ? 
                              (<SlArrowUp />) 
                              : 
                              (<IoIosArrowDown />)
                            }
                            <p className='text-lg'>Structure and Semantics</p>
                          </div>
                          <p className='text-lg text-yellow-400'>1 Lecture(s)</p>
                      </div>
                      <div 
                          className={`flex flex-col ${section2Clicked ? 'block' : 'hidden'}`}
                      >
                          <div className='flex flex-row gap-3 items-center px-8 py-3 text-lg border border-gray-700'>
                              <BsCameraVideo style={{color:"white", fontSize:"1.3rem"}} />
                              <p className='text-white'>Lecture 1</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>


          {/* right part */}
          <div className='w-[35%] h-[600px] bg-slate-700 p-4 rounded-xl'>
            <div className='flex flex-col gap-4'>
              <img className='rounded-xl'
                src={javascriptInfo.image} alt="" 
              />
              <div className='px-3 flex flex-col gap-3'>
                  <h3 className='text-3xl font-bold text-white'>{javascriptInfo.price}</h3>
                  <div className='flex flex-col gap-4'>
                    <NavLink to='signup'>
                        <button className='bg-yellow-400 w-full px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200
                          shadow-md shadow-[0_5px_8px_#999]'>
                          Buy Now
                        </button>
                      </NavLink>
                      <NavLink to='login'>
                        <button className='bg-[#161d29] w-full px-6 py-3 rounded-md text-sm text-white font-semibold hover:scale-95 transition-all duration-200
                          shadow-md shadow-[0_5px_8px_#999]'>
                            Add to Cart
                          </button>
                    </NavLink>
                    <p className='text-gray-300 text-center'>30-Day Money-Back Guarantee</p>
                  </div>
              </div>
              <p className='text-lg text-white font-bold'>This course includes</p>
              <div className='flex flex-row gap-1 items-center'>
                  <TiTick style={{color:"#06d6a0", fontSize:"1.3rem"}}/>
                  <p className='text-[#06d6a0] text-lg'>kk</p>
              </div>
              <button className='flex flex-row items-center gap-2 justify-center pb-4'>
                  <FaShareSquare style={{color:"#E49B0F"}}/>
                  <p className='text-[#E49B0F]'>Share</p>
              </button>
            </div>
              
          </div>
      </div>

    </div>
  )
}

export default JavaScript