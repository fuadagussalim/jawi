import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";
// import {  } from "flowbite-react";

export const SimpleNav = () => {
  const menuItems = [
    { text: "Home", href: "/", children: [] },
    { text: "Portfolios", href: "/port0folios", children: [] },
    { text: "Services", href: "/services", children: [] },
    {
      text: "About",
      href: "/about",
      children: [
        { text: "Our Story", href: "/about#our-story" },
        { text: "Team", href: "/about#team" },
      ],
    },
    { text: "Gallery", href: "/gallery", children: [] },
    { text: "Contact", href: "/contact", children: [] },
  ];

  return (
    <Navbar className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {menuItems.map((menuItem) =>
          menuItem.children.length > 0 ? (
            <Dropdown label={menuItem.text} key={menuItem.text}>
              {menuItem.children.map((child) => (
                <Dropdown.Item key={child.text}>
                  <Link href={child.href}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {child.text}
                 
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown>
          ) : (
            <Link
              href={menuItem.href}
              key={menuItem.text}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {menuItem.text}
            </Link>
          )
        )}
      </div>
    </Navbar>
  );
};
