import clsx from "clsx";
import { ComponentProps } from "react";

export function TypographyParagraph({ children, className, ...rest }: ComponentProps<"p">){
    return <p className={clsx("font-sans leading-8 whitespace-pre-line font-normal text-xs text-textSecondary-light dark:text-textSecondary-dark", className)} {...rest}>{children}</p>;
}