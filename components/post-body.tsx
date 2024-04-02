import React from "react";
import styles from "./post-body.module.css";
import ImageWithWidth from "../components/ImageWithWidth";

export default function PostBody({ content }) {
  console.log("tipe", content);
  // Add this CSS to your stylesheet
  const figureStyles = {
    width: "100vw",
    margin: "0 auto",
    
    
  };
  // const twStyles = {
  //   ''
  // };
  // class="${JSON.stringify(twStyles)}" 

  // Wrap the figure in a div with the updated styles
  const parsedContent = content.replace(
    /<figure [^>]*>/g,
    (match) => {
      return `<div style="${JSON.stringify(figureStyles).replace(/"/g, "'")}">${match}</div>`;
    }
  );

  return (
    <div className=" md:p-10 mx-auto text-justify">
      <div  className={`${styles.content} md:px-48 lg:px-80 `}>

      <div
        className={`${styles.content} shadow-xl p-10`}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
    </div>
        </div>
  );
}