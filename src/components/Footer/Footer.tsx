import { Link } from "@/i18n/routing";
import { Typography } from "../ui/typography";
import ArrowUp from "@/components/icons/ArrowUp";

export default function Footer() {  
    return (<footer className="flex h-16">
        <ul className="flex w-full items-center justify-around gap-4">
            <li>
                <Link href="" target="_blank">
                    <Typography.H2>Github</Typography.H2>
                </Link>
            </li>
            <li>
                <Link href="" target="_blank">
                    <Typography.H2>Linkedin</Typography.H2>
                </Link>
            </li>
            <li>
                <ArrowUp
                    className="fill-textPrimary-light dark:fill-textPrimary-dark"
                />
            </li>
        </ul>
    </footer>)
}