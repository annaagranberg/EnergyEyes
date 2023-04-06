import React from "react";
import PropTypes from "prop-types";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";


const generateData = () => {
  const data = [];
  const startDate = new Date(2023, 2, 1);
  const endDate = new Date();
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  for (let i = 0; i < numDays; i++) {
    const date = new Date(startDate.getTime() + i * (1000 * 3600 * 24));
    const energyUsage = Math.floor(Math.random() * 50 + 50);
    const temperature = Math.floor(Math.random() * 30 + 10);
    const occupancy = Math.floor(Math.random() * 4 + 1);
    const dataPoint = { x: date, y: energyUsage, temperature, occupancy };
    data.push(dataPoint);
  }
  return data;
};

const data = generateData();

const EnergyUsageGraph = ({ data }) => {

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };


  return (
    <div>
      <VictoryChart>
        <VictoryLine
          data={data}
          x="time"
          y="usage"
          style={{
            data: { stroke: "#2196f3", strokeWidth: 2 },
          }}
        />
        <VictoryAxis
          label="Time"
          tickFormat={formatTime}
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Usage"
          style={{
            axisLabel: { padding: 40 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

EnergyUsageGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      usage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default EnergyUsageGraph;
