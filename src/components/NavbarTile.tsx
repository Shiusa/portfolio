"use client"
import Link from "next/link"
import { NavData } from "./Navbar"
import Chevron from "./Chevron"
import NavbarSubTile from "./NavbarSubTile"
import { useState } from "react"
import { usePathname } from "next/navigation"

const NavbarTile = ({data}:{data:NavData}) => {

	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const pathName = usePathname();

	const toggleSubMenu = () => {
		setIsSubMenuOpen((prev) => !prev);
	};

	const isPathActive = pathName === data.path;

	return (
		<li>
			<div className={`flex columns-2 h-8 text-base items-center ${isPathActive ? 'bg-mauveNeon':''}`}>
				<div className="w-[20%]">
					{data.isSubMenu? (
						<Chevron isPathActive={isPathActive} toggleSubMenu={toggleSubMenu} />
					):(
						<div className="flex items-center justify-center">
						</div>
					)}
				</div>
				<Link href={data.path} className={`${isPathActive ? 'text-bleuNeon':'text-orTamise'}`}>
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