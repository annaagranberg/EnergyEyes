import img1 from '../images/smiley1.PNG';
import img2 from '../images/smiley2.PNG';
import img3 from '../images/smiley3.PNG';
import img4 from '../images/smiley4.PNG';
import img5 from '../images/smiley5.PNG';

// Takes one argument and depending on the value returns an image
function Curious(value) {
  const images = [
    { src: img1, min: 0, max: 5, text: "Förväntansfull" },
    { src: img2, min: 5, max: 9, text: "Glad" },
    { src: img3, min: 9, max: 14, text: "Neutral" },
    { src: img4, min: 14, max: 19, text: "Uppretad" },
    { src: img5, min: 19, max: 100, text: "Arg" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Curious;
