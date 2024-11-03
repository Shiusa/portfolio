import { ProjectType, SubMenu } from "@/types/types";

export const extractSubMenuFromProjects = (projects: ProjectType[]): SubMenu[] => {
    return projects.map((project) => ({
        id: project.id,
        name: project.title,
        path: "/projects/"+project.id,
    }));
};

export const truncateText = (text:string, maxLength:number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}