import img1 from '../images/flower1.PNG';
import img2 from '../images/flower2.PNG';
import img3 from '../images/flower3.PNG';
import img4 from '../images/flower4.PNG';
import img5 from '../images/flower5.PNG';

// Takes one argument and depending on the value returns an image
function Plant(value) {
  const images = [
    { src: img1, min: 0, max: 10, text: "Din blomma mår fantastiskt" },
    { src: img2, min: 10, max: 20, text: "Din blomma mår bra" },
    { src: img3, min: 20, max: 30, text: "Ta hand om din blomma" },
    { src: img4, min: 30, max: 40, text: "Din blomma mår inte så bra" },
    { src: img5, min: 40, max: 50, text: "Din planta är nära att dö" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Plant;
