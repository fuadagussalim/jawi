import { BadgeGroup, BadgeIcon, BadgeMessage } from "../Badge";
import { Button, ButtonGroup } from "../Button";
import { Content } from "../Content";
import { MotionBTTContainer, MotionInfiniteImage } from "../Motion";
import { SectionContainer } from "../Section";
import { PageTitle } from "../Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Typewriter from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";
import StarField from "../AnimatedAttribute/StarField";
import "./stars.module.scss";
// import { useWindowSize } from '../../utils/hooks/useWindowSize';
import Video from "next-video";

import Link from "next/link";
import TypewriterContent from "../Typewriter/Typewriter";
export const HomeBanner = ({
  href,
  image,
  maintext,
  subtext,
  typeAnimation = true,
  maintextclass = "",
  subtextclass = "",
  align = "center",
  motionClass = "",
}) => {
  const smFactor = 1;
  var visibility = "awal";
  if (typeAnimation) {
    visibility = "visible";
  } else {
    visibility = "hidden";
  }
  console.log(visibility);
  console.log(typeAnimation);

  return (
    <SectionContainer className="page-banner--container m-0 p-0 bg-[#F3F5F8]">
      {/* <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}> */}

      <div className=" md:pt-0 page-banner--image relative m-0 p-0">
        <div
          className={`absolute  lg:block z-20 stroke-black items-start  sm:top-1/5 w-full text-center sm:mt-5  text-white md:top-1/3  text-${align}  `}
        >
          <div className="w-full grid grid-cols-1 ">
            <PageTitle
              className={`${maintextclass} grid mb-1 sm:capitalize  sm:text-3xl md:mb-4    relative font-extrabold w-full sm:text-normal sm:font-bold sm:drop-shadow-xl sm:mt-5
                        `}
              type="homemain"
            >
              <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>
                {maintext}
              </MotionBTTContainer>
            </PageTitle>
            <PageTitle
              className={`${subtextclass} grid  lg:w-full sm:mx-auto  relative drop-shadow-xl capitalize font-light mt-0`}
              type="homexsmall"
            >
              <MotionBTTContainer
                className={`${motionClass} ${visibility}`}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {subtext}
                {/* <Typewriter 
                                        onInit={(typewriter) => {
                                            if (typeAnimation){
                                                typewriter.typeString(`${subtext}`)
                                                .callFunction(() => {
                                                    console.log(`${subtext}`);
                                                })
                                                .pauseFor(2500)
                                                .start();

                                            }
                                           
                                        }}
                                    /> */}
                {/* <TypewriterContent content={`${subtext}`}>
                                        subtext
                                    </TypewriterContent> */}
              </MotionBTTContainer>
            </PageTitle>
          </div>

          <Link
            type="button"
            className="text-white hidden md:block font-bold bg-black w-[200px] mx-auto px-10 py-3 hover:bg-white hover:text-black"
            href={href}
            passHref={true}
          >
            Read More
          </Link>
          <div className="grid md:grid-cols-1 w-full hidden lg:block lg:mt-20 xl:mt-40 mx-auto col-span-1 md:w-1/2 row-span-1 z-25">
            <div className="items-bottom">
              <p className="text-white grid font-thin text-xl  h-full col-span-1 items-end flex items-center">
                Social Media
              </p>
            </div>
            <div className="grid justify-evenly col-span-1 gap-2 w-1/5 mx-auto mt-5  md:items-center md:grid-cols-4">
              <Link
                href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"}
                target="_blank"
              >
                <Image
                  className="flex col-span-1  mx-auto"
                  src="/sosmed/fb w.png"
                  height={25 * smFactor}
                  width={25 * smFactor}
                  alt=""
                ></Image>
              </Link>
              <Link
                href={
                  "https://id.linkedin.com/company/javan-wildlife-institute"
                }
                target="_blank"
              >
                <Image
                  src="/sosmed/link w.png"
                  height={25 * smFactor}
                  width={25 * smFactor}
                  alt=""
                  className="flex col-span-1  mx-auto"
                ></Image>
              </Link>
              <Link
                href={"https://www.instagram.com/javanwildlife/?hl=en"}
                target="_blank"
              >
                <Image
                  src="/sosmed/ig w.png"
                  height={25 * smFactor}
                  width={25 * smFactor}
                  alt=""
                  className="flex col-span-1  mx-auto"
                ></Image>
              </Link>
              <Link
                href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"}
                target="_blank"
              >
                <Image
                  src="/sosmed/yt w.png"
                  height={25 * smFactor}
                  width={25 * smFactor}
                  alt=""
                  className="flex col-span-1  mx-auto"
                ></Image>
              </Link>
            </div>
          </div>

          {/* <Button variant="black" radius="100" className="relative text-white">Read More</Button> */}
        </div>

        <div>
          <div className="absolute inset-0 bg-black bg-opacity-55  md:block z-22 md:mt-0">
            <StarField />
          </div>
          <Image
            className="object-scale-down  m-0 p-0 bg-blend-darken"
            src={image}
            width={1920}
            height={780}
            alt="Page Banner"
            objectFit="cover"
            // className="m-0 p-0"
          />
        </div>
      </div>
      <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
        <MotionBTTContainer
          transition={{ delay: 0.2, duration: 0.5 }}
        ></MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer
          transition={{ delay: 0.4, duration: 0.5 }}
        ></MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

// Yang awalll
{
  /* <div className={`bg-black md:hidden z-20 stroke-black items-start  text-white top-1/3 left-14 text-${align} w-full p-10 `}>
                    <div className="stars h-full absolute z-25">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>

                    </div>
                    <div className="w-full grid grid-cols-1 ">
                        <PageTitle className={`${maintextclass} grid mb-1 uppercase  relative font-extrabold w-full`} type="default">
                            <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>

                                {maintext}

                            </MotionBTTContainer>
                        </PageTitle>
                        <PageTitle className={`${subtextclass} grid relative capitalize font-light mt-0`} type="xsmall">

                            <MotionBTTContainer className={`${motionClass} ${visibility}`} transition={{ delay: 0.7, duration: 0.5 }}>


                                {subtext}
                                {/* <Typewriter 
                                        onInit={(typewriter) => {
                                            if (typeAnimation){
                                                typewriter.typeString(`${subtext}`)
                                                .callFunction(() => {
                                                    console.log(`${subtext}`);
                                                })
                                                .pauseFor(2500)
                                                .start();

                                            }
                                           
                                        }}
                                    /> */
}
{
  /* <TypewriterContent content={`${subtext}`}>
                                        subtext
                                    </TypewriterContent> */
}

//         </MotionBTTContainer>
//     </PageTitle>
//     <StarField></StarField>
// </div>

// <Link type="button" className="text-black font-bold bg-white px-10 py-3 hover:bg-orange hover:text-black" href={href} passHref={true}>

//     Read More

// </Link>

// {/* <Button variant="black" radius="100" className="relative text-white">Read More</Button> */}

// </div>
