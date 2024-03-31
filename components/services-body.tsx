import React from "react";
import styles from "./post-body.module.css";
import ImageWithWidth from "./ImageWithWidth";

export default function ServicesBody({ content }) {
  // Add this CSS to your stylesheet
  const figureStyles = {
    maxWidth: "100%",
    margin: "0 auto",
  };

  // Wrap the figure in a div with the updated styles
  // const parsedContent = content.replace(
  //   /<figure [^>]*>/g,
  //   (match) => {
  //     return `<div style="${JSON.stringify(figureStyles).replace(/"/g, "'")}">${match}</div>`;
  //   }
  // );

  return (
    <div className="max-w-2xl p-10 mx-auto text-justify">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}