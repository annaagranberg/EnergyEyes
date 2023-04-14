// import React, { useState, useEffect } from 'react';

// function Price() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://www.elprisetjustnu.se/api/v1/prices/2023/04-10_SE3.json');
//       const jsonData = await response.json();
//       setData(jsonData);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Price;

// --------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip } from 'victory';

function Price() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.elprisetjustnu.se/api/v1/prices/2023/04-12_SE3.json');
      const jsonData = await response.json();
      setData(jsonData);
    }
    // async function fetchData() {
    //     const date = new Date();
    //     const year = date.getFullYear() ;
    //     const month = date.getMonth() + 1;
    //     const day = date.getDate();
    //     const dateString = `${year}/${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}`;
    //     const response = await fetch(`https://www.elprisetjustnu.se/api/v1/prices/${dateString}_SE3.json`);
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   }
    fetchData();
  }, []);

  

  return (
    // Takes the chosen data from the JSON and sets it to an axis
    <div>
        <VictoryChart>
        <VictoryAxis
            label="Time"
            tickFormat={(time) => new Date(time).toLocaleTimeString([], { hour: '2-digit' })}
            style={{ tickLabels: { angle: -90 } }}
        />
        <VictoryAxis
            label="Price (SEK/kWh)"
            dependentAxis 
        />
        <VictoryLine
            data={data}
            x="time_start"
            y="SEK_per_kWh"
            labelComponent={<VictoryTooltip />}
        />
        </VictoryChart>

    </div>
  );
}

export default Price;


// --------------------------------------------------------------------------------------------------


// import React from 'react';
// import axios from 'axios'; // npm install axios
// import {VictoryChart, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryAxis} from 'victory';

// class Price extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       zoomDomain: null,
//       selectedDomain: null
//     };
//     this.handleZoom = this.handleZoom.bind(this);
//     this.handleBrush = this.handleBrush.bind(this);
//   }

//   componentDidMount() {
//     axios.get("https://www.elprisetjustnu.se/api/v1/prices/2023/04-10_SE3.json")
//       .then(response => {
//         this.setState({
//           data: response.data
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   handleZoom(domain) {
//     this.setState({selectedDomain: domain});
//   }

//   handleBrush(domain) {
//     this.setState({zoomDomain: domain});
//   }

//   render() {
//     const {data, zoomDomain, selectedDomain} = this.state;
//     return (
//       <div>
//           <VictoryChart
//             width={400}
//             height={250}
//             scale={{x: "time"}}
//             containerComponent={
//               <VictoryZoomContainer responsive={false}
//                 zoomDimension="x"
//                 zoomDomain={zoomDomain}
//                 onZoomDomainChange={this.handleZoom}
//               />
//             }
//           >
//             <VictoryLine
//               style={{
//                 data: {stroke: "tomato"}
//               }}
//               data={data.map(d => ({x: new Date(d.time_start), y: d.SEK_per_kWh }))}
//             />
//             <VictoryAxis
//               tickFormat={(x) => `${x.getHours()}:00`}
//             />
//           </VictoryChart>

//           <VictoryChart
//             width={550}
//             height={90}
//             scale={{x: "time"}}
//             padding={{top: 0, left: 0, right: 0, bottom: 30}}
//             containerComponent={
//               <VictoryBrushContainer responsive={false}
//                 brushDimension="x"
//                 brushDomain={selectedDomain}
//                 onBrushDomainChange={this.handleBrush}
//               />
//             }
//           >
//             <VictoryAxis
//               tickValues={data.map(d => new Date(d.time_start))}
//               tickFormat={(x) => `${x.getDate()}/${x.getMonth()+1}`}
//             />
//             <VictoryLine
//               style={{
//                 data: {stroke: "tomato"}
//               }}
//               data={data.map(d => ({x: new Date(d.time_start), y: d.SEK_per_kWh }))}
//             />
//           </VictoryChart>
//       </div>
//     );
//   }
// }
// export default Price;
