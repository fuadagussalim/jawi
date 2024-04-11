import Avatar from "./avatar";

import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "./author";
import { MotionBTTContainer } from "./Motion";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
  handleCategoryClick
}) {
 
   const maxCharacters = 200;
const maxLines = 2; // Maximum number of lines for the title
  // Trim the excerpt to the maximum number of characters
  const trimmedExcerpt = excerpt.length > maxCharacters ? `${excerpt.substring(0, maxCharacters)}...` : excerpt;
  return (
            <MotionBTTContainer className={""} transition={{ delay: 0.7, duration: 0.5 }}>
    <div className="bg-pastel sm:grid-cols-2 md:h-[780px] sm:drop-shadow-xl sm:m-2 sm:p-3 md:m-0 md:p-5">

      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} imageClassName="sm:h-[200px] md:h-[500px] " slug={slug} />
        )}
      </div>
      <div className="flex mb-4 ">
              {categories.map((category, index) => (
                <button
                  key={index}
                   onClick={() => handleCategoryClick(category.node.name)}
                  className="sm:text-[7px] md:text-sm sm:whitespace-nowrap  p-2 bg-orange md:hover:text-white-400 text-white md:text-gray-500 focus:outline-none mr-2"
                >
                  {category.node.name}
                </button>
              ))}
            </div>
      <h3 className="text-base md:text-3xl line-clamp-[2] mb-3 font-semibold md:font-bold">
        <Link
          href={`${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="flex sm:block md:inline tracking-normal sm:font-base font-bold sm:text-xs md:text-xs mb-4 inline">
        <Date dateString={date} />
        <div className="flex md:inline">

        <p className="flex sm:hidden md:inline px-2"> - </p>
        <Author author={author} classNames="md:inline"/>
      
        </div>
      </div>
      <div
        className="sm:text-sm md:text-sm tracking-normal sm:font-light md:font-base leading-relaxed overflow-hidden  mb-4 text-justify"
        dangerouslySetInnerHTML={{ __html: trimmedExcerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
      </MotionBTTContainer>
  );
}
