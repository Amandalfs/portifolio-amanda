import { useTranslations } from "next-intl";
import DocIcon from "../icons/DocIcon";

export default function BestProjects() {
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
            <h3 className="font-sans font-normal text-base text-secondaryColor-light dark:text-secondaryColor-dark">{translate("title")}</h3>
            <h2 className="font-medium font-sans text-textPrimary-light dark:text-textPrimary-dark">{translate("subtitle")}</h2>
        </article>
        <article>

        </article>
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
    </section>);
}