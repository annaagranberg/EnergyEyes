import React from 'react';
import styled from 'styled-components';

// Create the container
const Container = styled.div`
  border-radius: 12px;
  box-shadow: 1px 1px 7px grey;
  height: 80vh;
  max-height: 254pt;
  width: 60px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

// Create a bar that moves
const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.percentageDiff}%;
  background-color: ${props => props.isPastGoal ? '#C54507' : '#125447'};
  transition: height 0.8s ease;
  
`;

// Create a line for the limit
const LimitLine = styled.div`
  position: absolute;
  bottom: ${props => props.goalAmountPercentage}%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #125447;
`;

// Create a lable in the graph
const DayLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-family: Barlow;
  color: white;
  margin-bottom: 10px;
`;

// Calculates how filled the bar should be
const Progressbar = ({ spendingAmount, total, goalAmount, timeUnit }) => {
  const percentageDiff = Math.round((spendingAmount / total) * 100);
  const goalAmountPercentage = (goalAmount / total) * 100;
  const isPastGoal = percentageDiff >= goalAmountPercentage;


// Returns a progressBar, swithces the label depending on input
// example for input
//<Progressbar spendingAmount={50} total={100} goalAmount={80} timeUnit='vecka' /> 
  return (
    <div>
     
      <Container>
        <ProgressBar
          percentageDiff={percentageDiff}
          isPastGoal={isPastGoal}
        >
          <DayLabel>{timeUnit === 'dag' ? 'Dag' : 'Vecka'}</DayLabel>
        </ProgressBar>
        <LimitLine goalAmountPercentage={goalAmountPercentage} />
      </Container>
    </div>
  );
};

export default Progressbar;
