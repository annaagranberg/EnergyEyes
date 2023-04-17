import React from 'react';
import styled from 'styled-components';

const PercentNumber = styled.div`
  font-size: 23px;
  font-family: Barlow;
  color: rgb(60, 60, 60);
  padding-bottom: 16px;
`;

const Container = styled.div`
  border-radius: 12px;
  border: 2px solid black;
  height: 80vh;
  max-height: 200pt;
  max-width: 30pt;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.isPastGoal ? '#C54507' : '#125447'};
  transition: height 0.8s ease;
`;


const GoalLine = styled.div`
  position: absolute;
  bottom: 80%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: black;
`;

const Progressbar = ({ spendingAmount, total, goalAmount }) => {
    const percentageDiff = Math.round((spendingAmount / total) * 100);
    const isPastGoal = percentageDiff >= (goalAmount / total) * 100;
  //Elförbrukning per dag: {percentageDiff}%
    return (
      <div>
        <PercentNumber>
          Elförbrukning dag
        </PercentNumber>
        <Container>
          <ProgressBar
            style={{ height: `${percentageDiff}%` }}
            isPastGoal={isPastGoal}
          />
          <GoalLine style={{ bottom: `${(goalAmount / total) * 100}%` }} />
        </Container>
      </div>
    );
  };
  

export default Progressbar;