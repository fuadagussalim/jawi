import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import { OtherpageBanner } from "./Banner";
import { parseISO, format } from "date-fns";
export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  console.log('coverimage:',coverImage.node.sourceUrl)
  return (
    <div className="pt-1">
      {/* <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div> */}
      
        <OtherpageBanner maintextclass="font-base sm:text-xl pt-0" subtextclass="sm:mt-0" image={coverImage.node.sourceUrl} maintext={title} type='default' subtext={format(parseISO(date), "LLLL	d, yyyy")}/>
        {/* <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div> */}
   
    </div>
  );
}
