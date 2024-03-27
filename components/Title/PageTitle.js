import { SectionContainer } from "../Section";
import clsx from "clsx";
import { useState, useEffect } from "react";


const titleVariant = {
    xheavy: "text-5xl lg:text-7xl",
    heavy: "text-4xl lg:text-6xl",
    default: "text-3xl lg:text-5xl",
    small: "text-xl lg:text-3xl",
    xsmall: "text-lg lg:text-2xl",
    xxsmall: "text-m lg:text-xl",
};
export const PageTitle = ({ children, className = "", type = "" }) => {
    const titleClass = clsx("h3 font-semibold ", titleVariant[type], className);
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
