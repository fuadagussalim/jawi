'use client'
import { useState, useEffect } from "react";
import { getAllPostsForHome } from "../../lib/api";

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [previousImageIndex, setpreviousImageIndex] = useState(currentImageIndex - 1 < 1 ? 4 : currentImageIndex - 1);
    const [afterImageIndex, setafterImageIndex] = useState(currentImageIndex + 1 > 4 ? 0 : currentImageIndex + 1);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await getAllPostsForHome(false);
            setPosts(postsData);
        };

        fetchData();
    }, []);

    if (!posts) {
        return <div>Loading...</div>;
    }

    const images = posts.edges
        .filter(({ node }) => node.featuredImage?.node?.sourceUrl)
        .map(({ node }) => node.featuredImage.node.sourceUrl);

    const titles = posts.edges.filter(({ node }) => node.featuredImage?.node?.sourceUrl).map(({ node }) => node.title);

    const dates = posts.edges.filter(({ node }) => node.featuredImage?.node?.sourceUrl).map(({ node }) => node.date);

    function handlePrevClick() {
        // Check if at the first slide
        if (currentImageIndex === 1) {
            setCurrentImageIndex(4);
        }

        setpreviousImageIndex((prev) => (prev - 1 < 1 ? 4 : prev - 1));
        setafterImageIndex(currentImageIndex);
        setCurrentImageIndex(previousImageIndex);
    }

    function handleNextClick() {
        // Check if at the last slide
        if (currentImageIndex === 4) {
            setCurrentImageIndex(1);
        }

        setpreviousImageIndex(currentImageIndex);
        setafterImageIndex((next) => (next + 1 > 4 ? 1 : next + 1));
        setCurrentImageIndex(afterImageIndex);
    }

    return (
        <div className="mb-10">
            <h4 className="text-center mx-auto w-max font-bold mb-0">
                JAWI MAGAZINE
                <hr className="bg-black h-[2px] mb-5" />
            </h4>
            <div className="relative w-full">
                <button className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-2 bg-black text-white font-bold" onClick={handlePrevClick}>
                    ←
                </button>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative hidden md:show grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold text-shadow text-white z-20 bottom-[30px] m-5">
                            {titles[previousImageIndex]}
                        </h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{dates[previousImageIndex]}</p>
                        <img src={images[previousImageIndex]} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                    <div className="relative grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold text-white z-20 bottom-[30px] m-5">{titles[currentImageIndex]}</h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{dates[currentImageIndex]}</p>
                        <img src={images[currentImageIndex]} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                    <div className="relative hidden md:show grid col-span-1 w-[400] h-96 grid col-span-1 overflow-hidden">
                        <h5 className="absolute font-bold text-white z-20 bottom-[30px] m-5">
                            {titles[afterImageIndex]}
                        </h5>
                        <p className="absolute text-white font-thin z-20 bottom-[10px] m-5">{dates[afterImageIndex]}</p>
                        <img src={images[afterImageIndex]} alt="" className="absolute w-full h-full object-cover transition duration-500" />
                    </div>
                </div>
                <button className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-2 bg-black text-white font-bold" onClick={handleNextClick}>
                    →
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;