import { VictoryPie } from 'victory';
import { VictoryLabel } from 'victory';

const sampleData = [
  { x: 'Mat', y: 4 },
  { x: 'Disk', y: 4 },
  { x: 'Dusch', y: 7 },
  { x: 'Tvätt', y: 1 },
];
const myColorScale = ["#092A23", "#D9B44A", "#125447", "#C4D4D4"];

const MyLabel = (props) => {
  return (
    <VictoryLabel
      {...props}
      style={{ fill: '#FFFFFF' }}
    />
  );
};


// Takes in data that has x and y values, x is the type (how many segments depends on amount x that exist)
// y is how many of that type x
// Vicotry circle/pie graph
const AppliancePie = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <VictoryPie
        innerRadius={70}
        colorScale={myColorScale}
        data={sampleData}
        width={200}
        height={150}
        labelComponent={<MyLabel />}
        labels={() => null}
      /> 
    
    </div>
  );
}

const Pietext = () =>{
  return(
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem', marginTop: '1rem' , marginBottom: '1rem'}}>
        {sampleData.map((datum, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '1rem', height: '1rem', backgroundColor: myColorScale[index] }} />
            <div style={{ fontSize: '0.7rem' }}>{datum.x}</div>
          </div>
        ))}
      </div>
    </div>

  
  )

}
export {AppliancePie, Pietext};
