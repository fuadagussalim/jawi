import Head from "next/head";
import { useState, useEffect } from "react";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Footer from "../../components/footer";
import Layout from "../../components/layout";

import { getAllPostsForHome, getCategories } from "../../lib/api"; // Import the Post type if you have defined it
import "./blog.style.module.css";
import "./scroll.style.module.css";
import { Rubric } from "../../components/Nav/Rubric";
import CategoryNav from "../../components/Nav/CategoryNav";

// HorizontalScrollIndicator component to display horizontal scroll indicator

// HorizontalScrollIndicator component to display horizontal scroll indicator

export default function Index({
  allPosts,
  categories,
}: {
  allPosts;
  categories;
}) {
  const finalCategories = remapJSON(categories)?.data?.categories;

  console.log("teesss ccc", finalCategories);

  interface Category {
    name: string;
    children: string[];
  }

  const categoriesRemapped: Category[] = [];

  // Looping ngecek setiap node di finalCategories?.edges
  finalCategories?.edges.forEach((node) => {
    // Log setiap node
    console.log("Ini data dari node:", node);

    // Inisialisasi array buat simpen nama-nama anak
    const childrenStr: string[] = [];

    // Looping setiap anak dan nge-push nama anaknya ke array childrenStr
    node.node.children.nodes?.forEach((childNode) => {
      childrenStr.push(childNode.name);
    });

    // Nge-push data kategori yang udah di-remap ke array categoriesRemapped
    categoriesRemapped.push({
      name: node.node.name,
      children: childrenStr,
    });
  });

  //ngurutin berdasar children
  categoriesRemapped.sort((a, b) => b.children.length - a.children.length);
  // Nah, di sini categoriesRemapped bakal berisi data kategori yang udah diremap
  console.log("kategori finalll cuyy", categoriesRemapped);

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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 672) {
        setIsSticky(true);
        console.log("nilai scroll y", window.scrollY);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("sticky", isSticky);
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
      <Container classNames="tracking-widest  mx-auto items-center w-full">
        {/* Category Navigation */}

        <div className="grid grid-cols-2 bg-white items-center  sticky z-30 lg:px-40 top-8 pb-2 md:top-14 mx-10 md:mx-0">
          <h2 className="grid sm col-span-2 mx-auto md:mx-0 md:col-span-1 sm:my-5  text-left md:px-0 md:my-10 text-xl md:text-7xl font-bold tracking-tighter">
            More Stories
          </h2>
          <div
            className={`grid sm:col-span-2 md:col-span-1 sticky top-20 w-full  ${""}`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="px-3 md:px-5 py-4 md:py-3 md:font-semibold mx-1 sm:rounded-0 focus:outline-none focus:outline-orange bg-gray-200 text-gray-700 sm:text-xs md:text-3xl"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <CategoryNav
            handleCategoryClick={handleCategoryFilter}
            filteredCategory={filteredCategory}
            className={"grid col-span-2"}
            categories={categoriesRemapped}
          />
        </div>
        <div>
          {/* <div className="flex sm:mx-10 md:mx-0 lg:px-40 ">
            <h4 className="text-xs md:text-xl mb-2 sm:mx-2 sm:mt-5 md:mx-0  font-bold">
              Categories:{" "}
            </h4>
          </div>
          <div className="lg:px-40 button-container sm:mx-10 md:mx-0 md:justify-center items-center mx-0 pb-5 sm:px-2  ">
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
          </div> */}
          <div className="pl-2 drop-shadow-xl lg:px-40 ">
            {/* <Rubric /> */}

            {/* Render paginated posts */}
            <MoreStories
              posts={paginatedPosts}
              handleCategoryClick={handleCategoryFilter}
            />
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPosts.length / pageSize)}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </Layout>
  );
}

// Function to get unique categories from all posts
const getUniqueCategories = (allPosts) => {
  const categoriesSet = new Set<string>();
  allPosts.forEach((post) => {
    post.categories.edges.forEach((edge) => {
      console.log("categori cuy", edge.node.children.nodes);
      categoriesSet.add(edge.node.name);
    });
  });
  return Array.from(categoriesSet);
};

export const getStaticProps = async () => {
  const categories = await getCategories();
  const allPostsResponse = await getAllPostsForHome(false);
  const allPosts = allPostsResponse?.edges?.map(({ node }) => node) || []; // Extract nodes from edges
  // console.log("tesss:", categories)
  return {
    props: {
      allPosts,
      categories,
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

function remapJSON(originalJson) {
  const parents = new Set();

  // Traverse the original JSON to collect parent names
  originalJson.edges.forEach((edge) => {
    const nodeName = edge.node.name;
    if (edge.node.children && edge.node.children.nodes.length > 0) {
      edge.node.children.nodes.forEach((child) => {
        const childName = child.name;
        parents.add(childName);
      });
    }
  });

  // Filter out the nodes that are not listed as parents elsewhere
  const filteredNodes = originalJson.edges.filter((edge) => {
    const nodeName = edge.node.name;
    return !parents.has(nodeName);
  });

  // Construct the remapped JSON
  const remappedJson = {
    data: {
      categories: {
        edges: filteredNodes,
      },
    },
  };

  // Print the remapped JSON
  console.log("remap JSON", JSON.stringify(remappedJson, null, 2));
  return remappedJson;
}
