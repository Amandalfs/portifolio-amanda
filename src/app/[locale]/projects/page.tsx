import { AllProjects } from "@/app/api/[locale]/projects/AllProjects.dto";
import Button from "@/components/ui/Button/Button";
import { Card } from "@/components/ui/Card/Index";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ locale: string }> }){
    const locale = (await params).locale;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const response = await fetch(`${apiUrl}/api/${locale}/projects`, {
        method: "GET",
    })

    const { projects } = await response.json() as AllProjects

    return (<section className="flex flex-col gap-[46px] h-screen">
        <article className="flex flex-col items-center gap-2 mt-16">
            <Typography.sectionTitle>
                {locale === "pt" ? "Projetos" : "Projects"}
            </Typography.sectionTitle>
            <div className="flex flex-col md:flex-row gap-6">
                {
                    projects && projects?.map((project)=> {
                            const formattedDate = new Date(project.date);
                            return (<Card.Root
                            key={project.id}>
                                <Link href={`${project.link}`} target="_blank">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        width={400} height={160}
                                        className="
                                        rounded-t-xl
                                        "
                                    />
                                </Link>
                                <section className="flex w-full justify-between">
                                    {
                                        new Intl.DateTimeFormat(locale, { 
                                            month: "short", 
                                            day: "2-digit", 
                                            year: "numeric", 
                                            timeZone: "UTC" 
                                            }).format(formattedDate).replace(",", "")
                                    }
                                    <ul className="flex gap-4">
                                        {
                                            project.techs.map((tech, index) => {
                                                return (<li key={index}>
                                                    <Image 
                                                        className="fill-textSecondary-light dark:fill-textSecondary-dark"
                                                        src={tech.image} alt={tech.name} width={32} height={32} 
                                                    />
                                                </li>)
                                            })
                                        }
                                    </ul>
                                </section>
                                <section className="flex justify-between items-start">  
                                    <div className="flex flex-col gap-2">
                                        <Typography.H2>
                                            {project.title}
                                        </Typography.H2>
                                        <Typography.paragraph className="text-sm">
                                            {project.description}
                                        </Typography.paragraph>                                
                                    </div>
                                    <Link href={`/projects/${project.id}`}>
                                        <Button color="primary" size="sm">
                                            {locale === "pt" ? "Ver detalhes" : "See details"}
                                        </Button> 
                                    </Link>
                                </section>
                            </Card.Root>)
                    })
                }
            </div>            
        </article>
    </section>)
} 