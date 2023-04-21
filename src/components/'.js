//Spendings per day over a week

// import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from 'victory';

// const sampleData = [
//     {days: 1, spendings: 13000},
//     {days: 2, spendings: 16500},
//     {days: 3, spendings: 14250},
//     {days: 4, spendings: 19000},
//     {days: 5, spendings: 14250},
//     {days: 6, spendings: 10250},
//     {days: 7, spendings: 12250}
//   ];

// function TestGraphs() {

//     return (
//         <VictoryChart
//           // adding the material theme provided with Victory
//           theme={VictoryTheme.material}
//           domainPadding={20}
//         >
//           <VictoryAxis
//             tickValues={[1, 2, 3, 4, 5, 6, 7]}
//             tickFormat={["M", "T", "O", "T", "F", "L", "S"]}
//           />
//           <VictoryAxis
//             dependentAxis
//             tickFormat={(x) => (`$${x / 100}`)}
//           />
//           <VictoryBar
//             data={sampleData}
//             x="days"
//             y="spendings"
//             style={{
//                 data: {
//                   fill: "#D9B44A" // set the fill color to orange
//                 }
//               }}
//           />
//         </VictoryChart>
//       )
//     }

// export default TestGraphs;

//---------------------------------------------------------------



//---------------------------------------------------------------


// import { VictoryArea, VictoryChart, VictoryLine, VictoryScatter } from 'victory';

// const sampleData=[
//     { x: 1, y: 2 },
//     { x: 2, y: 3 },
//     { x: 3, y: 5 },
//     { x: 4, y: 4 },
//     { x: 5, y: 6 }
//   ];

// function TestGraphs() {

//     return (
//         <VictoryChart>
//         <VictoryLine
//           data={sampleData}
          
//         />
//         <VictoryArea
//           data={sampleData}
//           style={{
//             data: {
//               fill: "#F0F4F4",
//               opacity: 1 
//             }
//           }}
//         />
//         <VictoryScatter
//           data={sampleData}
//           style={{ data: { fill: "#125447" } }}
//           size={6}
//         />
//       </VictoryChart>
      
//       )
//     }

// export default TestGraphs;


//---------------------------------------------------------------




//---------------------------------------------------------------
// Total for day or week


import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

function TestGraphs() {
  const data = [{ x: "Total", y: 5 }];

  const barWidth = 50;
  const barHeight = 20;
  const secondBarHeight = data[0].y / barHeight

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis style={{ axis: { stroke: "none" } }} />
      <VictoryBar
        style={{
          data: {
            fill: "white",
            stroke: "black",
            strokeWidth: 3,
            width: barWidth,
            height: barHeight
          },
        }}
        data={data}
      />
      {/* <VictoryBar
        style={{
          data: {
            fill: "#125447",
            width: barWidth,
            height: secondBarHeight
          },
        }}
        data={data}
      /> */}
    </VictoryChart>
  );
}

export default TestGraphs;









