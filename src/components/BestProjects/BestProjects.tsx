import { useTranslations } from "next-intl";
import DocIcon from "@/components/icons/DocIcon";
import { Typography } from "@/components/ui/typography";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { Link } from "@/i18n/routing";

export default function BestProjects({ params }: { params: Promise<{ locale: string }> }) {
    const translate = useTranslations("bestProjects"); 

    return (<section id="projects" className="
            flex  
            flex-col
            py-12
            px-6
            gap-10
            items-center
        ">
        <article className="flex flex-col gap-2 justify-center items-center">
            <Typography.sectionTitle>{translate("title")}</Typography.sectionTitle>
            <Typography.H2>{translate("subtitle")}</Typography.H2>
        </article>
        <ProjectsSection params={params} />
        <Link href="/projects">
            <button className="
                w-36 h-14 
                bg-surfaceSecondary-light 
                dark:bg-surfaceSecondary-dark
                text-textPrimary-light
                dark:text-textPrimary-dark
                font-sans font-medium
                text-xs
                rounded-lg
                flex flex-row gap-2
                justify-center
                items-center
                ">
                <DocIcon className="fill-textSecondary-light dark:fill-textSecondary-dark"/>
                {translate("button")}
            </button>
        </Link>
    </section>);
}