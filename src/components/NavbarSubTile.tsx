import React from 'react'
import { SubMenu } from './Navbar'
import Link from 'next/link'

const NavbarSubTile = ({subData}:{subData:SubMenu}) => {
  return (
    <>
        <div className='w-full flex columns-2 h-8 text-base items-center'>
            <Link href={subData.path} className="w-full h-full flex items-center text-orTamise">
              <div className="ml-[10%] w-[20%] h-8 flex items-center justify-center border-l-[1px] border-orTamise">
              </div>
              <div className='w-[80%] h-full flex items-center justify-start'>
                {subData.name}
              </div>
            </Link>
        </div>
    </>
  )
}

export default NavbarSubTile