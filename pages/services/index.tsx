import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer";
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
import { useRouter } from "next/router";
import { ExCard, Card } from "../../components/Card";

export default function Index({
  allServices: { edges },
  servicesFront: { node },
  preview,
}) {
  console.log(node);
  console.log("allServices ", edges);
  console.log("isi konten", node.content);

  const router = useRouter();
  // const morePortofolios = portofolios?.edges;
  // console.log('post itu apa',portofolio)

  if (!router.isFallback && !edges?.slug && !node?.slug) {
    interface accData {
      id: string;
      title: string;
      isOpen: boolean;
      content: ReactElement<any, any>;
      image: string;
      slug: string;
      excerpt: string;
    }

    const accDatas: accData[] = [];
    edges?.map((node) => {
      console.log("satuan node:", node.node.featuredImage.node.sourceUrl);
      accDatas.push({
        id: uuid(),
        title: node.node.title,
        isOpen: false,
        content: node.node.content,
        image: node.node.featuredImage.node.sourceUrl,
        slug: node.node.slug,
        excerpt: node.node.excerpt,
      });
    });

    if (edges && node) {
      // const heroService = edges[0]?.node;
      // const moreServices = edges.slice(1);

      const front = node.front;
      return (
        <Layout preview={preview}>
          <OtherpageBanner
          className=""
          subtextclass=""
          maintextclass="mb-2 md:mb-10"
            maintext={front.judul}
            subtext={front.subjudul}
            image={front.banner.node.sourceUrl}
          />
          <div>
            <div>
              {node.servicesFront.heading && <h1 className="text-orange font-bold sm:text-xl md:text-4xl sm:uppercase  drop-shadow-sm sm:mt-5 sm:mb-2 md:my-10 md:mb-0 md:uppercase mx-auto text-center">
                {node.servicesFront.heading ?? "Services"}
              </h1>}
              <p className="text-base md:text-xl mx-auto w-full px-10 md:px-28 sm:mt-3 md:mt-5 text-justify md:text-center font-postbody">
                {node.servicesFront.shortParagraph ?? ""}
              </p>
              <hr className="md:px-28" />
            </div>
            {node.content && <ServicesBody content={node.content} />}
            <ExCard
              cardDatas={accDatas}
              cardImageClassName={"md:my-10"}
              cardClassName={"md:py-10"}
              cardGroupClassname={"mt-10 md:mt-5"}
              routeParams={"service"}
            />
          </div>
        </Layout>
      );
    } else {
      return;
      <> Server Error</>;
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const allServices = await getAllServicesWithSlug();
  const servicesFront = await getServicesFront();
  //   console.log('halaman services',allServices)
  console.log("halaman services", servicesFront);

  return {
    props: { allServices, servicesFront },
    revalidate: 10,
  };
};
