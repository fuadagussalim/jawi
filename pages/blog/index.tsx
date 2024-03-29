import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import ImageCarousel from "../../components/Carousel/ImageCarousel";


export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  // console.log(heroPost);

  return (
    <Layout preview={preview}>
      {/* <ClientPage>

      </ClientPage> */}
      <Head>
        <title>{`JAWI | Javan Wildlife`}</title>
      </Head>
      {/* <Container> */}
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
        <Container classNames="tracking-widest lg:px-40 mx-auto items-center w-full">
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
     
      {/* </Container> */}
{/* 
      <ImageCarousel>

      </ImageCarousel> */}
    
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
