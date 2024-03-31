import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPortofolio from "../../components/hero-portofolio";
import Intro from "../../components/intro";
import Footer from "../../components/footer"
import Layout from "../../components/layout";
import { getAllPortofoliosWithSlug, getPortofolioFront, getAllPhotos } from "../../lib/api";
import TabMenu from "../../components/Tab/TabMenu";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";
import { Gallery } from "next-gallery"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, image } from "@nextui-org/react";
import Link from "next/link";
export default function Index({ allPhotos: { edges } }) {
  console.log('porto edge', edges);





  const widths = [500, 1000, 1600]
  const ratios = [2.2, 4, 6, 8]
  if (edges) {
    console.log(edges);
    interface Image {
      src: string,
      aspect_ratio: number,
    }
    const images: Image[] = [
      // { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
      // { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },

    ];

    edges.map(
      (node) => {
        console.log('data satuan gallery', node.node.galleryAttachment.image.node.sourceUrl)
        images.push({ src: node.node.galleryAttachment.image.node.sourceUrl, aspect_ratio: 16 / 9 });
      }
    )





    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('blur')

    const backdrops = ["opaque", "blur", "transparent"];

    const handleOpen = (backdrop) => {
      setBackdrop(backdrop)
      onOpen();
    }



    return (
      <>
        <Head>
          <title>{`JAWI's Gallery | Javan Wildlife INstititu`}</title>
        </Head>
        <Layout preview={false}>



          <div className="mt-20 pt-1">
          <Link onClick={onOpen} href=''>
          <Gallery {...{ images, widths, ratios }}/>
          </Link>
          </div>

          <>
            
            <Modal
              backdrop="opaque"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              classNames={{
                backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>




        </Layout>
      </>
    );

  } else {

    <h2 className="text-center">
      Tidak dapat terkoneksi dengan server :(
    </h2>


  }

}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPhotos = await getAllPhotos();
    console.log('foto', allPhotos);
    return {
      props: { allPhotos },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps: ", error.message);
  }

  return {
    props: {
      allPhotos: null,

    },
  };
};



