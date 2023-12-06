import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
        {/* section 1 */}
        <section>
            <div className='bg-[#2c333f] flex justify-center pt-20 pb-64'>
              <div className='w-[58vw] flex flex-col gap-4 text-center'>
                <h1 className='text-4xl font-bold text-white'>
                  Driving Innovation in Online Education for a <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>Brighter Future</span>
                </h1>
                <p className='text-gray-400'>
                  Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                </p>
              </div>
            </div>

            <div className='relative bg-[#000814] pt-40 pb-24 border-b border-gray-600'>
                <div className='absolute left-[10%] -top-[55%] flex gap-8'>
                    <img src="../assets/aboutUs-image-1.webp" alt="aboutUs-image-1" />
                    <img src="../assets/aboutUs-image-2.webp" alt="aboutUs-image-2" />
                    <img src="../assets/aboutUs-image-3.webp" alt="aboutUs-image-3" />
                </div>
                <div className='flex justify-center'>
                    <p className='w-[90vw] text-center text-4xl font-bold text-white px-16'>
                        We are passionate about revolutionizing the way we learn. Our innovative platform
                        <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>"combines technology </span> 
                        <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>expertise</span>, and community to create an 
                        <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'> unparalleled educational experience.</span>
                    </p>
                </div>
            </div>
        </section>

        {/* section 2 */}
        <section className='w-full flex flex-col gap-[34vh] px-36 py-24 bg-[#000814]'>
            <div className='flex'>
                <div className='w-1/2 flex flex-col gap-10 pr-4'>
                    <h2 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl h-11 font-semibold text-transparent lg:w-[70%]'>
                        Our Founding Story
                    </h2>
                    <p className='text-gray-400'>
                        Our e-learning platform was born out of a shared vision and passion for transforming education. 
                        It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, 
                        flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                    </p>
                    <p className='text-gray-400'>
                        As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education 
                        systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical 
                        boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to 
                        unlock their full potential.
                    </p>
                </div>
                <div className='w-1/2 flex justify-end items-center'>
                    <img className='shadow-md shadow-[0_0_20px_rgb(255,68,68)]'
                      src="../assets/story-image.png" alt="" 
                    />
                </div>
            </div>

            <div className='w-full flex gap-48'>
                <div className='w-1/2 flex flex-col gap-10 pr-14'>
                    <h3 className='text-4xl bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>Our Vision</h3>
                    <p className='text-gray-400'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>
                <div className='w-1/2 flex flex-col gap-10 pr-14'>
                    <h3 className='text-4xl bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>Our Mission</h3>
                    <p className='text-gray-400'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </section>

        {/* section 3 */}
        <section className='bg-[#2c333f] px-60 py-10 text-white'>
            <div className='w-[100%] flex justify-between text-center'>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-bold'>5K</p>
                    <p>Active Students</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-bold'>10+</p>
                    <p>Mentors</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-bold'>200+</p>
                    <p>Courses</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-bold'>50+</p>
                    <p>Awards</p>
                </div>
            </div>
        </section>

        {/* section 4 */}
        <section className='w-full bg-[#000814] pt-8 pl-12 pr-6'>
            <div className='flex'>
                <div className='w-1/2 pt-5 flex flex-col items-start gap-6'>
                    <h2 className='text-4xl font-semibold text-white'>
                        World-Class Learning for 
                        <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'> Anyone, Anywhere</span>
                    </h2>
                    <p className='text-gray-100 pr-28'>
                        Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
                    </p>
                    <NavLink to='signup' className='flex justify-center'>
                        <button className='flex gap-1 items-center bg-yellow-400 px-6 py-3 text-sm rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                            Learn more
                        </button>
                    </NavLink>
                </div>
                <div className='w-1/2 flex'>
                    <div className='w-1/2 flex flex-col gap-8 bg-[#2c333f] p-14'>
                        <h4 className='text-lg text-white'>Curriculum Based on Industry Needs</h4>
                        <p className='text-gray-400'>Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-8 bg-[#161d29] p-14'>
                    <h4 className='text-lg text-white'>Our Learning Methods</h4>
                        <p className='text-gray-400'>Studynotion partners with more than 275+ leading universities and companies to bring</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex h-[290px]'>
                <div className='w-1/4'></div>
                <div className='w-1/4 flex flex-col gap-8 bg-[#2c333f] p-14'>
                    <h4 className='text-lg text-white'>Certification</h4>
                    <p className='text-gray-400'>Studynotion partners with more than 275+ leading universities and companies to bring</p>
                </div>
                <div className='w-1/4 flex flex-col gap-8 bg-[#161d29] p-14'>
                    <h4 className='text-lg text-white'>Rating "Auto-grading"</h4>
                    <p className='text-gray-400'>Studynotion partners with more than 275+ leading universities and companies to bring</p>
                </div>
                <div className='w-1/4 flex flex-col gap-8 bg-[#2c333f] p-14'>
                    <h4 className='text-lg text-white'>Ready to Work</h4>
                    <p className='text-gray-400'>Studynotion partners with more than 275+ leading universities and companies to bring</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs