import React from "react";

const ImageWithWidth = ({ src, width }) => (
  <div style={{ width: width }}>
    <img src={src} alt="" loading="lazy" decoding="async" />
  </div>
);

export default ImageWithWidth;