import React from 'react'

const ProjectPage = async ({ params }:{ params: { id:number } }) => {
  const { id } = await params;
  return (
    <div>Project {id}</div>
  )
}

export default ProjectPage