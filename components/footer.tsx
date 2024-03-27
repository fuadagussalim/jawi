import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "./Section";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black border-t border-accent-2 pt-20 pb-10">
      <Container>
        <div className="grid md:grid-cols-3 grid-rows-5">
          <div className="grid row-span-1">1</div>
          <div className="grid row-span-1">2</div>
          <div className="grid row-span-1 text-white lg:ml-5 mx-0">Our Partners</div>

          <div className="grid container col-span-1 row-span-5">
            <Link href="/" className="grid pt-0">
              <Image
                src="/Logo Jawi Stroke Putih.png"
                alt="logo"
                className="h-20 w-auto"
                height="100"
                width="300"
                priority
              />
            </Link>


            <p className="text-white my-0">
              © {year} Javan WIldlife Insrirute (JAWI)
              <span className="font-normal">
                {" "}
                <Link
                  className="transition-colors duration-300 hover:underline"
                  href="https://chrstnl.com"
                  target="_blank"
                >

                </Link>
              </span>
            </p>
          </div>

          <div className="grid col-span-1 max-w-xs lg:px-10 row-span-5">

        
          <div className="grid md:grid-cols-2 w-auto h-1/3 col-span-1 mb-4 row-span-5">
            <p className="text-white grid font-thin align-middle mr-auto h-full col-span-1 flex items-center">Social Media</p>
            <div className="grid justify-evenly col-span-1 gap-0 w-auto  items-end md:grid-cols-4">
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
            <p className="text-white text-xs font-thin text-justify pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?</p>

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
    </footer>
  );
}
