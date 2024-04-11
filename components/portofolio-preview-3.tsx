
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "./author";

export default function PortofolioPreviewTiga({
  title,
  coverImage,
  // date,
  excerpt,
  // author,
  slug,
}) {
  return (
    <div className="grid sm:grid-cols-1 sm:m-3 sm:drop-shadow-xl md:col-span-2 grid-cols-2">
      <div className="grid col-span1 bg-black">

        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} showOverlay={true} titleClassname="text-center text-justify" />
        )}

      </div>
      <div className="grid  col-span-1  p-10 md:p-20 bg-black text-white">
        <div className="my-auto">
        {/* <h3 className="sm:text-sm md:text-3xl font-semibold mb-3">
          <Link
            href={`${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
        </h3> */}
        {/* <div className="flex sm:block md:inline sm:font-base md:font-bold sm:text-xs md:text-xs mb-4 inline">
          <Date dateString={date} />
          <div className="flex md:inline">

            <p className="flex sm:hidden md:inline px-2"> - </p>
            <Author author={author} classNames="md:inline"/>
          
          </div>
        </div> */}
        <div
          className="sm:text-xs md:text-lg leading-relaxed font-thin text-justify"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          />
      </div>
       <button
       
       className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
       type="button">
      <Link href={`${slug}`}>
      Read More
        </Link>
    </button>
      </div>

    </div>
   
      // {/* <Avatar author={author} /> */ }
    // </div>
  );
}
