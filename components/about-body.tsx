import React from "react";
import styles from "./post-body.module.css";
import ImageWithWidth from "./ImageWithWidth";
import Team from "./Team/Team"; // Importing the Team component
import DOMPurify from 'isomorphic-dompurify';


export default function AboutBody({ content, members }) {
    const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <div id="our-story" className="md:p-10 mx-auto text-justify md:px-48 lg:px-60 2xl:px-80">
      <div className={`${styles.content} shadow-xl`}>
        <h1 className="font-bold mt-10 mb-0 mx-auto text-center w-full">
          Our Story
        </h1>
        <div
          className={`${styles.content}  px-10`}
          dangerouslySetInnerHTML={{ __html: sanitizedContent}}
        />
        <Team memberData={members} />
      </div>
    </div>
  );
}
