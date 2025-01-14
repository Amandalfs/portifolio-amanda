import Button from "@/components/ui/Button/Button";
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { Link } from "@/i18n/routing";
import { FindProjectById } from "@/app/api/[locale]/projects/[id]/projectById.dto";

export default async function Page({ params }: { params: Promise<{ locale: string, id: string }> }) {
    const locale = (await params).locale;
    const id = (await params).id;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/${locale}/projects/${id}`, {
        method: "GET",
    })

    const { project } = await response.json() as FindProjectById

    let formattedMembers = "";
    if(!project.isSolo && project.team){
        const members = project.team.map((member)=> {
            return `${member.name} (${member.role})`
        })

        formattedMembers = members.join(", ")
    }
    
    const formattedDate =  new Date(project.date);

    return (<section className="min-h-screen flex flex-col pt-24 gap-8 pb-8 md:flex-row md:justify-center">
        {project && (<>
            <article 
                className="
                    flex 
                    flex-col 
                    gap-6
                    bg-surfacePrimary-light
                    dark:bg-surfacePrimary-dark
                    md:w-[800px]
                    md:rounded-2xl
                "
            >
                <div className="relative w-full h-52 md:w-[800px] md:h-[360px]" >
                    <Image
                        className="w-full h-52 md:w-[800px] md:h-[360px] md:rounded-t-2xl"
                        width={800}
                        height={800}
                        src={project.image}
                        alt="image project"
                    />
                    <Link href={"/"}>
                        <ButtonIcon
                            className="absolute top-4 left-4"
                        >
                                <ArrowLeft className="fill-textPrimary-light dark:fill-textPrimary-dark" />
                        </ButtonIcon>
                    </Link>
                </div>
                <div className="flex flex-col mx-6 gap-6 pb-12">
                    <div className="flex justify-between">
                        <Typography.paragraph>
                            {
                                new Intl.DateTimeFormat(locale, { 
                                    month: "short", 
                                    day: "2-digit", 
                                    year: "numeric", 
                                    timeZone: "UTC" 
                                    }).format(formattedDate).replace(",", "")
                            }
                        </Typography.paragraph>
                        <ul className="flex gap-4">
                          {
                            project.techs && project.techs.map((tech, index) =>{
                                return (<li key={index}>
                                    <Image
                                        className="fill-textSecondary-light dark:fill-textSecondary-dark"
                                        src={tech.image}
                                        alt={tech.name}
                                        width={32}
                                        height={32}
                                    />
                                </li>)
                            })
                          }
                        </ul>
                    </div>
                    <h1 className="font-medium text-3xl leading-10 text-textPrimary-light dark:text-textPrimary-dark">{project.title}</h1>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="font-bold text-textSecondary-light dark:text-textSecondary-dark">{locale === "en" ? "role: " : "minha função:"} </span>{project.role}
                        </div>
                        <div>
                            {!project.isSolo && (
                                <span className="font-bold text-textSecondary-light dark:text-textSecondary-dark">
                                    {locale === "en" ? "team: " : "time: "}{formattedMembers}
                                </span>) }
                            {project.isSolo && (
                            <span className="font-bold text-textSecondary-light dark:text-textSecondary-dark">
                                {locale === "en" ? "team: " : "time: "}{"Solo"}
                            </span>) }
                        </div>
                        <Typography.paragraph>
                          {project.descriptionDetail}
                        </Typography.paragraph>
                    </div>
                </div>
            </article>
            <article 
                className="
                    flex flex-col 
                    justify-center 
                    items-center 
                    gap-6 p-6 
                    bg-surfacePrimary-light 
                    dark:bg-surfacePrimary-dark
                    md:w-[384px]
                    md:h-[248px]
                    md:rounded-2xl
                ">
                <Typography.H2>Dê uma olhada neste projeto</Typography.H2>
                <div className="flex flex-col gap-2">
                    <Link href={project.demo} target="_blank">
                        <Button size="lg">Live demo</Button>
                    </Link>
                    <Link href={project.github} target="_blank">
                        <Button size="lg" color="secondary">Code</Button>
                    </Link>
                </div>
            </article>
        </>)}
    </section>)
}
