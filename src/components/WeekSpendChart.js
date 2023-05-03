// import React, { useState, useEffect } from 'react';
// import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
// import NewData from './NewData';


// export default function WeekSpendChart(){
//     const dayArray = NewData().dayArray;

//     return (
//         <VictoryChart 
//             theme={VictoryTheme.material}
//             domainPadding={20}
//             height={400} 
//             width={600}
//             domain={{x: [0.5, 7,5]}} // set the domain for x-axis
//         >
//             <VictoryAxis
//                 tickValues={[1,2,3,4,5,6,7]}
//                 tickFormat={["M", "T", "O", "T", "F", "L", "S"]}
//                 style={{
//                     axisLabel: { fontSize: 16 },
//                     tickLabels: { fontSize: 35 }
//                 }}
//             />
//             <VictoryAxis
//                 dependentAxis
//                 tickFormat={(x) => (`${x / 1000}`)}
//                 style={{
//                     axisLabel: { fontSize: 16 },
//                     tickLabels: { fontSize: 25 }
//                 }}
//             />
//           <VictoryBar
//             data={dayArray.flat()}
//             x="day.date"
//             y="value"
//             style={{
//               data: {
//                 fill: (d) => d.datum.value > 500 ? "#D9B44A" : "#125447", // Change the color based on the value
//                 width: 20 // Increase the width of the bars for better visibility
//               }
//             }}
//           />

//         </VictoryChart>
//     );
// }



import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from 'victory';
import WeekData from './WeekData';

// Example of the data it takes, the day and its respective spending amount
const testData = [    
  {day: 1, energyUsage: 8.3},    
  {day: 2, energyUsage: 10.6},    
  {day: 3, energyUsage: 9.9},    
  {day: 4, energyUsage: 0},    
  {day: 5, energyUsage: 0},    
  {day: 6, energyUsage: 0},    
  {day: 7, energyUsage: 0}];


// Returns a Victory graph that show the weekly spending
function WeekSpendChart() {
  console.log("sampleData:", WeekData());
  const sampleData = WeekData();

    return (
        <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
            height={400} 
            width={600}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7]}
                tickFormat={["M", "T", "O", "T", "F", "L", "S"]}
                style={{
                    axisLabel: {fontSize: 16},
                    tickLabels: {fontSize: 35},
                    fontFamily: 'Barlow'
                }}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
                style={{
                    axisLabel: {fontSize: 16},
                    tickLabels: {fontSize: 25}
                }}
            />

            <VictoryBar
                    data={testData.map(({ day, energyUsage }) => ({
                    day,
                    energyUsage,
                    color: energyUsage > 10 ? "#D9B44A" : "#125447"
                    }))}
                    x="day"
                    y="energyUsage"
                    style={{
                    data: {
                        fill: (d) => d.datum.color,
                        width: 20 // Increase the width of the bars for better visibility
                    }
                    }}
                />
                </VictoryChart>
    )
}

export default WeekSpendChart;