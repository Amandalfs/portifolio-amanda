interface Tech {
    image: string,
    name: string
}

interface Team {
    name: string 
    role: string
} 

export interface ProjectDetail {
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
    link: string;
}

export interface FindProjectById {
    project: ProjectDetail;   
}