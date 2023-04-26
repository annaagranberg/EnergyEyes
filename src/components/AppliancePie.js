import { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { VictoryLabel } from 'victory';
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'


const myColorScale = ["#092A23", "#D9B44A", "#125447", "#C4D4D4"];

const MyLabel = (props) => {
  return (
    <VictoryLabel
      {...props}
      style={{ fill: '#FFFFFF' }}
    />
  );
};

const Getdb = () =>{
  const { currentUser, logout, updateProfil } = useAuth();
  const [dusch, setDusch] = useState([])
  const [disk, setDisk] = useState()
  const [kok, setKok] = useState()
  const [tvatt, setTvatt] = useState()

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setDusch({antal: data.duschparametrar.antal, tid: data.duschparametrar.tid})
        setDisk(data.diskparametrar.antal);
        setKok(data.kokparametrar.antal);
        setTvatt(data.tvattparametrar.antal);
        console.log('hej')

      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [currentUser.uid]);

  return [kok, disk, dusch, tvatt]
}


// Takes in data that has x and y values, x is the type (how many segments depends on amount x that exist)
// y is how many of that type x
// Vicotry circle/pie graph
const AppliancePie = () => {

  const value = Getdb()
  const kok = value[0]
  const disk = value[1]
  const dusch = value[2]
  const tvatt = value[3]

  const sampleData = [
    { x: 'Mat', y: kok*(1.3) },
    { x: 'Disk', y: disk*(2) },
    { x: 'Dusch', y: dusch['tid']*dusch['antal']*(0.3) },
    { x: 'Tvätt', y: tvatt*(1/4) },
  ];

  return (
    <><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <VictoryPie
        innerRadius={70}
        colorScale={myColorScale}
        data={sampleData}
        width={200}
        height={150}
        labelComponent={<MyLabel />}
        labels={() => null} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
          {sampleData.map((datum, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '1rem', height: '1rem', backgroundColor: myColorScale[index] }} />
              <div style={{ fontSize: '0.7rem' }}>{datum.x}</div>
            </div>
          ))}
        </div>
      </div></>

  );
}

// const Pietext = () =>{
//   return(
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem', marginTop: '1rem' , marginBottom: '1rem'}}>
//         {sampleData.map((datum, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//             <div style={{ width: '1rem', height: '1rem', backgroundColor: myColorScale[index] }} />
//             <div style={{ fontSize: '0.7rem' }}>{datum.x}</div>
//           </div>
//         ))}
//       </div>
//     </div>

//   )

// }
export {AppliancePie};
