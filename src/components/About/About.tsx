import avatarMandy from "@/assets/avatarMandy.svg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/JavaScriptIcon.svg";
import ReactIcon from "@/assets/icons/ReactIcon.svg";
import NodeJsIcon from "@/assets/icons/NodeJsIcon.svg";  
import TailwindIcon from "@/assets/icons/TailwindIcon.svg";
import { useTranslations } from "next-intl";
import DocIcon from './../icons/DocIcon';

export default function About(){
    const  translate = useTranslations("about");
    return (<section className="
        flex flex-col 
        bg-surfacePrimary-light
        dark:bg-surfacePrimary-dark
        py-12
        px-6
        gap-10
    ">
        <Image src={avatarMandy} alt="avatar amanda"/>        
        <article className="flex flex-col gap-8">
            <ul className="flex flex-row gap-6">
                <li>
                    <Image src={JavascriptIcon} alt="javascript icon"/>
                </li>
                <li>
                    <Image src={ReactIcon} alt="react icon"/>
                </li>
                <li>
                    <Image src={NodeJsIcon} alt="nodejs icon"/>
                </li>
                <Image src={TailwindIcon} alt="tailwind icon"/>
            </ul>
            <div className="flex flex-col gap-4">
                <div>
                    <h2 id="about" className="font-sans font-normal text-base text-secondaryColor-light dark:text-secondaryColor-dark">{translate("title")}</h2>
                    <h2 className="font-medium font-sans text-textPrimary-light dark:text-textPrimary-dark" >{translate("subtitle")}</h2>
                </div>
                <p className="font-sans font-normal text-xs text-textSecondary-light dark:text-textSecondary-dark">
                    {translate("description")}
                </p>
            </div>
            <button 
                className="
                    w-36 h-14
                    bg-primaryColor-500
                    text-textPrimary-dark
                    font-sans font-medium
                    text-xs
                    rounded-lg
                    flex flex-row gap-2
                    justify-center
                    items-center
                "
            >
                <DocIcon className="fill-textPrimary-dark" />
                {translate("button-resume")}
            </button>
        </article>
    </section>)
}