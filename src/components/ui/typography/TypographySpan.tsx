import { ComponentProps } from "react";

export function TypographySpan({children, ...rest}: ComponentProps<"span">) {
    return (<span className="text-secondaryColor-light dark:text-secondaryColor-dark font-semibold" {...rest}>{children}</span>)

}