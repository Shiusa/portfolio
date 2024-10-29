import React from 'react'
import { SubMenu } from './Navbar'
import Link from 'next/link'

const NavbarSubTile = ({subData}:{subData:SubMenu}) => {
  return (
    <>
        <div className='w-full flex columns-2 h-8 text-base items-center'>
            <div className="ml-5 w-[20%] h-8 flex items-center justify-center border-l-[1px] border-orTamise">
            </div>
            <Link href={subData.path} className="text-orTamise">
                {subData.name}
            </Link>
        </div>
    </>
  )
}

export default NavbarSubTile