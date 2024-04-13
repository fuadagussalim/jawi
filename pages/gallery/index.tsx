// import Head from "next/head";
// import { GetStaticProps } from "next";
// import Container from "../../components/container";
// import MoreStories from "../../components/more-stories";
// import HeroPortofolio from "../../components/hero-portofolio";
// import Intro from "../../components/intro";
// import Footer from "../../components/footer";
// import Layout from "../../components/layout";
// import {
//   getAllPortofoliosWithSlug,
//   getPortofolioFront,
//   getAllPhotos,
// } from "../../lib/api";
// import TabMenu from "../../components/Tab/TabMenu";
// import ImageCarousel from "../../components/Carousel/ImageCarousel";
// import { OtherpageBanner } from "../../components/Banner";
// // import { Gallery } from "next-gallery";
// import PhotoAlbum from "react-photo-album";
// import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   image,
// } from "@nextui-org/react";
// import Link from "next/link";
// export default function Index({ allPhotos: { edges } }) {
//   // console.log("gallery edge", edges[0]);

//   // const widths = [500, 1000, 1600];
//   // const ratios = [2.2, 4, 6, 8];
//   if (edges) {
//     console.log(edges);
//     interface Image {
//       index:number,
//       title: string,
//       content: Element,
//       src: string;
//       width: number;
//       height: number;

//     }
//     const images: Image[] = [];

//     // // Split the size string into an array containing width and height
//     //  sizeArray = galleryEdge.node.galleryAttachment.size.split("x");

//     // // Retrieve width and height from the size array
//     // const width = sizeArray[0];
//     // const height = sizeArray[1];

//     // console.log("Width:", width);
//     // console.log("Height:", height);

//     edges.map((node, index) => {
//       console.log(
//         "data satuan gallery",
//         node.node.galleryAttachment.image.node.sourceUrl
//       );
//       // const sizeArray = node.node.galleryAttachment.size.split("x");
//       // const width = sizeArray[0];
//       // const height = sizeArray[1];
//       images.push({
//         index: index,
//         title: node.node.title,
//         content: node.node.content,
//         src: node.node.galleryAttachment.image.node.sourceUrl,
//         width: node.node.galleryAttachment.image.node.mediaDetails.width,
//         height: node.node.galleryAttachment.image.node.mediaDetails.height,
//       });
//     });

//     const { isOpen, onOpen, onOpenChange } = useDisclosure();
//     const [backdrop, setBackdrop] = React.useState("blur");

//     const backdrops = ["opaque", "blur", "transparent"];

//     const handleOpen = (backdrop) => {
//       setBackdrop(backdrop);
//       onOpen();
//     };

//     return (
//       <>
//         <Head>
//           <title>{`JAWI's Gallery | Javan Wildlife INstititu`}</title>
//         </Head>
//         <Layout preview={false}>
//           <div className="mt-20 pt-1">
//             <Link onClick={onOpen} href="">
//               <PhotoAlbum layout="rows" photos={images} />;
//               {/* <Gallery {...{ images, widths, ratios }} /> */}
//             </Link>
//           </div>

//           <>
//             <Modal
//               backdrop="opaque"
//               isOpen={isOpen}
//               onOpenChange={onOpenChange}
//               classNames={{
//                 backdrop:
//                   "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
//               }}
//             >
//               <ModalContent>
//                 {(onClose) => (
//                   <>
//                     <ModalHeader className="flex flex-col gap-1">
//                       Modal Title
//                     </ModalHeader>
//                     <ModalBody>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Nullam pulvinar risus non risus hendrerit venenatis.
//                         Pellentesque sit amet hendrerit risus, sed porttitor
//                         quam.
//                       </p>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Nullam pulvinar risus non risus hendrerit venenatis.
//                         Pellentesque sit amet hendrerit risus, sed porttitor
//                         quam.
//                       </p>
//                       <p>
//                         Magna exercitation reprehenderit magna aute tempor
//                         cupidatat consequat elit dolor adipisicing. Mollit dolor
//                         eiusmod sunt ex incididunt cillum quis. Velit duis sit
//                         officia eiusmod Lorem aliqua enim laboris do dolor
//                         eiusmod. Et mollit incididunt nisi consectetur esse
//                         laborum eiusmod pariatur proident Lorem eiusmod et.
//                         Culpa deserunt nostrud ad veniam.
//                       </p>
//                     </ModalBody>
//                     <ModalFooter>
//                       <Button color="danger" variant="light" onPress={onClose}>
//                         Close
//                       </Button>
//                       <Button color="primary" onPress={onClose}>
//                         Action
//                       </Button>
//                     </ModalFooter>
//                   </>
//                 )}
//               </ModalContent>
//             </Modal>
//           </>
//         </Layout>
//       </>
//     );
//   } else {
//     <h2 className="text-center">Tidak dapat terkoneksi dengan server :(</h2>;
//   }
// }

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const allPhotos = await getAllPhotos();
//     console.log("foto", allPhotos);
//     return {
//       props: { allPhotos },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error("Error in getStaticProps: ", error.message);
//   }

//   return {
//     props: {
//       allPhotos: null,
//     },
//   };
// };
import XIcon from "../../components/Icons/XIcon";
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPortofolio from "../../components/hero-portofolio";
import Intro from "../../components/intro";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import {
  getAllPortofoliosWithSlug,
  getPortofolioFront,
  getAllPhotos,
  getGalleryFront,
} from "../../lib/api";

import DOMPurify from "isomorphic-dompurify";
import TabMenu from "../../components/Tab/TabMenu";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import { OtherpageBanner } from "../../components/Banner";
// import { Gallery } from "next-gallery";
import PhotoAlbum from "react-photo-album";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  image,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Gallery } from "next-gallery";
export default function Index({ allPhotos: { edges }, galleryFront: {node} }) {
  
  const front = node.front;
  if (edges) {
    interface Image {
      index: number;
      title: string;
      content: string | TrustedHTML;
      src: string;
      width: number;
      height: number;
      linkedIn: string;
      instagram: string;
      youtube: string;
      x: string;
      facebook: string;
    }
    const images: Image[] = [];
    edges.map((node, index) => {
      const sanitizedContent = DOMPurify.sanitize(node.node.content);
      images.push({
        index: index,
        title: node.node.title,
        content: sanitizedContent,
        src: node.node.galleryAttachment.image.node.sourceUrl,
        width: node.node.galleryAttachment.image.node.mediaDetails.width,
        height: node.node.galleryAttachment.image.node.mediaDetails.height,
        linkedIn: node.node.galleryAttachment.linkedin,
        instagram: node.node.galleryAttachment.instagram,
        facebook: node.node.galleryAttachment.facebook,
        youtube: node.node.galleryAttachment.youtube,
        x: node.node.galleryAttachment.x,
      });
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = React.useState<Image | null>(
      null
    );

    const handleImageClick = (index: number) => {
      const selected = images.find((image) => image.index === index);
      if (selected) {
        setSelectedImage(selected);
        onOpen();
      }
    };

    return (
      <>
        <Head>
          <title>{`JAWI's Gallery | Javan Wildlife INstititu`}</title>
           <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />
        </Head>
    
        <Layout preview={false}>
          
          <OtherpageBanner image={front.banner.node.sourceUrl??"./hero.jpg"} maintext={front.judul} subtext={front.subjudul}/>
          <div className="pt-2 md:pt-5">
            {/* {images.map((image) => (
              <Link
                key={image.index}
                onClick={() => handleImageClick(image.title)}
                href="#"
              >
             
              </Link>
            ))} */}
            <PhotoAlbum
              layout="rows"
              photos={images}
              onClick={({ index }) => {
                handleImageClick(index);
              }}
            />
            ;
          </div>
          <Modal
           backdrop="opaque" 
        isOpen={isOpen} 
        
        classNames={{
          backdrop: "bg-gradient-to-t from-black-900 to-black-900/10 backdrop-opacity-2"
        }}
           onClose={onClose}>
            <ModalContent className="bg-white w-full shadow-xl">
         

              <ModalHeader className="capitalize">
                {selectedImage?.title}
              </ModalHeader>
              <ModalBody>
                {selectedImage && (
                  <div className="grid grid-cols-1 md:grid-cols-4">

                    
                    <div className="grid col-span-1">

                    <Image
                      className="shadow-xl"
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      width={selectedImage.width}
                      height={selectedImage.height}
                      />
                      </div>
                      <div className="sm:mt-5 md:mt-0 md:px-10 md:col-span-3">

                    <div className="text-xs text-justify"
                      dangerouslySetInnerHTML={{
                        
                        __html: selectedImage.content,
                      }}
                      />
                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                      transition-opacity duration-300"
                    >
                      {selectedImage.linkedIn && (
                        <a
                        href={selectedImage.linkedIn}
                          target="_blank"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                      )}

                      {/* <!-- X --> */}

                      {selectedImage.x && (
                        <a
                        href={selectedImage.x}
                          target="_blank"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                          <XIcon width={12} className={"mx-auto"} />
                        </a>
                      )}

                      {/* <!-- Facebook --> */}
                      {selectedImage.facebook && (
                        <a
                          href={selectedImage.facebook}
                          target="_blank"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                        </a>
                      )}

                      {/* <!-- Instagram --> */}
                      {selectedImage.instagram && (
                        <a
                        href={selectedImage.instagram}
                        target="_blank"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      )}
                      {/* <!-- Youtube --> */}
                      {selectedImage.youtube && (
                        <a
                          href={selectedImage.youtube}
                          target="_blank"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-youtube text-orange-400 mx-auto mt-2"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="solid" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
            </Modal>
        </Layout>
      </>
    );
  } else {
    return (
      <h2 className="text-center">Tidak dapat terkoneksi dengan server :(</h2>
    );
  }
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPhotos = await getAllPhotos();
    const galleryFront = await getGalleryFront();
    console.log('frontnya gallery',galleryFront)
    return {
      props: { allPhotos, galleryFront },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps: ", error.message);
    return {
      props: {
        allPhotos: null,
        galleryFront: null
      },
    };
  }
};
