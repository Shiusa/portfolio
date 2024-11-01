import NavbarTile from "./NavbarTile"

export type SubMenu = {
	id: number;
	name: string;
	path: string;
}

export type NavData = {
  id: number;
  name: string;
  path: string;
  isSubMenu: boolean;
  subMenu?: SubMenu[];
}

const navData:NavData[] = [
    {
      id: 1,
      name: "Accueil",
      path: "/",
	  isSubMenu: false
    },
	{
		id: 2,
		name: "Profil",
		path: "/profile",
		isSubMenu: false
	  },
    {
      id: 3,
      name: "Compétence",
      path: "/skill",
	  isSubMenu: false
    },
    {
      id: 4,
      name: "Projets",
      path: "/projects",
	  isSubMenu: true,
	  subMenu: [
		{
			id:1,
			name: "Projets 1",
			path: "/projects/1"
		},
		{
			id:2,
			name: "Projets 2",
			path: "/projects/2"
		}
	  ]
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
	  isSubMenu: false
    },
    {
      id: 6,
      name: "Public",
      path: "/public",
	  isSubMenu: true,
	  subMenu: [
		{
			id:1,
			name: "CV",
			path: "/cv"
		},
		{
			id:2,
			name: "Portfolio",
			path: "/portfolio"
		}
	  ]
    }
]

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