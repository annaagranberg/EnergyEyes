import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

const WeekData = () => {
  const { currentUser } = useAuth();
  const [dusch, setDusch] = useState([]);
  const [disk, setDisk] = useState();
  const [kok, setKok] = useState();
  const [tvatt, setTvatt] = useState();
  const [people, setPeople] = useState();
  const [area, setArea] = useState();
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        console.log("Data from the database:", data);
        setDusch({ antal: data.duschparametrar.antal, tid: data.duschparametrar.tid });
        setDisk(data.diskparametrar.antal);
        setKok(data.kokparametrar.antal);
        setTvatt(data.tvattparametrar.antal);
        setArea(data.boendeyta);
        setPeople(data.antalPersoner);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });

  }, [currentUser.uid]);


  useEffect(() => {
    
    const values = [kok, disk, dusch, tvatt, people, area];
    const { totalkWh } = weekCostSpread(values);
    const dailyUsage = totalkWh / 7;
    const data = [];

    for (let i = 0; i < 7; i++) {
      data.push({
        day: `Day ${i + 1}`,
        energyUsage: dailyUsage.toFixed(2),
      });
    }

    setSampleData(data);
  }, [kok, disk, dusch, tvatt, people, area]);


  const weekCostSpread = (values) => {
    const [kok, disk, dusch, tvatt, people, area] = values;

    const kokCost = kok * (1.3);
    const diskCost = disk * (2);
    const duschCost = dusch['tid'] * dusch['antal'] * (0.3);
    const tvattCost = tvatt * (1/4);
    const areaCost = area * 0.086 * 7;
    const totalkWh = kokCost + diskCost + duschCost + tvattCost + areaCost;

    return { kokCost, diskCost, duschCost, tvattCost, areaCost, totalkWh };
  };

//   const now = new Date();
//   const dayOfWeek = now.getDay();
//   const remove = 7 - dayOfWeek;

//   sampleData.splice(-remove, remove, Array(remove).fill({ date: null, value: 0 }));
  console.log(sampleData);
  return sampleData;
};

export default WeekData;
