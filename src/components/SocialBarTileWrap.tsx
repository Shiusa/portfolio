import React from 'react'

const SocialBarTileWrap = ({ children, path }:{ 
  children:React.ReactNode;
  path:string;
}) => {
  return (
    <a href={path} target='_blank'>    
      <li className="flex items-center justify-center p-2">
        {children}
      </li>
    </a>
 )
}

export default SocialBarTileWrap