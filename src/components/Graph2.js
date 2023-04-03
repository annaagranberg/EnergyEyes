// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend } from 'victory';

import Data from "./Data.js"

// Define data and colors for the graph
const data = Data();
const colors = ['#00a1e4', '#ffc20e', '#ff3c3c'];

// Define the graph component
const Graph2 = () => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
    <VictoryChart
      domainPadding={{ x: 25 }}
      padding={{ left: 100, right: 50, top: 50, bottom: 50 }}
      interpolation="natural"
    >
      <VictoryLegend
        x={50}
        y={0}
        orientation="horizontal"
        gutter={20}
        style={{ labels: { fontSize: 10 } }}
        data={[
          { name: 'Electricity', symbol: { fill: colors[0] } },
          { name: 'Gas', symbol: { fill: colors[1] } },
          { name: 'Water', symbol: { fill: colors[2] } }
        ]}
      />
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        tickFormat={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
      />
      <VictoryAxis dependentAxis />
      <VictoryLine data={data} x="month" y="electricity" style={{ data: { stroke: colors[0] } }} />
      <VictoryLine data={data} x="month" y="gas" style={{ data: { stroke: colors[1] } }} />
      <VictoryLine data={data} x="month" y="water" style={{ data: { stroke: colors[2] } }} />
    </VictoryChart>
    </div>
  );
};

// Render the graph component
//ReactDOM.render(<EnergyUsageGraph />, document.getElementById('root'));

export default Graph2;