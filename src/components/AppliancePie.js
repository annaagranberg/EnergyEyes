//Split spendings between household chores
// Takes an input with x and y value, x is the type and y is the amount

import { VictoryPie } from 'victory';

const sampleData=[
    { x: 'Dusch', y: 7 },
    { x: 'Diska', y: 4 },
    { x: 'Laga mat', y: 4 },
    { x: 'Tvätta', y: 1 },
  ];
const myColorScale = ["#092A23", "#D9B44A", "#125447", "#C4D4D4"];

function AppliancePie() {

    return (
        <VictoryPie
        padAngle={({ datum }) => datum.y}
        innerRadius={100}
        colorScale= {myColorScale}
        data={sampleData}
      />
      )
    }

export default AppliancePie;