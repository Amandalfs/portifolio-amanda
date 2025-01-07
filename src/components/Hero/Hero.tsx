import Image from "next/image";
import computer from "@/assets/computer.svg"
import { useTranslations } from "next-intl";
import DocIcon from "../icons/DocIcon";
import ArrowRight from "@/assets/icons/ArrowRight.svg";

export default function Hero(){
    const translate = useTranslations("hero"); 
    return (<section className="flex flex-col justify-center items-center">
        <Image src={computer} alt="computer" />
        <article className="flex flex-col gap-6">
            <h1 className="text-[40px] font-kalam font-medium leading-10 bg-text-gradient bg-clip-text text-transparent">{translate("title")}</h1>
            <article className="flex flex-col">
                <h2 className="font-sans font-medium text-2xl text-textPrimary-light leading-8 dark:text-textPrimary-dark">{translate("subtitle")}</h2>
                <p className="font-sans font-normal leading-6 text-xs text-textSecondary-light dark:text-textSecondary-dark">{translate("description")}</p>
            </article>
            <article className="w-full flex flex-row gap-4 justify-center">
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
                    {translate("button-about")}
                </button>
                <button 
                    className="
                        w-36 h-14
                        bg-primaryColor-500
                        text-white
                        font-sans font-medium
                        text-xs
                        rounded-lg
                        flex flex-row gap-2
                        justify-center
                        items-center
                    "
                >
                    {translate("button-projects")}
                    <Image src={ArrowRight} alt="arrow right" />
                </button>
            </article>
        </article>
    </section>)
}