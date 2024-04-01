import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "./Section";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black border-t border-accent-2  pb-10">
      <Container classNames="hidden md:block">
        <div className="grid md:grid-cols-3 grid-rows-5">
        
          <div className="grid container col-span-1 ml-10 row-span-6">
          <div className='inline-block content-top'>
          {/* <div className='inline-block'>
          </div> */}
          <Image
            src={"/LOGO-JAWI-PNG.png"}
            width={300}
            height={300}
            objectFit="cover"
            alt="Process Banner 1"
            className="inline-block drop-shadow-m w-[90px] p-4 pt-7 offset-t-10 offset-y-0 offset-x-8  blur-16 bg-white"
          />
        </div>


            <p className="text-white font-thin my-0">

              © {year} Lembaga Jawi Indonesia
              <br />
             
             Javan Wildlife Institute (JAWI)
              <span className="font-normal">
                {" "}
                <Link
                  className="transition-colors duration-300 hover:underline"
                  href="https://jawi.or.id"
                  target="_blank"
                >

                </Link>
              </span>
            </p>
          </div>
          <div className="grid row-span-1">2</div>
          <div className="grid row-span-1 md:mt-5 md:ml-0 lg:ml-10 text-white mx-0">Our Partners</div>

         

          <div className="grid col-span-1 max-w-xs lg:px-10 row-span-5">

        
          <div className="grid md:grid-cols-2 w-autoh-1/3 col-span-1 mb-4 row-span-2">
            <div className="items-bottom">

            <p className="text-white grid font-thin  mr-auto h-full col-span-1 items-end flex items-center">Social Media</p>
            </div>
            <div className="grid justify-evenly col-span-1 gap-0 w-auto  md:items-center md:grid-cols-4">
              <Image
                className="flex col-span-1  mx-auto"
                src="/sosmed/fb w.png"
                height={25}
                width={25}
                alt="">

              </Image>
              <Image
                src="/sosmed/link w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
              <Image
                src="/sosmed/ig w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
              <Image
                src="/sosmed/yt w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>

            </div>
        


          </div>
            <div className="grid col-span-1 h-2/3">
            <hr className="w-full bg-[#ffa01a]" />
            <p className="text-white text-xs font-thin text-justify pt-5">Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta,
Indonesia</p>

            </div>
          </div>

          <div className="grid col-span-1 p-0 mx-auto">
          {/* <p className="text-white ">Our Partners</p> */}
          <div className="grid grid-cols-7 h-[35px] gap-0 p-0 mx-0">
          <Image
                className="flex col-span-1  mx-0 mt-2"
                src="/Logo ISI Baru.png"
                height={35*1.5}
                width={35*1.5}
                alt="">

              </Image>
              <Image
                src="/Logo TN Bukit Raya.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo_TN_Komodo (1).png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/logo arupa.jpg"
                height={24*1.5}
                width={24*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo IPS.jpg"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
             
              <Image
                src="/Logo RISTEK-BRIN.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1 ]  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo UGM Baru.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo Temanggung Baru.png"
                height={25*1.5}
                width={25*1.5}
                alt=""
                className="flex col-span-1   mx-0 mt-2">

              </Image>
              <Image
                src="/Logo PBNF.png"
                height={50*1.5}
                width={50*1.5}
                alt=""
                className="flex col-span-2  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo LFP.png"
                height={80*1.5}
                width={80*1.5}
                alt=""
                className="flex col-span-2 pt-2  mx-0 mt-2">

              </Image>
               <Image
                src="/international-elephant-project.png"
                height={45*1.5}
                width={80*1.5}
                alt=""
                className="flex col-span-2   mx-0 mt-2">

              </Image>

          </div>
          

          </div>
        </div>
      </Container>
      <Container classNames="md:hidden">
      {/* <div className="p-10 pt-0">
      <div className="grid grid-cols-4">
      <div className='inline-block grid col-span-1 content-center bg-white'>
        
          <Image
            src={"/LOGO-JAWI-PNG.png"}
            width={400}
            height={400}
            objectFit="cover"
            alt="Process Banner 1"
            className="inline-block drop-shadow-m w-20 p-2 pt-6 offset-t-10 offset-y-0 offset-x-8  blur-16 bg-white"
          />
        </div>

        <div className="grid col-span-3 grid-cols-3">
        <div className="grid grid-cols-2 mt-5 w-auto h-1/3 col-span-1 mb-4 pt-5 row-span-5">
       
       <p className="text-white grid font-light align-middle mr-auto h-full col-span-1 flex items-center">Social Media</p>
       <div className="grid  col-span-1 gap-0 w-auto  items-end grid-cols-4">
         <Link href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"} target="_blank">
         <Image
           className="flex col-span-1  mx-auto"
           src="/sosmed/fb w.png"
           height={25}
           width={25}
           alt="">
         </Image>
         </Link>
         <Link href={"https://id.linkedin.com/company/javan-wildlife-institute"} target="_blank">
         <Image
           src="/sosmed/link w.png"
           height={25}
           width={25}
           alt=""
           className="flex col-span-1  mx-auto">

         </Image>
         </Link>
         <Link href={"https://www.instagram.com/javanwildlife/?hl=en"} target="_blank">
         <Image
           src="/sosmed/ig w.png"
           height={25}
           width={25}
           alt=""
           className="flex col-span-1  mx-auto">

         </Image>
             </Link>
         <Link href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"} target="_blank">
         <Image
           src="/sosmed/yt w.png"
           height={25}
           width={25}
           alt=""
           className="flex col-span-1  mx-auto">

         </Image>
             </Link>

       </div>
       </div>

       
  
       <div className="grid col-span-1 mb-5 h-2/3">
       <hr className="w-full bg-[#ffa01a]" />
       <p className="text-white text-xs font-thin text-justify pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?</p>

       </div>

        </div>
        <p className="text-white text-center grid col-span-3 font-thin align-middle pt-5 pl-2 text-xl mt-10">
              © {year} Lembaga Jawi Indonesia
              <br />
              Javan Wildlife Institute (JAWI)
        </p>

        </div>
        
        <p className="text-white mb-0 font-bold" >Our Partners</p>


        <div className="grid grid-cols-7 h-[35px] gap-0 p-0 mb-5 mx-0">
          <Image
                className="flex col-span-1  mx-0 mt-2"
                src="/Logo ISI Baru.png"
                height={35*1.5}
                width={35*1.5}
                alt="">

              </Image>
              <Image
                src="/Logo TN Bukit Raya.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo_TN_Komodo (1).png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/logo arupa.jpg"
                height={24*1.5}
                width={24*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo IPS.jpg"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
             
              <Image
                src="/Logo RISTEK-BRIN.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1 ]  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo UGM Baru.png"
                height={35*1.5}
                width={35*1.5}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo Temanggung Baru.png"
                height={25*1.5}
                width={25*1.5}
                alt=""
                className="flex col-span-1   mx-0 mt-2">

              </Image>
              <Image
                src="/Logo PBNF.png"
                height={50*1.5}
                width={50*1.5}
                alt=""
                className="flex col-span-2  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo LFP.png"
                height={80*1.5}
                width={80*1.5}
                alt=""
                className="flex col-span-2 pt-2  mx-0 mt-2">

              </Image>
               <Image
                src="/international-elephant-project.png"
                height={45*1.5}
                width={80*1.5}
                alt=""
                className="flex col-span-2   mx-0 mt-2">

              </Image>

          </div>

            
     


         
          </div> */}
      <div className="grid grid-cols-5">
            <div className="grid col-span-2">
              <div>
              <Image
            src={"/LOGO-JAWI-PNG.png"}
            width={400}
            height={400}
            objectFit="cover"
            alt="Process Banner 1"
            className="inline-block drop-shadow-m w-[128px] p-2 ml-5 pt-6 offset-t-10 offset-y-0 offset-x-8  blur-16 bg-white"
            />
            </div>
            </div>
      
            <div className="grid col-span-3 mr-5">
            <div className="grid grid-cols-2 mt-1 w-auto h-1/3 col-span-1 mb-4 pt-2 row-span-5">
              <p className="text-white grid font-light align-middle text-xs mr-auto h-full col-span-1 flex items-center">Social Media: </p>
            <div className="grid  col-span-1 gap-1 w-auto  items-end grid-cols-4">
              <Link href={"https://web.facebook.com/jawi.or.id/?_rdc=1&_rdr"} target="_blank">
              <Image
                className="flex col-span-1  mx-auto"
                src="/sosmed/fb w.png"
                height={25}
                width={25}
                alt="">
              </Image>
              </Link>
              <Link href={"https://id.linkedin.com/company/javan-wildlife-institute"} target="_blank">
              <Image
                src="/sosmed/link w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
              </Link>
              <Link href={"https://www.instagram.com/javanwildlife/?hl=en"} target="_blank">
              <Image
                src="/sosmed/ig w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>
              <Link href={"https://youtu.be/LBCGzeuQkHc?si=4yTUEFNJuX5IRprv"} target="_blank">
              <Image
                src="/sosmed/yt w.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1  mx-auto">

              </Image>
                  </Link>

            </div>
            </div>
            <div className="grid col-span-1 mb-5 h-2/3">
            <hr className="w-full bg-[#ffa01a]" />
            <p className="text-white text-xs font-thin text-justify pt-5">Gedongkiwo MJ.I/848 RT.47/RW10, Kecamatan Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta,
Indonesia </p>

            </div>

          </div>
        </div>

        <div>
        <p className="text-white text-left grid col-span-3 font-thin align-middle w-[150px] pt-0 pl-5 text-xs ">
              © {year} Lembaga Jawi 
              <br/>
              Indonesia - 
              Javan Wildlife 
              <br/>
              Institute (JAWI)
        </p>
        </div>
        <p className="text-white pl-5 font-bold mb-0">Our Partners</p>
        <div className="grid grid-cols-7 h-full gap-0 p-0 pl-5 px-10  mx-0">
          <Image
                className="flex col-span-1  mx-0 mt-2"
                src="/Logo ISI Baru.png"
                height={35}
                width={35}
                alt="">

              </Image>
              <Image
                src="/Logo TN Bukit Raya.png"
                height={35}
                width={35}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo_TN_Komodo (1).png"
                height={35}
                width={35}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/logo arupa.jpg"
                height={24}
                width={24}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo IPS.jpg"
                height={35}
                width={35}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
             
              <Image
                src="/Logo RISTEK-BRIN.png"
                height={35}
                width={35}
                alt=""
                className="flex col-span-1 ]  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo UGM Baru.png"
                height={35}
                width={35}
                alt=""
                className="flex col-span-1  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo Temanggung Baru.png"
                height={25}
                width={25}
                alt=""
                className="flex col-span-1   mx-0 mt-2">

              </Image>
              <Image
                src="/Logo PBNF.png"
                height={50}
                width={50}
                alt=""
                className="flex col-span-2  mx-0 mt-2">

              </Image>
              <Image
                src="/Logo LFP.png"
                height={80}
                width={80}
                alt=""
                className="flex col-span-2 pt-2  mx-0 mt-2">

              </Image>
               <Image
                src="/international-elephant-project.png"
                height={45}
                width={80}
                alt=""
                className="flex col-span-2   mx-0 mt-2">

              </Image>

          </div>

    

      </Container>
    </footer>
  );
}
