import React from 'react'
import './CourseCard.css'

const CourseCard = ({ course }) => {

  return (
    
        <div className=' w-[24vw] flex flex-col gap-4 text-lg hover:scale-105'>
            <img className=' w-full h-[30vh] rounded-md'
                src={course.image} alt={course.title} 
            />
            <div className='flex flex-col'>
                <h4 className='text-white font-semibold whitespace-nowrap'>{course.title}</h4>
                <p className='text-white'>By <span className='text-yellow-400 font-semibold'>{course.author}</span></p>
                <p className='text-white'>{course.rating}</p>
                <p className='text-yellow-400 font-semibold'>Rs {course.price}</p>
            </div>
        </div>
    
  )
}

export default CourseCard