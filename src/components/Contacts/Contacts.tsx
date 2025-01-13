import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import GithubIcon from "@/components/icons/GitHubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon";
import Input from "@/components/ui/Input/Input";
import { Typography } from "@/components/ui/typography";
import TextArea from "@/components/ui/TextArea/TextArea";
import Button from "@/components/ui/Button/Button";
import ContactMandy from "@/components/imagens/ContactMandy";

export default function Contacts() {
    const translate = useTranslations("contacts");

    return (<section
        id="contacts"
        className="       
            flex flex-col 
            bg-surfacePrimary-light
            dark:bg-surfacePrimary-dark
            py-12
            px-6
            gap-10
        "
    >
        <article className="flex flex-col gap-10">
            <ContactMandy />
            <div className="flex flex-col gap-4">
                <div>
                    <Typography.sectionTitle>
                        {translate("title")}
                    </Typography.sectionTitle>
                    <Typography.H2>{translate("subtitle")}</Typography.H2>
                </div>
                <div>
                    {translate("description").split("$email")[0]}
                    <Typography.span>{translate("email")}</Typography.span>
                    {translate("description").split("$email")[1]}
                </div>
                <ul className="flex gap-2">
                    <li>
                        <Link href="https://github.com/amandalfs" target="_blank">
                            <ButtonIcon>
                                <GithubIcon />
                            </ButtonIcon>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/amanda-rodrigues-dfbd/" target="_blank">
                            <ButtonIcon>
                                <LinkedinIcon />
                            </ButtonIcon>
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
        <form className="flex flex-col gap-4">
            <Input type="text" placeholder={translate("input-name")} />
            <Input type="e-mail" placeholder="E-mail" />
            <TextArea placeholder={translate("input-message")} />
            <Button size="lg">{translate("button")}</Button>
        </form>
    </section>)
}