import Head from "next/head";
import { useState, useEffect } from "react";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer";
import Layout from "../../components/layout";

import { getAllPostsForHome } from "../../lib/api"; // Import the Post type if you have defined it
import "./blog.style.module.css";
import "./scroll.style.module.css";

// HorizontalScrollIndicator component to display horizontal scroll indicator

// HorizontalScrollIndicator component to display horizontal scroll indicator

export default function Index({ allPosts }: { allPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [filteredCategory, setFilteredCategory] = useState("all"); // Define filteredCategory state
  const pageSize = 10; // Number of posts per page
  const [searchTerm, setSearchTerm] = useState("");

  const startIndex = (currentPage - 1) * pageSize; // Calculate the start index of the posts for the current page
  const endIndex = currentPage * pageSize; // Calculate the end index of the posts for the current page
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex); // Get the posts for the current page

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryFilter = (category) => {
    // Set the filtered category
    setFilteredCategory(category);
    // Filter posts based on the selected category
    const filtered =
      category === "all"
        ? allPosts
        : allPosts.filter((post) =>
            post.categories.edges.some((edge) => edge.node.name === category)
          );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to the first page when category changes
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    const filtered = value
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      : allPosts;
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  return (
    <Layout preview={false}>
      <Head>
        <title>JAWI | Javan Wildlife</title>
      </Head>
  
      {/* <div className="mt-10"> */}

      {/* </div> */}
      {allPosts.length > 0 && (
        <HeroPost
          title={allPosts[0].title}
          coverImage={allPosts[0].featuredImage}
          date={allPosts[0].date}
          author={allPosts[0].author}
          slug={allPosts[0].slug}
          excerpt={allPosts[0].excerpt}
        />
      )}
      <Container classNames="tracking-widest lg:px-40 mx-auto items-center w-full">
        {/* Category Navigation */}
          
        <div className="grid grid-cols-2   items-center  mx-10 md:mx-0">
          <h2 className="grid sm col-span-2 mx-auto md:mx-0 md:col-span-1 sm:my-5  text-left md:px-0 md:my-10 text-xl md:text-7xl font-bold tracking-tighter">
            More Stories
          </h2>
          <div className="grid sm:col-span-2 md:col-span-1 w-full ">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 md:px-5 py-4 md:py-3 md:font-semibold mx-1 sm:rounded-0  focus:outline-none focus:outline-orange  bg-gray-200 text-gray-700 sm:text-xs md:text-3xl"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex sm:mx-10 md:mx-0  ">
 
        <h4 className="text-xs md:text-xl mb-2 sm:mx-2 sm:mt-5 md:mx-0  font-bold">Categories: </h4>
         </div>
          <div className="button-container sm:mx-10 md:mx-0 md:justify-center items-center mx-0 pb-5 sm:px-2  ">
            <button
              className={`px-3 drop-shawdow-xl py-1 mx-1 my-2  sm:rounded-0 md:rounded-md bg-gray-200 text-gray-700 sm:text-xs md:text-xl ${
                filteredCategory === "all" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => handleCategoryFilter("all")}
            >
              All
            </button>
            {getUniqueCategories(allPosts).map((category) => (
              <button
                key={category}
                className={`px-3 drop-shawdow-xl py-1 mx-1 my-2 sm:rounded-0 md:rounded-md bg-gray-200 text-gray-700 sm:text-xs md:text-xl ${
                  filteredCategory === category ? "bg-gray-800 text-white" : ""
                }`}
                onClick={() => handleCategoryFilter(category)}
                style={{ maxWidth: "250px", whiteSpace: "nowrap" }}
              >
                {category}
              </button>
            ))}
          </div>
         <div className="pl-2 droop-shadow-xl">

         </div>
             
    
        {/* Render paginated posts */}
        <MoreStories
          posts={paginatedPosts}
          handleCategoryClick={handleCategoryFilter}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredPosts.length / pageSize)}
          onPageChange={handlePageChange}
        />
      </Container>
    </Layout>
  );
}

// Function to get unique categories from all posts
const getUniqueCategories = (allPosts) => {
  const categoriesSet = new Set<string>();
  allPosts.forEach((post) => {
    post.categories.edges.forEach((edge) => {
      categoriesSet.add(edge.node.name);
    });
  });
  return Array.from(categoriesSet);
};

export const getStaticProps = async () => {
  const allPostsResponse = await getAllPostsForHome(false);
  const allPosts = allPostsResponse?.edges?.map(({ node }) => node) || []; // Extract nodes from edges

  return {
    props: {
      allPosts,
    },
  };
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4 mb-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-3 py-1 mx-1 rounded-md ${
            pageNumber === currentPage
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
