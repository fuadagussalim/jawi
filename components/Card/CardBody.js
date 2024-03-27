'use client'
export const CardBody = ({ children, className }) => {
    return (
        <div className={`card--body ${className && className}"bg-[#F3F5F8]` }>{children}</div>
    );
};
