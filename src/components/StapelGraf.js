import React from 'react';
import { VictoryBar, VictoryChart, VictoryLegend } from 'victory';
import Data from './Data.js';
import { blueGrey } from '@mui/material/colors';

const data = Data();

const StapelGraf = () => {
    const formattedData = data.map(item => ({
        x: item.month,
        y: (item.electricity + item.gas + item.water)

    }));

    return (
        <div>
            <VictoryChart>
                <VictoryBar
                    data={formattedData}
                    style={blueGrey}

                />
                <VictoryLegend
                    data={[
                        { name: 'Energy usage each month' }
                    ]}
                    orientation="vertical"
                />
            </VictoryChart>
        </div>
    )
}

export default StapelGraf;