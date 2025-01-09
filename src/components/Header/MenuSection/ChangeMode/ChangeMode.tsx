"use client"
import { useTheme } from "next-themes";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon";
import SunDimIcon from "@/components/icons/SunDimIcon";

export default function ChangeMode() {
    const pathname = usePathname();
    const params = useParams<{ locale: string }>()
    const {theme, setTheme } = useTheme();

    return (
        <article className="flex gap-4">
        <Link href={pathname.replace(`${params.locale}`, "")} locale={params.locale === "en" ? "pt" : "en"}>
            <ButtonIcon>
                {params.locale.toUpperCase()}    
            </ButtonIcon>  
        </Link>
        <ButtonIcon
            onClick={(e) => {
                e.preventDefault();
                if(theme === "light") {
                    setTheme("dark");
                    return
                }
                setTheme("light");
            }}
        >
        <SunDimIcon className="fill-textPrimary-light dark:fill-textPrimary-dark" />
        </ButtonIcon>  
    </article>
    );
}
