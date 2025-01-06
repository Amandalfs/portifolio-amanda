"use client"
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import SunDimIcon from "@/components/icons/SunDimIcon";
import { useTheme } from "next-themes";

export default function ChangeMode() {
    const {theme, setTheme } = useTheme();

    return (
        <article className="flex gap-4">
        <ButtonIcon>
            PT    
        </ButtonIcon>  
        <ButtonIcon
            onClick={(e) => {
                e.preventDefault();
                if(theme === 'light') {
                    setTheme('dark');
                    return
                }
                setTheme('light');
            }}
        >
        <SunDimIcon className="fill-textPrimary-light dark:fill-textPrimary-dark" />
        </ButtonIcon>  
    </article>
    );
}
