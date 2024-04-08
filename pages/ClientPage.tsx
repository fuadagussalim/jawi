
import { GetStaticProps } from "next";
import Head from "next/head";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "../components/Badge";
import { SectionContainer } from "../components/Section";
import { PageTitle } from "../components/Title";
import Layout from "../components/layout";
import Link from "next/link";
import Timeline from "../components/Timeline/timeline";
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
import { Gallery } from "next-gallery";
// import Timeline from "../components/Timeline/timeline";
import AnimatedLine from "../components/Timeline/AnimatedLine";


export default function ClientPage({ allPosts}) {

    interface CarouselPost {
        title: string;
        image: string;
        date: string;
        slug: string;
      }
      
    const carouselPosts: CarouselPost[] = [];
      
    allPosts?allPosts.map((node) => {
        console.log({ node });
        const postDate = new Date(node.node.date);
      carouselPosts.push({
        title: node.node.title,
        slug: node.node.slug,
        image: node.node.featuredImage.node.sourceUrl,
        
        date: format((postDate), "MMMM dd, yyyy HH:mm:ss"),
      });
    }):(
      carouselPosts.push({
        title: "Tidak dapat terkoneksi dengan server",
        image: "Tidak dapat terkoneksi dengan server",
        slug: "Tidak dapat terkoneksi dengan server",
        
        date: "Tidak dapat terkoneksi dengan server",
      }));
      console.log('isi caro',carouselPosts)
   
  

    return (
        <Layout preview={false} className="bg-[#F3F5F8]">
            <div className=" md:block">
                <div className="main-wrapper tracking-wide bg-[#F3F5F8] relative z-10 ">
                    <HomeBanner href='#about-jawi' image='/DEF_7207.JPG' maintext='Javan Wildlife Institute' subtextclass="sm:w-8/12 md:w-full md:text-normal lg:text-sm" subtext='Menjadi mitra rujukan sains konservasi di Indonesia' align="left" />
                    <SectionContainer id="home" className="components--container grid gap-8 sm:gap-24 mx-0 px-0">
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <SectionContainer id="about-jawi" className="feature-tabs ">

                                <CardGroup className=" sm:grid-cols-1 md:grid-cols-2  divide-y  divide-black-100">
                                <Link href="/about">
                                    
                                    <Card className="align-baseline h-full col-span-1 md:text-primary-900  bg-[#F3F5F8]">
                                        <CardBody className="sm:w-full md:my-auto h-full mx-auto bg-[#F3F5F8] p-12">
                                            <div className="flex flex-col shadow-xl  p-10 md:px-20 pr-10 max-w-[600px] mx-auto h-full px-auto justify-center content-center align-center">
                                                <h3 className="text-black sm:text-sm md:text-3xl sm:text-center sm:px-auto text-justify md:text-left mb-3 sm:font-bold md:font-bold sm:font-bold my-0">ABOUT JAWI</h3>
                                                <p className="text-black sm:text-xs md:text-xl font-postbody md:text-base md:w-full mx-auto  text-justify hover:text-black-200 max-w-xs sm:max-w-full"> Organisasi non-profit di bidang konservasi sumber daya alam ingin membangkitkan kembali budaya hidup harmoni antara manusia, alam dan satwa liar di Pulau Jawa.

Kerjasama dapat dilakukan dengan instansi/pihak lain dalam rangka kegiatan yang memiliki arah serupa dengan ranah gerak dan visi misi organisasi kami, dan tidak terbatas hanya di Pulau Jawa. <span className="text-black-200">{'>>'}</span> </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    </Link>
                                    {/* <div className="md:hidden">

<Accordion/>
</div> */}

                            

                                    <div className="p-10 py-auto sm:pl-10 md:pl-0 ">
                                    <table className="grid col-span-1 h-full ">
                                       
                                    
                                        <tbody className="max-w-[600px]  ">
                                            <tr>
                                                <th className="w-[300px] pb-0">
                                                
                                    <Link href={"/about#programs"}>
                                                <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left pb-2 text-orange  mb-0 my-5">PROGRAM <span className="text-[#808080] text-xs  align-middle h-full">{'>'}</span></h5> 
                                     </Link>      
                                                </th>
                                                <th className="w-[300px] pb-0">
                                    <Link href={"/about#ourstory"}>

                                                <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left pb-2 text-orange  mb-0 my-5">OUR STORY <span className="text-[#808080] text-xs  align-middle h-full">{'>'}</span></h5> 
                                    </Link>
                                               
                                                </th>
                                            </tr>
                                            <tr>
                                                <td className="">
                                    <Link href={"/about#programs"}>
                                                    <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px] font-postbody hover:text-[#808080] sm:text-xs md:text-sm  pr-10">Menciptakan keselarasan antara manusia, alam, dan satwa liar melalui penerapan ilmu pengetahuan dan teknologi ...</p>
                                            
                                     </Link>      
                                                        {/* <Button href="/about" variant="orange"  className="mt-5 bg-orange text-black hover:text-white mt-0">See Our Program</Button> */}
                                             
                                                </td>
                                                <td className="">
                                    <Link href={"/about#ourstory"}>
                                                    <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px] font-postbody hover:text-[#808080] sm:text-xs  md:text-sm pr-10">Pertumbuhan demografi yang semakin meningkat membuat persingungan antara aktivitas masyarakat dengan habitat ...</p>
                                     </Link>      
                                                    
                                                    {/* <Button href="/about" variant="orange" className="mt-5 bg-orange text-black hover:text-white mt-0">See Our Story</Button> */}
                                                    
                                       
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <th className="w-[300px] sm:pr-0 md:pr-10  pb-0">
                                            <hr className="mt-5 h-px my-8 bg-black-100 border-0 dark:bg-gray-700"></hr>
                                    <Link href={"/about#mission"}>
                                                <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left  pb-2 text-orange  mb-0 my-5">MISSION <span className="text-[#808080] text-xs  align-middle h-full">{'>'}</span>
                                                </h5> 
                                     </Link>      
                                                </th>
                                                <th className="w-[300px]  sm:pr-0 md:pr-10 pb-0">
                                            <hr className="mt-5 h-px my-8 bg-black-100 border-0 dark:bg-gray-700"></hr>
                                    <Link href={"/about#team"}>
                                                <h5  className="sm:text-center sm:text-xs md:text-xl md:text-left  pb-2 text-orange  mb-0 my-5">TEAM <span className="text-[#808080] text-xs  align-middle h-full">{'>'}</span></h5> 
                                     </Link>      
                                                </th>
                                            </tr>
                                            <tr>
                                                <td className="align-top ">
                                    <Link href={"/about#mission"}>
                                                <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px]  hover:text-[#808080] font-postbody sm:text-xs  md:text-sm pr-10">
                                                Bekerja untuk menjamin masa depan keanekaragaman hayati Indonesia melalui ilmu konservasi
                                                </p>
                                     </Link>      
                                                {/* <TeamCarousel className="bg-[#F3F5F8] p-5" carouselPosts={carouselPosts}/> */}


                                                    {/* <p className="text-justify min-h-[150px]  pr-10 ">Mengarusutamakan sains konservasi yang inklusif di Indonesia
                                                    <br/> */}
                                                    {/* <span>See</span> */}
                                             
                                                    {/* <Button href="/about" variant="orange" className="bg-orange text-black hover:text-white mt-0">See Our Mission</Button> */}


                                                  
{/* 
</p> */}
                                                  
                                                </td>
                                                <td>
                                
<Link className="font-postbody" href={'/about#team'}>
    <p className=" sm:text-xs md:text-sm text-justify hidden md:block pr-10 hover:text-[#808080]">

{/* <Button href="/about" variant="orange" className="bg-orange text-black hover:text-white mt-0">See Our Team</Button> */}
Tim jawi tersusun atas peneliti dari berbagai disiplin ilmu yang kompeten dan berpengalaman pada bidangnya. 
{/* Jawi juga berkolaborasi dengan peneliti lintas negara dalam pelaksanaan project. */}
    </p>
</Link>
                                                </td>
                                            </tr>
                                          

                                        </tbody>
                                      
                                       

                                    </table>
                               
                                    </div>
                
                                </CardGroup>

                                <CardGroup className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:mt-0 md:mt-20 mx-auto">
           <div className="grid md:col-span-2 lg:col-span-2 aspect-video sm:col-span-1">
                                       <YouTubePlayer id={"LBCGzeuQkHc"} />
                                        {/* <iframe width="100%" height={16/9*width} src="https://www.youtube.com/embed/LBCGzeuQkHc?si=VxjCDXQbJBZQEBcj" title="Drone Emprite" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                                    </div>
                                    {/* <VideoPlayer/> */}
                                    <Card className="grid col-span-1 align-middle text-primary-900">
                                        <CardBody className="flex align-middle items-center align-center h-full bg-[#F3F5F8]">
                                            <div className="w-full items-center align-center py-auto">
                                                <h3 className="text-black w-full text-center m-0 font-extrabold">SITE PROJECT</h3>
                                                <p className="text-black text-center font-postbody m-0 max-w-xs mt-2 sm:max-w-full">Hutan Kemuning,</p>
                                                <p className="text-black text-center font-postbody m-0 max-w-xs sm:max-w-full">Temanggung,</p>
                                                <p className="text-black text-center font-postbody m-0 max-w-xs sm:max-w-full">Jawa Tengah.</p>
                                                <div className="flex justify-center pt-5">

                                                    {/* <Button className="self-auto bg-black text-white rounded-5 items-center mt-5"> */}
                                                    {/* <Link type="button" className="text-white  font-bold bg-black px-10 py-3 hover:bg-[#faa51a] hover:text-black " href="/detail/site-projek" passHref={true}> */}

                                                        <Button className="hover:bg-orange w-[150px]" href="/portofolio/site-project-hutan-kemuning-temanggung-jawa-tengah">

                                                        Read More
                                                        </Button>


                                                  
                                                </div>


                                            </div>

                                        </CardBody>
                                    </Card>
                                </CardGroup>

                                <div className="w-full h-full sm:mt-10 md:mt-20">
                                    <div className="relative sm:h-[1800px] md:h-[1580px]">
                                        <div className="absolute z-1 w-full h-[250px] bg-[#faa51a]">

                                        </div>

                                        <div className="absolute w-full items-center z-21 my-20">

                                            <h3 className="text-white w-full text-center m-0 text-2xl font-extrabold">EXPERIENCES</h3>
                                            <p className="text-white text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Our Capability</p>
                                            <CardGroup className="absolute h-max items-center z-22 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 my-20 mt-0 mx-auto left-0 right-0 sm:p-5  sm:w-full md:drop-shadow-none sm:drop-shadow-lg md:p-10 md:w-11/12">


                                                <CardImage src='/survey-biodibersitas-crop.png' className='gridcol-span-1  md:sm-0 h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />

                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                                {/* <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p> */}
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button href="/portofolio/survei-biodiversitas" variant="orange" >
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

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">MANAJEMEN DATA</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button href="/portofolio/manajemen-data" variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/manajemen-data-jawi.png' className='gridcol-span-1 h-64 sm:hidden md:block h-[330px]' imageClassName={' object-cover objet-bottom'} alt={''} />
                                                <CardImage src='/model-OU-17052023-1.jpg' className='gridcol-span-1 h-64 h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />
                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">PPEMODELAN SPASIAL</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button href="/portofolio/pemetaan-dan-pemodelan-spasial" variant="orange" >
                                                                         Read More
                                                                    </Button>


                                             </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 md:hidden sm:block' imageClassName={'object-cover objet-bottom'} alt={''} />
                                                <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                                    <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                        <div className="w-full sm:pt-5  rounded-0">
                                                            <div>

                                                                <h3 className="text-black w-full text-center m-0 text-base font-extrabold">PENYUSUNAN DOKUMEN PENGELOLAAN/ KEBIJAKAN</h3>
                                                                <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                            </div>

                                                            <div className="flex justify-center pt-5">
                                                                {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                                    <Button href="/portofolio/penyusunan-dokumen-pengelolaan-kebijakan" variant="orange" >
                                                                         Read More
                                                                    </Button>


                                                                {/* </Link> */}
                                                                {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                                </div>


                                                        </div>

                                                    </CardBody>
                                                </Card>
                                                <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 sm:hidden md:block h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />
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
         


                    </SectionContainer>
                </div>
            </div>
            <div className="sm:px-5  pt-5 bg-[#F3F5F8]]">
                
            <CardGroup className="sm:shadow-lg md:shadow-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 sm:m-10 sm:p-10  sm:mt-40 sm:mx-auto sm:mb-20 md:mt-0 mx-auto sm:p-0  sm:w-full  md:w-full">

                            
                                    <CardImage src='/product.jpeg' className='gridcol-span-1 h-full md:pl-10 md:pr-10' imageClassName={'object-cover objet-bottom'} alt={''} />

                                    <Card className="grid col-span-1 align-middle md:align-top sm:ml-0 sm:mt-5 md:mt-0 md:p-0 text-primary-400">
                                        <CardBody className="flex sm:align-middle md:align-top h-full sm:items-center md:items-top rounded-0 align-top my-0 pt-0">
                                            <div className="w-full  md:pr-10 md:h-full">
                                                <div>
                                                    <h1 className="text-black text-left m-0 mb-2 max-w-xs text-2xl font-bold sm:max-w-full">SUPPORT US!</h1>

                                                    <div className="max-w-80 mb-2">
                                                        <hr className="h-1 bg-[#faa51a]" />
                                                        <h4 className="text-black text-left m-0 max-w-xs mt-2 text-lg font-bold sm:max-w-full">K-COFFE 150 Gr. Kopi Robusta Kemuning, Temanggung</h4>

                                                    </div>

                                                    <p className="text-black text-sm my-0 font-postbody md:text-base text-justify">Dipersembahkan dari alam yang subur di Kemuning, Temanggung, kopi robusta kami adalah pencitraan penuh kasih sayang dan kepedulian terhadap lingkungan. Dipetik secara selektif dari kebun-kebun yang terpelihara dengan baik melalui sistem kopi di bawah tegakan. Setiap butiran biji kopi memiliki cerita konservasi yang menyentuh hati.
                                                        <br />
                                                        <br />
                                                        Dengan setiap tegukan kopi kami, Anda juga turut berkontribusi pada pelestarian lingkungan dan kehidupan satwa liar yang langka. Mari bersama-sama menikmati kenikmatan kopi yang berkualitas sambil menjaga keberlanjutan alam kita.</p>
                                                    {/* <h1 className="text-[#FAA51A] w-full text-left m-0 mt-5 text-xl font-black">Rp 35.000</h1> */}
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
                 {allPosts && allPosts.length > 2 ?  <ImageCarousel className="bg-[#F3F5F8]" carouselPosts={carouselPosts}/>: (
        <p>No posts found.</p>
      )}

      {/* <Timeline/> */}
             {/* <ImageCarousel className="bg-[#F3F5F8]" carouselPosts={carouselPosts}/> */}
             {/* <AnimatedLine/>
     */}

   
    
          
          


        </Layout>
    );
}





