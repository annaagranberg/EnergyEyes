import React, { useState } from "react";
import energyFacts from "../data/energyfacts.json";
import funFacts from "../data/funfacts.json";

function EnergyFacts() {
  const fact = useState(getRandomFact());

  function getRandomFact() {
    // Chooses one of the json files at random
    const factList = Math.random() < 0.7 ? energyFacts.facts : funFacts.facts;
    // This line generates a random index value, from 0 to lenght of json file
    const randomIndex = Math.floor(Math.random() * factList.length);
    // Selects random number
    return factList[randomIndex].fact;
  }

  return <p>{fact}</p>;
}

export default EnergyFacts;
