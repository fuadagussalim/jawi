'use client'
import { GetStaticProps } from "next";
import Head from "next/head";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "../components/Badge";
import { SectionContainer } from "../components/Section";
import { PageTitle } from "../components/Title";
import Layout from "../components/layout";
import Link from "next/link";
// import CarouselImage from '../components/Carousel/ImageCarousel'
import { getAllPostsForHome } from '../lib/api'
import { HomeBanner } from "../components/Banner";
import { Columns } from "../components/Columns";
import { ContentImage } from "../components/ContentImage";
import { Content } from "../components/Content";
import { Accordion } from "../components/Accordion";
import { MotionBTTContainer } from "../components/Motion";
import SEO from "../components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "../components/Card";
import ScrollAppearLine from '../components/AnimatedAttribute/ScrollAppearLine'
import Header from "../components/header";
import { Button } from "../components/Button";
import Footer from "../components/footer";
import Images from "../components/ImageLoop/ImageLoop";
// import '../styles/globals.scss'
import ImageCarousel from "../components/Carousel/ImageCarousel";

import Post from "./posts/[slug]";
// import Link from "next/link";
import { NavLink } from "../components/Nav/NavLinks";
import {format} from "date-fns";
import CoverImage from "../components/cover-image";
import YouTubePlayer from "../components/YoutubePlayer";

// export async function getStaticProps({ preview = false }) {
//     const posts = await getAllPostsForHome(preview);

//     return {
//       props: {
//         posts,
//       },
//     };
//   }

export default function ClientPage({ allPosts}) {
  
    // const morePosts = edges.slice(1);
    // console.log(allPosts);
    // console.log(allPosts)
    console.log('print post', allPosts);
    interface CarouselPost {
        title: string;
        image: string;
        date: string;
      }
      
    const carouselPosts: CarouselPost[] = [];
      
    allPosts?allPosts.map((node) => {
        console.log({ node });
        const postDate = new Date(node.node.date);
      carouselPosts.push({
        title: node.node.title,
        image: node.node.featuredImage.node.sourceUrl,
        
        date: format((postDate), "MMMM dd, yyyy HH:mm:ss"),
      });
    }):
      
      carouselPosts.push({
        'title': "Tidak dapat terkoneksi dengan server",
        'image': "Tidak dapat terkoneksi dengan server",
        
        'date': "Tidak dapat terkoneksi dengan server",
      });
   
    console.log(carouselPosts)




    // const posts = await getAllPostsForHome(false);
    // console.log(posts.edges);

    // // const blogMediaStringSpesifyId = 'https://blog.jawi.or.id/wp-json/wp/v2/media?id=';
    // const blogMediaString = 'https://blog.jawi.or.id/wp-json/wp/v2/media/';
    // const blogMediaStrings:string[] = []
    // async function getWPPosts() {
    //     const response = await fetch('https://blog.jawi.or.id/wp-json/wp/v2/posts');
    //     const posts = await response.json();

    //     // console.log(posts[0].featured_media
    //         // .title.rendered
    //         // );
    //     // console.log(posts[0].features_image.id)
    //     // const mediaId = posts[0].featured_media;
    //     const mediaIds:string[] = []
    //     for (var i = 0; i<posts.length;i++){
    //         mediaIds.push(posts[i].featured_media);
    //         blogMediaStrings.push(blogMediaString+mediaIds[i]);
    //     };
    //     console.log(blogMediaStrings);
    //     console.log(mediaIds.length);

    //     // console.log(blogMediaString+mediaId);
    //     const mediaResponse = await fetch(blogMediaString);
    //     // const mediaResponse = await fetch(blogMediaString+mediaId);
    //     const media = await mediaResponse.json();
    //     console.log(media.length);

    //     // console.log(media[0].source_url)
    //     // const images:string[]=[]
    //     // for (var i=0; i<media.length; i++){
    //     //     console.log("id media:" + media[i].id);
    //     //     for (var j=0; j<mediaIds.length;j++){
    //     //         console.log("id")

    //     //         if (media[i].id == mediaIds[j]){

    //     //             images.push(media[i].source_url)
    //     //             console.log(media[i].id)
    //     //            }

    //     //     }

    //     // }
    //     // console.log(images)

    // }

    // getWPPosts();
    // const images = {
    //     "images": [

    //         {
    //             "url": "https://images.unsplash.com/photo-1602872030276-17d4d67bb130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //             "heading": "Great design answers a question, offers a solution and solves a problem.",
    //             "about": "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects."
    //         },
    //         {
    //             "url": "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    //             "heading": "Motivation is what gets you started. Habit is what keeps you going.",
    //             "about": "There is no alternate to the health and fitness, we have to eat healthy food timely, do physical exercises daily, think positive and have patience and commitment towards good lifestyle. Being involved in physical activities on daily basis does something great to our body and mind."
    //         },
    //         {
    //             "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //             "heading": "Live with no excuses and travel with no regrets.",
    //             "about": "Someone travels to gain knowledge and experience, someone travels for pleasure, someone travels for business purposes etc. It has much educative value. It is a part of education. Our education and book knowledge remain imperfect without travelling. We can learn many things from travelling."
    //         },
    //         {
    //             "url": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //             "heading": "Tis an ill cook that cannot lick his own fingers.",
    //             "about": "But it is only human beings who endeavour to transform food into something more. Several archaeologists and evolutionary biologists contend that cooking was, and still is, crucial to our evolution. Not only did it stimulate mastery over fire and necessitated innovation in tool making, but by eating cooked food, we were able to increase our energy output for other creative pursuits."
    //         }
    //     ]
    // }



    return (
        <Layout preview={""} className="">
            <div className=" md:block">
                <div className="main-wrapper tracking-wide bg-[#F3F5F8] relative z-10 ">
                    <HomeBanner href='#about' image='/DEF_7207.JPG' maintext='Javan Wildlife Institute' subtext='Menjadi mitra rujukan sains konservasi di Indonesia' align="left" />
                    <SectionContainer id="home" className="components--container grid gap-8 sm:gap-24 mx-0 px-0">
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <SectionContainer id="portofolio" className="feature-tabs ">
                                <CardGroup className=" sm:grid-cols-1 md:grid-cols-2 divide-y  divide-black-100">
                                    <Card className="align-baseline h-full col-span-1 md:text-primary-900  bg-[#F3F5F8]">
                                        <CardBody className="sm:w-full md:my-auto h-full mx-auto bg-[#F3F5F8] p-12">
                                            <div className="flex flex-col  p-10 pr-10  h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-black sm:text-xl sm:text-center sm:px-auto text-justify font-bold sm:font-bold my-0">ABOUT JAWI</h3>
                                                <p className="text-black sm:font-normal md:pr-10 text-justify max-w-xs sm:max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut? </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <CardGroup className="grid divide-x scroll-m-24 mt-0 pr-0 divide-y lg:mt-20 lg:pr-24 grid-cols-2 md:mx-auto md:grid-cols-2">

                                        <Card className="bg-[#F3F5F8]  md:w-full lg:px-0 col-span-1">
                                            {/* <CardBody className="w-full bg-[#F3F5F8] p-0">

                                                <CardHeader hasBadge={""} className="!text-2xl !font-bold text-[#faa51a]">
                                                    PROGRAM
                                                </CardHeader>
                                                <p className="text-black text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?
                                                </p>
                                            </CardBody> */}
                                            <CardBody className=" md:w-[400px] my-auto h-full mx-auto bg-[#F3F5F8] sm:p-0 md:p-12">
                                            <div className="flex flex-col sm:p-5  md:p-10 w-full  h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-orange sm:text-xl sm:text-center sm:px-auto text-justify font-bold sm:font-bold my-0">PROGRAM</h3>
                                                <p className="text-black sm:font-normal md:pr-10 text-justify max-w-xs sm:max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut? </p>
                                            </div>
                                        </CardBody>
                                        </Card>
                                        <Card className="bg-[#F3F5F8]  md:w-full lg:px-0 col-span-1">
                                            {/* <CardBody className="w-full bg-[#F3F5F8] p-0">

                                                <CardHeader hasBadge={""} className="!text-2xl !font-bold text-[#faa51a]">
                                                    PROGRAM
                                                </CardHeader>
                                                <p className="text-black text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?
                                                </p>
                                            </CardBody> */}
                                            <CardBody className="sm:w-full md:w-[400px]  md:p-12 my-auto h-full mx-auto bg-[#F3F5F8] md:p-12">
                                            <div className="flex flex-col sm:p-5  md:p-10 md:pr-10  h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-orange sm:text-xl sm:text-center sm:px-auto text-justify font-bold sm:font-bold my-0">OUR STORY</h3>
                                                <p className="text-black sm:font-normal md:pr-10 text-justify max-w-xs sm:max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut? </p>
                                            </div>
                                        </CardBody>
                                        </Card>
                                        <Card className="bg-[#F3F5F8]  md:w-full lg:px-0 col-span-1">
                                            {/* <CardBody className="w-full bg-[#F3F5F8] p-0">

                                                <CardHeader hasBadge={""} className="!text-2xl !font-bold text-[#faa51a]">
                                                    PROGRAM
                                                </CardHeader>
                                                <p className="text-black text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?
                                                </p>
                                            </CardBody> */}
                                            <CardBody className=" md:w-[400px] my-auto h-full mx-auto bg-[#F3F5F8] sm:p-0 md:p-12">
                                            <div className="flex flex-col sm:p-5  md:p-10 w-full  h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-orange sm:text-xl sm:text-center sm:px-auto text-justify font-bold sm:font-bold my-0">MISSION</h3>
                                                <p className="text-black sm:font-normal md:pr-10 text-justify max-w-xs sm:max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut? </p>
                                            </div>
                                        </CardBody>
                                        </Card>
                                        <Card className="bg-[#F3F5F8]  md:w-full lg:px-0 col-span-1">
                                            {/* <CardBody className="w-full bg-[#F3F5F8] p-0">

                                                <CardHeader hasBadge={""} className="!text-2xl !font-bold text-[#faa51a]">
                                                    PROGRAM
                                                </CardHeader>
                                                <p className="text-black text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?
                                                </p>
                                            </CardBody> */}
                                            <CardBody className="sm:w-full md:w-[400px]  md:p-12 my-auto h-full mx-auto bg-[#F3F5F8] md:p-12">
                                            <div className="flex flex-col sm:p-5  md:p-10 md:pr-10  h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-orange sm:text-xl sm:text-center sm:px-auto text-justify font-bold sm:font-bold my-0">TEAM</h3>
                                                <p className="text-black sm:font-normal md:pr-10 text-justify max-w-xs sm:max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut? </p>
                                            </div>
                                        </CardBody>
                                        </Card>
                                        
                             
                                       


                                    </CardGroup>


                                </CardGroup>

                                <CardGroup className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20 mx-auto">

                                    {/* <CardImage src='/Picture2-1.png' className='grid md:col-span-2 lg:col-span-2 sm:col-span-1 ' imageClassName={''} alt={''} /> */}
                                    {/* <CardImage src='/Picture2-1.png' className='grid md:col-span-2 lg:col-span-2 sm:col-span-1 ' imageClassName={''} alt={''} /> */}
                                    <div className="grid md:col-span-2 lg:col-span-2 aspect-video sm:col-span-1">
                                       <YouTubePlayer id={"LBCGzeuQkHc"} width='100%' height='100%'/>
                                        {/* <iframe width="100%" height={16/9*width} src="https://www.youtube.com/embed/LBCGzeuQkHc?si=VxjCDXQbJBZQEBcj" title="Drone Emprite" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                                    </div>
                                    {/* <VideoPlayer/> */}
                                    <Card className="grid col-span-1 align-middle text-primary-900">
                                        <CardBody className="flex align-middle items-center align-center h-full bg-[#F3F5F8]">
                                            <div className="w-full items-center align-center py-auto">
                                                <h3 className="text-black w-full text-center m-0 font-extrabold">SITE PROJECT</h3>
                                                <p className="text-black text-center m-0 max-w-xs mt-2 sm:max-w-full">Hutan Kemuning,</p>
                                                <p className="text-black text-center m-0 max-w-xs sm:max-w-full">Temanggung,</p>
                                                <p className="text-black text-center m-0 max-w-xs sm:max-w-full">Jawa Tengah.</p>
                                                <div className="flex justify-center pt-5">

                                                    {/* <Button className="self-auto bg-black text-white rounded-5 items-center mt-5"> */}
                                                    {/* <Link type="button" className="text-white  font-bold bg-black px-10 py-3 hover:bg-[#faa51a] hover:text-black " href="/detail/site-projek" passHref={true}> */}

                                                        <Button className="hover:bg-orange w-[150px] hover:text-white " href="/portofolio/site-projek">

                                                        Read More
                                                        </Button>


                                                    {/* </Link> */}
                                                    {/* <NavLink href='/detail'>
                                                    READ MORE

                                                </NavLink> */}
                                                    {/* </Button> */}
                                                </div>


                                            </div>

                                        </CardBody>
                                    </Card>
                                </CardGroup>

                                <div className="w-full h-full mt-20">
                                    <div className="relative sm:h-[1700px] md:h-[1250px]">
                                        <div className="absolute z-1 w-full h-[250px] bg-[#faa51a]">

                                        </div>

                                        <div className="absolute w-full items-center z-21 my-20">

                                            <h3 className="text-white w-full text-center m-0 text-2xl font-extrabold">EXPERIENCES</h3>
                                            <p className="text-white text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Our Capability</p>
                                            <CardGroup className="absolute h-max items-center z-22 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 my-20 mt-0 mx-auto left-0 right-0 sm:p-5  sm:w-full md:drop-shadow-none sm:drop-shadow-lg md:p-10 md:w-2/3">


                                                <CardImage src='/survey-biodibersitas-crop.png' className='gridcol-span-1  md:sm-0 h-64' imageClassName={'object-cover objet-bottom'} alt={''} />

                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/manajemen-data-jawi.png' className='gridcol-span-1 h-64 sm:block md:hidden' imageClassName={' object-cover objet-bottom'} alt={''} />
                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/manajemen-data-jawi.png' className='gridcol-span-1 h-64 sm:hidden md:block' imageClassName={' object-cover objet-bottom'} alt={''} />
                                                <CardImage src='/model-OU-17052023-1.jpg' className='gridcol-span-1 h-64' imageClassName={'object-cover objet-bottom'} alt={''} />
                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 md:hidden sm:block' imageClassName={'object-cover objet-bottom'} alt={''} />
                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 sm:hidden md:block' imageClassName={'object-cover objet-bottom'} alt={''} />
                                            </CardGroup>
                                        </div>

                                    </div>
                                </div>
                                
                                {/* <CardGroup className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-20 mx-auto p-10 w-full">
                                <Maps address={"Jawi (Javan Wildlife Institute"} />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7704356898225!2d110.35142947476626!3d-7.81410799220644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af61d0254a0db%3A0xc44af8788fff1217!2sJawi%20(Javan%20Wildlife%20Institute)!5e0!3m2!1sid!2sid!4v1711173804931!5m2!1sid!2sid" width="1400" height="450"></iframe>
                            </CardGroup> */}






                            </SectionContainer>
                        </MotionBTTContainer>
                        {/* <MyVideo sources={"https://www.youtube.com/embed/LBCGzeuQkHc?si=Ar2YAA2zzCoN3rjK"} height="720" width="1000" classNames={""} ></MyVideo> */}



                        {/* <Images folder={"sosmed"}></Images> */}
                        {/* <ImageCarousel >

                    </ImageCarousel> */}



                    </SectionContainer>
                </div>
            </div>
            <div className="sm:px-5">
                
            <CardGroup className="sm:shadow-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 sm:m-10 sm:p-10  sm:mt-40 sm:mx-auto md:m-20 sm:mb-10 md:mt-0 mx-auto sm:p-0 md:p-10 sm:w-full w-2/3">

                            
                                    <CardImage src='/product.jpeg' className='gridcol-span-1 h-full' imageClassName={'object-cover objet-bottom'} alt={''} />

                                    <Card className="grid col-span-1 align-middle sm:ml-0 sm:mt-5 md:mt-0 md:p-0 md:ml-10 text-primary-400">
                                        <CardBody className="flex align-middle h-full items-center rounded-0 align-top my-0 pt-0">
                                            <div className="w-full">
                                                <div>
                                                    <h1 className="text-black text-left m-0 max-w-xs text-2xl font-bold sm:max-w-full">SUPPORT US!</h1>

                                                    <div className="max-w-80 mb-2">
                                                        <hr className="h-1 bg-[#faa51a]" />
                                                        <h4 className="text-black text-left m-0 max-w-xs mt-2 text-lg font-bold sm:max-w-full">K-COFFE 150 Gr. Kopi Robusta Kemuning, Temanggung</h4>

                                                    </div>

                                                    <p className="text-black text-sm my-0 text-justify">Dipersembahkan dari alam yang subur di Kemuning, Temanggung, kopi robusta kami adalah pencitraan penuh kasih sayang dan kepedulian terhadap lingkungan. Dipetik secara selektif dari kebun-kebun yang terpelihara dengan baik melalui sistem kopi di bawah tegakan. Setiap butiran biji kopi memiliki cerita konservasi yang menyentuh hati.
                                                        <br />
                                                        <br />
                                                        Dengan setiap tegukan kopi kami, Anda juga turut berkontribusi pada pelestarian lingkungan dan kehidupan satwa liar yang langka. Mari bersama-sama menikmati kenikmatan kopi yang berkualitas sambil menjaga keberlanjutan alam kita.</p>
                                                    <h1 className="text-[#FAA51A] w-full text-left m-0 mt-5 text-xl font-black">Rp 35.000</h1>
                                                </div>

                                                <div className="flex justify-left">
                                                    {/* <a href="https://shopee.co.id/K-COFFEE-150-Gr.-Kopi-Robusta-Kemuning-Temanggung-i.1198776510.20487458507" rel="noopener noreferrer" className="rounded-0 bg-black p-2 mt-5" target="_blank" > */}
                                                        {/* <Button className="self-auto bg-black text-white rounded-0 items-left mt-5"> */}

                                                        <Button variant="black" target="yes" href="https://shopee.co.id/K-COFFEE-150-Gr.-Kopi-Robusta-Kemuning-Temanggung-i.1198776510.20487458507" className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 hover:bg-orange hover:text-white items-center mt-5">
                                                        SHOP NOW
                                                                    </Button>
                                                    
                                                        {/* </Button> */}
                                                    {/* </a> */}
                                                </div>
                                                <p className="text-black font-bold text-sm my-0 pt-2 text-justify">Powered by <span className="text-[#FAA51A]">Shopee</span></p>


                                            </div>

                                        </CardBody>
                                    </Card>
                                </CardGroup>
            </div>
            <ImageCarousel carouselPosts={carouselPosts}/>

        
{/* 
            <div className="md:hidden h-[440px]">
            

                Mohon maaaf.. Tampilan mobile masih dalam tahap penegembangan
            </div> */}
        </Layout>
    );
}


// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//     const allPosts = await getAllPostsForHome(preview);
  
//     return {
//       props: { allPosts, preview },
//       revalidate: 10,
//     };
//   };
  


