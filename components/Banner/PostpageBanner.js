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
import Intro from "../intro";
import clsx from "clsx";
// import { useWindowSize } from '../../utils/hooks/useWindowSize';
import Link from "next/link";
import Video from 'next-video';
import { CardBody, CardGroup, CardHeader, Card } from "../Card";
export const PostpageBanner = ({ href = "", image = "/portofolio-default.jpg", maintext, subtext, typeAnimation = true, type="xheavy", maintextclass = "", subtextclass = "", align = "center", motionClass = "", className="" }) => {

    var visibility = 'awal'
    if (typeAnimation) {
        visibility = 'visible'

    } else {
        visibility = 'hidden'
    }
    console.log(visibility);
    console.log(typeAnimation);






    return (

        <SectionContainer className={`${className} page-banner--container m-0 p-0`}>

            {/* <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}> */}

            <div className="page-banner--image relative m-0 p-0">
                <div className={`absolute lg:block z-20 stroke-black  text-white sm:top1/5 md:top-1/4 left-0 right-0 text-${align} w-full p-10 px-0 mx-0 `}>
                    <div className="w-full">
                    <Intro className="relative mt-0 shadow-xl font-black"/>
{/*                     
                        <PageTitle className={`${maintextclass} relative font-extrabold w-full`} type={type}>
                            <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>

                                {maintext}

                            </MotionBTTContainer>
                        </PageTitle>

                        <PageTitle className={`${subtextclass}  relative w-full mx-auto px-auto text-center  font-extrabold mt-0`} type="xsmall">

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
                                {subtext}

                            </MotionBTTContainer>
                        </PageTitle> */}



                    </div>
{/* 
                    <Link type="button" className="text-white font-bold bg-black px-10 py-3 hover:bg-white hover:text-black" href={href} passHref={true}>


                        Read More


                    </Link> */}

                </div>
                <div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                    <Image
                        className="object-cover sm:h-[200px] lg:h-[400px] m-0 p-0 bg-blend-darken"
                        src={image}
                        width={4000}
                        height={3000}
                        alt="Page Banner"
                        objectFit="cover"
                    // className="m-0 p-0"
                    />
                </div>

            </div>

            {/* <CardGroup className="p-5 ">
                <Card className="rounded-0 block-inline">
                    <CardHeader className={'font-black inline'}>
                    IDENTIFIKASI SATWA LIAR

                    </CardHeader>
                    <CardBody>
                        <Image className="inline" src={'/bird.svg'} width={100} height={100}>

                        </Image>
                    </CardBody>
                </Card>
            </CardGroup> */}
          
            
         
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
