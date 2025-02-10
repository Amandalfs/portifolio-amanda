import clsx from "clsx";
import { ComponentProps } from "react";

export function TypographyParagraph({ children, className, ...rest }: ComponentProps<"p">){
    return <p className={clsx("font-sans whitespace-pre-line font-normal text-xl text-textSecondary-light dark:text-textSecondary-dark", className)} {...rest}>{children}</p>;
}