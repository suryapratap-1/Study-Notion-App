import React, { useState } from 'react'
import { courseDetails } from '../../data/courseInfoList'
import ExploreCard from '../Features/ExploreCard';
import { NavLink } from 'react-router-dom';

const tabName = [
    'Free',
    'New to coding',
    'Most popular',
    'Skills paths',
    'Career paths',
];

const ExploreMore = () => {

  const [currentTab, setCurrentTab] = useState(tabName[0]);
  const [courses, setCourses] = useState(courseDetails[0].course)
  const [currentCard, setCurrentCard] = useState(courseDetails[0].course[0].title)

//   console.log(courses);

  const setMyCard = (value) => {
        setCurrentTab(value);
        const result = courseDetails.filter((course) => course.tag === value)
        setCourses(result[0].course);
        setCurrentCard(result[0].course[0].title)
  }

  return (
    <div className='relative w-[100%] pb-[35vh] bg-[#000814] flex flex-col gap-1 items-center'>
        <div className='text-4xl font-semibold text-center text-white'>
            Unlock the
            <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'> Power of Code</span>
        </div>

        <p className='text-center text-md mt-3 text-gray-500'>
            Learn to build anything you can imagine
        </p>

        <div className=' mt-5 flex flex-row bg-[#141e2d] mb-5 border-gray-300 p-1  rounded-full'>
            {
                tabName.map((element, index) => {
                    return (
                        <div className={`text-md flex flex-row items-center gap-2
                            ${currentTab === element ? 'bg-[#000814] text-gray-400 font-medium' : 'text-gray-500'}
                            rounded-full transition-all duration-200 cursor-pointer
                            hover:bg-[#000814] hover:text-white px-7 py-2 `}
                            key={index}
                            onClick={() => setMyCard(element)}
                        >
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='absolute top-[43%] flex flex-row gap-10 mt-2 justify-between '>
            {
                courses.map((course, index) => (
                        <ExploreCard
                            key={index}
                            cardData={course}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />                    
                ))
            }
        </div>

        {/* <div className='w-full bg-white'>
            <img className=''
                src="../../assets/sectionImg.svg" alt="" />
        </div> */}

    </div>
  )
}

export default ExploreMore