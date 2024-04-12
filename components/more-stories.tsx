import PostPreview from "./post-preview";
import PostPreview3 from "./post-preview-3";
import React from "react";

export default function MoreStories({ posts, handleCategoryClick  }) {
  //   const handleCategoryClick = (category) => {
  //   // Implement logic to filter posts based on category
  //   console.log(`Filter posts by category: ${category}`);
  // };
  console.log("post cukk", posts);

  return (
    <section className="mb-20  sm:p-10 md:p-0 sm:py-0">
    
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-5 gap-y-10 md:gap-y-10">
        {posts.map((node, index) => (
          <React.Fragment key={node.slug}>
            {(index + 1) % 3 === 0 ? (
              <PostPreview3
                title={node.title}
                coverImage={node.featuredImage?.node.sourceUrl}
                date={node.date}
                author={node.author}
                slug={`/posts/${node.slug}`}
                excerpt={node.excerpt}
                categories={node.categories.edges}
                handleCategoryClick={handleCategoryClick} 
              />
            ) : (
              <PostPreview
                title={node.title}
                coverImage={node.featuredImage?.node.sourceUrl}
                date={node.date}
                author={node.author}
                slug={`/posts/${node.slug}`}
                excerpt={node.excerpt}
                categories={node.categories.edges}
                handleCategoryClick={handleCategoryClick} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
