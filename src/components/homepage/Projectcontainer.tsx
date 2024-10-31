'use client'

import React, { useEffect, useState } from 'react'
import Projectcard from './Projectcard'
import { firestore } from '@/app/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

interface Project {
    Title: string; // Change these based on your actual fields
    Description: string;
    UserID?: string; // Optional if a user may not be associated
    Date: string;
  }

const Projectcontainer = () => {
    const [projects, setProjects] = useState<any>([]); // State to hold projects
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const projectsCollection = collection(firestore, 'projects');
            const projectsSnapshot = await getDocs(projectsCollection);
            const projectsData = projectsSnapshot.docs.map((doc) => doc.data());
            setProjects(projectsData);
            setLoading(false);
            console.log(projectsData)
          } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
          } finally {
            setLoading(false);
          }
        };
        fetchProjects();
    }, [])

    if (loading) {
        return <div>Loading...</div>; // Optional loading state
      }
    

  return (
    <div className='container'>
        <div className='flex gap-4 '>
            {projects.map((project: any, index: number) => (
                <Projectcard project={project} key={index} />
            ))}
            
        </div>
    </div>
  )
}

export default Projectcontainer