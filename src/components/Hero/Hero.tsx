import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import DocIcon from "@/components/icons/DocIcon";
import ArrowDown from '@/components/icons/ArrowDown';
import Button from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/typography";
import Computer from "@/components/imagens/computer";
import { Link } from '@/i18n/routing';

export default function Hero(){
    const translate = useTranslations("hero");
     
    return (<section id="home" className="flex flex-col justify-center items-center mt-16 md:gap-32 md:flex-row-reverse">
        <Computer className="text-secondaryColor-light dark:text-secondaryColor-dark" />
        <article className="flex flex-col gap-6 mx-6 md:w-[592px]">
            <h1 className="text-[40px] font-kalam font-medium leading-10 bg-text-gradient dark:bg-text-gradient-dark bg-clip-text text-transparent">{translate("title")}</h1>
            <article className="flex flex-col">
                <Typography.H2>{translate("subtitle")}</Typography.H2>
                <Typography.paragraph>{translate("description")}</Typography.paragraph>
            </article>
            <article className="w-full flex flex-row gap-4 justify-center md:justify-start">
                <Link href="#about">
                    <Button color="secondary">
                        <DocIcon className="fill-textSecondary-light dark:fill-textSecondary-dark"/>
                        {translate("button-about")}
                    </Button>
                </Link>
                <Link href={"/projects"}>
                    <Button>
                        {translate("button-projects")}
                        <Image src={ArrowRight} alt="arrow right" />
                    </Button>
                </Link>
            </article>
            <article  className="relative">
                <ArrowDown className="
                fill-secondaryColor-light
                dark:fill-secondaryColor-dark
                absolute
                bottom-[-120px]
                right-32
                md:right-[-45%]
                "/>
            </article>
        </article>
    </section>)
}