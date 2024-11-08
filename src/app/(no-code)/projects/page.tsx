import React from 'react'
import ProjectCard from './_component/ProjectCard'
import { projectData } from '@/data/data'
import UnderlineSMWrapper from '@/components/UnderlineSMWrapper'

const ProjectPage = () => {
  return (
    <div className='w-[90%] h-auto py-[4%] flex flex-col overflow-y-scroll px-[2%] scrollbar-hidden'>
      <div className='w-full flex flex-col items-center justify-center pb-[4%]'>
        <h1 className='pt-[2%] pb-[2%] w-full font-bold text-3xl text-center text-orTamise'>Projets</h1>
        <p className="text-center text-gray-200 text-balance w-[72%] leading-5">Explorez les projets réalisés dans le cadre de ma formation en informatique.
        Ces travaux ont été l&apos;occasion de mettre en pratique mes <UnderlineSMWrapper>compétences</UnderlineSMWrapper> en développement logiciel,
        notamment en <UnderlineSMWrapper>Java</UnderlineSMWrapper>, <UnderlineSMWrapper>PostgreSQL</UnderlineSMWrapper> et <UnderlineSMWrapper>technologies web</UnderlineSMWrapper>.<br />
        Chaque projet témoigne de ma <UnderlineSMWrapper>rigueur</UnderlineSMWrapper>, de ma capacité à apprendre et à atteindre les objectifs fixés.</p>
      </div>
      {projectData.map(projectData=><ProjectCard key={projectData.id} projectData={projectData}/>)}
      {/* <ProjectCard projectData={} />
      <ProjectCard /> */}
    </div>
  )
}

export default ProjectPage