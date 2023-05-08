import styled from "styled-components";
import flowerBad from "../images/flower1.PNG";
import flowerGood from "../images/flower5.PNG";
import curiousBad from "../images/smiley1.PNG";
import curiousGood from "../images/smiley5.PNG";
import moneyBad from "../images/money1.PNG";
import moneyGood from "../images/money5.PNG";

const HealthBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  box-shadow: 0px 0px 2px grey;
  border-radius: 6px;
  margin: 0 auto;
  max-width: 200px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: ${({ type }) =>
      type === "Sparsam"
        ? `url(${moneyGood})`
        : type === "Nyfiken"
        ? `url(${curiousGood})`
        : `url(${flowerGood})`};
    background-size: cover;
    left: -40px;
    top: 30%;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: ${({ type }) =>
      type === "Sparsam"
        ? `url(${moneyBad})`
        : type === "Nyfiken"
        ? `url(${curiousBad})`
        : `url(${flowerBad})`};
    background-size: cover;
    right: -40px;
    top: 30%;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

const HealthBarSection = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: white;
  border-radius: 0;
  border-right: 1px solid white;
  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-right: none;
  }
`;

const HealthBarFilledSection = styled(HealthBarSection)`
  background-color: ${(props) => (props.isLow ? "#D9B44A" : "#125447")};
`;

const HealthBar = ({ value, type }) => {
  const filledSections = Math.min(value, 5);
  const emptySections = 5 - filledSections;
  const isLow = value <= 2;

  return (
    <HealthBarContainer type={type}>
      {Array.from({ length: filledSections }).map((_, index) => (
        <HealthBarFilledSection key={index} isLow={isLow} />
      ))}
      {Array.from({ length: emptySections }).map((_, index) => (
        <HealthBarSection key={index} />
      ))}
    </HealthBarContainer>
  );
};

export default HealthBar;
