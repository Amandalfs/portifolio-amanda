import { ComponentProps } from "react"
import { tv } from "tailwind-variants"
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import Image from "next/image";

interface ButtonProps extends ComponentProps<"button">{
    color?: "primary" | "secondary",
    size?: "sm" | "lg"
}

const button = tv({
    base: `
        h-14
        font-sans font-medium
        text-xs
        rounded-lg
        flex flex-row gap-2
        justify-center
        items-center
    `,
    variants: {
        color: {
            primary: `                   
                bg-primaryColor-500
                text-textPrimary-dark
            `,
            secondary: `
                bg-surfaceSecondary-light 
                dark:bg-surfaceSecondary-dark
                text-textPrimary-light
                dark:text-textPrimary-dark
            `
        },
        size: {
            sm:  "w-36",
            lg: "w-[266px]" 
        },
    },
    defaultVariants: {
        color: "primary",
        size: "sm"
    }
})

export default function Button({ 
    color,
    children,
    size,
    ...rest
    }: ButtonProps){

    return (<button className={button({ color, size})} {...rest}>
        {children}
        <Image src={ArrowRight} alt="arrow right" />
    </button>)
}