import React from 'react'
import { Project } from './Projectcontainer'

interface ProjectcardProps {
    project: Project
}

const Projectcard = ({project} : ProjectcardProps) => {
  return (
    <div className='h-[15rem] w-[25rem] bg-gray-200 rounded-xl'>
        {/* card content */}
        <div className='flex flex-col p-5'> 
            <div className='flex items-center gap-3'>
                <span className='bg-black h-[3rem] w-[3rem] rounded-full'>img</span>
                <div>
                    <h1>{project.UserID}</h1>
                    <p className='text-gray-500 font-bold text-sm'>DATE : {project.Date}</p>
                </div>
            </div>
            <div className='mt-[1rem]'>
                <h1 className='text-xl font-bold'>{project.Title}</h1>
                <h2>{project.Description}</h2>
            </div>
        </div>
    </div>
  )
}

export default Projectcard