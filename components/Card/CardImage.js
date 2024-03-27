import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, width="858", height="447", className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                objectFit="cover"
                loading="lazy"
                className={`w-full h-full ${imageClassName && imageClassName}`}
            />
        </div>
    );
};
