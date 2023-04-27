import img1 from '../images/money1.PNG';
import img2 from '../images/money2.PNG';
import img3 from '../images/money3.PNG';
import img4 from '../images/money4.PNG';
import img5 from '../images/money5.PNG';

// Takes one argument and depending on the value returns an image
function Money(value) {
  const images = [
    { src: img1, min: 0, max: 5, text: "Du sparar mycket pengar" },
    { src: img2, min: 5, max: 9, text: "Du sparar pengar" },
    { src: img3, min: 9, max: 14, text: "Tänk på ditt sparande" },
    { src: img4, min: 14, max: 19, text: "Du slösar pengar" },
    { src: img5, min: 18, max: 100, text: "Du kommer bli fattig" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Money;
