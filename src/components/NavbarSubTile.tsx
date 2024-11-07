import React from 'react'
import Link from 'next/link'
import { SubMenu } from '@/types/types'
import { truncateText } from '@/utils/utils'
import { useTabContext } from '@/context/TabProvider'
import { usePathname } from 'next/navigation'

const NavbarSubTile = ({subData}:{subData:SubMenu}) => {

  const { addTab } = useTabContext();
  const pathName = usePathname();

  const isPathActive = pathName === subData.path;

  const handleClick = () => {
    addTab(subData.name, subData.path);
};
  
  return (
    <>
        <div className={`w-full flex columns-2 h-8 text-base items-center ${isPathActive ? 'bg-mauveNeon':''}`}>
            <Link onClick={handleClick} href={subData.path} className={`w-full h-full flex items-center ${isPathActive ? 'text-gray-200':'text-orTamise'}`} title={subData.name}>
              <div className="ml-[10%] w-[20%] h-8 flex items-center justify-center border-l-[1px] border-orTamise">
              </div>
              <div className='w-[80%] h-full flex flex-row items-center justify-start whitespace-nowrap overflow-hidden'>
                {truncateText(subData.name,12)}
              </div>
            </Link>
        </div>
    </>
  )
}

export default NavbarSubTile