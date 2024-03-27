import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";

const ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black"
};

export const Button = ({
    children,
    // icon = "",
    href = "",
    type = "link",
    variant = "black",
    className = "",
    radius = "0",
    target = "no"
}) => {
    const Element = type === "button" ? "button" : Link;
    const variantClass = ButtonVariant[variant];
    const buttonClass = clsx("btn", variantClass, className);
    const buttonVariant = variant == "black"? "uppercase text-white bg-black uppercase font-bold px-4 py-2 hover:bg-white hover:text-black":"uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-black";
    const targetPage = target == "no"? "": "_blank";
    return (
        <Link href={href} role="button" className={`${buttonClass} ${buttonVariant} rounded-${radius}`} target={`${targetPage}`}>
            {children}
            {/* {icon?.length && <Icon icon={icon} />} */}
        </Link>
    );
};
