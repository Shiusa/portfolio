"use client"
import Link from "next/link"
import Chevron from "./Chevron"
import NavbarSubTile from "./NavbarSubTile"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { NavData } from "@/types/types"
import { useTabContext } from "@/context/TabProvider"

const NavbarTile = ({data}:{data:NavData}) => {

	const { addTab } = useTabContext();
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const pathName = usePathname();

	const toggleSubMenu = () => {
		setIsSubMenuOpen((prev) => !prev);
	};

	const isPathActive = pathName === data.path;

	const handleClick = () => {
        addTab(data.name, data.path);
    };

	return (
		<li>
			<div className={`flex columns-2 h-8 text-base items-center ${isPathActive ? 'bg-mauveNeon':''}`}>
				<div className="w-[20%] h-full flex items-center justify-center">
					{data.isSubMenu? (
						<Chevron isPathActive={isPathActive} toggleSubMenu={toggleSubMenu} />
					):(
						<div className="flex items-center justify-center">
						</div>
					)}
				</div>
				<Link onClick={handleClick} href={data.path} className={`w-[80%] h-full flex items-center ${isPathActive ? 'text-gray-200':'text-orTamise'}`}>
					{data.name}
				</Link>
			</div>
			{data.isSubMenu && (
				<div className={`flex flex-col text-base items-start ${isSubMenuOpen? 'block':'hidden'}`}>
					{
						data.subMenu?.map(subTile => (
							<NavbarSubTile key={subTile.id} subData={subTile} />
						))
					}
				</div>
			)}
		</li>
	)
}

export default NavbarTile