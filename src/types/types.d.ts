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

export type Skill = {
    id: number;
    title: string;
    subTitle: string;
    path: string;
    image: string;
    imgAlt: string;
}

export type TechnologieType = {
    id: number;
    name: "Java" | "HTML" | "CSS" | "C" | "JavaScript" | "PostgreSQL" | "Eclipse Jersey" | "Spring" | "React" | "Next JS" | "Jenkins" | "Git";
}
  
export type ProjectType = {
    id: number;
    title: string;
    description: string;
    techno?: TechnologieType[];
    projectUrl: string;
    imagePath: string;
}