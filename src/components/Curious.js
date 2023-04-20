import img1 from '../images/smiley1.PNG';
import img2 from '../images/smiley2.PNG';
import img3 from '../images/smiley3.PNG';
import img4 from '../images/smiley4.PNG';
import img5 from '../images/smiley5.PNG';

// Takes one argument and depending on the value returns an image
function Curious(value) {
  const images = [
    { src: img1, min: 0, max: 10, text: "Excited" },
    { src: img2, min: 10, max: 20, text: "Happy" },
    { src: img3, min: 20, max: 30, text: "Neutral" },
    { src: img4, min: 30, max: 40, text: "Irritated" },
    { src: img5, min: 40, max: 50, text: "Mad" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Curious;
