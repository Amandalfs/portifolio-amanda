import { ComponentProps } from "react";

export function CardRoot({ children, ...rest }: ComponentProps<"div">) {
    return (<div
        className="
            flex
            flex-col
            gap-4
            w-[384px]
            rounded-2xl
            p-6
            bg-surfacePrimary-light
            dark:bg-surfacePrimary-dark
        "
        {...rest}
    >
        {children}
    </div>)
} 