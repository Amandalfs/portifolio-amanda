interface Tech {
    image: string,
    name: string
}

interface Team {
    name: string 
    role: string
} 

export interface Project {
    id: string;
    title: string;
    descriptionDetail: string;
    role: string;
    image: string;
    github: string;
    demo: string;
    team: Team[] | null;
    isSolo: boolean;
    techs: Tech[];
    date: Date;
    description: string;
    link: string;
}

export interface AllProjects {
    projects: Project[];   
}