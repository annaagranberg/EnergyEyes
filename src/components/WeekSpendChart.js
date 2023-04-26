import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { useFetcher } from 'react-router-dom';
import NewData from './NewData';

export default function WeekSpendChart(){
    const dayArray = NewData().dayArray;

    return (
        <VictoryChart height={250} width={500}>
            <VictoryAxis
                tickValues={[0,1,2,3,4,5,6]}
                tickFormat={["M", "T", "O", "T", "F", "L", "S"]}
                style={{
                    axisLabel: { fontSize: 16 },
                    tickLabels: { fontSize: 35 }
                }}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x / 1000}`)}
                style={{
                    axisLabel: { fontSize: 16 },
                    tickLabels: { fontSize: 25 }
                }}
            />
            <VictoryBar
                data={dayArray.flat()}
                x="day.date"
                y="value"
                style={{
                    data: {
                        fill: (d) => d.datum.color,
                        width: 20 // Increase the width of the bars for better visibility
                    }
                }}
            />
        </VictoryChart>
    );
}
