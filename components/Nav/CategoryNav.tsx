import React from "react";
import Link from "next/link";
import { Dropdown, Navbar } from "flowbite-react";

const CategoryNav = ({
  categories,
  className,
  handleCategoryClick,
  filteredCategory,
}) => {
  return (
    <Navbar
      fluid
      rounded={false}
      className={`${className} md:my-0 bg-white mt-0 py-0  dark:bg-gray-900`}
    >
     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <Navbar.Brand className="md:hidden" href="">
    <span className="self-center whitespace-nowrap md:mb-5 text-xl font-semibold dark:text-white">
      Categories
    </span>
  </Navbar.Brand>
  <div className="flex ml-5 md:ml-0 md:order-2">
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse className="md:w-full flex-grow md:flex md:items-center md:justify-end">
    <Navbar.Link className="md:flex md:items-center md:ml-auto md:mr-0 md:order-2">
      <button
        className={`mx-0 px-3 py-2 my-2 sm:rounded-0 text-gray-700 sm:text-base md:text-xl ${
          filteredCategory === "all" ? "bg-orange text-white ml-3 md:ml-0" : ""
        }`}
        onClick={() => handleCategoryClick("all")}
      >
        All
      </button>
    </Navbar.Link>
    {categories
      .filter((categoryItem) => categoryItem.name !== "Uncategorized")
      .map((categoryItem) =>
        categoryItem.children.length > 0 ? (
          <>
            <div className="ml-3 my-5 px-3">
              <Dropdown
                label={categoryItem.name}
                inline
                key={categoryItem.name}
                className="block flex-none ml-2 pl-3 pr-4 md:p-0 text-gray-700 border-0 hover:bg-gray-50  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                {categoryItem.children.map((child) => (
                  <Dropdown.Item key={child} className="mx-0">
                    <Navbar.Link className="">
                      <button
                        key={child}
                        onClick={() => handleCategoryClick(child)}
                        className={`py-1 md:px-2 mx-1  sm:rounded-0 text-gray-700 sm:text-xs md:text-base ${
                          filteredCategory === `${child}` ? "bg-orange text-white ml-3 md:ml-0" : ""
                        }`}
                      >
                        {child}
                      </button>
                    </Navbar.Link>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
            <hr />
          </>
        ) : (
          <Navbar.Link className="" key={categoryItem.name}>
            <button
              onClick={() => handleCategoryClick(categoryItem.name)}
              className={`px-3 md:px-1  2xl:px-3 py-2 my-2 sm:rounded-0 text-gray-700 sm:text-base md:text-base ${
                filteredCategory === `${categoryItem.name}` ? "bg-orange text-white ml-3 md:ml-0" : ""
              }`}
            >
              {categoryItem.name}
            </button>
          </Navbar.Link>
        )
      )}
  </Navbar.Collapse>
</div>

    </Navbar>
  );
};

export default CategoryNav;
