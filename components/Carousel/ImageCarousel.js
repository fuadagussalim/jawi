'use client'
import { useState, useEffect } from "react";
import { getAllPostsForHome } from "../../lib/api";
import { format } from "date-fns";
import Link from "next/link";


const ImageCarousel = ({carouselPosts, className=""}) => {
    const posts = carouselPosts;
    console.log("post", posts)
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [previousImageIndex, setpreviousImageIndex] = useState(currentImageIndex - 1 < 0 ? carouselPosts.length-2 : currentImageIndex - 1);
    const [afterImageIndex, setafterImageIndex] = useState(currentImageIndex + 1 > carouselPosts.length ? 0 : currentImageIndex + 1);
   
    function handlePrevClick() {
        // Check if at the first slide
        if (previousImageIndex === 0) {
            setpreviousImageIndex(carouselPosts.length-2);
            setCurrentImageIndex(0);
            setafterImageIndex(1);
        } else {

            setpreviousImageIndex((prev) => (prev - 1 < 0 ? carouselPosts.length-2 : prev - 1));
            setafterImageIndex(currentImageIndex);
            setCurrentImageIndex(previousImageIndex);
        }

    }

    function handleNextClick() {
        // Check if at the last slide
        if (afterImageIndex === carouselPosts.length-1) {
            setpreviousImageIndex(carouselPosts.length-2);
            setCurrentImageIndex(0);
            setafterImageIndex(1);
        } else {
            setpreviousImageIndex(currentImageIndex);
            setafterImageIndex((next) => (next + 1 > carouselPosts.length? 1 : next + 1));
            setCurrentImageIndex(afterImageIndex);
        }
        
        // setpreviousImageIndex(currentImageIndex);
        // setafterImageIndex((next) => (next + 1 > carouselPosts.length ? 1 : next + 1));
        // setCurrentImageIndex(afterImageIndex);
        
        // posts[previousImageIndex]?.
    }
    console.log("posts[previousImageIndex]?",previousImageIndex);

    return (
        <div id="magazine" className={`sm:mb-10 md:mb-10 ${className}`}>
            <Link href={'/blog'}>
            <h4 className="text-center drop-shadow-lg text-orange mx-auto w-max font-bold mb-0">
                JAWI MAGAZINE
                <hr className="bg-black h-[2px] mb-5" />
            </h4>
            </Link>
            <div className="relative w-full">
                <button className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-2 bg-black text-white font-bold" onClick={handlePrevClick}>
                    ←
                </button>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href={`/posts/${posts[previousImageIndex]?.slug}`}>
                    <div className="hover:shadow-xl relative hidden md:show grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold text-shadow text-white z-20 bottom-[30px] m-5">
                            {posts[previousImageIndex]?.title}
                        </h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{posts[previousImageIndex]?.date}</p>
                        
                        <img src={posts[previousImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                        </Link>
                        <Link href={`/posts/${posts[currentImageIndex]?.slug}`}>
                    <div className="hover:shadow-xl relative grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold drop-shadow-lg text-white z-20 bottom-[30px] m-5">{posts[currentImageIndex]?.title}</h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{posts[currentImageIndex]?.date}</p>
                        
                        <img src={posts[currentImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                        </Link>
                        <Link href={`/posts/${posts[afterImageIndex]?.slug}`}>
                    <div className="hover:shadow-xl relative hidden md:show grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold text-white z-20 bottom-[30px] m-5">
                            {posts[afterImageIndex]?.title}
                        </h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{posts[afterImageIndex]?.date}</p>
                        
                        <img src={posts[afterImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                        </Link>
                </div>
                <button className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-2 bg-black text-white font-bold" onClick={handleNextClick}>
                    →
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;