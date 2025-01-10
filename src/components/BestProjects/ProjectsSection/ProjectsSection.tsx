import { BestProjectsDto } from "@/app/api/[locale]/bestprojects/bestProjects.dto";
import { Card } from "@/components/ui/Card/Index";
import Image from "next/image";
import { Typography } from '@/components/ui/typography';
import { Link } from '@/i18n/routing';
import Button from "@/components/ui/Button/Button";

export async function ProjectsSection({params}: {params: Promise<{locale: string}>}) {
    const locale = (await params).locale
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/${locale}/bestprojects`, {
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
                            {
                                new Intl.DateTimeFormat(locale, { 
                                    month: 'short', 
                                    day: '2-digit', 
                                    year: 'numeric', 
                                    timeZone: 'UTC' 
                                    }).format(new Date(bestProject.data)).replace(',', '')
                            }
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
                        <section className="flex justify-between items-center border-2 border-red-500">  
                            <div className="flex flex-col gap-2">
                                <Typography.H2>
                                    {bestProject.title}
                                </Typography.H2>
                                <Typography.paragraph>
                                    {bestProject.description}
                                </Typography.paragraph>                                
                            </div>
                            <Link href={`/projects/${bestProject.id}`}>
                                <Button color="primary" size="sm">
                                    {locale === "pt" ? "Ver detalhes" : "See details"}
                                </Button> 
                            </Link>
                        </section>
                    </Card.Root>)
               })
            }            
        </article>)
}

