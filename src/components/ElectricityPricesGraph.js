import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

function ElectricityPricesGraph() {
  const [prices, setPrices] = useState([]);
  const [interval, setInterval] = useState(1);

  useEffect(() => {
    async function fetchPrices() {
      const response = await fetch(
        `https://www.elprisetjustnu.se/api/v1/prices/2023/04-06_SE3.json`
      );
      const data = await response.json();
      setPrices(data.prices);
    }

    fetchPrices();
  }, [interval]);

  return (
    <div>
      <label>
        Select time interval (days):
        <select value={interval} onChange={(e) => setInterval(e.target.value)}>
          <option value={1}>1 day</option>
          <option value={7}>1 week</option>
          <option value={30}>1 month</option>
        </select>
      </label>
      <VictoryChart>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryLine data={prices} x="time" y="value" />
      </VictoryChart>
    </div>
  );
}

export default ElectricityPricesGraph;