import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import computer from "@/assets/computer.svg"
import DocIcon from "@/components/icons/DocIcon";
import ArrowDown from '@/components/icons/ArrowDown';
import Button from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/typography";

export default function Hero(){
    const translate = useTranslations("hero");
     
    return (<section id="home" className="flex flex-col justify-center items-center">
        <Image src={computer} alt="computer" />
        <article className="flex flex-col gap-6 mx-6">
            <h1 className="text-[40px] font-kalam font-medium leading-10 bg-text-gradient bg-clip-text text-transparent">{translate("title")}</h1>
            <article className="flex flex-col">
                <Typography.H2>{translate("subtitle")}</Typography.H2>
                <Typography.paragraph>{translate("description")}</Typography.paragraph>
            </article>
            <article className="w-full flex flex-row gap-4 justify-center">
                <Button color="secondary">
                    <DocIcon className="fill-textSecondary-light dark:fill-textSecondary-dark"/>
                    {translate("button-about")}
                </Button>
                <Button>
                    {translate("button-projects")}
                    <Image src={ArrowRight} alt="arrow right" />
                </Button>
            </article>
            <article  className="relative">
                <ArrowDown className="
                fill-secondaryColor-light
                dark:fill-secondaryColor-dark
                absolute
                bottom-[-120px]
                right-32
                "/>
            </article>
        </article>
    </section>)
}