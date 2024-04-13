// import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
// import Container from "../../components/container";
import AboutBody from "../../components/about-body";
// import MoreStories from "../../components/more-stories";
// import Header from "../../components/header";
// import PostHeader from "../../components/post-header";
// import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
// import PostTitle from "../../components/post-title";
// import Tags from "../../components/tags";
import {getPageBySlug, getTeams } from "../../lib/api";
// import { CMS_NAME } from "../../lib/constants";
// import Footer from "../../components/footer";
// import PortofolioHeader from "../../components/portofolio-header";
import { OtherpageBanner } from "../../components/Banner";
// import { title } from "process";
// import PostBody from "../../components/post-body";
// import Timeline from "../../components/Timeline/timeline";
// import Team from "../../components/Team/Team";
export default function Index({ page ,teams}) {
  const { node } = page ?? {};
  const edges = teams ?? {};

  console.log("prop dari page",page)
  console.log("isi tiap member team",edges[0].node)

    interface Member {
    nama: string;
    grup: string;
    jabatan: string;
    foto: string;
    prioritas: number,
    content?: Element|null,
    tittle?: string|null,
    x?: string | null;
    facebook?: string | null;
    linkedIn?: string | null;
    instagram?: string | null;
    };
    

    const members: Member[] = edges.map(({ node }) => ({
        nama: node.teamMemberData.nama,
        grup: node.teamMemberData.group,
        jabatan: node.teamMemberData.jabatan,
        prioritas: node.teamMemberData.prioritas,
        foto: node.teamMemberData.foto.node.sourceUrl,
        content: node.content,
        title: node.title,
        x: node.teamMemberData.x,
        facebook: node.teamMemberData.facebook,
        linkedIn: node.teamMemberData.linkedIn,
        instagram: node.teamMemberData.instagram,
    }));








  if ((!node || !node.slug) && !edges) {
    return <ErrorPage statusCode={404} />;
  }

  const { front, content } = node;
 console.log("isi content: ", content)
  return (
    <Layout preview={false}>
      <OtherpageBanner image={front?.banner?.node?.sourceUrl ?? "/hero.jpg"} maintext={front?.judul ?? "About"} subtext={front?.subjudul ?? "Kenali lebih dalam tentang kami"} />
      <AboutBody content={content ?? "Tidak dapat memperoleh data :("} members={members??"Tidak dapat memperoleh data"} />
    {/* <Timeline/> */}

   
     
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    // const allPhotos = await getAllPhotos();
    const data = await getPageBySlug('about');
    const teamsData = await getTeams();
    const teams = teamsData?.edges??[]
    const page = data?.edges[0]??[];

    // console.log('frontnya gallery',galleryFront)
    return {
      props: {
         page,
         teams },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps: ", error.message);
    return {
      props: {
        page: null,
        teams: null
      },
    };
  }
};
