import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FiArrowRight } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import ShuffleCards from '../components/UI Components/ShuffleCards'
import {popularCourses, studendLearning} from '../data/courseInfoList'
import CourseCard from '../components/Features/CourseCard'
import ExploreMore from '../components/UI Components/ExploreMore'


const Home = () => {

    const codeBlock1 = `
        <<!DOCTYPE html>
        <html>
        <head><title>Example</title>
        </head>
        <body>
        <h1><a href="/">Header</a>
        </h1>
        <nav><a href="one/">One</a><a href="two/">Two</a>
        <a href="three/">Three</a>
        </nav>
    `


    return (
      <div>
        <div className='bg-[#000814]'>
          
          {/* Section 1 */} 
          <section className='relative z-20 w-10/12 mx-auto pt-16 pb-10 '>
            <div className='flex flex-col gap-6 items-center'>
              <NavLink to='signup'>
                <button className='px-9 py-[5px] flex items-center gap-2 bg-[#161d29] text-white font-bold rounded-full border-4 
                  border-[#161d29] hover:bg-[#000814]'
                >
                  Become an Instructor
                  <BiRightArrowAlt style={{fontSize: "1.5rem", fontWeight: "bolder"}}/>
                </button>
              </NavLink>

              <h2 className='text-2xl text-center text-white font-bold
                  lg:text-4xl
                  md:text-3xl
                  sm:text-3xl
              '>
                Empower Your Future With <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
                  Coding Skills
                </span>
              </h2>

              <h3 className='text-base text-gray-400 text-center font-semibold
                md:text-lg

              '>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth 
                of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
              </h3>

              <div className='flex gap-8'>
                <NavLink to='signup'>
                  <button className=' bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                    Learn More
                  </button>
                </NavLink>
                <NavLink to='login'>
                  <button className='bg-[#161d29] px-6 py-3 rounded-md text-sm text-white font-semibold hover:scale-95 transition-all duration-200'>
                      Book a Demo
                    </button>
                </NavLink>
              </div>
            </div>
            
            {/* video */}
            <div className='relative z-10 mx-12 my-12 shadow-[20px_20px_0_0_#fff]
                sm:mx-10
                md:mx-20
                lg:mx-36
            '>
              <video muted loop autoPlay>
                <source src='../assets/Home Page video.mp4' type='video/mp4' />
              </video>
              <div className='absolute top-0 left-[50%] -z-[1] w-[75vw] h-[65vh] bg-cyan-400 blur-[70px] opacity-25
                sm:left-[45%] sm:w-[40vw] sm:h-[40vh]'>
              </div>
            </div>


          </section>

          {/* Section 2 */}
          <section>
            <div className='flex flex-col gap-20 justify-between mt-10 mx-4 lg:flex-row lg:mx-20'>
              <div className='w-full flex flex-col lg:w-[45%]'>
                  <h3 className='text-4xl text-white font-semibold '>
                      Unlock Your <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent 
                      bg-clip-text font-bold'>coding potential</span> with our online courses
                  </h3>
                  <p className='mt-12 pl-4 text-lg text-gray-500 font-semibold'>
                      Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                  </p>
                <div className='flex gap-8 mt-16 pl-4'>
                    <NavLink to='signup'>
                        <button className='flex gap-1 items-center bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                            Try it yourself
                            <FiArrowRight className='mt-1' />
                        </button>
                    </NavLink>
                  <NavLink to='login'>
                    <button className='bg-[#161d29] px-6 py-3 rounded-md text-sm text-white font-semibold hover:scale-95 transition-all duration-200'>
                        learn more
                      </button>
                  </NavLink>
                </div>
              </div>

              <div className='relative flex w-full  bg-transparent px-1 py-3 border border-gray-800 rounded-xl
                  lg:w-[35%] lg:h-[35%]
                  md:w-[75%]
              '>
                <div className='text-center flex flex-col w-[10%] text-slate-300 font-inter font-bold'>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                </div>

                <div className={`w-[90%] flex flex-col gap-2 font-bold text-white pr-2`}>
                  <TypeAnimation
                    sequence={[codeBlock1, 5000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    style = {{ whiteSpace: "pre-line", display:"block"}}
                    omitDeletionAnimation={true}
                  />
                </div>
                <div className='absolute left-28 w-64 h-48 bg-gradient-to-b from-[#4700BE] from-45% via-[#F4FF33] to-[#B4BE00]
                  blur-[60px] opacity-50
                  lg:left-8
                '></div>
              </div>
            </div>

            <div className='mt-40 mx-32 flex flex-col gap-16'>
              <h3 className=' text-3xl text-white font-bold'>Most Popular Courses</h3>

              <div className=' coursesList p-2 flex gap-6 w-full overflow-y-hidden overflow-x-auto transition-all duration-200 '>
                {
                    popularCourses.map( (course) => (
                      <NavLink to={course.path} key={course.id}>
                          <CourseCard course={course} />
                      </NavLink>
                    ) )
                }
              </div>
            </div>

            <div className='mt-40 mx-32 p-2 flex gap-6'>
                {
                    studendLearning.map((course) => (
                        <NavLink to={course.path} key={course.id}>
                            <CourseCard course={course} />
                        </NavLink>
                    ))
                }
            </div>

          </section>
          
          {/* Section 3 */}
          <section className='mt-36 mb-20'>
            <div className='flex gap-60 mx-16'>
                <div className='relative z-10 flex w-[35%] bg-transparent px-1 py-3 border border-gray-800 rounded-xl'>
                    <div className='text-center flex flex-col w-[10%] text-slate-500 font-inter font-bold'>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                      <p>8</p>
                      <p>9</p>
                      <p>10</p>
                      <p>11</p>
                      <p>12</p>
                    </div>

                    <div className={`w-[90%] flex flex-col gap-2 font-bold text-yellow-200 pr-2`}>
                      <TypeAnimation
                        sequence={[codeBlock1, 5000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style = {{ whiteSpace: "pre-line", display:"block"}}
                        omitDeletionAnimation={true}
                      />
                    </div>
                    <div className='absolute w-[26vw] h-[25vh] bg-cyan-950 blur-[60px] -z-[1]'></div>
                </div>

                <div>
                  <h2 className='text-white text-4xl font-bold'>
                    Start <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>coding in seconds</span>
                  </h2>
                  <p className='mt-12 pl-4 text-lg text-gray-500 font-bold'>
                    Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                  </p>
                  <div className='flex gap-8 mt-16 pl-4'>
                    <NavLink to='signup'>
                      <button className='flex gap-1 items-center bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                        Continue Lesson
                        <FiArrowRight className='mt-1' />
                      </button>
                    </NavLink>
                    <NavLink to='login'>
                      <button className='bg-[#161d29] px-6 py-3 rounded-md text-sm text-white font-semibold hover:scale-95 transition-all duration-200'>
                          learn more
                        </button>
                    </NavLink>
                  </div>
                </div>
            </div>
          </section>

          <section className='relative w-full'>
              <ExploreMore />
          </section>

          {/* section 4 */}
          <section className=' bg-white pt-[28vh] pb-36'>
            <div className='w-10/12 mx-auto'>

                <div className='flex gap-8 mb-20 justify-center'>
                    <NavLink to='signup'>
                      <button className='bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200
                        shadow-md shadow-[0_5px_8px_#999]'>
                        Learn More
                      </button>
                    </NavLink>
                    <NavLink to='login'>
                      <button className='bg-[#161d29] px-6 py-3 rounded-md text-sm text-white font-semibold hover:scale-95 transition-all duration-200
                        shadow-md shadow-[0_5px_8px_#999]'>
                          Book a Demo
                        </button>
                    </NavLink>
                </div>

                <div className='flex gap-8'>
                  <h2 className='text-4xl text-[#111] font-bold'>
                    Get the Skills you need for a <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>Job that is in demand</span>
                  </h2>

                  <div className='flex flex-col gap-10'>
                    <p className='text-base text-[#555] font-medium pr-32'>
                      The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </p>

                    <NavLink to='signup'>
                      <button className=' bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200
                        shadow-md shadow-[0_5px_8px_#999]'>
                        Learn More
                      </button>
                    </NavLink>
                  </div>
                </div>

                <div className='flex justify-center gap-16 pt-16'>
                  <div className='flex flex-col gap-4 justify-center'>

                      <div className='flex gap-8'>
                          <div className='w-12 h-12 flex items-center shadow-md'>
                              <img src="../assets/L1.svg" alt="logo" />
                          </div>
                          <div className='flex flex-col'>
                              <h4 className='text-lg font-semibold'>Leadership</h4>
                              <p className='text-gray-800'>Fully committed to the success company</p>
                          </div>
                      </div>

                      <div className='flex gap-8'>
                          <div className='w-12 h-12 flex items-center shadow-md'>
                              <img src="../assets/L2.svg" alt="logo" />
                          </div>
                          <div className='flex flex-col'>
                              <h4 className='text-lg font-semibold'>Leadership</h4>
                              <p className='text-gray-800'>Fully committed to the success company</p>
                          </div>
                      </div>

                      <div className='flex gap-8'>
                          <div className='w-12 h-12 flex items-center shadow-md'>
                              <img src="../assets/L3.svg" alt="logo" />
                          </div>
                          <div className='flex flex-col'>
                              <h4 className='text-lg font-semibold'>Leadership</h4>
                              <p className='text-gray-800'>Fully committed to the success company</p>
                          </div>
                      </div>

                      <div className='flex gap-8'>
                          <div className='w-12 h-12 flex items-center shadow-md'>
                              <img src="../assets/L4.svg" alt="logo" />
                          </div>
                          <div className='flex flex-col'>
                              <h4 className='text-lg font-semibold'>Leadership</h4>
                              <p className='text-gray-800'>Fully committed to the success company</p>
                          </div>
                      </div>

                  </div>

                  <div className='relative'>
                      <div className='w-[40vw] object-cover'>
                          <img src="../assets/TimelineImage.png" alt="timeline-Image" className='w-[100%]' />
                      </div>
                      <div className='absolute left-1/2 -translate-x-1/2 -bottom-12 w-[60%] bg-[#014a32] flex items-center gap-6 py-5 px-8'>
                          <h3 className=' text-3xl font-bold text-white'>10</h3>
                          <p className='text-[#05a77b] text-sm font-semibold'>YEARS OF EXPERIENCE</p>
                          <div className=' w-[2px] h-12  bg-[#05a77b]'></div>
                          <h3 className='text-3xl font-bold text-white'>250</h3>
                          <p className='text-[#05a77b] text-sm font-semibold'>TYPE OF COURSES</p>
                      </div>
                  </div>
                </div>

                <div className='mt-44 text-center flex flex-col gap-5'>
                  <h2 className='text-4xl text-gray-800 font-bold'>
                    Your Swiss Knife for <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>learning any language</span>
                  </h2>
                  <p className='text-gray-700 px-56'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
                </div>

                <ShuffleCards />

                <div className='w-full flex justify-center'>
                <NavLink to='signup'>
                      <button className=' bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200
                        shadow-md shadow-[0_5px_8px_#999]'>
                        Learn More
                      </button>
                </NavLink>
                </div>



            </div>
            
          </section>

          {/* Instructor Section  */}
          <section className='w-full py-16 px-32'>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <img className='w-[90%] shadow-md shadow-[-15px_-15px_0_0_#fff]'
                            src="../assets/InstructorImage.png" alt="Instrutor-img" />
                    </div>
                    <div className='w-[50%] p-8 flex flex-col justify-center gap-10'>
                        <h2 className='w-[12vw] text-4xl font-semibold text-white'>
                            Become an <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>Instructor</span>
                        </h2>
                        <p className='text-gray-400 pr-24'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                        <NavLink to='signup' className='flex justify-center'>
                            <button className='flex gap-1 items-center bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                              Start Learning Today
                              <FiArrowRight className='mt-1' />
                            </button>
                        </NavLink>
                    </div>
                </div>
          </section>

        </div>
      </div>

    )
}

export default Home