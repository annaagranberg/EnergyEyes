// Electricity price from the JSON file

import React, { useState, useEffect } from 'react';
import { VictoryArea, VictoryChart, VictoryLine, VictoryScatter, VictoryAxis,  } from 'victory';

function ElecPriceChart() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://www.elprisetjustnu.se/api/v1/prices/2023/04-14_SE3.json');
        const jsonData = await response.json();
  
        // Format data as an array of { x, y } objects
        const formattedData = jsonData.map((item) => ({
          x: new Date(item.time_start).getTime(),
          y: item.SEK_per_kWh,
        }));
        
        setData(formattedData);
      }
  
      fetchData();
    }, []);

    return (
      <VictoryChart>
        <VictoryAxis
          tickValues = {data.length > 0 ? [data[5].x, data[11].x, data[17].x, data[23].x] : []}
          tickFormat = {["06:00", "12:00", "18:00", "00:00"]}
          style = {{
            grid: { stroke: "grey", strokeDasharray: "4" },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
      <VictoryAxis dependentAxis
        style = {{
          grid: { stroke: "grey", strokeDasharray: "4" },
          tickLabels: { fontSize: 8, padding: 5 }
        }}
          />
      <VictoryLine 
        data = {data}
        style = {{
          data: { stroke: "#125447" },
        }}
      />
      <VictoryArea
        data = {data}
        style = {{
          data: {
          fill: "#F0F4F4",
          opacity: 0.8
          }
        }}
      />
      <VictoryScatter
        data = {data}
        style = {{ data: { fill: "#125447" } }}
        size = {3}
      />
      </VictoryChart>
      
    );
  }
  
  export default ElecPriceChart;
  