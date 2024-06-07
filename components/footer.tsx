// import Container from "./container";
// import { EXAMPLE_PATH } from "../lib/constants";
// import Link from "next/link";
// import Image from "next/image";
// import { SectionContainer } from "./Section";

// export default function Footer() {
//   const date = new Date();
//   const year = date.getFullYear();
//   var smFactor = 5;
//   var pnFactor = 3;
//   return (
//     <footer className="bg-black border-t border-accent-2  pb-10">
//       <Container classNames="hidden md:block mt-10">
//         <div className="grid md:grid-cols-3 grid-rows-5">
//           <div className="grid container col-span-1 ml-10 row-span-6">
//             <div className="inline-block content-top  lg:w-8/12 2xl:w-8/12 pr-2">
//               <p className="text-white text-[11px] 2xl:text-[12px] font-semibold my-0">
//                 © {year} <span className="text-black">-</span> Lembaga Jawi
//                 Indonesia - Javan Wildlife Institute (JAWI)
//                 <span className="font-normal">
//                   {" "}
//                   <Link
//                     className="transition-colors duration-300 hover:underline"
//                     href="https://jawi.or.id"
//                     target="_blank"
//                   ></Link>
//                 </span>
//               </p>
//               {/* <div className="grid col-span-1  h-2/3"> */}
//               <hr className="w-full pt-2/3 mt-2 bg-[#ffa01a]" />
//               <p className="text-white tracking-tighter text-[10px] font-thin text-justify pt-2">
//                 Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota
//                 Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia
//               </p>
//             </div>
//           </div>
//           {/* <div className="grid row-span-1">2</div> */}

//           <div className="grid col-span-1 max-w-xs row-span-6">
//             <div className="grid md:grid-cols-2 w-autoh-1/3 col-span-1 mb-4 row-span-1">
//               <div className="items-bottom">
//                 <p className="text-white grid font-thin text-xl ml-5  mr-auto h-full col-span-1 items-end flex items-center">
//                   Social Media
//                 </p>
//               </div>
//               <div className="grid justify-evenly col-span-1 gap-2 w-auto  md:items-center md:grid-cols-4">
//                 <Link
//                   href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"}
//                   target="_blank"
//                 >
//                   <Image
//                     className="flex col-span-1  mx-auto"
//                     src="/sosmed/fb w.png"
//                     height={25 * smFactor}
//                     width={25 * smFactor}
//                     alt=""
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={
//                     "https://id.linkedin.com/company/javan-wildlife-institute"
//                   }
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/link w.png"
//                     height={25 * smFactor}
//                     width={25 * smFactor}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={"https://www.instagram.com/javanwildlife/?hl=en"}
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/ig w.png"
//                     height={25 * smFactor}
//                     width={25 * smFactor}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"}
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/yt w.png"
//                     height={25 * smFactor}
//                     width={25 * smFactor}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="grid col-span-1 max-w-md md:pr-10 lg:pr-0 row-span-6">
//             <div className="grid md:grid-cols-2  col-span-1 mb-4 row-span-1">
//               <div className="items-bottom">
//                 <p className="text-white grid font-thin text-xl text-right  mr-10 h-full col-span-1 items-end flex items-center">
//                   Our Partners
//                 </p>
//               </div>
//               <div className="grid justify-evenly col-span-1 gap-2 w-auto  md:items-center md:grid-cols-1 ">
//                 <div className="grid grid-cols-7 gap-0 my-auto p-0 mx-0 md:mr-10 col-span-1">
//                   <Image
//                     className="flex col-span-1  mx-0 mt-2"
//                     src="/Logo ISI Baru.png"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                   ></Image>
//                   <Image
//                     src="/Logo TN Bukit Raya.png"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                     className="flex col-span-1  mx-0 mt-2"
//                   ></Image>
//                   <Image
//                     src="/Logo_TN_Komodo (1).png"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                     className="flex col-span-1  mx-0 mt-2"
//                   ></Image>
//                   <Image
//                     src="/logo arupa.jpg"
//                     height={24 * pnFactor}
//                     width={24 * pnFactor}
//                     alt=""
//                     className="flex col-span-1  mx-0 mt-2"
//                   ></Image>
//                   <Image
//                     src="/Logo IPS.jpg"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                     className="flex col-span-1  mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/Logo RISTEK-BRIN.png"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                     className="flex col-span-1 ]  mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/Logo UGM Baru.png"
//                     height={35 * pnFactor}
//                     width={35 * pnFactor}
//                     alt=""
//                     className="flex col-span-1  mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/Logo Temanggung Baru.png"
//                     height={25 * pnFactor}
//                     width={25 * pnFactor}
//                     alt=""
//                     className="flex col-span-1   mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/Logo PBNF.png"
//                     height={50 * pnFactor}
//                     width={50 * pnFactor}
//                     alt=""
//                     className="flex col-span-2  mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/Logo LFP.png"
//                     height={80 * pnFactor}
//                     width={80 * pnFactor}
//                     alt=""
//                     className="flex col-span-2 pt-2  mx-0 mt-2"
//                   ></Image>

//                   <Image
//                     src="/international-elephant-project.png"
//                     height={45 * pnFactor}
//                     width={80 * pnFactor}
//                     alt=""
//                     className="flex col-span-2   mx-0 mt-2"
//                   ></Image>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </Container>
//       <Container classNames="md:hidden">
//         <div className="grid grid-cols-5">
 
//           <div className="grid col-span-5 mx-5 my-5">
//             <div className="grid grid-cols-2 mt-1 w-auto h-1/3 col-span-1 mb-4 pt-2 row-span-5">
//               <p className="text-white grid font-light align-middle text-xs mr-auto h-full col-span-1 flex items-center">
//                 Social Media:{" "}
//               </p>
//               <div className="grid  col-span-1 gap-1 w-auto   items-end grid-cols-4">
//                 <Link
//                   href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"}
//                   target="_blank"
//                 >
//                   <Image
//                     className="flex col-span-1  mx-auto"
//                     src="/sosmed/fb w.png"
//                     height={25}
//                     width={25}
//                     alt=""
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={
//                     "https://id.linkedin.com/company/javan-wildlife-institute"
//                   }
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/link w.png"
//                     height={25}
//                     width={25}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={"https://www.instagram.com/javanwildlife/?hl=en"}
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/ig w.png"
//                     height={25}
//                     width={25}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//                 <Link
//                   href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"}
//                   target="_blank"
//                 >
//                   <Image
//                     src="/sosmed/yt w.png"
//                     height={25}
//                     width={25}
//                     alt=""
//                     className="flex col-span-1  mx-auto"
//                   ></Image>
//                 </Link>
//               </div>
//             </div>
//             <div className="grid col-span-1 mb-5 h-2/3">
//               <hr className="w-full bg-[#ffa01a]" />
//               <p className="text-white text-xs font-thin text-justify pt-5">
//                 Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota
//                 Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia{" "}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <p className="text-white text-center grid col-span-5 font-thin align-middle text-xs pt-0  lg:text-xs ">
//             © {year} Lembaga Jawi Indonesia - Javan Wildlife Institute (JAWI)
//           </p>
//         </div>
//         <p className="text-white pl-5 font-bold mb-0">Our Partners</p>
//         <div className="grid grid-cols-7 h-full gap-0 p-0 pl-5 px-10  mx-0">
//           <Image
//             className="flex col-span-1  mx-0 mt-2"
//             src="/Logo ISI Baru.png"
//             height={35}
//             width={35}
//             alt=""
//           ></Image>
//           <Image
//             src="/Logo TN Bukit Raya.png"
//             height={35}
//             width={35}
//             alt=""
//             className="flex col-span-1  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo_TN_Komodo (1).png"
//             height={35}
//             width={35}
//             alt=""
//             className="flex col-span-1  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/logo arupa.jpg"
//             height={24}
//             width={24}
//             alt=""
//             className="flex col-span-1  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo IPS.jpg"
//             height={35}
//             width={35}
//             alt=""
//             className="flex col-span-1  mx-0 mt-2"
//           ></Image>

//           <Image
//             src="/Logo RISTEK-BRIN.png"
//             height={35}
//             width={35}
//             alt=""
//             className="flex col-span-1 ]  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo UGM Baru.png"
//             height={35}
//             width={35}
//             alt=""
//             className="flex col-span-1  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo Temanggung Baru.png"
//             height={25}
//             width={25}
//             alt=""
//             className="flex col-span-1   mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo PBNF.png"
//             height={50}
//             width={50}
//             alt=""
//             className="flex col-span-2  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/Logo LFP.png"
//             height={80}
//             width={80}
//             alt=""
//             className="flex col-span-2 pt-2  mx-0 mt-2"
//           ></Image>
//           <Image
//             src="/international-elephant-project.png"
//             height={45}
//             width={80}
//             alt=""
//             className="flex col-span-2   mx-0 mt-2"
//           ></Image>
//         </div>
//       </Container>
//     </footer>
//   );
// }

import Container from "./container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="bg-black-700 text-white pt-10 pb-5">
      <Container>
        <div className="flex flex-col items-center">
          {/* <div className="mb-5">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </div> */}
          
          <div className="flex justify-center mb-5">
            <Link href="https://www.facebook.com" target="_blank">
              <Image src="/sosmed/fb w.png" alt="Facebook" width={40} height={40} className="mx-2" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Image src="/sosmed/link w.png" alt="LinkedIn" width={40} height={40} className="mx-2" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <Image src="/sosmed/ig w.png" alt="Instagram" width={40} height={40} className="mx-2" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <Image src="/sosmed/yt w.png" alt="YouTube" width={40} height={40} className="mx-2" />
            </Link>
          </div>
          
          <div className="text-center text-sm mb-5">
            <Link href="contact-us">
            <p className="px-5 pb-5">Contact Us</p>
            </Link>
            
            <p className="px-5 pt-0 my-0">© Lembaga Jawi Indonesia/ Javan Wildlife Institute (JAWI). All rights reserved.</p>
            
            <p className="px-5 ">Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia</p>
          </div>
          
          {/* <div className="text-center mb-5">
            <p>© {year} Kiara Indonesia. All rights reserved.</p>
            <p>Powered by WordPress & Designed by Bizberg Themes</p>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}

