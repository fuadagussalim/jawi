require('dotenv').config(); // This loads the environment variables from .env into process.env

// Rest of your code

import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import ClientPage from "./ClientPage";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import Footer from "../components/footer";
export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    
   
      <ClientPage></ClientPage>
      

  
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
