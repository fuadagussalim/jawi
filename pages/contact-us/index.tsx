import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MorePortofolios from "../../components/more-stories";
import HeroPortofolio from "../../components/hero-portofolio";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllPortofoliosWithSlug, getPortofolioFront } from "../../lib/api";
import TabMenu from "../../components/Tab/TabMenu";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";
import { CardGroup } from "../../components/Card";

import Link from "next/link";
import Image from "next/image";
export default function Index({ allPortofolios: { edges }, portoFolioFront: { node } }) {
  console.log('porto edge', node);

  if (edges && node) {
    // console.log(edges);
    const portofolioFrontData = node;
    console.log('data constanta', portofolioFrontData);
    console.log('banner:', portofolioFrontData.front.banner.node.sourceUrl)

    const heroPortofolio = edges[0]?.node;
    // console.log(heroPortofolio);
    const morePosts = edges.slice(1);
    // console.log(heroPortofolio);

    return (
      <Layout preview={false}>
        {/* <ClientPage>
  
        </ClientPage> */}
        <Head>
          <title>{`JAWI's Portofolio | Javan Wildlife Institute`}</title>
        </Head>
        <OtherpageBanner
        maintextclass="mb-2 md:mb-10"
        maintext={portofolioFrontData.front.judul}
          image={portofolioFrontData.front.banner.node.sourceUrl}
          subtext={portofolioFrontData.front.subjudul} />
        {/* <Container> */}

        {/* <TabMenu options={""}></TabMenu> */}



{/* 
        {heroPortofolio && (
          <HeroPortofolio
            title={heroPortofolio.title}
            coverImage={heroPortofolio.featuredImage}
            slug={heroPortofolio.slug}
            excerpt={heroPortofolio.excerpt}
          />
        )} */}
        {/* <Container classNames="tracking-widest lg:px-40 mx-auto items-center w-full">
          {morePosts.length > 0 && <MorePortofolios posts={morePosts} />}
        </Container> */}

        {/* </Container> */}
        {/* 
        <ImageCarousel>
  
        </ImageCarousel> */}
 <CardGroup className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-20 mx-auto  p-10 sm:p-20 pt-0 mt-5 w-full">
                                {/* <Maps address={"Jawi (Javan Wildlife Institute"} /> */}
                                <div>
                                <div className="align-top">
                                                    <h1 className="text-black text-left m-0 max-w-xs text-2xl font-bold sm:max-w-full drop-shadow-xl">KANTOR PUSAT</h1>

                                                    <div className="max-w-80 mb-2">
                                                        <hr className="h-1 bg-[#faa51a]" />
                                                        {/* <h4 className="text-black text-left m-0 max-w-xs mt-2 text-lg font-bold sm:max-w-full">K-COFFE 150 Gr. Kopi Robusta Kemuning, Temanggung</h4> */}

                                                    </div>

                                                    <p className="text-black text-lg md:pr-10 my-0 md:tracking-wide   text-justify">Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta</p>
                                                        <br />
                                                        <br />
                                                    <table className="text-lg w-full">
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                          <p className="my-0">Telepon </p>
                                                          </td>
                                                          <td>
                                                            <p>:</p>
                                                          </td>
                                                          <td>
                                                            <p>
                                                            (0274) 5023685
                                                            </p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>
                                                          <p className="my-0">E-mail </p>
                                                          </td>
                                                          <td>
                                                            <p>:</p>
                                                          </td>
                                                          <td>
                                                            <p>
                                                              javanwildlife@gmail.com
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>

                                                    <div className="grid  col-span-1 gap-0 w-1/2 items-left mt-3  md:items-center grid-cols-4">
              
            <Link className="grid col-span-1 drop-shadow-xl  my-5" href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"} target="_blank">
              <Image
                className="flex col-span-1  mx-auto"
                src="/sosmed/fb b.png"
                height={25*2}
                width={25*2}
                alt="">
              </Image>
              </Link>
              <Link className="grid col-span-1 drop-shadow-xl  my-5" href={"https://id.linkedin.com/company/javan-wildlife-institute"} target="_blank">
              <Image
                src="/sosmed/link b.png"
                height={25*2}
                width={25*2}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
              </Link>
              <Link className="grid col-span-1 drop-shadow-xl  my-5" href={"https://www.instagram.com/javanwildlife/?hl=en"} target="_blank">
              <Image
                src="/sosmed/ig b.png"
                height={25*2}
                width={25*2}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>
              <Link className="drop-shadow-xl grid col-span-1 my-5" href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"} target="_blank">
              <Image
                src="/sosmed/yt b.png"
                height={25*2}
                width={25*2}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>

            </div>
        


                                                   
                                                       
                                                   
                                                    {/* <h1 className="text-[#FAA51A] w-full text-left m-0 mt-5 text-xl font-black">Rp 35.000</h1> */}
                                                </div>

                                </div>

                                <iframe className="shadow-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7704356898225!2d110.35142947476626!3d-7.81410799220644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af61d0254a0db%3A0xc44af8788fff1217!2sJawi%20(Javan%20Wildlife%20Institute)!5e0!3m2!1sid!2sid!4v1711173804931!5m2!1sid!2sid" width="100%" height="150%"></iframe>
                     
                              <br className="hidden md:block"/>
                              <br className="hidden md:block"/>
                            </CardGroup>
      </Layout>
    );

  } else {

    <h2 className="text-center">
      Tidak dapat terkoneksi dengan server :(
    </h2>


  }

}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPortofolios = await getAllPortofoliosWithSlug();
    const portoFolioFront = await getPortofolioFront();
    console.log(portoFolioFront);

    return {
      props: { allPortofolios, portoFolioFront },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps: ", error.message);
  }
  // console.log('all porto: ', allPortofolios);
  // console.log('front porto: ', portoFolioFront);

  return {
    props: {
      allPortofolios: null,
      portoFolioFront: null,
    },
  };
};
