import img1 from '../images/flower1.PNG';
import img2 from '../images/flower2.PNG';
import img3 from '../images/flower3.PNG';
import img4 from '../images/flower4.PNG';
import img5 from '../images/flower5.PNG';

// Takes one argument and depending on the value returns an image
function Plant(value) {
  const images = [
    { src: img1, min: 0, max: 5, text: "Din blomma mår fantastiskt" },
    { src: img2, min: 5, max: 9, text: "Din blomma mår bra" },
    { src: img3, min: 9, max: 14, text: "Ta hand om din blomma" },
    { src: img4, min: 14, max: 19, text: "Din blomma mår inte så bra" },
    { src: img5, min: 18, max: 100, text: "Din planta är nära att dö" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Plant;
