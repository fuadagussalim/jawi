import Head from "next/head";
import { useState, useEffect } from "react";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Layout from "../../components/layout";
import { getAllPostsForHome, getCategories } from "../../lib/api";
import CategoryNav from "../../components/Nav/CategoryNav";
import "./blog.style.module.css";
import "./scroll.style.module.css";

export default function Index({ allPosts, categories }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;

  useEffect(() => {
    handleCategoryFilter("all");
  }, []);

  const finalCategories = remapJSON(categories)?.data?.categories;

  const categoriesRemapped = finalCategories?.edges.map((node) => {
    return {
      name: node.node.name,
      children: node.node.children.nodes.map((childNode) => childNode.name),
    };
  }).sort((a, b) => b.children.length - a.children.length);

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category);

    const filtered = category === "all"
      ? allPosts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
      : allPosts.filter((post) =>
          post.categories.edges.some((edge) => edge.node.name === category)
        );

    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = value
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      : allPosts;
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Layout preview={false}>
      <Head>
        <title>JAWI | Javan Wildlife</title>
      </Head>

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
      <Container classNames="tracking-widest mx-auto items-center w-full">
        <div className="grid grid-cols-2 bg-white items-center sticky z-20 lg:px-40 top-8 pb-2 md:top-14 mx-10 md:mx-0">
          <h2 className="grid col-span-2 mx-auto md:mx-0 md:col-span-1 sm:my-5 md:my-0 md:mb-0 text-left md:px-0 text-xl md:text-4xl font-bold tracking-tighter">
            More Stories
          </h2>
          <div className="grid sm:col-span-2 md:col-span-1 md:my-10 sticky top-20 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 md:px-5 py-4 md:py-3 md:font-semibold mx-1 sm:rounded-0 focus:outline-none focus:outline-orange bg-gray-200 text-gray-700 sm:text-xs md:text-base"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <CategoryNav
            handleCategoryClick={handleCategoryFilter}
            filteredCategory={filteredCategory}
            className="grid col-span-2"
            categories={categoriesRemapped}
          />
        </div>
        <div className="pl-2 drop-shadow-xl lg:px-40">
          <MoreStories posts={paginatedPosts} handleCategoryClick={handleCategoryFilter} />
        </div>
        {filteredCategory !== "all" && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPosts.length / pageSize)}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </Layout>
  );
}

// Function to get unique categories from all posts
const getUniqueCategories = (allPosts) => {
  const categoriesSet = new Set();
  allPosts.forEach((post) => {
    post.categories.edges.forEach((edge) => {
      categoriesSet.add(edge.node.name);
    });
  });
  return Array.from(categoriesSet);
};

export const getStaticProps = async () => {
  const categories = await getCategories();
  const allPostsResponse = await getAllPostsForHome(false);
  const allPosts = allPostsResponse?.edges?.map(({ node }) => node) || [];
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

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center mt-4 mb-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-3 py-1 mx-1 rounded-md ${pageNumber === currentPage ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"}`}
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
  originalJson.edges.forEach((edge) => {
    const nodeName = edge.node.name;
    if (edge.node.children && edge.node.children.nodes.length > 0) {
      edge.node.children.nodes.forEach((child) => {
        parents.add(child.name);
      });
    }
  });

  const filteredNodes = originalJson.edges.filter((edge) => {
    const nodeName = edge.node.name;
    return !parents.has(nodeName);
  });

  const remappedJson = {
    data: {
      categories: {
        edges: filteredNodes,
      },
    },
  };

  return remappedJson;
}
