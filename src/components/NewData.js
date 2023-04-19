import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { VictoryChart } from 'victory';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

const getRandomInRange = (min, max, area, dusch, hour) => {
  const baseRange = max - min;
  const areaFactor = (area / 10) || 1; // Divide by 10 to get a factor between 0.1 and 1
  const duschFactor = (dusch === 'yes') ? 1.5 : 1; // Increase range by 50% if dusch is "yes"
  let range = baseRange * areaFactor * duschFactor;

  const currentHour = hour.getHours();

  // Increase range by 50% for hours between 6 AM and 8 AM
  if (currentHour >= 6 && currentHour <= 8) {
    range *= 1.5;
  }

  return Math.random() * range + min;
};




const NewData = () => {
  const { currentUser, logout } = useAuth();
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [people, setPeople] = useState("")
  
  const [area, setArea] = useState("")
  const [dusch, setDusch] = useState("");

  const [dayArray, setDayArray] = useState("");
  const [hourArray, setHourArray] = useState([]);
  


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
  
    const numDays = 1; // Set number of days to 1
    const numHours = 24; // Set number of hours to 24
  
    const hourArray = Array.from({ length: numDays }, (_, i) => {
      const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 0, 0, 0, 0);
      const hourArray = Array.from({ length: numHours }, (_, j) => {
        const date = new Date(day.getFullYear(), day.getMonth(), day.getDate(), j, 0, 0, 0);
        const randomValue = getRandomInRange(0, 1, area, dusch, date);
  
        return { date, value: randomValue };
      });
  
      return hourArray;
    }).flat(); // Flatten the array of arrays into a single array
  
    // Map over the hourArray and update the value property based on the hour of the day
    const updatedHourArray = hourArray.map(hourObj => {
      const currentHour = hourObj.date.getHours();
  
      // Increase value by 50% for hours between 6 AM and 8 AM
      if (currentHour >= 18 && currentHour <= 22) {
        return { ...hourObj, value: hourObj.value * 1.5 };
      } else {
        return hourObj;
      }
    });
  
    setHourArray(updatedHourArray);
    console.log(updatedHourArray);
  }, []);
  

  
  

  return (
    <div>
    </div>
  )

}

export default NewData;
