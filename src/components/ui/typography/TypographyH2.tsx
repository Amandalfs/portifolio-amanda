import { ComponentProps } from "react";

export function TypographyH2({ children, ...rest }: ComponentProps<"h2">) {
    return <h2 className="font-medium font-sans text-textPrimary-light dark:text-textPrimary-dark" {...rest}>{children}</h2>;
}