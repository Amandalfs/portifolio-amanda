interface Tech {
    image: string,
    name: string
}

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    techs: Tech[];
    data: Date;
    link: string;
}

export interface BestProjectsDto {
    bestProjects: Project[];   
}