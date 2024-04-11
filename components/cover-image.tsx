import cn from "classnames";
import { Image } from "@nextui-org/react";
import NextImage from 'next/image';
import Link from "next/link";

interface Props {
  title: string;
  coverImage: string;
  slug?: string;
  titleClassname?: string;
  showOverlay?: boolean; // New prop to control overlay visibility
  imageClassName?: string; // New prop to adjust image styling
}

export default function CoverImage({ title, coverImage, slug, titleClassname, showOverlay = false, imageClassName }: Props) {
  const image = (
    <div className="relative">
      <Image
        as={NextImage}
        width={8000}
        height={4000}
        alt={`Cover Image for ${title}`}
        src={coverImage}
        className={cn("shadow-small", imageClassName, {
          "hover:shadow-medium transition-shadow mb-0 duration-200 object-cover w-full": slug,
        })}
      />
      {slug && showOverlay && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-lg px-10 sm:text-sm md:text-base lg:text-lg text-center font-semibold text-white">{title}</h2>
            <button
              className="mt-4 mx-auto select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <Link className="z-45" href={`${slug}`}>
                Read More
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`${slug}`} aria-label={title} className={titleClassname}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
