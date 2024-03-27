
export const Card = ({
}) => {
    const Element = link ? Link : "div";
    const href =
        typeof link === "string" ? link : link?.href != null ? link.href : "";
    return (
        <SectionContainer
            className={clsx(
                "card rounded-lg overflow-hidden",
                {
                    [CardType.default]: type === "default",
                    [CardType.bordered]: type === "bordered"
                },
                className
            )}
        >
            <Element
                href={href}
                target={link ? target : "_self"}
                className=""
            >
                {children}
            </Element>
        </SectionContainer>
    );
};
