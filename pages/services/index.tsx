import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllServicesWithSlug, getServicesFront } from "../../lib/api";

import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";


export default function Index({ allServices: { edges },servicesFront: {node}, preview }) {
  console.log(edges)
  if (edges){
    const heroService = edges[0]?.node;
    const moreServices = edges.slice(1);
    const front = node.front;
    return (
        <Layout preview={preview}>
            <OtherpageBanner maintext={front.judul} subtext={front.subjudul} image={front.banner.node.sourceUrl}/>
          {/* <ClientPage>
    
          </ClientPage> */}
          {/* <Head>
            <title>{`JAWI | Javan Wildlife`}</title>
          </Head> */}
          {/* <Container> */}
            <Intro />
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
