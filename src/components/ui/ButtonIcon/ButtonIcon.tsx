import { ComponentProps } from "react";

export default function ButtonIcon({ children, ...rest }: ComponentProps<"button">) {
    return (
        <button {...rest} className="flex w-12 h-12 rounded-lg justify-center items-center bg-surfaceSecondary-light dark:bg-surfaceSecondary-dark">
            {children}
        </button>
    );
}