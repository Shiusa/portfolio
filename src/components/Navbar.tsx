import { navData } from "@/data/data"
import NavbarTile from "./NavbarTile"

const Navbar = () => {
  return (
    <nav className="h-full w-full bg-grisAnthracite">
		<div className={`flex h-[4%] text-base bg-bleuAcier text-orTamise lg:flex items-center lg:justify-start`}>
			<p className='text-center w-full'>Nguyen Kyle</p>
		</div>
        <ul>
			{navData.map(linkData=>(
            	<NavbarTile key={linkData.id} data={linkData} />
			))}
        </ul>
    </nav>
  )
}

export default Navbar