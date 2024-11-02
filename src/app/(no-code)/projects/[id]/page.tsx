import React from 'react'

// type ProjectPageProps = {
//   params: {
//     slug: string;
//   }
// }

const ProjectPage = async(props : { params: { slug:string } }) => {
  const { slug } = await props.params;
  return (
    <div>Project {slug}</div>
  )
}

export default ProjectPage