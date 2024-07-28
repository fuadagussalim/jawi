'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const ImageCarousel = ({ carouselPosts, className = "" }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const previousImageIndex = currentImageIndex - 1 < 0 ? carouselPosts.length - 1 : currentImageIndex - 1;
    const afterImageIndex = currentImageIndex + 1 >= carouselPosts.length ? 0 : currentImageIndex + 1;

    function handlePrevClick() {
        setCurrentImageIndex(previousImageIndex);
    }

    function handleNextClick() {
        setCurrentImageIndex(afterImageIndex);
    }

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
                    <Link href={`/posts/${carouselPosts[previousImageIndex]?.slug}`}>
                        <div className="hover:shadow-xl relative hidden md:block col-span-1 w-full h-96 overflow-hidden transition-transform duration-500 ease-in-out">
                            <h5 className="absolute font-bold text-shadow text-white z-20 bottom-[30px] m-5">
                                {carouselPosts[previousImageIndex]?.title}
                            </h5>
                            <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{carouselPosts[previousImageIndex]?.date}</p>
                            <img src={carouselPosts[previousImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
                        </div>
                    </Link>
                    <Link href={`/posts/${carouselPosts[currentImageIndex]?.slug}`}>
                        <div className="hover:shadow-xl relative col-span-1 w-full h-96 overflow-hidden transition-transform duration-500 ease-in-out">
                            <h5 className="absolute font-bold drop-shadow-lg text-white z-20 bottom-[30px] m-5">{carouselPosts[currentImageIndex]?.title}</h5>
                            <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{carouselPosts[currentImageIndex]?.date}</p>
                            <img src={carouselPosts[currentImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
                        </div>
                    </Link>
                    <Link href={`/posts/${carouselPosts[afterImageIndex]?.slug}`}>
                        <div className="hover:shadow-xl relative hidden md:block col-span-1 w-full h-96 overflow-hidden transition-transform duration-500 ease-in-out">
                            <h5 className="absolute font-bold text-white z-20 bottom-[30px] m-5">
                                {carouselPosts[afterImageIndex]?.title}
                            </h5>
                            <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{carouselPosts[afterImageIndex]?.date}</p>
                            <img src={carouselPosts[afterImageIndex]?.image} alt="" className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
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
