import React from 'react'
import {promises as fs} from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { projectData } from '@/data/data'
import { ProjectType } from '@/types/types'
import TechnoLabel from '../_component/TechnoLabel'
// import { serialize } from 'next-mdx-remote/serialize'
import WrappedImageWithText from '@/components/WrappedImageWithText'
import WrappedImageDouble from '@/components/WrappedImageDouble'
import WrappedImageSingle from '@/components/WrappedImageSingle'

type Params = Promise<{
  id: string
}>

const ProjectPage = async(props : { params: Params }) => {
  
  const { id } = await props.params;
  const project:ProjectType | undefined = projectData.find(project=> project.id.toString()===id);

  if (!project) {
    return notFound();
  }

  const projectsDir = path.join(process.cwd(), 'src/projects');
  const files = await fs.readdir(projectsDir);

  const fileName = files.find((file) => file.startsWith(`${id}-`) && file.endsWith('.mdx'));

  if (!fileName) {
    return notFound();
  }

  const filePath = path.join(projectsDir, fileName);
  const content = await fs.readFile(filePath, 'utf-8');

  // const filePath = path.join(process.cwd(), 'src/projects', `${id}.mdx`);
  // const content = await fs.readFile(filePath, 'utf-8')
  const data = await compileMDX<{id:number; title:string}>({
    source: content,
    options: {
      parseFrontmatter: true
    },
    components: {
      WrappedImageWithText,
      WrappedImageDouble,
      WrappedImageSingle
    }
  })

  return (
    <div className='py-[8%] prose prose-headings:text-mauveNeon prose-headings:text-balance prose-h1:text-center prose-ul:leading-6 prose-strong:text-mauveNeon max-w-[100%] px-[15%] text-gray-100 overflow-y-scroll scrollbar-hidden flex flex-col prose-h1:text-orTamise'>
      {/* <h1>Project {id}</h1> */}
      <h1 className='text-center leading-10'>{project.title}</h1>
      <div className='flex gap-1 flex-wrap pt-[8%] pb-[2%]'>
        {project.techno? (
          project.techno.map(techno => <TechnoLabel key={techno.id} name={techno.name}/>)
        ):""}
      </div>
      {/* <h1>{data.frontmatter.title}</h1> */}
      {/* <MDXRemote source={content} components={{TestWrapper}} /> */}
      <div>
        {data.content}
      </div>
    </div>
  )
}

export default ProjectPage