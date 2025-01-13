import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ChangeMode from "@/components/Header/MenuSection/ChangeMode/ChangeMode";

export default function MenuSection() {
    const translate = useTranslations("menu");

    return (<nav 
        className="w-[280px] h-screen 
        bg-surfacePrimary-light
        dark:bg-surfacePrimary-dark
        flex flex-col 
        px-6
        py-6
        gap-6
        fixed
        top-[64px]
        right-0
        items-end
        z-10
        "
    >   
        <ul className="flex flex-col gap-6 text-right">
            <li className="text-textPrimary-light dark:text-textPrimary-dark text-xs font-bold">
                <Link href="/#home">
                    Home
                </Link>
            </li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                <Link href="/#about">
                    {translate("about")}
                </Link>
            </li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                <Link href="/#projects">
                    {translate("projects")}
                </Link>
            </li>
            <li className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                <Link href="/#contacts">
                    {translate("contacts")}
                </Link>
            </li> 
        </ul>
        <div className="flex border-1 h-px w-full bg-secondaryColor-light dark:bg-secondaryColor-dark" />
        <ChangeMode />
    </nav>
    );
}