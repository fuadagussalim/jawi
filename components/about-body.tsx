import React from "react";
import styles from "./post-body.module.css";
import ImageWithWidth from "./ImageWithWidth";
import Team from "./Team/Team";
export default function AboutBody({ content, members }) {
  // Add this CSS to your stylesheet
  const figureStyles = {
    width: "100%",
    margin: "0 auto",
  };

  // // Wrap the figure in a div with the updated styles
  // const parsedContent = content.replace(
  //   /<figure [^>]*>/g,
  //   (match) => {
  //     return `<div style="${JSON.stringify(figureStyles).replace(/"/g, "'")}">${match}</div>`;
  //   }
  // );

  return (
      <div className=" md:p-10 mx-auto text-justify  md:px-48 lg:px-60 2xl:px-80">
      <div  className={`${styles.content} shadow-xl`}>

      <div
        className={`${styles.content}  px-10`}
        dangerouslySetInnerHTML={{ __html: content }}
        />
    <Team   memberData={members}/>
    </div>
        </div>
   
  );
}