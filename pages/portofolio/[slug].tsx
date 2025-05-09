import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPortofoliosWithSlug, getPortofolioBySlug, getPostAndMorePosts, getPortofolioPage } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Footer from "../../components/footer";
import PortofolioHeader from "../../components/portofolio-header";
export default function Poortofolio({ portofolio, preview }) {
  const router = useRouter();
  // const morePortofolios = portofolios?.edges;
  // console.log('post itu apa',portofolio)

  if (!router.isFallback && !portofolio?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {/* <Container> */}
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${portofolio.title} | JAWI's Portofolio`}
                </title>
                <meta
                  property="og:image"
                  content={portofolio.featuredImage?.node.sourceUrl??"/hero.jpg"}
                />
              </Head>
              <PortofolioHeader
                title={portofolio.title}
                coverImage={portofolio?.featuredImage??"/hero.jpg"}
                // date={portofolio.date}
              
              />
              <PostBody content={portofolio.content} />
              {/* <footer>
                {portofolio.tags.edges.length > 0 && <Tags tags={portofolio.tags} />}
              </footer> */}
            </article>

            {/* <SectionSeparator /> */}
            {/* {morePortofolios.length > 0 && <MoreStories posts={morePortofolios} />} */}
          </>
        )}
      {/* </Container> */}
     
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
const data = await getPortofolioPage(slug);
  console.log('slug', slug)
  console.log(data)
  return {
    props: {
      preview,
      portofolio: data.nodes[0]
      
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPortofolio = await getAllPortofoliosWithSlug();
  console.log(allPortofolio.edges)

  const paths = allPortofolio.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
