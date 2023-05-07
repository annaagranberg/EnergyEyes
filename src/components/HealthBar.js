import styled from 'styled-components';
import img1 from '../images/smiley1.PNG';
import img5 from '../images/smiley5.PNG';

const HealthBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  box-shadow: 0px 0px 2px grey;
  border-radius: 6px;
  margin: 0 auto;
  max-width: 200px;
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
  background-color: ${props => props.isLow ? '#D9B44A' : '#125447'};
`;

const HealthBar = ({ value }) => {
  const filledSections = Math.min(value, 5);
  const emptySections = 5 - filledSections;
  const isLow = value <= 2;


  return (
    <HealthBarContainer>
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
