import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlueBtn from '@/components/BlueBtn'
import TechnoLabel from './TechnoLabel'
import { ProjectType } from '@/types/types'

const ProjectCard = ({ projectData }:{ projectData:ProjectType}) => {
  return (
    <div className='aspect-video min-w-[100%] bg-transparent flex flex-col items-center relative'>
        <div className='w-full'>
            {/* image zone */}
            <div className='aspect-video absolute left-[20%] top-[4%] right-[0%] rounded-lg'>

                {/* description zone */}
                <div className='bg-grisAnthracite h-[100%] xl:h-[68%] 2xl:h-[60%] bottom-[-3%] left-[-28%] right-[-2%] mt-[27%] absolute rounded-l-2xl rounded-br-2xl'>
                    <div className='w-full h-full relative'>

                        <div className='absolute top-0 left-0 bottom-0 w-[20.5%] h-full flex flex-col items-center p-[2%] justify-between'>

                            <div className='flex flex-col items-center h-full'>

                                <div className='flex flex-col pb-[12%] min-h-[80%]'>
                                    <h2 className='text-orTamise text-center text-lg leading-5 pb-[6%]'>{projectData.title}</h2>
                                    <p className='text-pretty text-center text-gray-300 text-sm leading-4 py-2'>{projectData.description}</p>
                                </div>

                                <div className='pb-[8%]'>
                                    <Link href={`/projects/${projectData.id}`}>
                                        <p className='text-bleuNeon hover:text-mauveNeon underline underline-offset-2 py-[2%] text-sm'>Lire la suite</p>
                                    </Link>
                                </div>

                            </div>

                            <div className='w-full flex flex-row gap-1 flex-wrap-reverse justify-center pt-[1%] overflow-hidden max-h-[10%] hover:overflow-visible scrollbar-hidden hover:bg-grisAnthracite'>
                                {projectData.techno?.map(techno=>(<TechnoLabel key={techno.id} name={techno.name}/>))}
                                {/* <TechnoLabel name='Java'/>
                                <TechnoLabel name='HTML'/>
                                <TechnoLabel name='CSS'/>
                                <TechnoLabel name='JavaScript'/> */}
                            </div>

                        </div>

                    </div>
                </div>

                {/* doublure image, absolute shenanigan */}
                <div className='bg-bleuAcier w-full h-full relative rounded-lg border-[2px] border-orTamise'>
                    <div className='w-full h-full static'>
                        <Image src="/placeholder.jpg" alt='placeholder' fill className='rounded-md'/>
                        {/* h-[10%] w-[20%] */}
                        <BlueBtn innerName='Voir le projet' path={projectData.projectUrl} className='absolute bottom-[4%] left-[3%]' target='_blank'/>
                        {/* <div className='absolute'>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProjectCard