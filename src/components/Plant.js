import React from "react";
import img1 from "../Bilder/img1.jpg";
import img2 from "../Bilder/img2.jpg";
import img3 from "../Bilder/img3.jpg";
import img4 from "../Bilder/img4.jpg";
import img5 from "../Bilder/img5.jpg";
import img6 from "../Bilder/img6.jpg";

function ImageComponent({ value }) {
  const images = [
    { src: img1, min: 0, max: 10 },
    { src: img2, min: 10, max: 20 },
    { src: img3, min: 20, max: 30 },
    { src: img4, min: 30, max: 40 },
    { src: img5, min: 40, max: 50 },
    { src: img6, min: 50, max: 60 },
  ];

  const { src } = images.find(({ min, max }) => value >= min && value < max) || { src: "" };
  console.log(src);

  return <img src={src} alt={`Img not found, Value ${value}`} />;
}

export default ImageComponent;