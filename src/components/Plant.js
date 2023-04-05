import img1 from '../images/flower1.PNG';
import img2 from '../images/flower2.PNG';
import img3 from '../images/flower3.PNG';
import img4 from '../images/flower4.PNG';
import img5 from '../images/flower5.PNG';

function Plant(value) {
  const images = [
    { src: img1, min: 0, max: 10, text: "Your plant is feeling excelent" },
    { src: img2, min: 10, max: 20, text: "Your plant is feeling good" },
    { src: img3, min: 20, max: 30, text: "Take care of your plant" },
    { src: img4, min: 30, max: 40, text: "Your plant is feeling unwell" },
    { src: img5, min: 40, max: 50, text: "Your plant is almost dead" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Plant;
