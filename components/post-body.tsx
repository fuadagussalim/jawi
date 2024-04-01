import React from "react";
import styles from "./post-body.module.css";
import ImageWithWidth from "../components/ImageWithWidth";

export default function PostBody({ content }) {
  // Add this CSS to your stylesheet
  const figureStyles = {
    width: "100%",
    margin: "0 auto",
  };

  // Wrap the figure in a div with the updated styles
  const parsedContent = content.replace(
    /<figure [^>]*>/g,
    (match) => {
      return `<div style="${JSON.stringify(figureStyles).replace(/"/g, "'")}">${match}</div>`;
    }
  );

  return (
    <div className=" p-10 mx-auto text-justify">
      <div
        className={`${styles.content} md:px-20`}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    </div>
  );
}