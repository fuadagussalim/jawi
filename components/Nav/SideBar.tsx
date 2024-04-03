import Link from "next/link";
import { useRouter } from "next/router";
import { Image } from "@nextui-org/react";
import { Button } from "../Button";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid h-full align-baseline left-0 z-30"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <div className="h-1/4"></div>
        <ul className={"sidebar-nav text-center h-auto align-middle font-bold text-xl"}>
          <li className="m-5">
            <Link href="/">
              <span className={router.pathname === "/" ? "text-orange" : ""} onClick={toggle}>
                HOME
              </span>
            </Link>
          </li>
          <li className="m-5">
            <Link href="/services">
              <span className={router.pathname === "/services" ? "text-orange" : ""} onClick={toggle}>
                SERVICES
              </span>
            </Link>
          </li>
          <li className="m-5">
            <Link href="/portofolios">
              <span className={router.pathname === "/portofolios" ? "text-orange" : ""} onClick={toggle}>
                PORTOFOLIO
              </span>
            </Link>
          </li>
          <li className="m-5">
            <Link href="/about">
              <span className={router.pathname === "/about" ? "text-orange" : ""} onClick={toggle}>
                ABOUT
              </span>
            </Link>
          </li>
          <li className="m-5">
            <Link href="/about">
              <span className={router.pathname === "/about" ? "text-orange" : ""} onClick={toggle}>
                GALLERY
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <span className={router.pathname === "/contact-us" ? "text-orange" : ""} onClick={toggle}>
                CONTACT US
              </span>
            </Link>
          </li>
        </ul>
        <div className=" items-center w-full content-center text-center px-auto">
          <Button variant="orange" href="/blog" className="button mt-0 w-2/3 mx-auto bg-orange text-black hover:text-black rounded-none">
            MAGAZINE
          </Button>
          <div className="flex justify-center block-inline mt-10 gap-2">
            <Image src="/sosmed/fb b.png" height={40} width={40} alt="" className="mx-auto" />
            <Image src="/sosmed/link b.png" height={40} width={40} alt="" className="mx-auto" />
            <Image src="/sosmed/ig b.png" height={40} width={40} alt="" className="mx-auto" />
            <Image src="/sosmed/yt b.png" height={40} width={40} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
