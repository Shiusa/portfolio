import React from 'react'
import ProjectCard from './_component/ProjectCard'
import { projectData } from '@/data/data'

const ProjectPage = () => {
  return (
    <div className='w-[90%] h-auto py-[4%] flex flex-col overflow-y-scroll px-[2%] scrollbar-hidden'>
      {projectData.map(projectData=><ProjectCard key={projectData.id} projectData={projectData}/>)}
      {/* <ProjectCard projectData={} />
      <ProjectCard /> */}
    </div>
  )
}

export default ProjectPage