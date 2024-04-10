import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "./author";
import { MotionBTTContainer } from "./Motion";

export default function PostPreviewTiga({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
  handleCategoryClick,
}) {

  return (
    <div className="grid sm:grid-cols-1 sm:m-3 sm:drop-shadow-xl md:col-span-2 grid-cols-2">
      <MotionBTTContainer className={""} transition={{ delay: 0.7, duration: 0.5 }}>
        <div className="grid col-span1 bg-black">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
          
        </div>
        <div className="grid col-span-1 p-5 md:p-20 bg-black text-white">
          <div className="my-auto">
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
            <h3 className="sm:text-sm md:text-3xl font-semibold mb-3">
              <Link href={`${slug}`} className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></Link>
            </h3>
           
            <div className="flex sm:block md:inline sm:font-base md:font-bold sm:text-xs md:text-xs mb-4 inline">
              <Date dateString={date} />
              <div className="flex md:inline">
                <p className="flex sm:hidden md:inline px-2"> - </p>
                <Author author={author} classNames="md:inline"/>
              </div>
            </div>
            <div className="sm:text-xs md:text-lg leading-relaxed font-thin text-justify" dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        </div>
      </MotionBTTContainer>
    </div>
  );
}
