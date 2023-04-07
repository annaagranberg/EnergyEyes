import img1 from '../images/flower1.PNG';
import img2 from '../images/flower2.PNG';
import img3 from '../images/flower3.PNG';
import img4 from '../images/flower4.PNG';
import img5 from '../images/flower5.PNG';

// Takes one argument and depending on the value returns an image
function Money(value) {
  const images = [
    { src: img1, min: 0, max: 10, text: "You saved a lot of money" },
    { src: img2, min: 10, max: 20, text: "Your saving money" },
    { src: img3, min: 20, max: 30, text: "Think of your savings" },
    { src: img4, min: 30, max: 40, text: "You are wasting money" },
    { src: img5, min: 40, max: 50, text: "You are gonna be very poor" },
  ];

  const { src, text } = images.find(({ min, max }) => value >= min && value < max) || { src: '', text: 'Unknown' };

  return { src, text };
}

export default Money;
