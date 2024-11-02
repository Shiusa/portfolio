import React from 'react'

type ProjectPageProps = {
  params: {
    id: string;
  }
}

const ProjectPage = ({ params }:ProjectPageProps) => {
  const { id } = params;
  return (
    <div>Project {id}</div>
  )
}

export default ProjectPage