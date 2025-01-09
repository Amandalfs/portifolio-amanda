import { ComponentProps } from "react";

export function TypographySectionTitle({ children, ...rest }: ComponentProps<"h3">) {
    return <h3 className="font-sans font-normal text-base text-secondaryColor-light dark:text-secondaryColor-dark" {...rest}>{children}</h3>;
}