import clsx from "clsx";
import { ComponentProps } from "react";

export default function ButtonIcon({ children, className,  ...rest }: ComponentProps<"button">) {
    return (
        <button {...rest} className={clsx("flex w-12 h-12 rounded-lg justify-center items-center bg-surfaceSecondary-light dark:bg-surfaceSecondary-dark", className)}>
            {children}
        </button>
    );
}