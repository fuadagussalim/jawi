import { SectionContainer } from "../Section";
import clsx from "clsx";
import { useState, useEffect } from "react";


const titleVariant = {
    xheavy: "text-5xl lg:text-7xl font-semibold",
    heavy: "text-4xl lg:text-6xl font-semibold",
    default: "text-3xl lg:text-5xl font-semibold",
    homemain: "text-3xl lg:text-[60px] font-semibold",
    small: "text-xl lg:text-3xl font-semibold",
    xsmall: "text-lg lg:text-2xl font-semibold",
    homexsmall: "sm:text-xs  md:text-sm lg:text-[20px] font-light",
    xxsmall: "text-m lg:text-xl font-semibold",
};
export const PageTitle = ({ children, className = "", type = "" }) => {
    const titleClass = clsx("h1  ", titleVariant[type], className);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentCharIndex((prevIndex) => {
            if (prevIndex < {children}.length) {
              return prevIndex + 1;
            } else {
              return 0;
            }
          });
        }, 100);

    
        return () => clearInterval(interval);
      }, []);

    return (
        <SectionContainer
            className={`page-title--content  ${
                className && className
            }`}
        >
            <h1 className={`${titleClass}`}>{children}</h1>
        </SectionContainer>
    );
};
