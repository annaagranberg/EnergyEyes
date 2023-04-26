import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { VictoryChart } from 'victory';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

import EnergyGraph from './EnergyGraph';
import WeekSpendChart from './WeekSpendChart';


const getRandomInRange = (min, max, area, dusch) => {
  const baseRange = max - min;
  const areaFactor = (area / 10) || 1; // Divide by 10 to get a factor between 0.1 and 1
  const duschFactor = (dusch === 'yes') ? 1.5 : 1; // Increase range by 50% if dusch is "yes"
  let range = baseRange * areaFactor * duschFactor;


  return Math.random() * range + min;
};




const NewData = () => {
  const { currentUser, logout } = useAuth();
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [people, setPeople] = useState("")

  const [area, setArea] = useState("")
  const [dusch, setDusch] = useState("");


  const [hourArray, setHourArray] = useState([]);
  const [numDays, setNumDays] = useState("");


  const [dayArray, setDayArray] = useState("");
  var docRef = db.collection("user_collection").doc(currentUser.uid);

  docRef.get("name.firstname").then((doc) => {
    if (doc.exists) {
      setFname(doc.get("name.firstname"))
      setLname(doc.get("name.lastname"))
      setPeople(doc.get("antalPersoner"))
      setArea(doc.get("boendeyta"))
      setDusch(doc.get("duschparametrar"))
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  useEffect(() => {
    const now = new Date();
  
    const numDays = 7; // Set number of days to 7
  
    setNumDays(numDays);
  
    const dayArray = Array.from({ length: numDays }, (_, i) => {
      const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 0, 0, 0, 0);
      const dailyTotal = Array.from({ length: 1 }, (_) => {
        const randomValue = getRandomInRange(0, 24, area, dusch, day); // Get random value for the day
  
        return { date: day, value: randomValue };
      });
  
      return dailyTotal;
    });
  
    setDayArray(dayArray);
    console.log(dayArray);
  
  }, []);
  
  
  return (
    <WeekSpendChart dayArray = {dayArray}/>
  )

}

export default NewData;