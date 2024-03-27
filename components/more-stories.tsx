import PostPreview from "./post-preview";
import PostPreview3 from "./post-preview-3";
import React from "react";
export default function MoreStories({ posts }) {
  // posts.map(({ node }, index) => {
  //   console.log(node + " " +index);
  //   if (index%3==0){
  //          <PostPreview
  //              key={node.slug}
  //           title={node.title}
  //           coverImage={node.featuredImage}
  //           date={node.date}
  //           author={node.author}
  //           slug={node.slug}
  //           excerpt={node.excerpt}
  //         />
  //     // console.log("ini kelipatan 3")
  //   }
  // })


  return (
    <section className="mb-20">
      <h2 className="my-10 text-6xl md:text-7xl font-bold tracking-tighter">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-10 md:gap-y-10">
        {
         
            

        posts.map(({ node }, index) => (


          <React.Fragment key={node.slug}>
          {(index+1) % 3 === 0 ? (
            // {console.log(index)};
            <PostPreview3
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ) : (
            <PostPreview
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          )}
        </React.Fragment>
          // <PostPreview
          //      key={node.slug}
          //   title={node.title}
          //   coverImage={node.featuredImage}
          //   date={node.date}
          //   author={node.author}
          //   slug={node.slug}
          //   excerpt={node.excerpt}
          // />
          
        ))
        
        
        }
      </div>
    </section>
  );
}
