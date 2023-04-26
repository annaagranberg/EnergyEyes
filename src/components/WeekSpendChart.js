import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { useFetcher } from 'react-router-dom';

export default function WeekSpendChart(){

    const { currentUser, logout } = useAuth();
    const [people, setPeople] = useState(0)
    const [area, setArea] = useState(0)
    const [profil, setProfil] = useState('')
    const [dusch, setDusch] = useState(0)
    const [duschtid, setDuschTid] = useState(0)
    const [disk, setDisk] = useState(0)
    const [kok, setKok] = useState(0)
    const [tvatt, setTvatt] = useState(0)

    useEffect(() => {
    var docRef = db.collection("user_collection").doc(currentUser.uid);

  docRef.get("name.firstname").then((doc) => {
    if (doc.exists) {
        const data = doc.data();
        setArea(data.boendeyta)
        setPeople(data.antalPersoner);
        setProfil(data.profiltyp);
        setDusch(data.duschparametrar.antal)
        setDuschTid(data.duschparametrar.tid)
        setDisk(data.diskparametrar.antal);
        setKok(data.kokparametrar.antal);
        setTvatt(data.tvattparametrar.antal);
        console.log(typeof dusch)
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}, [currentUser.uid]);

    const now = new Date();
    const numDays = 7;
    const dayArray = Array.from({ length: numDays }, (_, i) => {
      const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 0, 0, 0, 0);
      const dailyTotal = Array.from({ length: 1 }, (_) => {
        const randomValue = calculateDailyEnergyUsage(people, area, dusch, duschtid, disk, kok, tvatt);
        return { date: day, value: randomValue };
      });
      return dailyTotal;
    });
    console.log(dayArray);
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
            color: dayArray.value > 0 ? "#D9B44A" : "#125447",
            fill: (d) => d.datum.color,
            width: 20 // Increase the width of the bars for better visibility
            }
        }}
        />
      
    </VictoryChart>
    
  );
}


// const WeekSpendChart = () => {

//     const { currentUser, logout } = useAuth();
//     const [people, setPeople] = useState()
//     const [area, setArea] = useState()
//     const [profil, setProfil] = useState()
//     const [dusch, setDusch] = useState([])
//     const [disk, setDisk] = useState()
//     const [kok, setKok] = useState()
//     const [tvatt, setTvatt] = useState()

//   const [dayArray, setDayArray] = useState([]);

//   var docRef = db.collection("user_collection").doc(currentUser.uid);

//   docRef.get("name.firstname").then((doc) => {
//     if (doc.exists) {
//         const data = doc.data();
//         setArea(data.boendeyta)
//         setPeople(data.antalPersoner);
//         setProfil(data.profiltyp);
//         setDusch({antal: data.duschparametrar.antal, tid: data.duschparametrar.tid})
//         setDisk(data.diskparametrar.antal);
//         setKok(data.kokparametrar.antal);
//         setTvatt(data.tvattparametrar.antal);
//         console.log(ar)
//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.log("Error getting document:", error);
//   });

  function calculateDailyEnergyUsage(people, area, dusch,duschtid, disk, kok, tvatt) {
    // Calculate total energy usage based on the input variables
    const energyUsage = (people * 2000) + (area * 50) + duschtid + dusch + (disk * 1500) + (kok * 3000) + (tvatt * 2000);
  
    // Generate a random daily energy usage value based on the total energy usage
    const min = energyUsage * 0.8; // 80% of total energy usage
    const max = energyUsage * 1.2; // 120% of total energy usage
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomValue/100;
  }
  
  

//   useEffect(() => {
//     const now = new Date();
//     const numDays = 7;
//     const dayArray = Array.from({ length: numDays }, (_, i) => {
//       const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 0, 0, 0, 0);
//       const dailyTotal = Array.from({ length: 1 }, (_) => {
//         const randomValue = calculateDailyEnergyUsage(people, area, profil, dusch, disk, kok, tvatt);
//         return { date: day, value: randomValue };
//       });
//       return dailyTotal;
//     });
//     setDayArray(dayArray);
//     console.log(dayArray);
//   }, [people, area, profil, dusch, disk, kok, tvatt]);
  

//   return (
//     <VictoryChart
//       theme={VictoryTheme.material}
//       domainPadding={20}
//       height={400}
//       width={600}
//     >
//       <VictoryAxis
//         tickValues={[0,1,2,3,4,5,6]}
//         tickFormat={["M", "T", "O", "T", "F", "L", "S"]}
//         style={{
//           axisLabel: { fontSize: 16 },
//           tickLabels: { fontSize: 35 }
//         }}
//       />
//       <VictoryAxis
//         dependentAxis
//         tickFormat={(x) => (`${x / 1000}`)}
//         style={{
//           axisLabel: { fontSize: 16 },
//           tickLabels: { fontSize: 25 }
//         }}
//       />

// <VictoryBar
//   data={dayArray.flat()}
//   x="day.date"
//   y="value"
//   style={{
//     data: {
//       fill: (d) => d.datum.color,
//       width: 20 // Increase the width of the bars for better visibility
//     }
//   }}
// />

//     </VictoryChart>
//   );
// };

// export default WeekSpendChart;
