import { NavData, ProjectType, Skill, SubMenu } from "@/types/types";
import { extractSubMenuFromProjects } from "@/utils/utils";

export const projectData:ProjectType[] = [
    {
      id: 1,
      title: "Projet d'Application Entreprise",
      description: "Application servant pour les étudiants et professeur servant a la gestion des stages",
      techno: [
        {
          id: 1,
          name: "Java"
        },
        {
          id: 2,
          name: "HTML"
        },
        {
          id: 3,
          name: "CSS"
        },
        {
          id: 4,
          name: "JavaScript"
        },
        {
          id: 5,
          name: "Eclipse Jersey"
        },
        {
          id: 6,
          name: "PostgreSQL"
        },
        {
          id: 7,
          name: "Bootstrap"
        },
      ],
      projectUrl: "https://github.com/Shiusa/portfolio",
      imagePath: "/1-thumbnail.png"
    },
    {
      id: 2,
      title: "Projet Web",
      description: "Application mini stackoverflow",
      techno: [
        {
          id: 1,
          name: "Java"
        },
        {
          id: 2,
          name: "HTML"
        },
        {
          id: 3,
          name: "CSS"
        },
        {
          id: 4,
          name: "JavaScript"
        }
      ],
      projectUrl: "https://github.com/Shiusa/portfolio",
      imagePath: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Projet HTML",
      description: "CV en HTML CSS",
      techno: [
        {
          id: 1,
          name: "HTML"
        },
        {
          id: 2,
          name: "CSS"
        }
      ],
      projectUrl: "https://github.com/Shiusa/portfolio",
      imagePath: "/placeholder.jpg"
    }
]

const projectSubMenu:SubMenu[] = extractSubMenuFromProjects(projectData);

export const navData:NavData[] = [
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
	  subMenu: projectSubMenu
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
			path: "/"
		}
	  ]
    }
]

export const skillList:Skill[] = [
    {
        id: 1,
        title: "Java",
        subTitle: "Langage de Programmation",
        path: "https://dev.java/",
        image: '/java-logo.png',
        imgAlt: 'Logo Java'
    },
    {
        id: 2,
        title: "C",
        subTitle: "Langage de Programmation",
        path: "https://en.cppreference.com/w/c/language",
        image: '/c-logo.png',
        imgAlt: 'Logo C'
    },
    {
        id: 3,
        title: "JavaScript",
        subTitle: "Langage de Programmation",
        path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image: '/js-logo.png',
        imgAlt: 'Logo JavaScript'
    },
    {
        id: 4,
        title: "HTML",
        subTitle: "Langage de Balisage",
        path: "https://html.spec.whatwg.org/multipage/",
        image: '/html-logo.png',
        imgAlt: 'Logo HTML'
    },
    {
        id: 5,
        title: "CSS",
        subTitle: "Langage de Style",
        path: "https://www.w3.org/Style/CSS/",
        image: '/css-logo.png',
        imgAlt: 'Logo CSS'
    },
    {
        id: 6,
        title: "PostgreSQL",
        subTitle: "Base de donnée",
        path: "https://www.postgresql.org/",
        image: '/postgresql-logo.png',
        imgAlt: 'Logo PostgreSQL'
    },
    {
        id: 7,
        title: "Eclipse Jersey",
        subTitle: "Framework",
        path: "https://eclipse-ee4j.github.io/jersey/",
        image: '/eclipse-jersey-logo.png',
        imgAlt: 'Logo Eclipse Jersey'
    },
    {
        id: 8,
        title: "Spring",
        subTitle: "Framework",
        path: "https://spring.io/",
        image: '/spring-logo.png',
        imgAlt: 'Logo Spring Boot'
    },
    {
        id: 9,
        title: "React",
        subTitle: "Framework",
        path: "https://react.dev/",
        image: '/react-logo.png',
        imgAlt: 'Logo React'
    },
    {
        id: 10,
        title: "Next JS",
        subTitle: "Framework",
        path: "https://nextjs.org/",
        image: '/nextjs-logo.png',
        imgAlt: 'Logo Next JS'
    },
    {
        id: 11,
        title: "Jenkins",
        subTitle: "Serveur d'automatisation",
        path: "https://www.jenkins.io/",
        image: '/jenkins-logo.png',
        imgAlt: 'Logo Jenkins'
    },
    {
        id: 12,
        title: "Git",
        subTitle: "Gestionnaire de version",
        path: "https://git-scm.com/",
        image: '/git-logo.png',
        imgAlt: 'Logo Git'
    }
]