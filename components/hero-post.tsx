import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { PostpageBanner } from "./Banner";
import Author from "./author";
export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      {/* <div className="md:hidden mb-8 md:mb-16 tracking-wider">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage?.node.sourceUrl} slug={slug} />
        )}
      </div> */}
      <PostpageBanner  image={coverImage?.node.sourceUrl} maintext={""} subtext={""} className="" />
      <div className="md:grid md:grid-cols-3 md:gap-x-25 lg:gap-x-30 mt-10 sm:px-10 md:px-40"
      >
        <div className="md:grid col-span1  md:pr-10">
          <hr className="h-1 font-bold bg-orange " />
          <h3 className="mb-4 text-l lg:text-4xl lg:font-semibold mt-3">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="flex sm:block md:inline tracking-normal sm:font-base sm:text-xs md:text-xl mb-4 inline">
        <Date dateString={date} />
        <div className="flex md:inline">

        <p className="flex sm:hidden md:inline px-2"> - </p>
        <Author author={author} classNames="md:inline"/>
      
        </div>
      </div>
{/*           
          <div className="mb-4 md:mb-0 font-light lg:text-3xl ">
            
            <div className="inline">

            <Date dateString={date} />
            <Avatar author={author} />
            </div>
          </div> */}
          <hr className="h-1 font-bold bg-orange mt-2 " />
        </div>
        <div className="grid md:col-span-2 sm:mt-10">
          <div
            className="text-lg mb-4 text-justify"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
         
        </div>
      </div>
    </section>
  );
}
