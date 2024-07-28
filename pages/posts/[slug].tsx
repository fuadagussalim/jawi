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
import { getAllPostsWithSlug, getPostAndMorePosts, getPostIdBySlug } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Footer from "../../components/footer";
import CommentForm from "../../components/comments/CommentForm";
export default function Post({ post, posts, preview, postId }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  console.log('post itu apa',post);
  console.log('post itu apa',post.featuredImage);


  if (!router.isFallback && !post?.slug) {
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
                  {`${(post.title)?post.title:"Judul masih kosong"} | JAWI Magazine`}
                </title>
                <meta
                  property="og:image"
                  content={post?.featuredImage?.node?.sourceUrl ?? "/nullimage.jpg"}
                />
              </Head>
              <PostHeader
                title={(post.title)?post.title:"Judul masih kosong"}
                coverImage={(post.featuredImage)?post.featuredImage.node?.sourceUrl:"/nullimage.jpg"}
                date={(post.date)?post.date:'2030-06-05T12:52:05'}
                author={(post.author)?post.author:"Tidak ada author"}
                categories={(post.categories)?post.categories:[]}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts}  />} */}
            <CommentForm postId={postId}/>
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
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  const postId = await getPostIdBySlug(params?.slug)
  // console.log('params itu apa',params)
  console.log('data post Id itu apa',postId)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      postId: postId
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  

  return {
    paths: allPosts.edges?.map(({ node }) => `/posts/${node?.slug}`) || [],
    fallback: true,
  };
};
