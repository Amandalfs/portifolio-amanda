import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

interface ButtonProps extends ComponentProps<"button">{
    color?: "primary" | "secondary",
    size?: "md" | "lg" | "sm"
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
            md:  "w-36",
            lg: "w-[266px]",
            sm: "w-24 h-8"
        },
    },
    defaultVariants: {
        color: "primary",
        size: "md"
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
    </button>)
}