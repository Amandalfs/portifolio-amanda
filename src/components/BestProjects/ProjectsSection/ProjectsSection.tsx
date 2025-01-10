import { BestProjectsDto } from "@/app/api/[locale]/bestprojects/bestProjects.dto";
import { Card } from "@/components/ui/Card/Index";
import Image from "next/image";
import { Typography } from '@/components/ui/typography';
import { Link } from '@/i18n/routing';
import Button from "@/components/ui/Button/Button";

export async function ProjectsSection(){

    const response = await fetch(`http://localhost:3000/api/pt/bestprojects`, {
        method: "GET",
    })
    const { bestProjects } = await response.json() as BestProjectsDto

    return (<article className="flex flex-col gap-6">
            {
               bestProjects.map((bestProject)=> {
                    return (<Card.Root
                    key={bestProject.id}>
                        <Link href={`${bestProject.link}`} target="_blank">
                            <Image 
                                src={bestProject.image} 
                                alt={bestProject.title} 
                                width={400} height={160}
                                className="
                                rounded-t-xl
                                "
                            />
                        </Link>
                        <section className="flex w-full justify-between">
                            {new Date(bestProject.data).getFullYear()}
                            <ul className="flex gap-4">
                                {
                                    bestProject.techs.map((tech, index) => {
                                        return (<li key={index}><Image 
                                            className="fill-textSecondary-light dark:fill-textSecondary-dark"
                                            src={tech.image} alt={tech.name} width={32} height={32} /></li>)
                                    })
                                }
                            </ul>
                        </section>
                        <section className="flex justify-between items-center">  
                            <div className="flex flex-col gap-2">
                                <Typography.H2>
                                    {bestProject.title}
                                </Typography.H2>
                                <Typography.paragraph>
                                    {bestProject.description}
                                </Typography.paragraph>                                
                            </div>
                            <Button color="primary" size="sm">
                                Ver detalhes
                            </Button> 
                        </section>
                    </Card.Root>)
               })
            }            
        </article>)
}

