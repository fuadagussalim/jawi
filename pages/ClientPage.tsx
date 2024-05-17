import { GetStaticProps } from "next";
import Head from "next/head";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "../components/Badge";
import { SectionContainer } from "../components/Section";
import { PageTitle } from "../components/Title";
import Layout from "../components/layout";
import Link from "next/link";
import Timeline from "../components/Timeline/timeline";
// import CarouselImage from '../components/Carousel/ImageCarousel'
import { getAllPostsForHome } from "../lib/api";
import { HomeBanner } from "../components/Banner";
import { Columns } from "../components/Columns";
import { ContentImage } from "../components/ContentImage";
import { Content } from "../components/Content";
import { Accordion } from "../components/Accordion";
import { MotionBTTContainer } from "../components/Motion";
import SEO from "../components/SEO/SEO";
import DOMPurify from 'isomorphic-dompurify';
import { ExCardStatic } from "../components/Card";
import RunningLogo  from "../components/Carousel/RunningLogo";
import {
  CardBody,
  CardGroup,
  CardHeader,
  CardImage,
  Card,
  ExCard,
} from "../components/Card";
import ScrollAppearLine from "../components/AnimatedAttribute/ScrollAppearLine";
import Header from "../components/header";
import { Button } from "../components/Button";
import Footer from "../components/footer";
import Images from "../components/ImageLoop/ImageLoop";
// import '../styles/globals.scss'
import ImageCarousel from "../components/Carousel/ImageCarousel";
import { v4 as uuid } from "uuid";
import Post from "./posts/[slug]";
// import Link from "next/link";
import { NavLink } from "../components/Nav/NavLinks";
import { format } from "date-fns";
import CoverImage from "../components/cover-image";
import YouTubePlayer from "../components/YoutubePlayer";
import { Gallery } from "next-gallery";
// import Timeline from "../components/Timeline/timeline";
import AnimatedLine from "../components/Timeline/AnimatedLine";
import { AboutOverview } from "../components/Overview/AboutOverview";
import { SiteProjectOverview } from "../components/Overview/SiteProjectOverview";
import LogoCarousel from "../components/Sponsor/LogoCarousel";

export default function ClientPage({ allPosts, node }) {
  // console.log("tes",node.highlightPosts.highlightPost.edges[0].node)
  // const highlightPost = node.highlightPosts.highlightPost.edges;
  // highlightPost.push(node.highlightPosts.highlightPost2.edges[0]);
  // highlightPost.push(node.highlightPosts.highlightPost3.edges[0]);
  // highlightPost.push(node.highlightPosts.highlightPost4.edges[0]);

  // console.log("highlight cukk ",highlightPost.length)
  // console.log("highlight cukk ",highlightPost)
  interface CarouselPost {
    title: string;
    image: string;
    date: string;
    slug: string;
  }

   interface cardData {
      id: string;
      title: string;
      isOpen: boolean;
      content: any;
      image: string;
      slug: string;
      excerpt: string;
    }

 
const logos = [
  { src: '/Logo ISI Baru.png', height: 35, width: 35, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo TN Bukit Raya.png', height: 35, width: 35, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo_TN_Komodo (1).png', height: 35, width: 35, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/logo arupa.jpg', height: 24, width: 24, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo IPS.jpg', height: 35, width: 35, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo RISTEK-BRIN.png', height: 35, width: 35, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo UGM.png', height: 70, width: 70, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo Temanggung Baru.png', height: 25, width: 25, alt: '', className: 'flex col-span-1 mx-0 mt-2' },
  { src: '/Logo PBNF.png', height: 50, width: 50, alt: '', className: 'flex col-span-2 mx-0 mt-2' },
  { src: '/Logo LFP.png', height: 80, width: 80, alt: '', className: 'flex col-span-2 pt-2 mx-0 mt-2' },
  { src: '/international-elephant-project.png', height: 45, width: 80, alt: '', className: 'flex col-span-2 mx-0 mt-2' },
];
console.log("preview",node.previewTexts)


//     const cardDatas: cardData[] = [];
//   highlightPost?.map((node) => {
//   console.log("satuan node:", node)
//   // .highlightPosts.highlightPost.edges[0].node);
//   console.log("sanitized node:",  DOMPurify.sanitize(node.node.excerpt))
//   cardDatas.push({
//     id: uuid(),
//     title: node.node.title,
//     isOpen: false,
//     content: DOMPurify.sanitize(node.node.content),
//     image: node.node.featuredImage.node.sourceUrl,
//     slug: node.node.slug,
//     excerpt: DOMPurify.sanitize(node.node.excerpt)??<p></p>,
//   });
// });


  const carouselPosts: CarouselPost[] = [];

  allPosts
    ? allPosts.map((node) => {
        console.log({ node });
        const postDate = new Date(node.node.date);
        carouselPosts.push({
          title: node.node.title,
          slug: node.node.slug,
          image: node.node.featuredImage.node.sourceUrl,

          date: format(postDate, "MMMM dd, yyyy HH:mm:ss"),
        });
      })
    : carouselPosts.push({
        title: "Tidak dapat terkoneksi dengan server",
        image: "Tidak dapat terkoneksi dengan server",
        slug: "Tidak dapat terkoneksi dengan server",

        date: "Tidak dapat terkoneksi dengan server",
      });
  console.log("isi caro", carouselPosts);
  const preview = node.previewTexts

  return (
    <Layout preview={false} className="bg-[#F3F5F8]">
      <div className=" md:block">
        <div className="main-wrapper tracking-wide bg-[#F3F5F8] relative z-10 ">
          <HomeBanner
            href="#about-jawi"
            image={node?.front?.banner.node.sourceUrl??"/DEF_7207.JPG"}
            maintext={node?.front?.judul??"Javan Wildlife Institute"}
            subtextclass="sm:w-10/12 md:w-full font-normal lg:text-xl"
            subtext="Menjadi mitra rujukan sains konservasi di Indonesia"
            align="left"
          />
          <SectionContainer
            id="home"
            className="components--container grid gap-8 sm:gap-24 mx-0 px-0"
          >
            <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
              <SectionContainer id="about-jawi" className="feature-tabs ">
              <AboutOverview previewTexts={preview}/>
              
              <SiteProjectOverview/>
           
                <div className="w-full h-full sm:mt-10 md:mt-20">
                  <div className="relative sm:h-[1800px] md:h-[1580px]">
                    <div className="absolute z-1 w-full h-[250px] bg-[#faa51a]"></div>

                    <div className="absolute w-full items-center z-21 my-20">
                      <h3 className="text-white w-full text-center m-0 text-2xl font-extrabold">
                        EXPERIENCES
                      </h3>
                      <p className="text-white text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">
                        Our Capability
                      </p>
                      <ExCardStatic/>
                     
                       {/* <ExCard cardDatas={cardDatas} cardImageClassName={""} routeParams={"portofolio"} cardGroupClassname={"mt-10"} cardClassName={""}/> */}
                    </div>
                  </div>
                </div>

                {/* <CardGroup className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-20 mx-auto p-10 w-full">
                                <Maps address={"Jawi (Javan Wildlife Institute"} />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7704356898225!2d110.35142947476626!3d-7.81410799220644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af61d0254a0db%3A0xc44af8788fff1217!2sJawi%20(Javan%20Wildlife%20Institute)!5e0!3m2!1sid!2sid!4v1711173804931!5m2!1sid!2sid" width="1400" height="450"></iframe>
                            </CardGroup> */}
              </SectionContainer>
            </MotionBTTContainer>
          </SectionContainer>
        </div>
      </div>
      <div className="sm:px-5  pt-5 bg-[#F3F5F8]]">
        <CardGroup className="sm:shadow-lg md:shadow-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 sm:m-10 sm:p-10  sm:mt-40 sm:mx-auto sm:mb-20 md:mt-0 mx-auto sm:p-0  sm:w-full  md:w-full">
          <CardImage
            src="/product.jpeg"
            className="gridcol-span-1 h-full md:pl-10 md:pr-10"
            imageClassName={"object-cover objet-bottom"}
            alt={""}
          />

          <Card className="grid col-span-1 align-middle md:align-top sm:ml-0 sm:mt-5 md:mt-0 md:p-0 text-primary-400">
            <CardBody className="flex sm:align-middle md:align-top h-full sm:items-center md:items-top rounded-0 align-top my-0 pt-0">
              <div className="w-full  md:pr-10 md:h-full">
                <div>
                  <h1 className="text-black text-left m-0 mb-2 max-w-xs text-2xl font-bold sm:max-w-full">
                    SUPPORT US!
                  </h1>

                  <div className="max-w-80 mb-2">
                    <hr className="h-1 bg-[#faa51a]" />
                    <h4 className="text-black text-left m-0 max-w-xs mt-2 text-lg font-bold sm:max-w-full">
                      K-COFFE 150 Gr. Kopi Robusta Kemuning, Temanggung
                    </h4>
                  </div>

                  <p className="text-black text-sm my-0 font-postbody md:text-base text-justify">
                    Dipersembahkan dari alam yang subur di Kemuning, Temanggung,
                    kopi robusta kami adalah pencitraan penuh kasih sayang dan
                    kepedulian terhadap lingkungan. Dipetik secara selektif dari
                    kebun-kebun yang terpelihara dengan baik melalui sistem kopi
                    di bawah tegakan. Setiap butiran biji kopi memiliki cerita
                    konservasi yang menyentuh hati.
                    <br />
                    <br />
                    Dengan setiap tegukan kopi kami, Anda juga turut
                    berkontribusi pada pelestarian lingkungan dan kehidupan
                    satwa liar yang langka. Mari bersama-sama menikmati
                    kenikmatan kopi yang berkualitas sambil menjaga
                    keberlanjutan alam kita.
                  </p>
                  {/* <h1 className="text-[#FAA51A] w-full text-left m-0 mt-5 text-xl font-black">Rp 35.000</h1> */}
                </div>

                <div className="flex justify-left">
                  {/* <a href="https://shopee.co.id/K-COFFEE-150-Gr.-Kopi-Robusta-Kemuning-Temanggung-i.1198776510.20487458507" rel="noopener noreferrer" className="rounded-0 bg-black p-2 mt-5" target="_blank" > */}
                  {/* <Button className="self-auto bg-black text-white rounded-0 items-left mt-5"> */}

                  <Button
                    variant="black"
                    target="yes"
                    href="https://shopee.co.id/K-COFFEE-150-Gr.-Kopi-Robusta-Kemuning-Temanggung-i.1198776510.20487458507"
                    className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 hover:bg-orange hover:text-white items-center mt-5"
                  >
                    SHOP NOW
                  </Button>

   
                </div>
                <p className="text-black font-bold text-sm my-0 pt-2 text-justify">
                  Powered by <span className="text-[#FAA51A]">Shopee</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
      {allPosts && allPosts.length > 2 ? (
        <ImageCarousel className="bg-[#F3F5F8]" carouselPosts={carouselPosts} />
      ) : (
        <p>No posts found.</p>
      )}

       {/* <LogoCarousel logos={logos} /> */}
         <h3 className="text-orange w-full text-center m-0 text-2xl font-extrabold">
                        OUR PARTNERS
                      </h3>
       <br>
       </br>
       
       <RunningLogo logos={logos}/>
       <br/>
       <br/>

    </Layout>
  );
}
