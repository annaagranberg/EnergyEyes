import { VictoryPie } from 'victory';

const sampleData = [
  { x: 'Mat', y: 4 },
  { x: 'Diska', y: 4 },
  { x: 'Duscha', y: 7 },
  { x: 'Tvätta', y: 1 },
];
const myColorScale = ["#092A23", "#D9B44A", "#125447", "#C4D4D4"];

// Takes in data that has x and y values, x is the type (how many segments depends on amount x that exist)
// y is how many of that type x
// Vicotry circle/pie graph
function AppliancePie() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <VictoryPie
        innerRadius={70}
        colorScale={myColorScale}
        data={sampleData}
        width={200}
        height={150}
      />
      {/* <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
        {sampleData.map((datum, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
            <div style={{ width: '1rem', height: '1rem', backgroundColor: myColorScale[index], marginRight: '0.5rem' }} />
            <div style={{ fontSize: '0.6rem' }}>{datum.x}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}


export default AppliancePie;
