import Avatar from "./avatar";

import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "./author";

export default function PostPreviewTiga({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="grid md:col-span-2 grid-cols-2">
      <div className="grid col-span1 bg-black">

        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}

      </div>
      <div className="grid col-span-1 p-10 md:p-20 bg-black text-white">
        <div className="my-auto">
        <h3 className="text-3xl font-semibold mb-0">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
        </h3>
        <div className="flex inline text-normal py-5">
          <Date dateString={date} />
          <div className="flex inline">

            <p className="flex inline px-2"> - </p>
            <Author author={author}/>
          
          </div>
        </div>
        <div
          className="text-lg leading-relaxed font-thin text-justify"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          />
      </div>
          </div>

    </div>
   
      // {/* <Avatar author={author} /> */ }
    // </div>
  );
}
