
import { ComponentProps } from "react";

export default function Input({children, ...rest}: ComponentProps<"input">) {
    return (
        <input
            className="
                w-full
                h-12
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
                
                placeholder-textPrimary-light
                dark:placeholder-textPrimary-dark
                invalid:border-pink-500 invalid:text-pink-600
            "
            {...rest}
        >{children}</input>
    )
}