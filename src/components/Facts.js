import React, { useState } from 'react';
import energyFacts from '../energyfacts.json';
import funFacts from '../funfacts.json';
import refreshIcon from '../refresh.svg';

function EnergyFacts() {
  const [fact, setFact] = useState(getRandomFact());

  function getRandomFact() {
    // Chooses one of the json files at random
    const factList = Math.random() < 0.7 ? energyFacts.facts : funFacts.facts;
    // This line generates a random index value, from 0 to lenght of json file
    const randomIndex = Math.floor(Math.random() * factList.length);
    // Selects random number
    return factList[randomIndex].fact;
  }

  // Updates the fact by calling setFact
  function handleRefreshClick() {
    setFact(getRandomFact());
  }

  return (
  //   <div>
  //     <h5>Energy Fact</h5>
  //     <p>{fact}</p>
  //     <img src={refreshIcon} alt="Refresh" onClick={handleRefreshClick} />
  //   </div>
  <div style={{ position: 'relative' }}>
  <div
    style={{
      position: 'absolute',
      top: 10,
      right: 10,
      cursor: 'pointer',
    }}
    onClick={handleRefreshClick}
  >
    <img src={refreshIcon} alt="Refresh" />
  </div>
  <h2 style={{ fontSize: '30px' }}>Energy Facts</h2>
  <p>{fact}</p>
</div>
  );
}
// icon on button instead
//<img src={refreshIcon} alt="Refresh" onClick={handleRefreshClick} />
// text button
//<button onClick={handleRefreshClick}>Refresh</button>

export default EnergyFacts;