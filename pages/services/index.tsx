import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllServicesWithSlug, getServicesFront } from "../../lib/api";
import { ReactElement } from "react";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";
import PostBody from "../../components/post-body";
import ServicesBody from "../../components/services-body";
import { Accordion } from "../../components/Accordion";
import { v4 as uuid } from "uuid";
import { JsxElement } from "typescript";

export default function Index({ allServices: { edges },servicesFront: {node}, preview }) {
    console.log(node);
    console.log('allServices ', edges);
    console.log('isi konten',node.content);
    

    interface accData {
        id: string,
        title: string,
        isOpen: boolean,
        content: ReactElement<any, any>,
        image: string,
        slug: string,
      }


    const accDatas:accData[]=[];
    edges?.map((node)=>{
        console.log('satuan node:', node.node.featuredImage.node.sourceUrl)
        accDatas.push(
            {
                id: uuid(),
                title: node.node.title,
                isOpen: false,
                content: node.node.content,
                image: node.node.featuredImage.node.sourceUrl,
                slug: node.node.slug
            }
        )
        
    })

  if (edges && node){
    // const heroService = edges[0]?.node;
    // const moreServices = edges.slice(1);

    const front = node.front;
    return (
        <Layout preview={preview}>
            <OtherpageBanner maintext={front.judul} subtext={front.subjudul} image={front.banner.node.sourceUrl}/>
            <div>
                <ServicesBody content={node.content}/>


            </div>
            <Accordion accordionDataParam={accDatas}/>
            {/* <Accordion/> */}

          {/* <ClientPage>
    
          </ClientPage> */}
          {/* <Head>
            <title>{`JAWI | Javan Wildlife`}</title>
          </Head> */}
          {/* <Container> */}
            {/* <Intro /> */}
            {/* {heroService && (
              <HeroPost
                title={heroService.title}
                coverImage={heroService.featuredImage}
                date={heroService.date}
                author={heroService.author}
                slug={heroService.slug}
                excerpt={heroService.excerpt}
              />
            )} */}
            {/* <Container classNames="tracking-widest lg:px-40 mx-auto items-center w-full">
              {moreServices.length > 0 && <MoreStories posts={moreServices} />}
            </Container> */}
         
          {/* </Container> */}
    {/* 
          <ImageCarousel>
    
          </ImageCarousel> */}
        
        </Layout>
      );

  } else {
    return <>
    Server Error</>
  }
  
  // console.log(heroService);

 
}

export const getStaticProps: GetStaticProps = async () => {
  const allServices = await getAllServicesWithSlug();
  const servicesFront = await getServicesFront();
//   console.log('halaman services',allServices)
  console.log('halaman services',servicesFront)

  return {
    props: { allServices, servicesFront },
    revalidate: 10,
  };
};
