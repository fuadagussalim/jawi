import { BadgeGroup, BadgeIcon, BadgeMessage } from "../Badge";
import { Button, ButtonGroup } from "../Button";
import { Content } from "../Content";
import { MotionBTTContainer, MotionInfiniteImage } from "../Motion";
import { SectionContainer } from "../Section";
import { PageTitle } from "../Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import MyVideo from "../VideoPlayer";
import clsx from "clsx";
// import { useWindowSize } from '../../utils/hooks/useWindowSize';
import Video from 'next-video';
export const DetailpageBanner = ({ image, maintext, subtext, typeAnimation = true, maintextclass = "", subtextclass = "", align = "center", motionClass = "" }) => {

    var visibility = 'awal'
    if (typeAnimation) {
        visibility = 'visible'

    } else {
        visibility = 'hidden'
    }
    console.log(visibility);
    console.log(typeAnimation);






    return (

        <SectionContainer className="page-banner--container m-0 p-0">

            {/* <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}> */}

            <div className="page-banner--image relative h-[600px]  m-0 p-0">
                <div className={`absolute hidden md:block lg:block z-20 stroke-black  text-white top-1/3 left-0 right-0 text-${align} h-[400px] w-full p-10 px-0 mx-0 `}>
                    <div className="w-full">
                        <PageTitle className={`${maintextclass} relative font-extrabold w-full`} type="xheavy">
                            <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>

                                {maintext}

                            </MotionBTTContainer>
                        </PageTitle>
                        <PageTitle className={`${subtextclass} flex relative  font-extrabold mt-0`} type="xsmall">

                            <MotionBTTContainer className={`${motionClass} ${visibility}`} transition={{ delay: 0.7, duration: 0.5 }}>
                                


                                    <Typewriter 
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
                                    />



                                







                            </MotionBTTContainer>
                        </PageTitle>
                    </div>
                    <Button variant="black" radius="100" className="relative text-white">Read More</Button>

                </div>
                <div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                    <Image
                        className="object-scale-down m-0 p-0 bg-blend-darken"
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

                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>

                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>

                </MotionBTTContainer>

            </SectionContainer>
        </SectionContainer>
    );
};
