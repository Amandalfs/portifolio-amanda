"use client"
import { Link } from "@/i18n/routing";
import { Typography } from "../ui/typography";
import ArrowUp from "@/components/icons/ArrowUp";

export default function Footer() {  
    return (<footer className="flex h-16">
        <ul className="flex w-full items-center justify-around gap-4">
            <li>
                <Link href="https://github.com/amandalfs" target="_blank">
                    <Typography.H2>Github</Typography.H2>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/amanda-rodrigues-dfbd/" target="_blank">
                    <Typography.H2>Linkedin</Typography.H2>
                </Link>
            </li>
            <li>
                <ArrowUp
                    onClick={()=>{ 
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="fill-textPrimary-light dark:fill-textPrimary-dark"
                />
            </li>
        </ul>
    </footer>)
}