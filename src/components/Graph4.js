import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, } from 'victory';
import Data from './Data.js';
import { blueGrey } from '@mui/material/colors';

const data = Data();


const Graph4 = () => {

    const formattedData = data.map(item => ([
        {
            x: item.month,
            y: Number(item.electricity)
        },
        {
            x: item.month,
            y: Number(item.gas)
        },
        {
            x: item.month,
            y: Number(item.water)
        }
    ]));

    console.log(formattedData);


    return (
        <div>
            <VictoryChart>
                <VictoryStack
                    colorScale={["black", "blue", "tomato"]}
                    data={formattedData}
                >
                </VictoryStack>
            </VictoryChart>
        </div>

    )
}
export default Graph4;