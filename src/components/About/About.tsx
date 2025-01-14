import Image from "next/image";
import JavascriptIcon from "@/assets/icons/JavaScriptIcon.svg";
import ReactIcon from "@/assets/icons/ReactIcon.svg";
import NodeJsIcon from "@/assets/icons/NodeJsIcon.svg";  
import TailwindIcon from "@/assets/icons/TailwindIcon.svg";
import { useTranslations } from "next-intl";
import DocIcon from "@/components/icons/DocIcon";
import { Typography } from "@/components/ui/typography";
import AvatarMandy from "@/components/imagens/AvatarMandy";

export default function About(){
    const  translate = useTranslations("about");
    return (<section 
        id="about"
        className="
            flex flex-col 
            bg-surfacePrimary-light
            dark:bg-surfacePrimary-dark
            py-12
            px-6
            gap-10
            md:flex-row
            md:gap-36
            md:justify-around
            md:px-0
            md:mx-6
        "
    >
        <AvatarMandy />      
        <article className="flex flex-col gap-8 md:w-[592px]">
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
                    <Typography.sectionTitle>{translate("title")}</Typography.sectionTitle>
                    <Typography.H2>{translate("subtitle")}</Typography.H2>
                </div>
                <Typography.paragraph>
                    {translate("description")}
                </Typography.paragraph>
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