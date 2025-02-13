"use client"
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ChangeMode from "@/components/Header/MenuSection/ChangeMode/ChangeMode";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function MenuSection() {
    const pathname = usePathname(); 
    const translate = useTranslations("menu");
    const isHome = !pathname.includes("/projects") && !pathname.includes("/contacts") && !pathname.includes("/about");
    const isProjects = pathname.includes("/projects");
    const isAbout = pathname.includes("/#about");
    const isContacts = pathname.includes("/#contacts");

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
            <li className={clsx("text-textPrimary-light dark:text-textPrimary-dark text-xs", isHome && "font-bold")}>
                <Link href="/#home">
                    Home
                </Link>
            </li>
            <li className={clsx("text-textPrimary-light dark:text-textPrimary-dark text-xs", isAbout && "font-bold")}>
                <Link href="/#about">
                    {translate("about")}
                </Link>
            </li>
            <li className={clsx("text-textPrimary-light dark:text-textPrimary-dark text-xs", isProjects && "font-bold")}>
                <Link href="/projects">
                    {translate("projects")}
                </Link>
            </li>
            <li className={clsx("text-textPrimary-light dark:text-textPrimary-dark text-xs", isContacts && "font-bold")}>
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