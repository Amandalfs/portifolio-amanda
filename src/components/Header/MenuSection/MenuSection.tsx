import ChangeMode from "./ChangeMode/ChangeMode";
import { useTranslations } from "next-intl";

export default function MenuSection() {
    const translate = useTranslations("menu");
    return (<section 
        className="w-[280px] h-screen 
        bg-surfacePrimary-light
        dark:bg-surfacePrimary-dark
        flex flex-col 
        px-6
        py-6
        gap-6
        fixed
        top-15
        right-0
        items-end
        z-10
        "
    >   
        <ul className="flex flex-col gap-6 text-right">
            <li className="text-textPrimary-light dark:text-textPrimary-dark text-xs font-bold">Home</li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">{translate("about")}</li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">{translate("projects")}</li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">{translate("contacts")}</li> 
        </ul>
        <div className="flex border-1 h-px w-full bg-secondaryColor-light dark:bg-secondaryColor-dark" />
        <ChangeMode />
    </section>
    );
}