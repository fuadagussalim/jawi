import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import AboutBody from "../components/about-body";
import MoreStories from "../components/more-stories";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Tags from "../components/tags";
import { getAllPagesWithSlug, getPortofolioBySlug, getPostAndMorePosts, getPageBySlug } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import PortofolioHeader from "../components/portofolio-header";
import { OtherpageBanner } from "../components/Banner";
import { title } from "process";
import PostBody from "../components/post-body";
export default function Index({ page }) {
  const { node } = page ?? {};
  console.log("prop dari page",page)

  if (!node || !node.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { front, content } = node;

  return (
    <Layout preview={false}>
      <OtherpageBanner image={front?.banner?.node?.sourceUrl ?? "/hero.jpg"} maintext={front?.judul ?? "About"} subtext={front?.subjudul ?? "Kenali lebih dalam tentang kami"} />
      <PostBody content={content ?? "Tidak dapat memperoleh data :("} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  // const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  // console.log('params itu apa',params)
  // console.log('data post itu apa',data.post)
  const slug = typeof params?.slug === 'string' ? params.slug : '';
const data = await getPageBySlug(slug);
  console.log('slug', slug)
  console.log('data halaman',data.edges)
  return {
    props: {
    
      page: data?.edges[0]??[]
      
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithSlug();
  // console.log('halaman by slug', allPages.edges[0]);

  const paths = allPages.edges.map(({ node }) => (
    
    {
    
    params: { slug: node?.slug??'about' },
  }));

  return {
    paths,
    fallback: true,
  };
};
