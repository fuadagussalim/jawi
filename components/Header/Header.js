
import React, { useEffect, useState } from 'react';
import { NavLink } from '../Nav/NavLinks'
import Image from 'next/image';
import { Button } from '../Button';
import { MotionBTTContainer } from '../Motion';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTransparent(scrollPosition < 40);
  }, [scrollPosition]);

  const handleMouseEnter = (event) => {
    setTransparent(false);
  };

  const handleMouseLeave = (event) => {
    setTransparent(scrollPosition < 100);
  };
  // console.log(transparent)

  return (

    <header className={`header md:visible  pb-2 ${transparent ? 'transparent text-white' : 'solid text-black'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <nav className="hidden justify-evenly  md:flex items-baseline h-16 mb-5">
        <div className='inline-block content-center bg-white mr-10'>
          {/* <div className='inline-block'>
          </div> */}
          <Image
            src={"/LOGO-JAWI-PNG.png"}
            width={300}
            height={300}
            objectFit="cover"
            alt="Process Banner 1"
            className="inline-block drop-shadow-m w-20 p-5 pt-9 offset-t-10 offset-y-0 offset-x-8  blur-16 bg-white"
          />
        </div>



        <ul className={"navbar-nav  font-bold text-sm "}
        >
          <li>
            <Link href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/services">
              SERVICES
            </Link>
          </li>
          <li>

            <Link href="/portofolio">
              PORTOFOLIO
            </Link>
          </li>
          <li>

            <Link href="/blog">

              POSTS
            </Link>
          </li>
          <li>

            <Link href="/about">
              ABOUT
            </Link>
          </li>
          <li>



            <Link href="/about">
              GALLERY
            </Link>
          </li>
          <li>

            <Link href="/Contact Us">
              CONTACT US
            </Link>


          </li>
        </ul>



        <Button variant='orange' href="/blog" className='button w-25 text-sm bg-orange text-black hover:text-white rounded-none'>
          MAGAZINE
        </Button>
      </nav>



      
      {/* {menuOpen && <Menu />} */}
    </header>
  );
};

// function Menu() {
//   // Your code for the menu dropdown
//   // ...
//   return (
//   <ul className={" block  font-bold text-sm "}
//   >

//     <NavLink href="/">
//       HOME
//     </NavLink>


//     <NavLink href="/services">
//       SERVICES
//     </NavLink>

//     <NavLink href="/portofolio">
//       PORTOFOLIO
//     </NavLink>
//     <NavLink href="/blog">
//       POSTS
//     </NavLink>
//     <NavLink href="/about">
//       ABOUT
//     </NavLink>
//     <NavLink href="/about">
//       GALLERY
//     </NavLink>

//     <NavLink href="/Contact Us">
//       CONTACT US
//     </NavLink>


//   </ul>)
// }


