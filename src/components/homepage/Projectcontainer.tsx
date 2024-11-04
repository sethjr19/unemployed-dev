'use client'

import React, { useEffect, useState } from 'react'
import Projectcard from './Projectcard'
import { firestore } from '@/app/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

export interface Project {
    Title: string; // Change these based on your actual fields
    Description: string;
    User: string; 
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
    <div>
        <div className='flex gap-4 overflow-hidden '>
            {projects.map((project: any, index: number) => (
                <Projectcard project={project} key={index} />
            ))}
            
        </div>
    </div>
  )
}

export default Projectcontainer