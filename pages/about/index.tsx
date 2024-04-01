import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPortofolio from "../../components/hero-portofolio";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllPortofoliosWithSlug, getPortofolioFront } from "../../lib/api";
import TabMenu from "../../components/Tab/TabMenu";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";


export default function Index({ allPortofolios: { edges }, portoFolioFront: { node } }) {
  console.log('porto edge', node);

  if (edges && node) {
    // console.log(edges);
    const portofolioFrontData = node;
    console.log('data constanta', portofolioFrontData);
    console.log('banner:', portofolioFrontData.front.banner.node.sourceUrl)

    const heroPortofolio = edges[0]?.node;
    // console.log(heroPortofolio);
    const morePosts = edges.slice(1);
    // console.log(heroPortofolio);

    return (
      <Layout preview={false}>
        {/* <ClientPage>
  
        </ClientPage> */}
        <Head>
          <title>{`JAWI's Portofolio | Javan Wildlife INstititu`}</title>
        </Head>
        <OtherpageBanner maintext={portofolioFrontData.front.judul}
          image={portofolioFrontData.front.banner.node.sourceUrl}
          subtext={portofolioFrontData.front.subjudul} />
        {/* <Container> */}

        {/* <TabMenu options={""}></TabMenu> */}




        {heroPortofolio && (
          <HeroPortofolio
            title={heroPortofolio.title}
            coverImage={heroPortofolio.featuredImage}
            slug={heroPortofolio.slug}
            excerpt={heroPortofolio.excerpt}
          />
        )}
        <Container classNames="tracking-widest lg:px-40 mx-auto items-center w-full">
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>

        {/* </Container> */}
        {/* 
        <ImageCarousel>
  
        </ImageCarousel> */}

      </Layout>
    );

  } else {

    <h2 className="text-center">
      Tidak dapat terkoneksi dengan server :(
    </h2>


  }

}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPortofolios = await getAllPortofoliosWithSlug();
    const portoFolioFront = await getPortofolioFront();
    console.log(portoFolioFront);

    return {
      props: { allPortofolios, portoFolioFront },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps: ", error.message);
  }
  // console.log('all porto: ', allPortofolios);
  // console.log('front porto: ', portoFolioFront);

  return {
    props: {
      allPortofolios: null,
      portoFolioFront: null,
    },
  };
};
