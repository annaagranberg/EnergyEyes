import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

const EnergyGraph = ({ hourArray }) => {
  return (
    <VictoryChart>
      <VictoryLine
        data={hourArray}
        x="date"
        y="value"
      />
    </VictoryChart>
  );
};

export default EnergyGraph;
