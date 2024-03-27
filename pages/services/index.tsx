import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllPostsForHome, getServices } from "../../lib/api";
// import { CMS_NAME } from "../lib/constants";
import ClientPage from "./ClientPage";
import ImageCarousel from "../../components/Carousel/ImageCarousel";


export default function Index({ allServices: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  const allServices = edges[0].node
  console.log(allServices[0]);

  return (
    <Layout preview={preview}>
      {/* <ClientPage>

      </ClientPage> */}
      <Head>
        <title>{`JAWI | Javan Wildlife`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>

      <ImageCarousel>

      </ImageCarousel>
    
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allServices = await getServices(preview);

  return {
    props: { allServices, preview },
    revalidate: 10,
  };
};
