"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "../../lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../Nav/NavMenuDesktop"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuCustom() {
  return (
    <NavigationMenu className="font-bold">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-orange`}>
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-orange`}>
              SERVICES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/portofolios" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-orange`}>
              PORTOFOLIO
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-orange`}>
              GALLERY
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>

          <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} hover:text-orange`}>ABOUT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"bg-white p-5  pr-10 trackin-wide font-light  w-[170px]  font-bold text-sm  "}
            >
              {/* <li className ="m-2 tracking-wide ml-3 font-NORMAL hover:text-orange">
                <Link href="/about#programs">
                  PROGRAM
                </Link>
                
              </li> */}
              <li className ="m-2 tracking-wide ml-3 font-NORMAL hover:text-orange">
                <Link href="/about#our-story">
                  OUR STORY
                </Link>
                
              </li>
              {/* <li className ="m-2 tracking-wide ml-3 font-NORMAL hover:text-orange">

                <Link href="/about#mission">
                  MISSION
                  
                </Link>
              </li> */}

              <li className ="m-2 tracking-wide ml-3 font-NORMAL hover:text-orange">

                <Link href="/about#team">
                  TEAM
                  
                </Link>
              </li>

            </ul>


          </NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-orange`}>
              CONTACT US
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
