import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

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
      <div className="mb-8 md:mb-16 tracking-wider">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-25 lg:gap-x-30  md:px-40">
        <div className="md:grid col-span1 pr-10">
          <hr className="h-1 font-bold bg-orange " />
          <h3 className="mb-4 text-l lg:text-4xl lg:font-semibold mt-3">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          
          <div className="mb-4 md:mb-0 font-light lg:text-3xl ">
            <Date dateString={date} />
          </div>
          <hr className="h-1 font-bold bg-orange mt-2 " />
        </div>
        <div className="grid md:col-span-2">
          <div
            className="text-lg mb-4 text-justify"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
