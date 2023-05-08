import imagesMoney from "../data/money.json";
import imagesFlower from "../data/flower.json";
import imagesCurious from "../data/curious.json";

function Type(value, type) {
  console.log(type);
  let imagesData;
  if (type === "Sparsam") {
    imagesData = imagesMoney;
  } else if (type === "Miljö") {
    imagesData = imagesFlower;
  } else if (type === "Nyfiken") {
    imagesData = imagesCurious;
  } else {
    throw new Error(`Unknown type: ${type}`);
  }

  const { src, text, interval } = imagesData.find(
    ({ min, max }) => value >= min && value < max
  ) || { src: "", text: "Unknown", interval: 0 };

  return { src, text, interval };
}

export default Type;
