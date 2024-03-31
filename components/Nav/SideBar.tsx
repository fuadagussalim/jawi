import Link from "next/link";
import {Image} from "@nextui-org/react"
const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        {/* <button className="absolute right-0 p-5" onClick={toggle}> */}
        {/* Close icon */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>

        </button> */}
        
   <ul className={"sidebar-nav text-center   font-bold text-xl "}
        >
          <li className="m-5">
            <Link className="my-auto mb-10"  onClick={toggle} href="/">
              HOME
            </Link>
          </li>
          <li className="m-5">
            <Link className="my-auto " onClick={toggle} href="/services">
              SERVICES
            </Link>
          </li>
          <li className="m-5">

            <Link className="my-auto " onClick={toggle} href="/portofolios">
              PORTOFOLIO
            </Link>
          </li>
          <li className="m-5">

            <Link className="my-auto " onClick={toggle} href="/blog">

              POSTS
            </Link>
          </li>
          <li className="m-5">

            <Link className="my-auto " onClick={toggle} href="/about">
              ABOUT
            </Link>
          </li>
          <li className="m-5">



            <Link className="my-auto " onClick={toggle} href="/about">
              GALLERY
            </Link>
          </li>
          <li>

            <Link className="my-auto " onClick={toggle} href="/Contact Us">
              CONTACT US
            </Link>


          </li>
        </ul>
        
      </div>
      <div>
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
            <p className="text-black text-xs font-thin text-justify pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia enim inventore autem maxime veniam consequuntur alias architecto quas. Temporibus nobis error rem vero incidunt, nemo ad unde quidem ut?</p>

            </div>
          </div>
      

    </>
  );
};

export default Sidebar;