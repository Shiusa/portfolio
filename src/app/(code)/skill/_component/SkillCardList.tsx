import React from 'react'
import SkillCard from './SkillCard'

export type Skill = {
    id: number;
    title: string;
    subTitle: string;
    path: string;
    image: string;
    imgAlt: string;
}

const SkillCardList = () => {

    const skillList:Skill[] = [
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

  return (
    <div className='h-full w-[60%] xl:w-[68%] 2xl:w-[60%]'>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
            {skillList.map(skill=>(
                <SkillCard key={skill.id} skillData={skill} />
            ))}
        </div>
    </div>
  )
}

export default SkillCardList