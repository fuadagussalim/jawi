export const SectionContainer = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`${className}`}>
            {children}
        </section>
    );
};
