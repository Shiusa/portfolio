import React from 'react'
import ProjectCard from './_component/ProjectCard'

export type TechnologieType = {
  id: number;
  name: "Java" | "HTML" | "CSS" | "C" | "JavaScript" | "PostgreSQL" | "Eclipse Jersey" | "Spring" | "React" | "Next JS" | "Jenkins" | "Git";
}

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  techno?: TechnologieType[];
  projectUrl: string;
  imagePath: string;
}

export const projectData:ProjectType[] = [
  {
    id: 1,
    title: "Projet d'Application Entreprise",
    description: "Application servant pour les étudiants et professeur servant a la gestion des stages",
    techno: [
      {
        id: 1,
        name: "Java"
      },
      {
        id: 2,
        name: "HTML"
      },
      {
        id: 3,
        name: "CSS"
      },
      {
        id: 4,
        name: "JavaScript"
      },
      {
        id: 5,
        name: "Eclipse Jersey"
      },
      {
        id: 6,
        name: "PostgreSQL"
      },
    ],
    projectUrl: "https://github.com/Shiusa/portfolio",
    imagePath: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Projet Web",
    description: "Application mini stackoverflow",
    techno: [
      {
        id: 1,
        name: "Java"
      },
      {
        id: 2,
        name: "HTML"
      },
      {
        id: 3,
        name: "CSS"
      },
      {
        id: 4,
        name: "JavaScript"
      }
    ],
    projectUrl: "https://github.com/Shiusa/portfolio",
    imagePath: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Projet HTML",
    description: "CV en HTML CSS",
    techno: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      }
    ],
    projectUrl: "https://github.com/Shiusa/portfolio",
    imagePath: "/placeholder.jpg"
  }
]

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