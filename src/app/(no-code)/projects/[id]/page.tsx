import React from 'react'

type Params = Promise<{
  id: string
}>

const ProjectPage = async(props : { params: Params }) => {
  
  const { id } = await props.params;

  return (
    <div>Project {id}</div>
  )
}

export default ProjectPage