import PostPreview from "./post-preview";
import PostPreview3 from "./post-preview-3";
import React from "react";

export default function MoreStories({ posts, handleCategoryClick  }) {
  //   const handleCategoryClick = (category) => {
  //   // Implement logic to filter posts based on category
  //   console.log(`Filter posts by category: ${category}`);
  // };
  
  console.log("post cukk", posts);
  console.log("date cukk", posts[0].date);

  return (
    <section className="mb-20  sm:p-10 md:p-0 sm:py-0">
    
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-5 gap-y-10 md:gap-y-10">
        {posts.map((node, index) => (
          <React.Fragment key={node.slug}>
            {(index + 1) % 3 === 0 ? (
              <PostPreview3
                title={(node?.title)? node.title : "Judul Kosong"}
                coverImage={(node.featuredImage)?node.featuredImage.node.sourceUrl:"/nullimage.jpg"} //"/nullimage.jpg"
                date={(node.date)?node.date: "2023-03-30T12:52:22"}//2023-03-30T12:52:22
                author={(node.author)?node.author:"Author tidak ada"}
                slug={`/posts/${(node.slug)?node.slug:"slug-null"}`}
                excerpt={(node.excerpt)?node.excerpt:"Excerpt tidak ada"}
                categories={(node.categories.edges)?node.categories.edges: []}
                handleCategoryClick={handleCategoryClick} 
              />
            ) : (
              <PostPreview
                title={(node?.title)? node.title : "Judul Kosong"}
                coverImage={(node.featuredImage)?node.featuredImage.node.sourceUrl:"/nullimage.jpg"} //"/nullimage.jpg"
                date={(node.date)?node.date: "2023-03-30T12:52:22"}//2023-03-30T12:52:22
                author={(node.author)?node.author:"Author tidak ada"}
                slug={`/posts/${(node.slug)?node.slug:"slug-null"}`}
                excerpt={(node.excerpt)?node.excerpt:"Excerpt tidak ada"}
                categories={(node.categories.edges)?node.categories.edges: []}
                handleCategoryClick={handleCategoryClick} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
