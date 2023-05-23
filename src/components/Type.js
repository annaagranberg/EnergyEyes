import imagesMoney from "../data/money.json";
import imagesFlower from "../data/flower.json";
import imagesCurious from "../data/curious.json";

export function Type(value, type) {
  // Takes in two arguments, one type that decides which json file to call
  // and then uses the value which object in the json file to pick
  let imagesData;
  if (type === "Miljö") {
    imagesData = imagesFlower.flower;
  } else if (type === "Sparsam") {
    imagesData = imagesMoney.money;
  } else if (type === "Nyfiken") {
    imagesData = imagesCurious.curious;
  }

  const { src, text, interval } = imagesData.find(
    ({ min, max }) => value >= min && value < max
  ) || { src: "", text: "Unknown", interval: 0 };

  return { src, text, interval };
}
