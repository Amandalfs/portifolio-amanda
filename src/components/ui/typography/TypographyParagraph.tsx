import { ComponentProps } from "react";

export function TypographyParagraph({ children, ...rest }: ComponentProps<"p">){
    return <p className="font-sans font-normal text-xs text-textSecondary-light dark:text-textSecondary-dark" {...rest}>{children}</p>;
}