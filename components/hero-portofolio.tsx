
import CoverImage from "./cover-image";
import Link from "next/link";

import {Image} from "@nextui-org/react"

export default function HeroPortofolio({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <section>
      <div className="bg-black sm:grid-cols-2 sm:drop-shadow-xl md:m-0">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={`/portofolio/${slug}`} />
        )}
      </div>
      <h3 className="text-base md:text-3xl mb-3 font-semibold md:font-bold">
        <Link
          href={`/portofolio/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="flex sm:block md:inline tracking-normal sm:font-base font-bold sm:text-xs md:text-xs mb-4 inline">
      <div className="grid  col-span-1 gap-1 w-auto  items-end grid-cols-4">
              <Link href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"} target="_blank">
              <Image
                className="flex col-span-1  mx-auto"
                src="/sosmed/fb w.png"
                height={25}
                width={25}
                alt="">
              </Image>
              </Link>
              <Link href={"https://id.linkedin.com/company/javan-wildlife-institute"} target="_blank">
              <Image
                src="/sosmed/link w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
              </Link>
              <Link href={"https://www.instagram.com/javanwildlife/?hl=en"} target="_blank">
              <Image
                src="/sosmed/ig w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>
              <Link href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"} target="_blank">
              <Image
                src="/sosmed/yt w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>

            </div>
      </div>
      <div
        className="sm:text-sm md:text-sm tracking-normal sm:font-light md:font-base leading-relaxed  mb-4 text-justify"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
        
     
    </section>
  );
}
