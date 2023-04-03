import Data from "./Data.js";
import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend, VictoryPie } from 'victory';


const Graph3 = () => {
    const data = Data();
    const janData = data.find((d) => d.month === 1);
    const pieData = [
        { label: "Electricity", y: janData.electricity },
        { label: "Gas", y: janData.gas },
        { label: "Water", y: janData.water },
    ];
    return (
        <div>
            <VictoryPie
                data={pieData}
                colorScale={["#FF5722", "#03A9F4", "#009688"]}
                innerRadius={50}
            />
        </div>
    )
}

export default Graph3;