import React from 'react'

type Params = Promise<{
  slug: string
}>

const ProjectPage = async(props : { params: Params }) => {
  const { slug } = await props.params;
  return (
    <div>Project {slug}</div>
  )
}

export default ProjectPage