'use client'
import React, { useEffect, useState } from 'react'
import { Project } from './Projectcontainer'
import { firestore } from '@/app/firebase/firebaseConfig'
import { collection, getDocs } from "firebase/firestore"; 
import { getDatabase, ref, query, orderByChild, equalTo, get } from "firebase/database";
import { formatDistanceToNow } from 'date-fns';

import dutawajar from '../../assets/dutawajar.png'

interface ProjectcardProps {
    project: Project
}

const Projectcard = ({project} : ProjectcardProps) => {
    const [user,setUser] = useState<any>(null)

    const getTimeAgo = (timestamp : any) => {
        return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
      };

    useEffect(() => {
        const fetchProject = async () => {
            const userID = project.User 
            try {
                const db = getDatabase();
                const userRef = ref(db, 'users/' + userID);
                const snapshot = await get(userRef);
            
                if (snapshot.exists()) {
                  // Retrieve user data from snapshot
                  const userData = snapshot.val();
                  console.log("User found:", userData);
                  setUser(userData);
                  return userData;
                } else {
                  console.log("No user found with the specified userID.");
                  return null;
                }
              } catch (error) {
                console.error("Error searching for user:", error);
                return null;
              }
        }

        fetchProject()
    }, [project])

    if (!project) {
        return null
    }

    const formattedDate = getTimeAgo(project.Date)


  return (
    <div className='min-h-[20rem] max-w-[40rem] mb-5 bg-white shadow-md rounded-xl'>
        {/* card content */}
        <div className='flex flex-col p-3 h-[100%]'> 
          <div className='rounded-lg shadow-sm mb-4'>
          <img className='rounded-lg' src='assets/dutawajar.png' alt="testimg" />
          </div>
            <div className='flex items-center gap-3 mb-4'>
                <span className='bg-black h-[3rem] w-[3rem] rounded-full'>
                    {/* <img src={project.Img} className='h-full w-full object-cover rounded-full' /> */}
                </span>
                <div>
                    <h1>{user?.username}</h1>
                    <p className='text-gray-500 font-bold text-sm'>• {formattedDate}</p>
                </div>
            </div>
            <div className='mt-[1rem]  overflow-hidden'>
                <h1 className='text-lg font-bold'>{project.Title}</h1>
                <h2 className='text-sm'>{project.Description}</h2>
            </div>
            <div className='mt-auto border-t-2 border-gray-600 pt-3 px-5' >
              <div className='flex'>
                {project.Tags ? project.Tags.map((tag: any) => (
                  <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 my-1 flex items-center' key={tag}>{tag}
                  </span>)) : null}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projectcard