'use client'

// import React, { useEffect, useState } from 'react';
import { NavLink } from '../Nav/NavLinks'
import {Image} from "@nextui-org/react"
import { Button } from '../Button';
import { MotionBTTContainer } from '../Motion';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Sidebar from '../Nav/SideBar';





import styles from '../Headermobile/style.module.scss'
import { useEffect, useState } from 'react';
import Nav from '../Headermobile/nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import HeaderMobile from "../Headermobile/nav"
export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);


  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };


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

    <header className={`header  md:visible shadow-lg pb-20 md:pb-0 ${transparent ? 'md:transparent text-white' : 'solid text-black'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
            className="inline-block drop-shadow-m w-[90px] p-4 pt-4 offset-t-10 offset-y-0 offset-x-8  blur-16 bg-white"
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

            <Link href="/portofolios">
              PORTOFOLIO
            </Link>
          </li>
          {/* <li>

            <Link href="/blog">

              POSTS
            </Link>
          </li> */}
          <li>

            <Link href="/about">
              ABOUT
            </Link>
          </li>
          <li>



            <Link href="/gallery">
              GALLERY
            </Link>
          </li>
          <li>

            <Link href="/contact-us">
              CONTACT US
            </Link>


          </li>
        </ul>



        <Button variant='orange' href="/blog" className='button w-25 text-sm bg-orange text-black hover:text-white rounded-none'>
          MAGAZINE
        </Button>

      </nav>
      {/* <nav className='flex bg-transparent md:hidden '>
        <NavBar toggle={toggle}/>

        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <MenuComponent></MenuComponent>

      </nav> */}

      {/* <>

        <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>

          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

        </div>

      </> */}

<div className='md:hidden'>
    <div className={styles.main}>

      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""} ${transparent ? styles.burgerTransparent: ''}`}></div>
        </div>
      </div>

    </div >
    <AnimatePresence mode="wait">
      {isActive && <Sidebar isOpen={isActive}/>}
    </AnimatePresence>
    </div>







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


