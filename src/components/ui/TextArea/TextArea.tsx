import { ComponentProps } from "react";

export default function TextArea({children, ...rest}: ComponentProps<"textarea">) {
    return (
        <textarea
            className="
                w-full
                h-32
                rounded-xl
                py-3
                px-4
                gap-2
                bg-surfaceBackground-light
                dark:bg-surfaceBackground-dark

                hover:border-secondaryColor-light
                dark:hover:border-secondaryColor-dark
                hover:border-[1.5px]
                hover:border-solid

                focus:border-secondaryColor-light
                dark:focus:border-secondaryColor-dark
                focus:border-[1.5px]
                focus:outline-none
            "
            {...rest}   
        >{children}</textarea>)
}