// require('dotenv').config(); // This loads the environment variables from .env into process.env

// // Rest of your code

import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { getAllPages } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import ClientPage from "./ClientPage";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import Footer from "../components/footer";
export default function Index({ allPosts: { edges }, preview, allPages: { edgesPages } }) {

  if (edges
    //  && edgesPages
     ) {
    const heroPost = edges[0]?.node;
    const morePosts = edges;
    // console.log(heroPost);
    // const pages = edgesPages[0]?.node;
    return (
      <ClientPage allPosts={morePosts}></ClientPage>
      // <div className="text-center h-[400px]">Web Sedang dalam proses Upgrade
      // <br />
      // Stay tune
      // </div>

    );
  } else {
    return (
      <div className="h-200px p-40">
        <p className="text-center h-[200px] font-bold">Maaf, tidak dapat tersambung ke server</p>
      </div>
    )

      
  }

};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  const allPages = await getAllPages(preview);

  // // If the data is not available, return an error
  // if (!allPosts || !allPages) {
  //   return {
  //     notFound: true,
  //   } as GetStaticPropsResult<{ allPosts: never[]; allPages: never[]; preview: boolean }>;
  // }
  // else{
  //   return (<>Tidak dapat tersambung ke server</>)
  // }

  return {
    props: { allPosts, allPages, preview },
    revalidate: 10,
  };
};
