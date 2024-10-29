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
      name: "Compétence",
      path: "/skill",
	  isSubMenu: false
    },
    {
      id: 3,
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
      id: 4,
      name: "Contact",
      path: "/contact",
	  isSubMenu: false
    },
    {
      id: 5,
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
    <nav className="h-full bg-grisAnthracite">
        <ul>
			{navData.map(linkData=>(
            	<NavbarTile key={linkData.id} data={linkData} />
			))}
        </ul>
    </nav>
  )
}

export default Navbar