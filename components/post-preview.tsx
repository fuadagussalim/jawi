import Avatar from "./avatar";

import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "./author";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-pastel p-5">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 font-semibold">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="flex inline font-bold text-lg mb-4 inl">
        <Date dateString={date} />
        <div className="flex inline">

        <p className="flex inline px-2"> - </p>
        <Author author={author}>
        </Author>
        </div>
      </div>
      <div
        className="text-lg font-light leading-relaxed mb-4 text-justify"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
  );
}
