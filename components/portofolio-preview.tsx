
import CoverImage from "./cover-image";
import Link from "next/link";
import { MotionBTTContainer } from "./Motion";


export default function PortofolioPreview({
  title,
  coverImage,

  excerpt,

  slug,
}) {
  return (
     <MotionBTTContainer className={""} transition={{ delay: 0.7, duration: 0.5 }}>
    <div className="bg-white sm:grid-cols-2 sm:drop-shadow-xl sm:m-2 sm:p-3 md:m-0 md:p-5">
      <div className="">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} imageClassName="sm:h-[300px]" showOverlay={true} slug={slug} />
        )}
      </div>
      {/* <h3 className="text-base md:text-3xl mb-3 font-semibold md:font-bold">
        <Link
          href={`${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3> */}
      {/* <div className="flex sm:block md:inline tracking-normal sm:font-base font-bold sm:text-xs md:text-xs mb-4 inline">
        <Date dateString={date} />
        <div className="flex md:inline">

        <p className="flex sm:hidden md:inline px-2"> - </p>
        <Author author={} classNames="md:inline"/>
      
        </div>
      </div> */}
      {excerpt && (
  <div
    className="sm:text-sm md:text-sm tracking-normal sm:font-light md:font-base leading-relaxed mb-4 text-justify"
    dangerouslySetInnerHTML={{ __html: excerpt }}
  />)}
     
      {/* <Avatar author={author} /> */}
    </div>
    </MotionBTTContainer>
  );
}
