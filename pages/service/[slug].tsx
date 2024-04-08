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
import { getAllServicesWithSlug, getPortofolioBySlug, getPostAndMorePosts, getServicePage } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Footer from "../../components/footer";
import PortofolioHeader from "../../components/portofolio-header";
export default function Poortofolio({ service, preview }) {
  const router = useRouter();
  // const moreservices = services?.edges;
  // console.log('post itu apa',service)

  if (!router.isFallback && !service?.slug) {
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
                  {`${service.title} | JAWI's service`}
                </title>
                <meta
                  property="og:image"
                  content={service.featuredImage?.node.sourceUrl??"/hero.jpg"}
                />
              </Head>
              <PortofolioHeader
                title={service.title}
                coverImage={service?.featuredImage??"/hero.jpg"}
                // date={service.date}
              
              />
              <PostBody content={service.content} />
              {/* <footer>
                {service.tags.edges.length > 0 && <Tags tags={service.tags} />}
              </footer> */}
            </article>

            {/* <SectionSeparator /> */}
            {/* {moreservices.length > 0 && <MoreStories posts={moreservices} />} */}
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
const data = await getServicePage(slug);
  console.log('slug', slug)
  console.log(data)
  return {
    props: {
      preview,
      service: data.nodes[0]
      
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allServices = await getAllServicesWithSlug();
  console.log(allServices.edges)

  const paths = allServices.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
